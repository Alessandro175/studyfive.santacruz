import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

/**
 * Guard para proteger rutas que requieren autenticación
 * Verifica si hay un usuario logueado, si no lo redirige a /login
 */
export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const currentUser = userService.currentUser();

  if (currentUser) {
    // Usuario logueado, puede acceder
    return true;
  } else {
    // No hay usuario, redirigir a login
    router.navigate(['/login']);
    return false;
  }
};

/**
 * Guard para evitar que usuarios logueados accedan a login/registro
 * Si hay sesión activa, redirige al home
 */
export const guestGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const currentUser = userService.currentUser();

  if (!currentUser) {
    // No hay usuario, puede acceder a login/registro
    return true;
  } else {
    // Ya hay sesión activa, redirigir al home
    router.navigate(['/home']);
    return false;
  }
};
