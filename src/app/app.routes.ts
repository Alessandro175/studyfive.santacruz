import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { App2 } from './app2';
import AdminPage from './pages/admin/admin';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminPage,
    },
    {
        path: '',
        canActivate: [authGuard],
        component: App2,
    },
];
