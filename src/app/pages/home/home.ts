import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { MateriasComponent } from '../../components/materias.component';
import { CompetenciasComponent } from '../../components/competencias.component';
import { JuegoComponent } from '../../components/juego.component';
import { ResultadosComponent } from '../../components/resultados.component';
import { GradosComponent } from '../../components/grados.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, MateriasComponent, CompetenciasComponent, JuegoComponent, ResultadosComponent, GradosComponent],
    template: `
        @if (currentUser()) {
            <!-- Vista según el estado del juego -->
            @if (gameService.vistaActual() === 'seleccion-grados') {
                <!-- Vista de selección de grados -->
                <app-grados />
            } @else if (gameService.vistaActual() === 'seleccion-materias') {
                <!-- Vista de selección de materias -->
                <app-materias />
            } @else if (gameService.vistaActual() === 'seleccion-competencias') {
                <!-- Vista de selección de competencias -->
                <app-competencias />
            } @else if (gameService.vistaActual() === 'jugando') {
                <!-- Vista del juego -->
                <app-juego />
            } @else if (gameService.vistaActual() === 'resultados') {
                <!-- Vista de resultados -->
                <app-resultados />
            }
        } @else {
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
        `,
    ],
})
export class HomeComponent {
    private userService = inject(UserService);
    gameService = inject(GameService);

    currentUser = this.userService.currentUser;

    constructor() {}
}
