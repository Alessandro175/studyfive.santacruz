import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="relative z-10 p-4 sm:p-6 md:p-8 w-full flex flex-col items-center"
    >
      <h1 class="text-4xl md:text-5xl font-bold text-indigo-600 mb-4 text-center">
        ¡Bienvenido de vuelta!
      </h1>
      <p class="text-lg text-gray-700 mb-6 text-center">
        Ingresa tu nickname para continuar jugando
      </p>
      
      <form (submit)="onSubmit($event)" class="flex flex-col items-center gap-4 mb-6 w-full">
        <input
          [(ngModel)]="nickname"
          name="nickname"
          type="text"
          maxlength="16"
          placeholder="Tu nickname"
          class="border-2 border-indigo-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center text-lg"
          required
          autofocus
        />
        
        <button
          type="submit"
          class="px-6 py-2 rounded-lg text-white font-bold bg-indigo-500 hover:bg-indigo-700 transition-all w-full"
        >
          Entrar
        </button>
      </form>

      <div class="text-center text-sm text-gray-600">
        <p>¿No tienes cuenta?</p>
        <a 
          (click)="goToRegistro()"
          class="text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer"
        >
          Regístrate aquí
        </a>
      </div>

      <div class="mt-8 w-full">
        <h2 class="text-2xl font-bold text-indigo-700 mb-2 text-center">Ranking de Jugadores</h2>
        <div
          class="max-h-40 sm:max-h-56 md:max-h-64 overflow-y-auto rounded-lg border border-indigo-100 bg-indigo-50/40 shadow-inner"
        >
          @if (ranking().length === 0) {
            <div class="text-center py-4 text-gray-500">
              No hay jugadores registrados aún
            </div>
          } @else {
            <ul class="divide-y divide-indigo-100 text-lg">
              @for (user of ranking(); track user.id; let idx = $index) {
                <li class="flex justify-between items-center py-1 px-2">
                  <span class="flex items-center gap-1" [class.font-bold]="idx < 3" [class.text-yellow-500]="idx === 0">
                    @if (idx === 0) { 🏆 }
                    @else if (idx === 1) { 🥈 }
                    @else if (idx === 2) { 🥉 }
                    @else { ⭐ }
                    {{ user.nickname }}
                  </span>
                  <span>{{ user.puntuacion }} pts</span>
                </li>
              }
            </ul>
          }
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  private userService = inject(UserService);
  private toastService = inject(ToastService);
  private navigationService = inject(NavigationService);

  nickname = signal('');
  ranking = signal(this.userService.getRanking());

  goToRegistro() {
    this.navigationService.goToRegistro();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const nicknameValue = this.nickname().trim();

    // Validaciones
    if (!nicknameValue) {
      this.toastService.error('Por favor ingresa tu nickname');
      return;
    }

    // Buscar el usuario por nickname
    const users = this.userService.users();
    const user = users.find(
      u => u.nickname.toLowerCase() === nicknameValue.toLowerCase()
    );

    if (!user) {
      this.toastService.error('Nickname no encontrado. ¿Quieres registrarte?');
      return;
    }

    // Establecer el usuario actual
    this.userService.currentUser.set(user);
    localStorage.setItem('studyfive_current_user', JSON.stringify(user));
    
    this.toastService.success(`¡Bienvenido de vuelta, ${user.nickname}!`);
    
    // Navegar al dashboard
    this.navigationService.goToDashboard();
  }
}
