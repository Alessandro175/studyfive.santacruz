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
    <div>
      @switch (navigationService.currentView()) { @case ('login') {
      <app-login />
      } @case ('registro') {
      <app-registro />
      } @case ('dashboard') {
      <app-home />
      } }
      <app-toast />
    </div>
  `,
  styles: `
    div {
      display: block;
      height: 100vh;
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      background: green;
    }
  `,
})
export class App {
  protected readonly title = signal('juego');
  protected navigationService = inject(NavigationService);
}
