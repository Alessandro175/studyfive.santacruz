import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  template: `
    <main class="bg-white shadow-xl">
      <router-outlet />
    </main>
    <app-toast />
  `,
  styles: `
    :host {
      display: block;
      height: 100dvh;
      margin: 0 auto;
      width: 100%;
      max-width: 700px;
      background: #f0f4f8;
      
    }
    main{      
      height: 100%;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
})
export class App {
  protected readonly title = signal('juego');
}
