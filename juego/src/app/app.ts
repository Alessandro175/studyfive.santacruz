import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  template: `
      <router-outlet />
    <app-toast />
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      margin: 0 auto;
      width: 100%;
      max-width: 700px;
      background: #f0f4f8;
      overflow-y: auto;
    }
  `,
})
export class App {
  protected readonly title = signal('juego');
}
