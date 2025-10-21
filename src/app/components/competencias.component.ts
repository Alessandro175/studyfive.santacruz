import { Component, inject, computed, signal, effect, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { ToastService } from '../services/toast.service';
import { UserService } from '../services/user.service';
import { MusicService } from '../services/music.service';
import { CompetenciaRegistro } from '../models/user.model';
import { CompetenciasSupabaseService } from '../services/competencias-supabase.service';
import { BackButtonComponent } from './back-button.component';

@Component({
    selector: 'app-competencias',
    standalone: true,
    imports: [CommonModule, BackButtonComponent],
    template: `
        <!-- Botón volver -->
        <back-button [label]="'Volver a materias'" (click)="volverAMaterias()" />

        <!-- Título -->
        <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-3 text-indigo-700 drop-shadow-lg">
            {{ gameService.getNombreMateria(gameService.materiaSeleccionada() || '') }}
        </h2>
        <p class="text-center text-gray-600 mb-8 text-lg">{{ gameService.gradoSeleccionado() }}° Grado</p>

        <!-- Línea de competencias en zigzag -->
        <div class="competencias-timeline relative">
            @for (competencia of competencias(); track competencia.id; let i = $index) {
                @let isLeft = i % 2 === 0;
                @let registro = obtenerRegistro(competencia.id);
                @let progreso = calcularProgreso(registro);
                @let completada = progreso === 100;

                <div class="competencia-container" [class.left]="isLeft" [class.right]="!isLeft">
                    <!-- Contenido de la competencia -->
                    <div class="competencia-card" [class.completada]="completada" (click)="seleccionarCompetencia(competencia.id)">
                        <h3 class="competencia-titulo">{{ competencia.nombre }}</h3>
                        <p class="competencia-objetivo">{{ competencia.descripcion_corta }}</p>

                        <!-- Progreso -->
                        @if (registro) {
                            <div class="progreso-info">
                                <div class="progreso-bar-container">
                                    <div class="progreso-bar" [style.width.%]="progreso"></div>
                                </div>
                                <div class="stats">
                                    <span class="stat">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {{ progreso }}%
                                    </span>
                                    <span class="stat">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            />
                                        </svg>
                                        {{ registro.mejorPuntaje }}/{{ registro.totalPreguntas }}
                                    </span>
                                    <span class="stat intentos">Intentos: {{ registro.intentos }}</span>
                                </div>
                            </div>
                        } @else {
                            <div class="sin-progreso">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-large" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                <p>¡Comienza ahora!</p>
                            </div>
                        }
                    </div>

                    <!-- Círculo indicador en la línea -->
                    <div class="timeline-dot" [class.completada]="completada">
                        @if (completada) {
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-check" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        } @else {
                            <span>{{ i + 1 }}</span>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            .competencias-timeline {
                position: relative;
                padding: 40px 0;
            }

            .competencia-container {
                position: relative;
                display: flex;
                align-items: center;
                margin-bottom: 60px;
                z-index: 1;
            }

            .competencia-container.left {
                justify-content: flex-end;
                padding-right: calc(50% + 40px);
            }

            .competencia-container.right {
                justify-content: flex-start;
                padding-left: calc(50% + 40px);
            }

            .competencia-card {
                background: white;
                border-radius: 16px;
                padding: 24px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                max-width: 400px;
                width: 100%;
            }

            .competencia-card:hover {
                transform: scale(1.05);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
            }

            .competencia-card.completada {
                background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
                border: 2px solid #10b981;
            }

            .competencia-titulo {
                font-size: 20px;
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 8px;
            }

            .competencia-objetivo {
                font-size: 14px;
                color: #6b7280;
                margin-bottom: 16px;
                line-height: 1.5;
            }

            .progreso-info {
                margin-top: 16px;
            }

            .progreso-bar-container {
                width: 100%;
                height: 8px;
                background: #e5e7eb;
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 12px;
            }

            .progreso-bar {
                height: 100%;
                background: linear-gradient(90deg, #10b981 0%, #059669 100%);
                transition: width 0.5s ease;
                border-radius: 4px;
            }

            .stats {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }

            .stat {
                display: flex;
                align-items: center;
                gap: 4px;
                font-size: 13px;
                color: #4b5563;
                font-weight: 600;
            }

            .stat.intentos {
                color: #6366f1;
            }

            .icon {
                width: 18px;
                height: 18px;
            }

            .sin-progreso {
                margin-top: 16px;
                padding: 16px;
                background: #f3f4f6;
                border-radius: 8px;
                text-align: center;
                color: #6b7280;
            }

            .icon-large {
                width: 32px;
                height: 32px;
                margin: 0 auto 8px;
                color: #9ca3af;
            }

            .timeline-dot {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: white;
                border: 4px solid #a5b4fc;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: #4338ca;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 2;
            }

            .timeline-dot.completada {
                background: #10b981;
                border-color: #059669;
                color: white;
            }

            .icon-check {
                width: 28px;
                height: 28px;
            }

            @media (max-width: 768px) {
                .competencia-container.left,
                .competencia-container.right {
                    justify-content: flex-start;
                    padding-left: 64px;
                    padding-right: 0;
                }

                .timeline-dot {
                    left: 24px;
                    width: 40px;
                    height: 40px;
                }

                .competencia-card {
                    max-width: 100%;
                }
            }
        `,
    ],
})
export class CompetenciasComponent {
    gameService = inject(GameService);
    private userService = inject(UserService);
    private musicService = inject(MusicService);

