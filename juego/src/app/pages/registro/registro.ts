import { Component, inject, signal, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { NavigationService } from '../../services/navigation.service';
import { UserCreate } from '../../models/user.model';
import { AvatarName, AVATARS_DISPONIBLES, getAvatarPath, DEFAULT_AVATAR } from '../../data/avatars.constants';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <h1 class="text-4xl md:text-5xl font-bold text-indigo-600 mb-4 text-center titulo">¡Bienvenido a la Aventura Educativa!</h1>
        <p class="text-lg text-gray-700 mb-6 text-center">Regístrate con tu nickname para comenzar a jugar y compite en el ranking.</p>
        <form (submit)="onSubmit($event)" class="flex flex-col items-center gap-4 mb-6 w-full">
            <input [(ngModel)]="nickname" name="nickname" type="text" maxlength="16" placeholder="Tu nickname" class="border-2 border-indigo-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center text-lg" required />

            <!-- Selección de género -->
            <div class="flex flex-col w-full gap-2">
                <label class="text-indigo-700 font-bold text-center">Selecciona tu género 👦/👧</label>
                <div class="flex justify-center gap-4">
                    <label class="flex flex-col items-center cursor-pointer">
                        <span class="text-3xl">♂️</span>
                        <input type="radio" name="genero" value="niño" [(ngModel)]="genero" class="mt-1" required />
                        <span class="text-xs">Niño</span>
                    </label>
                    <label class="flex flex-col items-center cursor-pointer">
                        <span class="text-3xl">♀️</span>
                        <input type="radio" name="genero" value="niña" [(ngModel)]="genero" class="mt-1" required />
                        <span class="text-xs">Niña</span>
                    </label>
                </div>
            </div>

            <!-- Selección de avatar -->
            <div class="w-full mt-4 p-4 bg-indigo-50 rounded-lg shadow-inner">
                <label class="block text-indigo-700 font-bold mb-3 text-center">¡Elige tu avatar!</label>
                <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
                    @for (avatar of avatarsDisponibles; track avatar.name) {
                        <div
                            (click)="seleccionarAvatar(avatar.name)"
                            [class.selected]="avatarSeleccionado() === avatar.name"
                            class="avatar-option cursor-pointer p-2 rounded-lg border-2 transition-all hover:scale-105"
                            [class.border-indigo-500]="avatarSeleccionado() === avatar.name"
                            [class.border-gray-300]="avatarSeleccionado() !== avatar.name"
                            [class.bg-indigo-100]="avatarSeleccionado() === avatar.name"
                        >
                            <img [src]="getAvatarPath(avatar.name)" [alt]="avatar.displayName" class="w-full h-auto rounded-lg" />
                            <p class="text-xs text-center mt-1 font-semibold">
                                {{ avatar.displayName }}
                            </p>
                        </div>
                    }
                </div>
                @if (avatarSeleccionado()) {
                    <p class="text-center text-sm text-indigo-600 mt-3 font-semibold">Avatar seleccionado: {{ getAvatarDisplayName() }}</p>
                }
            </div>

            <button type="submit" class="btn-jugar px-6 py-2 rounded-lg text-white font-bold bg-indigo-500 hover:bg-indigo-700 transition-all mt-2">Registrarse</button>
        </form>

        <div class="text-center text-sm text-gray-600 mb-4">
            <p>¿Ya tienes cuenta?</p>
            <a (click)="goToLogin()" class="text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer"> Inicia sesión aquí </a>
        </div>

        <div class="mb-4 w-full">
            <h2 class="text-2xl font-bold text-indigo-700 mb-2 text-center">Ranking de Jugadores</h2>
            <div class="max-h-40 sm:max-h-56 md:max-h-64 overflow-y-auto rounded-lg border border-indigo-100 bg-indigo-50/40 shadow-inner">
                @if (ranking().length === 0) {
                    <div class="text-center py-4 text-gray-500">No hay jugadores registrados aún</div>
                } @else {
                    <ul class="divide-y divide-indigo-100 text-lg">
                        @for (user of ranking(); track user.id; let idx = $index) {
                            <li class="flex justify-between items-center py-1 px-2">
                                <span class="flex items-center gap-1" [class.font-bold]="idx < 3" [class.text-yellow-500]="idx === 0">
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

        .avatar-option {
            &.selected {
                box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
            }
        }
    `,
})
export class RegistroComponent implements OnInit {
    private userService = inject(UserService);
    private toastService = inject(ToastService);
    private navigationService = inject(NavigationService);

    // Lista de avatares disponibles
    avatarsDisponibles = AVATARS_DISPONIBLES;

    // Campos del formulario
    nickname = signal('');
    genero = signal<'niño' | 'niña'>('niño');
    avatarSeleccionado = signal<AvatarName>(DEFAULT_AVATAR);

    // Ranking
    ranking = signal(this.userService.getRanking());

    // Effect para actualizar ranking cuando cambien los usuarios
    constructor() {
        effect(() => {
            // Cada vez que cambian los usuarios, actualizar el ranking
            this.userService.users();
            this.ranking.set(this.userService.getRanking());
        });
    }

    ngOnInit() {
        // Si ya hay un usuario logueado, redirigir o mostrar mensaje
        const currentUser = this.userService.currentUser();
        if (currentUser) {
            this.toastService.info(`¡Bienvenido de nuevo, ${currentUser.nickname}!`);
        }
    }

    seleccionarAvatar(avatar: AvatarName) {
        this.avatarSeleccionado.set(avatar);
    }

    getAvatarPath(avatarName: AvatarName): string {
        return getAvatarPath(avatarName);
    }

    getAvatarDisplayName(): string {
        const avatar = AVATARS_DISPONIBLES.find((a) => a.name === this.avatarSeleccionado());
        return avatar?.displayName || this.avatarSeleccionado();
    }

    goToLogin() {
        this.navigationService.goToLogin();
    }

    onSubmit(event: Event) {
        event.preventDefault();

        const nicknameValue = this.nickname().trim();

        // Validaciones
        if (!nicknameValue) {
            this.toastService.error('Por favor ingresa un nickname');
            return;
        }

        if (nicknameValue.length < 3) {
            this.toastService.warning('El nickname debe tener al menos 3 caracteres');
            return;
        }

        if (!this.genero()) {
            this.toastService.error('Por favor selecciona un género');
            return;
        }

        if (!this.avatarSeleccionado()) {
            this.toastService.error('Por favor selecciona un avatar');
            return;
        }

        // Verificar si el nickname es único
        if (!this.userService.isNicknameUnique(nicknameValue)) {
            this.toastService.error('Este nickname ya está en uso. Por favor elige otro.');
            return;
        }

        // Crear el usuario
        const userData: UserCreate = {
            nickname: nicknameValue,
            genero: this.genero(),
            avatarName: this.avatarSeleccionado(),
        };

        const newUser = this.userService.createUser(userData);

        if (newUser) {
            this.toastService.success(`¡Bienvenido ${newUser.nickname}! Tu cuenta ha sido creada.`);

            // Navegar al dashboard
            this.navigationService.goToDashboard();
        } else {
            this.toastService.error('Error al crear el usuario. Intenta nuevamente.');
        }
    }
}
