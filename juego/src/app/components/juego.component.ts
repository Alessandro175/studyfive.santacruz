import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-juego',
    standalone: true,
    imports: [CommonModule],
    template: `
        <!-- Header con botón volver, puntuación y progreso -->
        <div class="flex justify-between items-start mb-4">
            <button (click)="volverAMaterias()" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Cambiar materia
            </button>

            <div class="flex items-center gap-4 flex-col">
                <span class="text-2xl font-bold text-indigo-700"> {{ userService.currentUser()?.puntuacion || 0 }} pts </span>
                <div class="w-40 bg-gray-200 rounded-full h-4">
                    <div class="bg-green-500 h-4 rounded-full transition-all duration-500" [style.width.%]="progreso()"></div>
                </div>
            </div>
        </div>

        <!-- Info del curso -->
        <div class="mb-6 p-4 bg-white rounded-lg shadow">
            <h2 class="text-2xl font-bold text-indigo-700">{{ gameService.materiaSeleccionada() }} - {{ gameService.competenciaActual()?.nombre }}</h2>
            <p class="text-gray-600">{{ gameService.gradoSeleccionado() }}° Grado</p>
        </div>

        <!-- Pregunta actual -->
        @if (!gameService.mostrarFeedback() && preguntaActual()) {
            <div class="p-6 bg-white rounded-xl shadow-lg">
                <!-- Indicador de pregunta -->
                <div class="mb-4 text-sm text-gray-500 font-semibold">Pregunta {{ gameService.preguntaActual() + 1 }} de {{ totalPreguntas() }}</div>

                <h3 class="text-xl font-bold mb-6 text-gray-800">
                    {{ preguntaActual()!.pregunta }}
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    @for (opcion of preguntaActual()!.opciones; track $index) {
                        <button class="opcion-btn bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-indigo-100 hover:border-indigo-400 border-2 border-transparent transition-all duration-200 text-left font-medium" (click)="responder($index)">
                            {{ opcion }}
                        </button>
                    }
                </div>
            </div>
        }

        <!-- Loading state -->
        @if (!gameService.mostrarFeedback() && !preguntaActual()) {
            <div class="p-6 bg-white rounded-xl shadow-lg text-center">
                <p class="text-gray-500">Cargando pregunta...</p>
            </div>
        }

        <!-- Feedback -->
        @if (gameService.mostrarFeedback()) {
            <div class="mt-6 p-6 bg-white rounded-lg shadow-lg text-center">
                <div class="mb-4">
                    @if (gameService.ultimaRespuestaCorrecta()) {
                        <div class="text-6xl mb-2">✅</div>
                        <p class="text-2xl font-bold text-green-600 mb-4">¡Correcto!</p>
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7344f9e9-92b0-4866-83ec-e516c26697d5.png" alt="Correcto" class="w-20 h-20 mx-auto mb-4" />
                    } @else {
                        <div class="text-6xl mb-2">❌</div>
                        <p class="text-2xl font-bold text-red-600 mb-4">¡Incorrecto!</p>
                        <p class="text-lg text-gray-700 mb-4">
                            La respuesta correcta era:
                            <strong class="text-indigo-700">{{ getRespuestaCorrecta() }}</strong>
                        </p>
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44310e98-8556-42b5-bd9e-948d44db06f6.png" alt="Incorrecto" class="w-20 h-20 mx-auto mb-4" />
                    }
                </div>

                <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-colors" (click)="siguiente()">
                    {{ estaEnUltimaPregunta() ? 'Ver Resultados' : 'Siguiente Pregunta →' }}
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                padding: 3rem 1rem;
            }
            .opcion-btn {
                text-align: left;
                font-size: 16px;
            }

            .opcion-btn:hover {
                transform: translateX(4px);
            }

            @media (max-width: 768px) {
                .opcion-btn {
                    font-size: 14px;
                    padding: 12px;
                }
            }
        `,
    ],
})
export class JuegoComponent {
    gameService = inject(GameService);
    userService = inject(UserService);

    progreso = computed(() => this.gameService.getProgreso());
    totalPreguntas = computed(() => this.gameService.preguntasActuales().length);
    preguntaActual = computed(() => {
        const index = this.gameService.preguntaActual();
        const preguntas = this.gameService.preguntasActuales();
        if (!preguntas || preguntas.length === 0) return undefined;
        return preguntas[index] || undefined;
    });

    volverAMaterias() {
        this.gameService.volverAMaterias();
    }

    responder(opcionIndex: number) {
        this.gameService.responderPregunta(opcionIndex);
    }

    siguiente() {
        // Si es correcta, sumar puntos al usuario
        if (this.gameService.ultimaRespuestaCorrecta()) {
            const puntosGanados = 10; // 10 puntos por respuesta correcta
            this.userService.updateScore(puntosGanados);
        }

        this.gameService.siguientePregunta();
    }

    estaEnUltimaPregunta(): boolean {
        return this.gameService.preguntaActual() === this.totalPreguntas() - 1;
    }

    getRespuestaCorrecta(): string {
        const pregunta = this.preguntaActual();
        if (!pregunta) return '';
        return pregunta.opciones[pregunta.respuesta];
    }
}
