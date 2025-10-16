import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { GameService } from '../../services/game.service';
import { MateriasComponent } from '../../components/materias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MateriasComponent],
  template: `
    @if (currentUser()) {
      <!-- Vista según el estado del juego -->
      @if (gameService.vistaActual() === 'seleccion-grados') {
        <!-- Vista de selección de grados -->
        <div class="max-w-5xl mx-auto relative z-10 w-full">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 p-8">
            <div class="flex-1 flex flex-col items-center md:items-start">
              <h1
                class="titulo text-4xl md:text-5xl mb-4 text-indigo-700 font-extrabold drop-shadow-lg"
              >
                ¡Elige tu Grado!
              </h1>
              <p class="text-xl text-gray-700 font-semibold">
                Cada grado es un mundo de aventuras. ¡Desbloquea logros y colecciona medallas!
              </p>
            </div>
            <div id="perfil-jugador" class="mb-4">
              <div class="flex flex-col items-center gap-2">
                <!-- Avatar del jugador -->
                <svg width="60" height="60" viewBox="0 0 80 80">
                  <ellipse
                    cx="40"
                    cy="45"
                    rx="22"
                    ry="30"
                    [attr.fill]="currentUser()!.colorPiel"
                    stroke="#e0bfae"
                    stroke-width="2"
                  ></ellipse>
                  <ellipse
                    cx="40"
                    cy="20"
                    rx="22"
                    ry="12"
                    [attr.fill]="currentUser()!.colorPelo"
                  ></ellipse>
                  <ellipse cx="32" cy="50" rx="3.5" ry="5" fill="#222"></ellipse>
                  <ellipse cx="48" cy="50" rx="3.5" ry="5" fill="#222"></ellipse>
                  <ellipse cx="33" cy="48" rx="1" ry="1.5" fill="#fff"></ellipse>
                  <ellipse cx="49" cy="48" rx="1" ry="1.5" fill="#fff"></ellipse>
                  <ellipse cx="40" cy="62" rx="5" ry="2.5" fill="#e57373"></ellipse>
                </svg>
                <span class="font-bold text-indigo-700">{{ currentUser()!.nickname }}</span>
                <span class="text-xs text-gray-500">
                  {{
                    currentUser()!.genero === 'masculino'
                      ? 'Masculino'
                      : currentUser()!.genero === 'femenino'
                      ? 'Femenino'
                      : 'Otro'
                  }}
                </span>
                <span class="text-sm text-gray-700">
                  Puntos: <span class="font-bold">{{ currentUser()!.puntuacion }}</span>
                </span>
                <span class="text-sm text-gray-700">
                  Cursos completados: <span class="font-bold">{{ cursosCompletados() }}</span>
                </span>
                <button
                  (click)="logout()"
                  class="mt-2 px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded transition-all"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
          <div id="grados-container">
            @for (grado of grados; track grado.numero) {
              <div
                class="card grado-{{ grado.numero }} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative bg-white"
                (click)="seleccionarGrado(grado.numero)"
              >
                <img
                  [src]="grado.imagen"
                  class="mx-auto mb-4 materia-icon"
                  alt="Grado {{ grado.numero }}"
                />
                <h2 class="text-2xl font-bold mb-2">{{ grado.numero }}° Grado</h2>
                <p class="text-gray-700 mb-2">
                  Puntaje: <span class="font-bold">{{ grado.puntaje }}</span>
                </p>
                <div class="flex justify-center gap-2 mb-2">
                  @for (medalla of [1,2,3,4,5,6]; track medalla) {
                    <span
                      class="w-3 h-3 rounded-full inline-block"
                      [class.bg-yellow-400]="medalla <= grado.medallasObtenidas"
                      [class.bg-gray-300]="medalla > grado.medallasObtenidas"
                    ></span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      } @else if (gameService.vistaActual() === 'seleccion-materias') {
        <!-- Vista de selección de materias -->
        <app-materias />
      } @else if (gameService.vistaActual() === 'jugando') {
        <!-- Vista del juego (próximamente) -->
        <div class="text-center py-8">
          <h2 class="text-2xl font-bold text-gray-700 mb-4">Jugando...</h2>
          <p class="text-gray-600">
            Grado: {{ gameService.gradoSeleccionado() }}° - 
            Materia: {{ gameService.materiaSeleccionada() }}
          </p>
          <button
            (click)="gameService.volverAMaterias()"
            class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
          >
            Volver a materias
          </button>
        </div>
      }
    } @else {
      <div class="text-center py-8">
        <h2 class="text-2xl font-bold text-gray-700 mb-4">No hay sesión activa</h2>
        <p class="text-gray-600">Redirigiendo al login...</p>
      </div>
    }
  `,
  styles: [
    `
      .card {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        text-align: center;
      }

      .card:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .materia-icon {
        width: 80px;
        height: 80px;
        object-fit: contain;
      }

      .titulo {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      }
      #grados-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        padding: 1rem;
        margin-bottom: 2rem;
      }
      #perfil-jugador {
        padding: 1rem;
      }
      .grado-1 {
        background: linear-gradient(135deg, #fee2e2, #fecaca);
      }
      .grado-2 {
        background: linear-gradient(135deg, #eff6ff, #bfdbfe);
      }
      .grado-3 {
        background: linear-gradient(135deg, #ecfdf5, #a7f3d0);
      }
      .grado-4 {
        background: linear-gradient(135deg, #fef3c7, #fcd34d);
      }
      .grado-5 {
        background: linear-gradient(135deg, #ede9fe, #c4b5fd);
      }
      .grado-6 {
        background: linear-gradient(135deg, #fce7f3, #fbcfe8);
      }
    `,
  ],
})
export class HomeComponent {
  private userService = inject(UserService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  gameService = inject(GameService);

  currentUser = this.userService.currentUser;

  // Datos de los grados
  grados = [
    {
      numero: 1,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/962df116-9af8-4ad1-9ba5-66ecad70fa1b.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
    {
      numero: 2,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/afc24e6d-7d73-4dea-a615-d8b69ad1083f.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
    {
      numero: 3,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17d0e301-4c56-48c2-a3a8-025ed219838c.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
    {
      numero: 4,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05b7e295-0c80-4bff-8eab-cfefe1df46ad.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
    {
      numero: 5,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e0de5b8-070c-41c1-8d90-52b1b380cf19.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
    {
      numero: 6,
      imagen:
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48ba77dc-adfb-45a5-b518-b0574ab1c696.png',
      puntaje: 0,
      medallasObtenidas: 0,
    },
  ];

  // Computed para cursos completados
  cursosCompletados = signal(0);

  seleccionarGrado(numero: number) {
    this.gameService.seleccionarGrado(numero);
    this.toastService.info(`Has seleccionado ${numero}° Grado`);
  }

  logout() {
    const nickname = this.currentUser()?.nickname;
    this.userService.logout();
    this.gameService.resetear(); // Resetear estado del juego
    this.toastService.info(`Hasta luego, ${nickname}!`);
    this.router.navigate(['/login']);
  }
}