    // Signal para almacenar registros de competencias
    private registrosCompetencias = signal<Map<string, CompetenciaRegistro | null>>(new Map());

    // Computed para obtener las competencias de la materia seleccionada
    competencias = computed(() => {
        const materia = this.gameService.materiaSeleccionada();

        if (!materia) return [];

        return this.gameService.getCompetenciasPorMateria(materia);
    });

    constructor() {
        // Effect para cargar registros cuando cambie el grado o la materia
        effect(() => {
            const grado = this.gameService.gradoSeleccionado();
            const materia = this.gameService.materiaSeleccionada();
            const competencias = this.competencias();

            if (grado && materia && competencias.length > 0) {
                untracked(() => {
                    this.cargarRegistrosCompetencias(grado, materia, competencias);
                });
            }
        });

        effect(() => {
            const materia = this.gameService.materiaSeleccionada();
            if (materia) {
                untracked(() => {
                    this.gameService.mascotaAccionActual.set(materia.toLowerCase());
                });
            }
        });
    }

    // Cargar registros de todas las competencias de forma asíncrona
    private async cargarRegistrosCompetencias(grado: number, materia: string, competencias: any[]) {
        const registros = new Map<string, CompetenciaRegistro | null>();

        const all = await this.userService.obtenerTodasLasCompetencias();

        for (const competencia of competencias) {
            const element = all.find((registro) => registro.competencia === competencia.id && registro.grado === grado && registro.materia === materia);
            registros.set(competencia.id, element || null);
        }

        this.registrosCompetencias.set(registros);
    }

    volverAMaterias() {
        this.gameService.volverAMaterias();
    }

    seleccionarCompetencia(competenciaId: string) {
        // Reproducir efecto de sonido en paralelo
        this.musicService.playSoundEffect('click');

        // Continuar con la selección de competencia
        this.gameService.seleccionarCompetencia(competenciaId);
    }

    obtenerRegistro(competenciaId: string): CompetenciaRegistro | null {
        return this.registrosCompetencias().get(competenciaId) ?? null;
    }

    calcularProgreso(registro: CompetenciaRegistro | null): number {
        if (!registro) return 0;
        return Math.round((registro.mejorPuntaje / registro.totalPreguntas) * 100);
    }
}
