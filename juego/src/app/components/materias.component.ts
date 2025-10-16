import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { ToastService } from '../services/toast.service';

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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (materia of materias; track materia.nombre) {
          <div 
            class="card bg-white rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative"
            (click)="seleccionarMateria(materia.nombre)"
          >
            <img 
              [src]="materia.imagen" 
              class="mx-auto mb-4 materia-icon"
              [alt]="materia.nombre"
            />
            <h3 class="text-xl font-bold mb-2 text-center">{{ materia.nombre }}</h3>
            <p class="text-gray-700 text-center mb-2">
              Puntaje: <span class="font-bold">{{ materia.puntaje }}</span>
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
  `]
})
export class MateriasComponent {
  gameService = inject(GameService);
  private toastService = inject(ToastService);

  materias = this.gameService.getMateriasDelGrado();

  volverAGrados() {
    this.gameService.volverAGrados();
  }

  seleccionarMateria(materia: string) {
    this.toastService.info(`Has seleccionado ${materia}`);
    this.gameService.seleccionarMateria(materia);
    // Aquí se cambiaría a la vista de juego
  }
}
