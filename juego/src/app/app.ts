import { Component, signal, inject, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ToastComponent } from './components/toast.component';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { HomeComponent } from './pages/home/home';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [ToastComponent, LoginComponent, RegistroComponent, HomeComponent],
  template: `
    <!-- Mostrar vista según el estado de navegación -->
    @switch (navigationService.currentView()) { @case ('login') {
    <app-login />
    } @case ('registro') {
    <app-registro />
    } @case ('dashboard') {
    <app-home />
    } }
    <app-toast />
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      height: 100vh;
      overflow-y: auto;
      background: white;
    }
  `,
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('juego');
  protected navigationService = inject(NavigationService);
  private resizeListener!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
