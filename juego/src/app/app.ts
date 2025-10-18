import { Component, signal, inject, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ToastComponent } from './components/toast.component';
import { BackgroundCanvasComponent } from './components/background-canvas.component';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { HomeComponent } from './pages/home/home';
import { NavigationService } from './services/navigation.service';

@Component({
    selector: 'app-root',
    imports: [ToastComponent, BackgroundCanvasComponent, LoginComponent, RegistroComponent, HomeComponent],
    template: `
        <!-- Canvas de fondo animado -->
        <app-background-canvas />

        <!-- Mostrar vista según el estado de navegación -->
        <div>
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
            }
        </div>
        <app-toast />
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            height: 100vh;
            position: relative;
            padding: 0;

            div {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                position: relative;
                z-index: 1;
            }
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
        }
    `,
})
export class App implements AfterViewInit, OnDestroy {
    protected readonly title = signal('juego');
    protected navigationService = inject(NavigationService);
    private resizeListener!: () => void;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit() {
        this.resizeListener = () => {
            this.renderer.setStyle(this.el.nativeElement, 'height', window.innerHeight + 'px');
        };
        this.resizeListener();
        window.addEventListener('resize', this.resizeListener);
    }

    ngOnDestroy() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
        }
    }
}
