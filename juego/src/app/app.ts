import { Component, signal, inject } from '@angular/core';
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
    <app-toast />
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
      margin: 0 auto;
      width: 100%;
      max-width: 700px;
      background: #f0f4f8;
    }
  `,
})
export class App {
  protected readonly title = signal('juego');
  protected navigationService = inject(NavigationService);
}
