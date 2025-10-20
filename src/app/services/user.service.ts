import { Injectable, signal } from '@angular/core';
import { User, UserCreate, UserLogin, CompetenciaRegistro, CompetenciaRegistroData } from '../models/user.model';
import { SupabaseService } from './supabase.service';
import { CompetenciasSupabaseService } from './competencias-supabase.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    // Solo necesitamos esta key para localStorage (usuario actual en caché)
    private readonly CURRENT_USER_KEY = 'studyfive_current_user';

    // Señal para el usuario actual
    currentUser = signal<User | null>(null);

    // Señal para la lista de usuarios (para el ranking)
    users = signal<User[]>([]);

    // Cache de competencias en memoria (para evitar llamadas repetidas)
    private competenciasCache: Map<string, CompetenciaRegistro[]> = new Map();

    constructor(
        private supabase: SupabaseService,
        private competenciasSupabase: CompetenciasSupabaseService
    ) {
        this.loadCurrentUser();
        this.loadUsers();
    }

    /**
     * Carga el usuario actual desde localStorage
     */
    private loadCurrentUser(): void {
        try {
            const stored = localStorage.getItem(this.CURRENT_USER_KEY);
            if (stored) {
                const user = JSON.parse(stored);
                // Convertir fechas de string a Date
                this.currentUser.set({
                    ...user,
                    fechaCreacion: new Date(user.fechaCreacion),
                    ultimaActualizacion: new Date(user.ultimaActualizacion),
                });
            }
        } catch (error) {
            console.error('Error al cargar usuario actual:', error);
            this.currentUser.set(null);
        }
    }

    /**
     * Carga los usuarios desde Supabase
     */
    private async loadUsers(): Promise<void> {
        try {
            const users = await this.supabase.getAllUsers();
            this.users.set(users);
            console.log('✅ Usuarios cargados desde Supabase:', users.length);
        } catch (error) {
            console.error('❌ Error al cargar usuarios desde Supabase:', error);
            this.users.set([]);
        }
    }

    /**
     * Recarga los usuarios desde Supabase
     */
    async reloadUsers(): Promise<void> {
        await this.loadUsers();
    }

    /**
     * Guarda el usuario actual en localStorage
     */
    private saveCurrentUser(user: User | null): void {
        try {
            if (user) {
                localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
            } else {
                localStorage.removeItem(this.CURRENT_USER_KEY);
            }
            this.currentUser.set(user);
        } catch (error) {
            console.error('Error al guardar usuario actual:', error);
        }
    }

    /**
     * Login - Verifica credenciales en Supabase
     */
    async login(credentials: UserLogin): Promise<User | null> {
        const user = await this.supabase.loginUser(credentials);

        if (user) {
            this.saveCurrentUser(user);
            await this.reloadUsers(); // Actualizar lista de usuarios
            return user;
        }

        return null;
    }

    /**
     * Verifica si un nickname ya existe en Supabase
     */
    async isNicknameUnique(nickname: string): Promise<boolean> {
        return await this.supabase.isNicknameUnique(nickname);
    }

    /**
     * Crea un nuevo usuario en Supabase
     */
    async createUser(userData: UserCreate): Promise<User | null> {
        const nickname = userData.nickname.trim();
        const password = userData.password.trim();

        if (!nickname || !password) {
            console.error('❌ Nickname y password son requeridos');
            return null;
        }

        // Crear usuario en Supabase
        const newUser = await this.supabase.createUser(userData);

        if (newUser) {
            // Guardar como usuario actual
            this.saveCurrentUser(newUser);

            // Recargar lista de usuarios
            await this.reloadUsers();

            return newUser;
        }

        return null;
    }

    /**
     * Actualiza la puntuación del usuario actual
     */
    async updateScore(points: number): Promise<void> {
        const current = this.currentUser();
        if (!current) return;

        const newScore = current.puntuacion + points;

        // Actualizar en Supabase
        await this.supabase.updateUserScore(current.id, newScore);

        // Actualizar localmente
        const updatedUser: User = {
            ...current,
            puntuacion: newScore,
            ultimaActualizacion: new Date(),
        };

        this.saveCurrentUser(updatedUser);
        await this.reloadUsers();
    }

    /**
     * Establece la puntuación del usuario actual
     */
    async setScore(points: number): Promise<void> {
        const current = this.currentUser();
        if (!current) return;

        // Actualizar en Supabase
        await this.supabase.updateUserScore(current.id, points);

        // Actualizar localmente
        const updatedUser: User = {
            ...current,
            puntuacion: points,
            ultimaActualizacion: new Date(),
        };

        this.saveCurrentUser(updatedUser);
        await this.reloadUsers();
    }

    /**
     * Obtiene el ranking ordenado por puntuación
     */
    getRanking(): User[] {
        return [...this.users()].sort((a, b) => b.puntuacion - a.puntuacion);
    }

    /**
     * Cierra sesión del usuario actual
     */
    logout(): void {
        this.saveCurrentUser(null);
    }

    /**
     * Actualiza los datos del usuario (excepto puntuación)
     */
    async updateUser(userId: string, userData: Partial<UserCreate>): Promise<User | null> {
        const updatedUser = await this.supabase.updateUser(userId, userData);

        if (updatedUser) {
            // Si es el usuario actual, actualizar también localmente
            if (this.currentUser()?.id === userId) this.saveCurrentUser(updatedUser);

            // Recargar lista de usuarios
            await this.reloadUsers();
        }

        return updatedUser;
    }

    /**
     * Limpia el cache de competencias
     */
    private limpiarCacheCompetencias(userId?: string): void {
        if (userId) this.competenciasCache.delete(userId);
        else this.competenciasCache.clear();
    }

    /**
     * Guarda o actualiza el registro de una competencia en Supabase
     * La función upsert_competencia de Supabase maneja automáticamente:
     * - Crear nuevo registro o actualizar existente
     * - Incrementar intentos
     * - Actualizar mejor_puntaje
     * - Recalcular puntaje total del usuario
     */
    async guardarCompetencia(data: CompetenciaRegistroData): Promise<CompetenciaRegistro | null> {
        const user = this.currentUser();
        if (!user) {
            console.error('❌ No hay usuario actual');
            return null;
        }

        console.log('💾 Guardando competencia en Supabase...', data);

        // Guardar en Supabase
        const registro = await this.competenciasSupabase.guardarCompetencia(user.id, data);

        if (registro) {
            // Limpiar cache para forzar recarga
            this.limpiarCacheCompetencias(user.id);

            // Recargar usuario para actualizar puntuación
            await this.reloadUsers();

            // Actualizar currentUser con la nueva puntuación
            const updatedUser = this.users().find((u) => u.id === user.id);
            if (updatedUser) {
                this.saveCurrentUser(updatedUser);
            }

            console.log('✅ Competencia guardada correctamente');
            return registro;
        }

        console.error('❌ Error al guardar competencia');
        return null;
    }

    /**
     * Obtiene todas las competencias del usuario actual desde Supabase
     */
    async obtenerTodasLasCompetencias(): Promise<CompetenciaRegistro[]> {
        const user = this.currentUser();
        if (!user) return [];

        // Usar cache si está disponible
        if (this.competenciasCache.has(user.id)) return this.competenciasCache.get(user.id)!;

        const competencias = await this.competenciasSupabase.obtenerCompetenciasUsuario(user.id);
        this.competenciasCache.set(user.id, competencias);

        return competencias;
    }
}
