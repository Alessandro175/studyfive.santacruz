import { Component, signal, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { SupabaseService } from '../../services/supabase.service';
import { CompetenciasSupabaseService } from '../../services/competencias-supabase.service';
import { ToastService } from '../../services/toast.service';

interface PlayerData {
    jugador: string;
    curso: string;
    competencia: string;
    puntaje: number;
    preguntasRespondidas: number;
    preguntasTotales: number;
}

@Component({
    selector: 'app-admin',
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="admin-container">
            <header class="admin-header">
                <h1>📊 Panel de Administración</h1>
                <p>Descargar reportes de jugadores por grado</p>
            </header>

            <div class="grades-grid">
                @for (grado of grados; track grado) {
                    <button 
                        class="grade-button"
                        [class.loading]="loadingGrado() === grado"
                        [disabled]="loadingGrado() !== null"
                        (click)="descargarReporteGrado(grado)"
                    >
                        <span class="grade-number">{{ grado }}°</span>
                        <span class="grade-label">Grado</span>
                        @if (loadingGrado() === grado) {
                            <span class="spinner">⏳</span>
                        } @else {
                            <span class="download-icon">⬇️</span>
                        }
                    </button>
                }
            </div>

            <div class="info-section">
                <h3>ℹ️ Información</h3>
                <p>Haz clic en un grado para descargar un archivo Excel con la información de todos los jugadores de ese grado.</p>
                <p><strong>El archivo incluye:</strong></p>
                <ul>
                    <li>Nombre del jugador</li>
                    <li>Curso</li>
                    <li>Competencia</li>
                    <li>Puntaje</li>
                    <li>Preguntas respondidas correctamente</li>
                    <li>Total de preguntas</li>
                </ul>
            </div>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        .admin-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .admin-header {
            text-align: center;
            color: white;
            margin-bottom: 3rem;
        }

        .admin-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .admin-header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .grades-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            max-width: 1200px;
            width: 100%;
            margin-bottom: 3rem;
        }

        .grade-button {
            background: white;
            border: none;
            border-radius: 1rem;
            padding: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            overflow: hidden;
        }

        .grade-button:hover:not(:disabled) {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .grade-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .grade-button.loading {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .grade-number {
            font-size: 3rem;
            font-weight: bold;
            color: #667eea;
        }

        .grade-button:hover:not(:disabled) .grade-number,
        .grade-button.loading .grade-number {
            color: white;
        }

        .grade-label {
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .download-icon,
        .spinner {
            font-size: 1.5rem;
            margin-top: 0.5rem;
        }

        .spinner {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .info-section {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .info-section h3 {
            color: #667eea;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .info-section p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 1rem;
        }

        .info-section ul {
            color: #555;
            padding-left: 2rem;
            line-height: 1.8;
        }

        .info-section li {
            margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
            .admin-container {
                padding: 1rem;
            }

            .admin-header h1 {
                font-size: 2rem;
            }

            .grades-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
            }

            .grade-button {
                padding: 1.5rem;
            }

            .grade-number {
                font-size: 2.5rem;
            }
        }
    `],
})
export default class AdminPage {
    private supabaseService = inject(SupabaseService);
    private competenciasService = inject(CompetenciasSupabaseService);
    private toastService = inject(ToastService);

    grados = [1, 2, 3, 4, 5, 6];
    loadingGrado = signal<number | null>(null);

    // Mapeo de IDs a nombres de cursos
    private cursosMap: { [key: string]: string } = {
        'matematica': 'Matemática',
        'comunicacion': 'Comunicación',
        'ingles': 'Inglés',
        'ciencia_tecnologia': 'Ciencia y Tecnología',
        'personal_social': 'Personal Social',
        'arte_cultura': 'Arte y Cultura'
    };

    async descargarReporteGrado(grado: number): Promise<void> {
        try {
            this.loadingGrado.set(grado);
            this.toastService.info(`Generando reporte para ${grado}° grado...`);

            // Obtener datos de todos los jugadores
            const usuarios = await this.supabaseService.getAllUsers();
            
            if (usuarios.length === 0) {
                this.toastService.warning('No hay jugadores registrados');
                this.loadingGrado.set(null);
                return;
            }

            // Obtener competencias de todos los usuarios para el grado específico
            const datosReporte: PlayerData[] = [];

            for (const usuario of usuarios) {
                const competencias = await this.competenciasService.obtenerCompetenciasUsuario(usuario.id);
                
                // Filtrar solo las competencias del grado seleccionado
                const competenciasGrado = competencias.filter(c => c.grado === grado);

                for (const competencia of competenciasGrado) {
                    datosReporte.push({
                        jugador: usuario.nickname,
                        curso: this.cursosMap[competencia.materia] || competencia.materia,
                        competencia: this.formatCompetenciaId(competencia.competencia),
                        puntaje: competencia.puntaje,
                        preguntasRespondidas: competencia.puntaje, // El puntaje es el número de respuestas correctas
                        preguntasTotales: competencia.totalPreguntas
                    });
                }
            }

            if (datosReporte.length === 0) {
                this.toastService.warning(`No hay datos para ${grado}° grado`);
                this.loadingGrado.set(null);
                return;
            }

            // Generar Excel
            this.generarExcel(datosReporte, grado);
            this.toastService.success(`Reporte descargado exitosamente`);
        } catch (error) {
            console.error('Error al generar reporte:', error);
            this.toastService.error('Error al generar reporte');
        } finally {
            this.loadingGrado.set(null);
        }
    }

    private formatCompetenciaId(competenciaId: string): string {
        // Convierte "competencia_01" a "Competencia 01"
        return competenciaId
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    private generarExcel(datos: PlayerData[], grado: number): void {
        // Crear workbook
        const wb = XLSX.utils.book_new();

        // Preparar datos con encabezados en español
        const datosExcel = datos.map(d => ({
            'Jugador': d.jugador,
            'Curso': d.curso,
            'Competencia': d.competencia,
            'Puntaje': d.puntaje,
            'Preguntas Respondidas': d.preguntasRespondidas,
            'Preguntas Totales': d.preguntasTotales
        }));

        // Crear worksheet
        const ws = XLSX.utils.json_to_sheet(datosExcel);

        // Ajustar ancho de columnas
        const colWidths = [
            { wch: 20 }, // Jugador
            { wch: 25 }, // Curso
            { wch: 20 }, // Competencia
            { wch: 10 }, // Puntaje
            { wch: 20 }, // Preguntas Respondidas
            { wch: 20 }  // Preguntas Totales
        ];
        ws['!cols'] = colWidths;

        // Agregar worksheet al workbook
        XLSX.utils.book_append_sheet(wb, ws, `${grado}° Grado`);

        // Generar archivo y descargar
        const fecha = new Date().toISOString().split('T')[0];
        const nombreArchivo = `Reporte_${grado}_Grado_${fecha}.xlsx`;
        XLSX.writeFile(wb, nombreArchivo);
    }
}
