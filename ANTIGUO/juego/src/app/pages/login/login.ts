import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { NavigationService } from '../../services/navigation.service';
import { BtnComponent } from '../../components/btn.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, BtnComponent],
    template: `
        <h1 class="titulo">¡Bienvenido de vuelta!</h1>
        <p class="subtitle">Ingresa tu nickname y contraseña para continuar jugando</p>

        @if (errorMessage()) {
            <div class="error-banner">
                {{ errorMessage() }}
            </div>
        }

        <form (submit)="onSubmit($event)" class="form">
            <input [(ngModel)]="nickname" name="nickname" type="text" maxlength="16" placeholder="Tu nickname" class="input" required autofocus [disabled]="isLoading()" />

            <input [(ngModel)]="password" name="password" type="password" placeholder="Tu contraseña" class="input" required [disabled]="isLoading()" />

            <div class="buttons-container">
                <button type="button" (click)="goToRegistro()" btn color="secondary" [disabled]="isLoading()">Registrarse</button>
                <button type="submit" btn [disabled]="isLoading()">
                    @if (isLoading()) {
                        <span>Iniciando...</span>
                    } @else {
                        <span>Entrar</span>
                    }
                </button>
            </div>
        </form>

        <div class="ranking">
            <h2 class="ranking-title">Ranking de Jugadores</h2>
            <div class="ranking-list">
                @if (ranking().length === 0) {
                    <div class="no-players">No hay jugadores registrados aún</div>
                } @else {
                    <ul class="ranking-ul">
                        @for (user of ranking(); track user.id; let idx = $index) {
                            <li class="ranking-li" [ngClass]="{ 'top-player': idx < 3, 'first-place': idx === 0 }">
                                <span class="player-name">
                                    @if (idx === 0) {
                                        🏆
                                    } @else if (idx === 1) {
                                        🥈
                                    } @else if (idx === 2) {
                                        🥉
                                    } @else {
                                        ⭐
                                    }
                                    {{ user.nickname }}
                                </span>
                                <span>{{ user.puntuacion }} pts</span>
                            </li>
                        }
                    </ul>
                }
            </div>
        </div>
    `,
    styles: `
        :host {
            display: block;
            padding: 3rem 1rem;
        }

        .titulo {
            font-size: 2.5rem;
            font-weight: bold;
            color: #4f46e5;
            margin-bottom: 1rem;
            text-align: center;
        }

        .subtitle {
            font-size: 1.125rem;
            color: #374151;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .error-banner {
            width: 100%;
            background-color: #fee2e2;
            border: 1px solid #f87171;
            color: #b91c1c;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            width: 100%;
        }

        .input {
            border: 2px solid #a5b4fc;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            width: 100%;
            text-align: center;
            font-size: 1.125rem;
            outline: none;
        }

        .input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px #6366f1;
        }

        .buttons-container {
            display: flex;
            gap: 1rem;
            width: 100%;
            justify-content: center;
        }

        .ranking {
            margin-top: 2rem;
            width: 100%;
        }

        .ranking-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #4338ca;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .ranking-list {
            max-height: 10rem;
            overflow-y: auto;
            border-radius: 0.5rem;
            border: 1px solid #e0e7ff;
            background-color: rgba(238, 242, 255, 0.4);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .no-players {
            text-align: center;
            padding: 1rem;
            color: #6b7280;
        }

        .ranking-ul {
            list-style: none;
            padding: 0;
            margin: 0;
            border-top: 1px solid #e0e7ff;
        }

        .ranking-ul li {
            border-bottom: 1px solid #e0e7ff;
            font-size: 1.125rem;
        }

        .ranking-li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem 0.5rem;
        }

        .player-name {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .top-player {
            font-weight: bold;
        }

        .first-place {
            color: #eab308;
        }

        @media (min-width: 640px) {
            .ranking-list {
                max-height: 14rem;
            }
        }

        @media (min-width: 768px) {
            .titulo {
                font-size: 3rem;
            }
            .ranking-list {
                max-height: 16rem;
            }
        }
    `,
})
export class LoginComponent implements OnInit {
    private userService = inject(UserService);
    private toastService = inject(ToastService);
    private navigationService = inject(NavigationService);

    nickname = signal('');
    password = signal('');
    isLoading = signal(false);
    errorMessage = signal('');
    ranking = signal(this.userService.getRanking());

    async ngOnInit() {
        // Cargar usuarios desde Supabase para tener el ranking actualizado
        await this.userService.reloadUsers();
        this.ranking.set(this.userService.getRanking());
    }

    goToRegistro() {
        this.navigationService.goToRegistro();
    }

    async onSubmit(event: Event) {
        event.preventDefault();

        const nicknameValue = this.nickname().trim();
        const passwordValue = this.password().trim();

        // Limpiar mensaje de error
        this.errorMessage.set('');

        // Validaciones
        if (!nicknameValue) {
            this.errorMessage.set('Por favor ingresa tu nickname');
            this.toastService.error('Por favor ingresa tu nickname');
            return;
        }

        if (!passwordValue) {
            this.errorMessage.set('Por favor ingresa tu contraseña');
            this.toastService.error('Por favor ingresa tu contraseña');
            return;
        }

        // Activar loading
        this.isLoading.set(true);

        // Intentar hacer login
        const user = await this.userService.login({
            nickname: nicknameValue,
            password: passwordValue,
        });

        this.isLoading.set(false);

        if (user) {
            this.toastService.success(`¡Bienvenido de vuelta, ${user.nickname}!`);
            // Navegar al dashboard
            this.navigationService.goToDashboard();
        } else {
            this.toastService.error('Usuario o contraseña incorrectos');
            // Limpiar la contraseña
            this.password.set('');
        }
    }
}
