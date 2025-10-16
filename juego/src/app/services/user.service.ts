import { Injectable, signal } from '@angular/core';
import { User, UserCreate } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'studyfive_users';
  private readonly CURRENT_USER_KEY = 'studyfive_current_user';
  
  // Señal para el usuario actual
  currentUser = signal<User | null>(null);
  
  // Señal para la lista de usuarios (para el ranking)
  users = signal<User[]>([]);

  constructor() {
    this.loadUsers();
    this.loadCurrentUser();
  }

  /**
   * Genera un UUID v4 usando crypto nativo del navegador
   */
  private generateUUID(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    
    // Fallback para navegadores que no soportan crypto.randomUUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Carga los usuarios desde localStorage
   */
  private loadUsers(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const users = JSON.parse(stored);
        // Convertir fechas de string a Date
        const usersWithDates = users.map((user: any) => ({
          ...user,
          fechaCreacion: new Date(user.fechaCreacion),
          ultimaActualizacion: new Date(user.ultimaActualizacion)
        }));
        this.users.set(usersWithDates);
      }
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      this.users.set([]);
    }
  }

  /**
   * Guarda los usuarios en localStorage
   */
  private saveUsers(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users()));
    } catch (error) {
      console.error('Error al guardar usuarios:', error);
    }
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
          ultimaActualizacion: new Date(user.ultimaActualizacion)
        });
      }
    } catch (error) {
      console.error('Error al cargar usuario actual:', error);
      this.currentUser.set(null);
    }
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
   * Verifica si un nickname ya existe
   */
  isNicknameUnique(nickname: string, excludeId?: string): boolean {
    const normalizedNickname = nickname.toLowerCase().trim();
    return !this.users().some(
      user => user.nickname.toLowerCase() === normalizedNickname && user.id !== excludeId
    );
  }

  /**
   * Crea un nuevo usuario
   */
  createUser(userData: UserCreate): User | null {
    const nickname = userData.nickname.trim();
    
    if (!nickname) {
      return null;
    }

    if (!this.isNicknameUnique(nickname)) {
      return null;
    }

    const newUser: User = {
      id: this.generateUUID(),
      nickname,
      genero: userData.genero,
      colorPiel: userData.colorPiel,
      colorPelo: userData.colorPelo,
      puntuacion: 0,
      fechaCreacion: new Date(),
      ultimaActualizacion: new Date()
    };

    const updatedUsers = [...this.users(), newUser];
    this.users.set(updatedUsers);
    this.saveUsers();
    this.saveCurrentUser(newUser);

    return newUser;
  }

  /**
   * Actualiza la puntuación del usuario actual
   */
  updateScore(points: number): void {
    const current = this.currentUser();
    if (!current) return;

    const updatedUser: User = {
      ...current,
      puntuacion: current.puntuacion + points,
      ultimaActualizacion: new Date()
    };

    // Actualizar en la lista de usuarios
    const updatedUsers = this.users().map(user => 
      user.id === updatedUser.id ? updatedUser : user
    );
    
    this.users.set(updatedUsers);
    this.saveUsers();
    this.saveCurrentUser(updatedUser);
  }

  /**
   * Establece la puntuación del usuario actual
   */
  setScore(points: number): void {
    const current = this.currentUser();
    if (!current) return;

    const updatedUser: User = {
      ...current,
      puntuacion: points,
      ultimaActualizacion: new Date()
    };

    // Actualizar en la lista de usuarios
    const updatedUsers = this.users().map(user => 
      user.id === updatedUser.id ? updatedUser : user
    );
    
    this.users.set(updatedUsers);
    this.saveUsers();
    this.saveCurrentUser(updatedUser);
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
   * Elimina un usuario
   */
  deleteUser(userId: string): void {
    const updatedUsers = this.users().filter(user => user.id !== userId);
    this.users.set(updatedUsers);
    this.saveUsers();

    // Si es el usuario actual, cerrar sesión
    if (this.currentUser()?.id === userId) {
      this.logout();
    }
  }

  /**
   * Actualiza los datos del usuario (excepto puntuación)
   */
  updateUser(userId: string, userData: Partial<UserCreate>): User | null {
    const users = this.users();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) return null;

    // Si se está actualizando el nickname, verificar que sea único
    if (userData.nickname) {
      const nickname = userData.nickname.trim();
      if (!this.isNicknameUnique(nickname, userId)) {
        return null;
      }
    }

    const updatedUser: User = {
      ...users[userIndex],
      ...userData,
      nickname: userData.nickname?.trim() || users[userIndex].nickname,
      ultimaActualizacion: new Date()
    };

    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;
    
    this.users.set(updatedUsers);
    this.saveUsers();

    // Si es el usuario actual, actualizar también
    if (this.currentUser()?.id === userId) {
      this.saveCurrentUser(updatedUser);
    }

    return updatedUser;
  }
}
