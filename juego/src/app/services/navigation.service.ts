import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { UserService } from './user.service';

export type ViewType = 'login' | 'registro' | 'dashboard';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private userService = inject(UserService);
  
  // Signal para la vista actual
  private _currentView = signal<ViewType>('login');
  
  // Exponer como solo lectura
  currentView = this._currentView.asReadonly();
  
  constructor() {
    // Effect para cambiar a dashboard cuando hay usuario logueado
    effect(() => {
      const user = this.userService.currentUser();
      if (user && this._currentView() !== 'dashboard') {
        this._currentView.set('dashboard');
      } else if (!user && this._currentView() === 'dashboard') {
        this._currentView.set('login');
      }
    });
  }
  
  /**
   * Navega a una vista específica
   */
  navigateTo(view: ViewType) {
    this._currentView.set(view);
  }
  
  /**
   * Navega a login
   */
  goToLogin() {
    this.navigateTo('login');
  }
  
  /**
   * Navega a registro
   */
  goToRegistro() {
    this.navigateTo('registro');
  }
  
  /**
   * Navega a dashboard (solo si hay usuario logueado)
   */
  goToDashboard() {
    if (this.userService.currentUser()) {
      this.navigateTo('dashboard');
    }
  }
}
