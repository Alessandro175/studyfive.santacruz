import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { GameService } from '../../services/game.service';
import { NavigationService } from '../../services/navigation.service';
import { MateriasComponent } from '../../components/materias.component';
import { ModalComponent } from '../../components/modal.component';
import { JuegoComponent } from '../../components/juego.component';
import { ResultadosComponent } from '../../components/resultados.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MateriasComponent,
    ModalComponent,
    JuegoComponent,
    ResultadosComponent,
  ],
  template: `
    @if (currentUser()) {
    <!-- Vista según el estado del juego -->
    @if (gameService.vistaActual() === 'seleccion-grados') {
    <!-- Vista de selección de grados -->
    <div class="main-container">
      <div class="header">
        <div class="header-left">
          <h1 class="titulo">
            ¡Elige tu Grado!
          </h1>
          <p class="subtitle">
            Cada grado es un mundo de aventuras. ¡Desbloquea logros y colecciona medallas!
          </p>
        </div>
        <div id="perfil-jugador" class="perfil-container">
          <div class="perfil">
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
            <span class="nickname">{{ currentUser()!.nickname }}</span>
            <span class="genero">
              {{
                currentUser()!.genero === 'masculino'
                  ? 'Masculino'
                  : currentUser()!.genero === 'femenino'
                  ? 'Femenino'
                  : 'Otro'
              }}
            </span>
            <span class="puntos">
              Puntos: <span class="puntos-value">{{ currentUser()!.puntuacion }}</span>
            </span>
            <span class="cursos">
              Cursos completados: <span class="cursos-value">{{ cursosCompletados() }}</span>
            </span>
            <button
              (click)="logout()"
              class="logout-btn"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <div id="grados-container">
        @for (grado of grados; track grado.numero) {
        <div
          class="card grado-{{ grado.numero }}"
          (click)="seleccionarGrado(grado.numero)"
        >
          <img
            [src]="grado.imagen"
            class="materia-icon"
            alt="Grado {{ grado.numero }}"
          />
          <h2 class="card-title">{{ grado.numero }}° Grado</h2>
          <p class="card-puntaje">
            Puntaje: <span class="puntaje-value">{{ obtenerPuntajeGrado()(grado.numero) }}</span>
          </p>
          <div class="medallas">
            @for (medalla of [1,2,3,4,5,6]; track medalla) {
            <span
              class="medalla"
              [class.obtenida]="medalla <= grado.medallasObtenidas"
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
    } @else if (gameService.vistaActual() === 'modal-competencia') {
    <!-- Modal de competencia -->
    <app-modal
      [titulo]="gameService.competenciaActual()?.nombre || 'Competencia'"
      [descripcion]="gameService.competenciaActual()?.descripcion || ''"
      [objetivo]="gameService.competenciaActual()?.objetivo || ''"
      [puntajeAnterior]="obtenerPuntajeAnterior()"
      [totalPreguntas]="5"
      [textoBoton]="'¡Comenzar!'"
      (close)="gameService.cerrarModal()"
      (accept)="gameService.iniciarQuiz()"
    />
    } @else if (gameService.vistaActual() === 'jugando') {
    <!-- Vista del juego -->
    <app-juego />
    } @else if (gameService.vistaActual() === 'resultados') {
    <!-- Vista de resultados -->
    <app-resultados />
    } } @else {
    <div class="no-session">
      <h2 class="no-session-title">No hay sesión activa</h2>
      <p class="no-session-text">Redirigiendo al login...</p>
    </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .main-container {
        margin: 0 auto;
        position: relative;
        z-index: 10;
        padding: 3rem 1rem;
      }

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .header-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .titulo {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #4338ca;
        font-weight: 800;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      }

      .subtitle {
        font-size: 1.25rem;
        color: #374151;
        font-weight: 600;
      }

      .perfil-container {
        margin-bottom: 1rem;
        padding: 1rem;
      }

      .perfil {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .nickname {
        font-weight: bold;
        color: #4338ca;
      }

      .genero {
        font-size: 0.75rem;
        color: #6b7280;
      }

      .puntos, .cursos {
        font-size: 0.875rem;
        color: #374151;
      }

      .puntos-value, .cursos-value {
        font-weight: bold;
      }

      .logout-btn {
        margin-top: 0.5rem;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        background-color: #ef4444;
        color: white;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .logout-btn:hover {
        background-color: #dc2626;
      }

      .card {
        border-radius: 0.75rem;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
        background-color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        text-align: center;
      }

      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .materia-icon {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin: 0 auto 1rem;
      }

      .card-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .card-puntaje {
        color: #374151;
        margin-bottom: 0.5rem;
      }

      .puntaje-value {
        font-weight: bold;
      }

      .medallas {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .medalla {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        display: inline-block;
        background-color: #d1d5db;
      }

      .medalla.obtenida {
        background-color: #fbbf24;
      }

      .no-session {
        text-align: center;
        padding: 2rem;
      }

      .no-session-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #374151;
        margin-bottom: 1rem;
      }

      .no-session-text {
        color: #4b5563;
      }

      #grados-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
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

      @media (min-width: 768px) {
        .header {
          flex-direction: row;
        }
        .header-left {
          align-items: flex-start;
        }
        .titulo {
          font-size: 3rem;
        }
      }
    `,
  ],
})
export class HomeComponent {
  private userService = inject(UserService);
  private toastService = inject(ToastService);
  private navigationService = inject(NavigationService);
  gameService = inject(GameService);

  currentUser = this.userService.currentUser;

  // Computed para obtener puntaje por grado dinámicamente
  obtenerPuntajeGrado = computed(() => {
    return (grado: number) => this.userService.obtenerPuntajePorGrado(grado);
  });

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

  /**
   * Obtiene el puntaje anterior de la competencia actual
   */
  obtenerPuntajeAnterior(): number | null {
    const grado = this.gameService.gradoSeleccionado();
    const materia = this.gameService.materiaSeleccionada();
    const competencia = this.gameService.competenciaSeleccionada();

    if (!grado || !materia || !competencia) {
      return null;
    }

    const registro = this.userService.obtenerCompetencia(grado, materia, competencia);
    return registro ? registro.mejorPuntaje : null;
  }

  seleccionarGrado(numero: number) {
    this.gameService.seleccionarGrado(numero);
    this.toastService.info(`Has seleccionado ${numero}° Grado`);
  }

  logout() {
    const nickname = this.currentUser()?.nickname;
    this.userService.logout();
    this.gameService.resetear(); // Resetear estado del juego
    this.toastService.info(`Hasta luego, ${nickname}!`);
    this.navigationService.goToLogin();
  }
}
