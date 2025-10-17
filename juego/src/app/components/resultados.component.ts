import { Component, inject, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';
import { getCompetenciasPorMateria } from '../data/preguntas.data';

@Component({
    selector: 'app-resultados',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="resultados-container">
            <div class="resultados-card">
                <!-- Trofeo animado -->
                <div class="trophy-container">
                    <svg class="trophy" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                    <div class="trophy-shine"></div>
                </div>

                <!-- Título -->
                <h2 class="resultados-title">¡Juego Completado!</h2>

                <!-- Estadísticas -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">✅</div>
                        <div class="stat-value">{{ respuestasCorrectas() }}</div>
                        <div class="stat-label">Correctas</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">❌</div>
                        <div class="stat-value">{{ respuestasIncorrectas() }}</div>
                        <div class="stat-label">Incorrectas</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">📊</div>
                        <div class="stat-value">{{ porcentaje() }}%</div>
                        <div class="stat-label">Precisión</div>
                    </div>

                    <div class="stat-card score">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-value">{{ puntosGanados() }}</div>
                        <div class="stat-label">Puntos</div>
                    </div>
                </div>

                <!-- Mensaje motivacional -->
                <div class="mensaje-container" [class.excelente]="porcentaje() >= 80" [class.bien]="porcentaje() >= 60 && porcentaje() < 80" [class.puedes-mejorar]="porcentaje() < 60">
                    <p class="mensaje-text">{{ getMensaje() }}</p>
                </div>

                <!-- Botones de acción -->
                <div class="actions-container">
                    <button class="btn btn-secondary" (click)="volverACompetencias()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Ver Competencias
                    </button>

                    <button class="btn btn-primary" (click)="volverAJugar()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Jugar de Nuevo
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .resultados-container {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3rem 1rem;
            }

            .resultados-card {
                background: white;
                border-radius: 30px;
                padding: 50px 40px;
                max-width: 700px;
                width: 100%;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                animation: slideUp 0.5s ease;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .trophy-container {
                position: relative;
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
            }

            .trophy {
                stroke: #ffd700;
                fill: #ffa500;
                animation: bounce 1s ease infinite;
            }

            @keyframes bounce {
                0%,
                100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-20px);
                }
            }

            .trophy-shine {
                position: absolute;
                top: 0;
                left: 50%;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
                animation: pulse 2s ease infinite;
            }

            @keyframes pulse {
                0%,
                100% {
                    opacity: 0.5;
                    transform: scale(1);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.2);
                }
            }

            .resultados-title {
                text-align: center;
                font-size: 36px;
                font-weight: bold;
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 40px;
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 20px;
                margin-bottom: 30px;
            }

            .stat-card {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                border-radius: 20px;
                padding: 25px 15px;
                text-align: center;
                transition: transform 0.3s;
            }

            .stat-card:hover {
                transform: translateY(-5px);
            }

            .stat-card.score {
                background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
                color: white;
            }

            .stat-icon {
                font-size: 32px;
                margin-bottom: 10px;
            }

            .stat-value {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .stat-card.score .stat-value {
                color: white;
            }

            .stat-label {
                font-size: 14px;
                color: #666;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .stat-card.score .stat-label {
                color: rgba(255, 255, 255, 0.9);
            }

            .mensaje-container {
                padding: 25px;
                border-radius: 20px;
                margin-bottom: 30px;
                text-align: center;
            }

            .mensaje-container.excelente {
                background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
                border: 3px solid var(--color-success);
            }

            .mensaje-container.bien {
                background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1));
                border: 3px solid var(--color-warning);
            }

            .mensaje-container.puedes-mejorar {
                background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 87, 87, 0.1));
                border: 3px solid var(--color-error);
            }

            .mensaje-text {
                font-size: 20px;
                font-weight: 600;
                margin: 0;
            }

            .mensaje-container.excelente .mensaje-text {
                color: var(--color-success);
            }

            .mensaje-container.bien .mensaje-text {
                color: var(--color-warning);
            }

            .mensaje-container.puedes-mejorar .mensaje-text {
                color: var(--color-error);
            }

            .actions-container {
                display: flex;
                gap: 15px;
                justify-content: center;
                flex-wrap: wrap;
            }

            .btn {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 15px 30px;
                border: none;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .btn-primary {
                background: var(--primary);
                color: white;
            }

            .btn-secondary {
                background: white;
                color: var(--primary);
                border: 2px solid var(--primary);
            }

            .btn-secondary:hover {
                background: var(--primary);
                color: var(--text-on-primary);
            }

            @media (max-width: 768px) {
                .resultados-card {
                    padding: 30px 20px;
                }

                .resultados-title {
                    font-size: 28px;
                }

                .stats-grid {
                    grid-template-columns: repeat(2, 1fr);
                }

                .actions-container {
                    flex-direction: column;
                }

                .btn {
                    width: 100%;
                    justify-content: center;
                }
            }
        `,
    ],
})
export class ResultadosComponent implements OnInit {
    gameService = inject(GameService);
    userService = inject(UserService);

    respuestasCorrectas = computed(() => this.gameService.getPuntaje());
    respuestasIncorrectas = computed(() => {
        const total = this.gameService.preguntasActuales().length;
        const correctas = this.respuestasCorrectas();
        return total - correctas;
    });
    porcentaje = computed(() => {
        const total = this.gameService.preguntasActuales().length;
        if (total === 0) return 0;
        return Math.round((this.respuestasCorrectas() / total) * 100);
    });
    puntosGanados = computed(() => this.respuestasCorrectas() * 10);

    ngOnInit() {
        // Guardar automáticamente el resultado de la competencia
        this.guardarResultado();
    }

    /**
     * Guarda el resultado de la competencia en el registro del usuario
     */
    private guardarResultado() {
        const grado = this.gameService.gradoSeleccionado();
        const materia = this.gameService.materiaSeleccionada();
        const competencia = this.gameService.competenciaSeleccionada();
        const puntaje = this.respuestasCorrectas();
        const totalPreguntas = this.gameService.preguntasActuales().length;

        if (grado && materia && competencia) {
            this.userService.guardarCompetencia({
                grado,
                materia,
                competencia,
                puntaje,
                totalPreguntas,
            });
        }
    }

    getMensaje(): string {
        const porcentaje = this.porcentaje();

        if (porcentaje === 100) {
            return '¡Perfecto! ¡Eres un genio! 🎯';
        } else if (porcentaje >= 80) {
            return '¡Excelente trabajo! Sigue así 🌟';
        } else if (porcentaje >= 60) {
            return '¡Bien hecho! Puedes mejorar un poco más 👍';
        } else if (porcentaje >= 40) {
            return 'Sigue practicando, vas por buen camino 💪';
        } else {
            return 'No te rindas, ¡la práctica hace al maestro! 📚';
        }
    }

    volverACompetencias() {
        this.gameService.volverACompetencias();
    }

    volverAJugar() {
        this.gameService.volverAJugar();
    }
}
