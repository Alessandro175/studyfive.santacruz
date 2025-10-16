import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  template: `
    <main>
      <router-outlet />
    </main>
    <app-toast />
  `,
  styles: `
    :host {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class App {
  protected readonly title = signal('juego');
}
