import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavigationService } from '../services/navigation.service';

/**
 * Guard que actúa en la ruta raíz ''
 * Inicializa la vista correcta según el estado de autenticación
 */
export const authGuard: CanActivateFn = (route, state) => {
    const userService = inject(UserService);
    const navigationService = inject(NavigationService);

    const currentUser = userService.currentUser();

    if (currentUser) {
        // Usuario logueado, mostrar dashboard
        navigationService.goToDashboard();
    } else {
        // No hay usuario, mostrar login
        navigationService.goToLogin();
    }

    // Siempre permitir el acceso a la ruta raíz
    return true;
};
