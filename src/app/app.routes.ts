import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { InicioJuego } from './inicio-juego';
import AdminPage from './pages/admin/admin';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminPage,
    },
    {
        path: '',
        canActivate: [authGuard],
        component: InicioJuego,
    },
];
