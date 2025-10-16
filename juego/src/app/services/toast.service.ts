import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // Señal para almacenar los toasts activos
  toasts = signal<Toast[]>([]);
  
  private readonly DEFAULT_DURATION = 3000; // 3 segundos

  /**
   * Genera un ID único para el toast
   */
  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Muestra un toast
   */
  private show(message: string, type: ToastType, duration: number = this.DEFAULT_DURATION): void {
    const toast: Toast = {
      id: this.generateId(),
      message,
      type,
      duration
    };

    // Agregar el toast a la lista
    this.toasts.update(toasts => [...toasts, toast]);

    // Remover automáticamente después de la duración especificada
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, duration);
    }
  }

  /**
   * Muestra un toast de éxito
   */
  success(message: string, duration?: number): void {
    this.show(message, 'success', duration);
  }

  /**
   * Muestra un toast de error
   */
  error(message: string, duration?: number): void {
    this.show(message, 'error', duration);
  }

  /**
   * Muestra un toast de advertencia
   */
  warning(message: string, duration?: number): void {
    this.show(message, 'warning', duration);
  }

  /**
   * Muestra un toast de información
   */
  info(message: string, duration?: number): void {
    this.show(message, 'info', duration);
  }

  /**
   * Remueve un toast por su ID
   */
  remove(id: string): void {
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }

  /**
   * Remueve todos los toasts
   */
  clear(): void {
    this.toasts.set([]);
  }
}
