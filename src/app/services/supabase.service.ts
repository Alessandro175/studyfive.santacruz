import { Injectable } from '@angular/core';
import { supabaseConfig } from '../config/supabase.config';
import { User, UserCreate, UserLogin } from '../models/user.model';

/**
 * Servicio para interactuar con la base de datos de Supabase
 * Maneja todas las operaciones CRUD de usuarios
 */
@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabaseUrl: string = supabaseConfig.supabaseUrl;
    private supabaseKey: string = supabaseConfig.supabaseKey;
    private headers: HeadersInit;

    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            apikey: this.supabaseKey,
            Authorization: `Bearer ${this.supabaseKey}`,
        };
    }

    /**
     * Verifica si Supabase está configurado correctamente
     */
    isConfigured(): boolean {
        return this.supabaseUrl !== 'TU_SUPABASE_URL' && this.supabaseKey !== 'TU_SUPABASE_ANON_KEY' && this.supabaseUrl.trim() !== '' && this.supabaseKey.trim() !== '';
    }

    /**
     * Obtiene todos los usuarios de la base de datos
     */
    async getAllUsers(): Promise<User[]> {
        if (!this.isConfigured()) {
            console.warn('⚠️ Supabase no está configurado');
            return [];
        }

        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?select=*`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener usuarios: ${response.status}`);
            }

            const usuarios = await response.json();

            // Convertir snake_case de la BD a camelCase de la app
            return usuarios.map((u: any) => this.mapSupabaseUserToUser(u));
        } catch (error) {
            console.error('❌ Error al obtener usuarios de Supabase:', error);
            return [];
        }
    }

    /**
     * Busca un usuario por nickname y password (login)
     */
    async loginUser(credentials: UserLogin): Promise<User | null> {
        try {
            // Buscar usuario con nickname y password exactos
            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?nickname=eq.${encodeURIComponent(credentials.nickname)}&password=eq.${encodeURIComponent(credentials.password)}&select=*`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al hacer login: ${response.status}`);
            }

            const usuarios = await response.json();

            if (usuarios.length === 0) {
                return null;
            }

            console.log('✅ Login exitoso');
            return this.mapSupabaseUserToUser(usuarios[0]);
        } catch (error) {
            console.error('❌ Error al hacer login:', error);
            return null;
        }
    }

    /**
     * Verifica si un nickname ya existe en la base de datos
     */
    async isNicknameUnique(nickname: string): Promise<boolean> {
        if (!this.isConfigured()) {
            console.warn('⚠️ Supabase no está configurado');
            return true; // Si no está configurado, permitir crear
        }

        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?nickname=eq.${encodeURIComponent(nickname)}&select=id`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al verificar nickname: ${response.status}`);
            }

            const usuarios = await response.json();
            return usuarios.length === 0;
        } catch (error) {
            console.error('❌ Error al verificar nickname:', error);
            return true; // En caso de error, permitir continuar
        }
    }

    /**
     * Crea un nuevo usuario en la base de datos
     */
    async createUser(userData: UserCreate): Promise<User | null> {
        try {
            // Verificar que el nickname sea único
            const isUnique = await this.isNicknameUnique(userData.nickname);
            if (!isUnique) {
                console.error('❌ El nickname ya existe');
                return null;
            }

            // Convertir camelCase a snake_case para la BD
            const newUser = {
                nickname: userData.nickname.trim(),
                password: userData.password,
                genero: userData.genero,
                avatar_name: userData.avatarName,
                puntuacion: 0,
            };

            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios`, {
                method: 'POST',
                headers: {
                    ...this.headers,
                    Prefer: 'return=representation', // Para que devuelva el registro creado
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(`Error al crear usuario: ${JSON.stringify(error)}`);
            }

            const usuarios = await response.json();
            console.log('✅ Usuario creado en Supabase');

            return this.mapSupabaseUserToUser(usuarios[0]);
        } catch (error) {
            console.error('❌ Error al crear usuario en Supabase:', error);
            return null;
        }
    }

    /**
     * Actualiza la puntuación de un usuario
     */
    async updateUserScore(userId: string, puntuacion: number): Promise<boolean> {
        if (!this.isConfigured()) {
            console.warn('⚠️ Supabase no está configurado');
            return false;
        }

        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?id=eq.${userId}`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ puntuacion }),
            });

            if (!response.ok) {
                throw new Error(`Error al actualizar puntuación: ${response.status}`);
            }

            console.log('✅ Puntuación actualizada en Supabase');
            return true;
        } catch (error) {
            console.error('❌ Error al actualizar puntuación:', error);
            return false;
        }
    }

    /**
     * Actualiza los datos de un usuario
     */
    async updateUser(userId: string, userData: Partial<UserCreate>): Promise<User | null> {
        try {
            // Si se está actualizando el nickname, verificar unicidad
            if (userData.nickname) {
                const isUnique = await this.isNicknameUnique(userData.nickname);
                if (!isUnique) {
                    // Verificar si el nickname es del mismo usuario
                    const currentUser = await this.getUserById(userId);
                    if (currentUser && currentUser.nickname !== userData.nickname) {
                        console.error('❌ El nickname ya existe');
                        return null;
                    }
                }
            }

            // Convertir camelCase a snake_case
            const updateData: any = {};
            if (userData.nickname) updateData.nickname = userData.nickname.trim();
            if (userData.password) updateData.password = userData.password;
            if (userData.genero) updateData.genero = userData.genero;
            if (userData.avatarName) updateData.avatar_name = userData.avatarName;

            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?id=eq.${userId}`, {
                method: 'PATCH',
                headers: {
                    ...this.headers,
                    Prefer: 'return=representation',
                },
                body: JSON.stringify(updateData),
            });

            if (!response.ok) {
                throw new Error(`Error al actualizar usuario: ${response.status}`);
            }

            const usuarios = await response.json();
            console.log('✅ Usuario actualizado en Supabase');

            return this.mapSupabaseUserToUser(usuarios[0]);
        } catch (error) {
            console.error('❌ Error al actualizar usuario:', error);
            return null;
        }
    }


    /**
     * Obtiene un usuario por su ID
     */
    async getUserById(userId: string): Promise<User | null> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/usuarios?id=eq.${userId}&select=*`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener usuario: ${response.status}`);
            }

            const usuarios = await response.json();

            if (usuarios.length === 0) {
                return null;
            }

            return this.mapSupabaseUserToUser(usuarios[0]);
        } catch (error) {
            console.error('❌ Error al obtener usuario por ID:', error);
            return null;
        }
    }

    /**
     * Mapea un usuario de Supabase (snake_case) a User de la app (camelCase)
     */
    private mapSupabaseUserToUser(supabaseUser: any): User {
        return {
            id: supabaseUser.id,
            nickname: supabaseUser.nickname,
            password: supabaseUser.password,
            genero: supabaseUser.genero,
            avatarName: supabaseUser.avatar_name,
            puntuacion: supabaseUser.puntuacion,
            fechaCreacion: new Date(supabaseUser.fecha_creacion),
            ultimaActualizacion: new Date(supabaseUser.ultima_actualizacion),
        };
    }
}
