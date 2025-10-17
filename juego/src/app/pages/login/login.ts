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
    <h1 class="titulo">¡Bienvenido de vuelta!</h1>
    <p class="subtitle">Ingresa tu nickname para continuar jugando</p>

    <form (submit)="onSubmit($event)" class="form">
      <input
        [(ngModel)]="nickname"
        name="nickname"
        type="text"
        maxlength="16"
        placeholder="Tu nickname"
        class="input"
        required
        autofocus
      />

      <button type="submit" class="button">Entrar</button>
    </form>

    <div class="register">
      <p>¿No tienes cuenta?</p>
      <a (click)="goToRegistro()" class="link"> Regístrate aquí </a>
    </div>

    <div class="ranking">
      <h2 class="ranking-title">Ranking de Jugadores</h2>
      <div class="ranking-list">
        @if (ranking().length === 0) {
        <div class="no-players">No hay jugadores registrados aún</div>
        } @else {
        <ul class="ranking-ul">
          @for (user of ranking(); track user.id; let idx = $index) {
          <li class="ranking-li" [ngClass]="{ 'top-player': idx < 3, 'first-place': idx === 0 }">
            <span class="player-name">
              @if (idx === 0) { 🏆 } @else if (idx === 1) { 🥈 } @else if (idx === 2) { 🥉 } @else {
              ⭐ }
              {{ user.nickname }}
            </span>
            <span>{{ user.puntuacion }} pts</span>
          </li>
          }
        </ul>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      padding: 3rem 1rem;
    }


    .titulo {
      font-size: 2.5rem;
      font-weight: bold;
      color: #4f46e5;
      margin-bottom: 1rem;
      text-align: center;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #374151;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      width: 100%;
    }

    .input {
      border: 2px solid #a5b4fc;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      width: 100%;
      text-align: center;
      font-size: 1.125rem;
      outline: none;
    }

    .input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 2px #6366f1;
    }

    .button {
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      background-color: #6366f1;
      color: white;
      font-weight: bold;
      border: none;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .button:hover {
      background-color: #4338ca;
    }

    .register {
      text-align: center;
      font-size: 0.875rem;
      color: #4b5563;
    }

    .link {
      color: #4f46e5;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }

    .link:hover {
      color: #3730a3;
    }

    .ranking {
      margin-top: 2rem;
      width: 100%;
    }

    .ranking-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #4338ca;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .ranking-list {
      max-height: 10rem;
      overflow-y: auto;
      border-radius: 0.5rem;
      border: 1px solid #e0e7ff;
      background-color: rgba(238, 242, 255, 0.4);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .no-players {
      text-align: center;
      padding: 1rem;
      color: #6b7280;
    }

    .ranking-ul {
      list-style: none;
      padding: 0;
      margin: 0;
      border-top: 1px solid #e0e7ff;
    }

    .ranking-ul li {
      border-bottom: 1px solid #e0e7ff;
      font-size: 1.125rem;
    }

    .ranking-li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem 0.5rem;
    }

    .player-name {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .top-player {
      font-weight: bold;
    }

    .first-place {
      color: #eab308;
    }

    @media (min-width: 640px) {
      .container {
        padding: 1.5rem;
      }
      .ranking-list {
        max-height: 14rem;
      }
    }

    @media (min-width: 768px) {
      .container {
        padding: 2rem;
      }
      .titulo {
        font-size: 3rem;
      }
      .ranking-list {
        max-height: 16rem;
      }
    }
  `,
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
    const user = users.find((u) => u.nickname.toLowerCase() === nicknameValue.toLowerCase());

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
