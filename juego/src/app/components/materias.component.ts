import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { ToastService } from '../services/toast.service';
import { UserService } from '../services/user.service';
import { getMateriaLabel } from '../data/preguntas.data';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <button 
        (click)="volverAGrados()" 
        class="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Volver a grados
      </button>

      <h2 class="titulo text-4xl mb-8 text-center text-indigo-700 font-extrabold drop-shadow-lg">
        Materias de {{ gameService.gradoSeleccionado() }}° Grado
      </h2>

      <div class="puntaje-grado-container mb-6">
        <div class="puntaje-grado-card">
          <span class="puntaje-label">Puntaje Total del Grado:</span>
          <span class="puntaje-valor">{{ puntajeGrado() }} puntos</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (materia of materias; track materia.nombre) {
          <div 
            class="card bg-white rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative"
            (click)="seleccionarMateria(materia.nombre)"
          >
            <img 
              [src]="materia.imagen" 
              class="mx-auto mb-4 materia-icon"
              [alt]="getMateriaLabel(materia.nombre)"
            />
            <h3 class="text-xl font-bold mb-2 text-center">{{ getMateriaLabel(materia.nombre) }}</h3>
            <p class="text-gray-700 text-center mb-2">
              Puntaje: <span class="font-bold">{{ obtenerPuntajeMateria(materia.nombre) }}</span>
            </p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

    .puntaje-grado-container {
      display: flex;
      justify-content: center;
    }

    .puntaje-grado-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 40px;
      border-radius: 16px;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .puntaje-label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .puntaje-valor {
      font-size: 32px;
      font-weight: bold;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `]
})
export class MateriasComponent {
  gameService = inject(GameService);
  private toastService = inject(ToastService);
  private userService = inject(UserService);

  materias = this.gameService.getMateriasDelGrado();

  // Computed para obtener el puntaje del grado actual
  puntajeGrado = computed(() => {
    const grado = this.gameService.gradoSeleccionado();
    return grado ? this.userService.obtenerPuntajePorGrado(grado) : 0;
  });

  // Función helper para obtener el label de la materia
  getMateriaLabel(key: string): string {
    return getMateriaLabel(key);
  }

  // Obtener puntaje acumulado de una materia específica
  obtenerPuntajeMateria(materiaKey: string): number {
    const grado = this.gameService.gradoSeleccionado();
    if (!grado) return 0;
    return this.userService.obtenerPuntajePorMateria(grado, materiaKey);
  }

  volverAGrados() {
    this.gameService.volverAGrados();
  }

  seleccionarMateria(materia: string) {
    const label = getMateriaLabel(materia);
    this.toastService.info(`Has seleccionado ${label}`);
    // Selecciona la materia (GameService cargará la primera competencia automáticamente)
    this.gameService.seleccionarMateria(materia);
  }
}
