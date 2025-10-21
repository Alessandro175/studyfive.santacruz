import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { GameService } from '../services/game.service';
import { MusicService } from '../services/music.service';
import { NavigationService } from '../services/navigation.service';
import { ToastService } from '../services/toast.service';
import { getAvatarPath } from '../data/avatars.constants';

@Component({
    selector: 'app-grados',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex flex-col min-h-screen">
            <div class="flex-1 mx-auto relative z-10 w-full">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div class="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                        <h1 class="titulo text-3xl md:text-5xl font-black mb-4 text-indigo-600 drop-shadow-sm">¡Elige tu Grado!</h1>
                        <p class="text-lg md:text-xl font-semibold text-gray-700">Cada grado es un mundo de aventuras. ¡Desbloquea logros y colecciona medallas!</p>
                    </div>
                    <div class="p-4">
                        <div class="flex flex-col items-center gap-2">
                            <img [src]="getAvatarPath(currentUser()!.avatarName)" [alt]="currentUser()!.nickname" class="w-20 h-20 object-contain rounded-full border-4 border-indigo-600 bg-white p-1" />
                            <span class="font-bold text-indigo-600">{{ currentUser()!.nickname }}</span>
                            <span class="text-xs text-gray-600">
                                {{ currentUser()!.genero === 'niño' ? 'Niño' : 'Niña' }}
                            </span>
                            <span class="text-sm text-gray-700">
                                Puntos:
                                <span class="font-bold">{{ currentUser()!.puntuacion }}</span>
                            </span>
                            <span class="text-sm text-gray-700">
                                Cursos completados:
                                <span class="font-bold">{{ cursosCompletados() }}</span>
                            </span>
                            <button (click)="logout()" class="mt-2 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-700 transition-colors">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    @for (grado of grados; track grado.numero) {
                        <div class="grado-{{ grado.numero }} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative bg-white shadow-md hover:shadow-lg" (click)="seleccionarGrado(grado.numero)">
                            <img [src]="grado.imagen" class="w-20 h-20 object-contain mx-auto mb-4" alt="Grado {{ grado.numero }}" />
                            <h2 class="text-2xl font-bold mb-2">{{ grado.numero }}° Grado</h2>
                            <p class="text-gray-700 mb-2">
                                Puntaje:
                                <span class="font-bold">{{ puntajes()[grado.numero] }}</span>
                            </p>
                            <div class="flex justify-center gap-2 mb-2">
                                @for (medalla of [1, 2, 3, 4, 5, 6]; track medalla) {
                                    <span class="w-3 h-3 rounded-full inline-block bg-gray-300"></span>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>

            <!-- Ranking section -->
            <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 mt-8">
                <h2 class="text-4xl font-black text-white text-center mb-6 drop-shadow-sm">🏆 Ranking de Jugadores</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    @for (user of rankingUsers(); let i = $index; track user.id) {
                        <div class="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md" [class.bg-yellow-100]="user.id === currentUser()!.id" [class.border-2]="user.id === currentUser()!.id" [class.border-amber-400]="user.id === currentUser()!.id">
                            <span class="text-xl">#{{ i + 1 }}</span>
                            <div>
                                <div class="flex-1 flex items-center gap-3">
                                    <img [src]="getAvatarPath(user.avatarName)" [alt]="user.nickname" class="w-12 h-12 rounded-full object-contain bg-gray-100 p-1 border-2 border-gray-300" />
                                    <div class="flex-col gap-1">
                                        <div class="font-bold text-gray-800 text-sm">{{ user.nickname }}</div>
                                        <b class="text-sm">{{ user.puntuacion }} pts</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            .grado-1 {
                background: linear-gradient(135deg, #fee2e2, #fecaca);
            }
            .grado-2 {
                background: linear-gradient(135deg, #eff6ff, #bfdbfe);
            }
            .grado-3 {
                background: linear-gradient(135deg, #ecfdf5, #a7f3d0);
            }
            .grado-4 {
                background: linear-gradient(135deg, #fef3c7, #fcd34d);
            }
            .grado-5 {
                background: linear-gradient(135deg, #ede9fe, #c4b5fd);
            }
            .grado-6 {
                background: linear-gradient(135deg, #fce7f3, #fbcfe8);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradosComponent {
    private userService = inject(UserService);
    private gameService = inject(GameService);
    private toastService = inject(ToastService);
    private navigationService = inject(NavigationService);
    private musicService = inject(MusicService);

    readonly puntajes = signal<{ [grado: number]: number }>({});
    currentUser = this.userService.currentUser;
    cursosCompletados = signal(0);

    // Ranking computed signal
    rankingUsers = computed(() => {
        return this.userService.getRanking()
    });

    // Datos de los grados
    grados = [
        {
            numero: 1,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/962df116-9af8-4ad1-9ba5-66ecad70fa1b.png',
        },
        {
            numero: 2,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/afc24e6d-7d73-4dea-a615-d8b69ad1083f.png',
        },
        {
            numero: 3,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17d0e301-4c56-48c2-a3a8-025ed219838c.png',
        },
        {
            numero: 4,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05b7e295-0c80-4bff-8eab-cfefe1df46ad.png',
        },
        {
            numero: 5,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e0de5b8-070c-41c1-8d90-52b1b380cf19.png',
        },
        {
            numero: 6,
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48ba77dc-adfb-45a5-b518-b0574ab1c696.png',
        },
    ];

    getAvatarPath = getAvatarPath;

    constructor() {
        this.cargarPuntajes();
        this.cargarDatos();
    }

    private async cargarDatos() {
        // Recargar usuarios para tener el ranking actualizado
        await this.userService.reloadUsers();
    }

    async cargarPuntajes() {
        const all = await this.userService.obtenerTodasLasCompetencias();
        const puntajesPorGrado: { [grado: number]: number } = {};
        for (const grado of this.grados) {
            const competenciasGrado = all.filter((c) => c.grado === grado.numero);
            const puntajeGrado = competenciasGrado.reduce((sum, c) => sum + c.puntaje * 10, 0);
            puntajesPorGrado[grado.numero] = puntajeGrado;
        }
        this.puntajes.set(puntajesPorGrado);
    }

    async seleccionarGrado(numero: number) {
        // Reproducir efecto de sonido en paralelo
        this.musicService.playSoundEffect('click');

        // Continuar con la selección del grado
        await this.gameService.seleccionarGrado(numero);
    }

    logout() {
        const nickname = this.currentUser()?.nickname;
        this.userService.logout();
        this.gameService.resetear();
        this.toastService.info(`Hasta luego, ${nickname}!`);
        this.navigationService.goToLogin();
    }
}
