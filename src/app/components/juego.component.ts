import { Component, inject, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';
import { BtnComponent } from "./btn.component";

@Component({
    selector: 'app-juego',
    standalone: true,
    imports: [CommonModule, BtnComponent],
    template: `
        <!-- Header con botón volver, puntuación y progreso -->
        <div class="flex justify-between items-start mb-4">
            <button (click)="volverACompetencias()" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ver Competencias
            </button>

            <div class="flex items-center gap-4 flex-col">
                <div class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{{ puntosActuales() }} pts</div>
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

        <!-- Recursos (si existen y estamos mostrándolos) -->
        @if (gameService.mostrandoRecursos() && recursos().length > 0) {
            <div class="p-6 bg-white rounded-xl shadow-lg mb-6">
                <h3 class="text-2xl font-bold mb-6 text-indigo-700">📚 Material de Estudio</h3>
                <p class="text-gray-600 mb-6">Lee atentamente el siguiente material antes de comenzar con las preguntas:</p>
                
                <!-- Mostrar todos los recursos uno debajo del otro -->
                <div class="space-y-6">
                    @for (recurso of recursos(); track $index) {
                        <div class="recurso-item border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50">
                            @if (recurso.tipo === 'imagen') {
                                <div class="text-center">
                                    <img [src]="recurso.url" [alt]="recurso.descripcion" class="max-w-full h-auto rounded-lg shadow-md mx-auto mb-3" />
                                    <p class="text-sm text-gray-600 italic">{{ recurso.descripcion }}</p>
                                </div>
                            }
                            @if (recurso.tipo === 'texto') {
                                <div class="prose max-w-none">
                                    <p class="text-gray-700 leading-relaxed">{{ recurso.descripcion }}</p>
                                </div>
                            }
                        </div>
                    }
                </div>

                <div class="mt-8 text-center">
                    <button btn (click)="iniciarPreguntas()">
                        🚀 Comenzar Preguntas
                    </button>
                </div>
            </div>
        }

        <!-- Pregunta actual -->
        @if (!gameService.mostrandoRecursos() && !gameService.mostrarFeedback() && preguntaActual()) {
            <div class="p-6 bg-white rounded-xl shadow-lg">
                <!-- Indicador de pregunta -->
                <div class="mb-6 inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg">Pregunta {{ gameService.preguntaActual() + 1 }} de {{ totalPreguntas() }}</div>

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
        @if (!gameService.mostrandoRecursos() && !gameService.mostrarFeedback() && !preguntaActual()) {
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
            }
            .opcion-btn {
                text-align: left;
                font-size: 16px;
            }

            .opcion-btn:hover {
                transform: translateX(4px);
            }

            .recurso-item img {
                max-height: 600px;
                object-fit: contain;
            }

            @media (max-width: 768px) {
                .opcion-btn {
                    font-size: 14px;
                    padding: 12px;
                }
                
                .recurso-item img {
                    max-height: 400px;
                }
            }
        `,
    ],
})
export class JuegoComponent {
    gameService = inject(GameService);
    userService = inject(UserService);

    readonly progreso = this.gameService.progreso;
    totalPreguntas = computed(() => this.gameService.preguntasActuales().length);
    readonly puntosActuales = this.gameService.puntajeActual;
    
    preguntaActual = computed(() => {
        const index = this.gameService.preguntaActual();
        const preguntas = this.gameService.preguntasActuales();
        if (!preguntas || preguntas.length === 0) return undefined;
        return preguntas[index] || undefined;
    });

    recursos = computed(() => {
        const competencia = this.gameService.competenciaActual();
        return competencia?.recursos || [];
    });

    volverACompetencias() {
        this.gameService.volverACompetencias();
    }

    iniciarPreguntas() {
        this.gameService.iniciarPreguntas();
    }

    responder(opcionIndex: number) {
        this.gameService.responderPregunta(opcionIndex);
    }

    siguiente() {
        // La puntuación se actualiza al final en ResultadosComponent
        // No debemos actualizar puntos aquí para evitar duplicación
        this.gameService.siguientePregunta();
    }

    estaEnUltimaPregunta(): boolean {
        return this.gameService.preguntaActual() === this.totalPreguntas() - 1;
    }

    getRespuestaCorrecta(): string {
        const pregunta = this.preguntaActual();
        if (!pregunta) return '';
        return pregunta.opciones[pregunta.respuesta_correcta];
    }
}
