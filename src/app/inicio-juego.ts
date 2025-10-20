import { Component, inject, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundCanvasComponent } from './components/background-canvas.component';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { HomeComponent } from './pages/home/home';
import AdminPage from './pages/admin/admin';
import { NavigationService } from './services/navigation.service';
import { MusicService } from './services/music.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMusicNote, matPause } from '@ng-icons/material-icons/baseline';
import { GameService } from './services/game.service';

@Component({
    selector: 'app2',
    imports: [BackgroundCanvasComponent, LoginComponent, RegistroComponent, HomeComponent, AdminPage, NgIcon],
    viewProviders: [provideIcons({ matMusicNote, matPause })],
    template: `
        <!-- Canvas de fondo animado -->
        <app-background-canvas />

        <main>
            <div class="cuerpo-juego">
                @switch (navigationService.currentView()) {
                    @case ('login') {
                        <app-login />
                    }
                    @case ('registro') {
                        <app-registro />
                    }
                    @case ('dashboard') {
                        <app-home />
                    }
                    @case ('admin') {
                        <app-admin />
                    }
                }
            </div>
            <img [src]="'/img/otros/llami-' + gameService.mascotaAccionActual() + '.png'" alt="" class="presentacion-01" />
            <img src="/img/otros/jaguari-presentacion.png" alt="" class="presentacion-02" />
            <button class="music-toggle" (click)="toggleMusic()" [class.playing]="musicService.isPlaying()" title="Toggle música">
                <ng-icon name="matMusicNote" class="icon music-icon"></ng-icon>
                <ng-icon name="matPause" class="icon pause-icon"></ng-icon>
            </button>
        </main>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
            margin: 0 auto;
            height: 100vh;
            position: relative;
            padding: 0;

            main {
                width: 100%;
                height: 100%;
                backdrop-filter: blur(10px);
                position: relative;
                z-index: 1;
            }
            img {
                // height: 500px;
                position: absolute;
                width: auto;
                z-index: 10;
                bottom: 0;
                pointer-events: none;
                display: none;
                &.presentacion-01 {
                    left: 0;
                    height: 160px;
                    display: block;
                    transform: translateX(-10%);
                    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
                }
                &.presentacion-02 {
                    right: 0;
                    transform: translateX(74%);
                }
            }

            // Botón de toggle de música
            .music-toggle {
                position: absolute;
                bottom: 2rem;
                right: 2rem;
                z-index: 999;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid var(--primary);
                background: rgba(255, 255, 255, 0.9);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

                &:hover {
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    transform: scale(1.1);
                }

                &:active {
                    transform: scale(0.95);
                }

                &.playing {
                    background: var(--primary);
                    color: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

                    &:hover {
                        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
                    }
                }

                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                    transition: opacity 0.3s ease;
                }

                .music-icon {
                    opacity: 1;
                }

                .pause-icon {
                    opacity: 0;
                    position: absolute;
                }

                // Animación solo cuando está reproduciendo
                &.playing .music-icon {
                    animation: spin 3s linear infinite;
                }

                &:hover .music-icon {
                    opacity: 0;
                }

                &:hover .pause-icon {
                    opacity: 1;
                }
            }
        }

        .cuerpo-juego {
            background: rgba(255, 255, 255, 0.95);
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            padding: 3rem 1rem 140px 1rem;
        }

        @media (min-width: 720px) {
            :host {
                padding: 3rem 0;
            }
            div {
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border-radius: 2rem;
                border: 4px solid var(--primary);
            }
            .cuerpo-juego {
                padding: 3rem 2rem;
            }
        }
        @media (min-width: 992px) {
            :host {
                img {
                    display: block;
                    height: 400px;
                    &.presentacion-01 {
                        left: 0;
                        height: 400px;
                        transform: translateX(-85%);
                    }
                }
            }
        }
        @media (min-width: 1200px) {
            :host {
                max-width: 800px;
                img {
                    height: 500px;
                    display: block;
                    &.presentacion-01 {
                        height: 500px;
                    }
                }
            }
        }
        @media (min-width: 1800px) {
            :host {
                max-width: 1000px;

                img {
                    height: auto;
                    display: block;
                    &.presentacion-01 {
                        height: auto;
                    }
                }
            }
        }

        /* Animación de rotación infinita para el ícono de música */
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `,
})
export class InicioJuego implements AfterViewInit, OnDestroy {
    readonly gameService = inject(GameService);
    protected navigationService = inject(NavigationService);
    protected musicService = inject(MusicService);
    private router = inject(Router);
    private resizeListener!: () => void;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        // Detectar la ruta y actualizar la vista
        if (this.router.url === '/admin') {
            this.navigationService.navigateTo('admin');
        }
    }

    ngAfterViewInit() {
        this.resizeListener = () => {
            this.renderer.setStyle(this.el.nativeElement, 'height', window.innerHeight + 'px');
        };
        this.resizeListener();
        window.addEventListener('resize', this.resizeListener);

        // Iniciar música de lobby
        this.musicService.selectMusic('lobby');
        this.musicService.play().catch(() => {
            // Si falla el autoplay, esperar a que el usuario interactúe
            console.log('Autoplay bloqueado. Música iniciará con la primera interacción del usuario.');
        });
    }

    toggleMusic(): void {
        this.musicService.toggle();
    }

    ngOnDestroy() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
        this.musicService.stop();
    }
}
