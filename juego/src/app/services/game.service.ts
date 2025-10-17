import { Injectable, signal } from '@angular/core';
import { RepositorioService } from './repositorio.service';
import { ToastService } from './toast.service';

export type VistaJuego = 'seleccion-grados' | 'seleccion-materias' | 'seleccion-competencias' | 'jugando' | 'resultados';

// Interfaces para el nuevo sistema
export interface Pregunta {
    id: number;
    pregunta: string;
    opciones: string[];
    respuesta_correcta: number;
}

export interface Competencia {
    id: string;
    curso_id: string;
    nombre: string;
    descripcion_corta: string;
    preguntas: Pregunta[];
}

export interface Curso {
    id: string;
    nombre: string;
    descripcion: string;
    imgUrl: string;
}

export interface Materia {
    nombre: string;
    imagen: string;
    puntaje: number;
}

export interface RespuestaUsuario {
    preguntaIndex: number;
    respuestaSeleccionada: number;
    esCorrecta: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class GameService {
    // Estado de la vista actual
    vistaActual = signal<VistaJuego>('seleccion-grados');

    // Grado seleccionado (1-6)
    gradoSeleccionado = signal<number | null>(null);

    // Materia seleccionada (curso_id)
    materiaSeleccionada = signal<string | null>(null);

    // Competencia seleccionada
    competenciaSeleccionada = signal<string | null>(null);

    // Índice de la competencia actual en el array
    competenciaIndex = signal<number>(0);

    // Estado del quiz
    preguntaActual = signal<number>(0);
    respuestasUsuario = signal<RespuestaUsuario[]>([]);
    mostrarFeedback = signal<boolean>(false);
    ultimaRespuestaCorrecta = signal<boolean>(false);

    // Preguntas y competencia actual
    preguntasActuales = signal<Pregunta[]>([]);
    competenciaActual = signal<Competencia | null>(null);

    // Competencias cargadas del grado actual
    competenciasCargadas = signal<Competencia[]>([]);

    // Cursos disponibles (se cargarán desde el JSON)
    cursos = signal<Curso[]>([]);

    constructor(
        private repositorio: RepositorioService,
        private toastService: ToastService
    ) {
        this.cargarCursos();
    }

    /**
     * Carga los cursos desde el repositorio
     */
    private async cargarCursos() {
        try {
            const cursos = await this.repositorio.getCursos();
            this.cursos.set(cursos);
        } catch (error) {
            console.error('Error al cargar cursos:', error);
        }
    }

    /**
     * Selecciona un grado y cambia a la vista de materias
     * Carga las competencias del grado seleccionado
     * Retorna true si se cargó exitosamente, false si hubo error
     */
    async seleccionarGrado(grado: number): Promise<boolean> {
        try {
            // Cargar competencias del grado seleccionado
            const competencias = await this.repositorio.getCompetenciasPorGrado(grado);

            // Validar que existan competencias
            if (!competencias || competencias.length === 0) {
                this.toastService.warning(`⚠️ No hay recursos disponibles para el grado ${grado}`, 5000);
                console.warn(`⚠️ No hay competencias disponibles para el grado ${grado}`);
                return false;
            }

            // Todo OK - Guardar datos y cambiar vista
            this.gradoSeleccionado.set(grado);
            this.competenciasCargadas.set(competencias);
            console.log(`✅ Cargadas ${competencias.length} competencias para el grado ${grado}`);
            this.vistaActual.set('seleccion-materias');

            this.toastService.success(`✅ Grado ${grado} cargado exitosamente`, 3000);

            return true;
        } catch (error) {
            console.error(`❌ Error al cargar competencias del grado ${grado}:`, error);

            this.toastService.error(`❌ Error al cargar recursos del grado ${grado}. Por favor, intenta nuevamente.`, 5000);

            return false;
        }
    }

    /**
     * Vuelve a la selección de grados
     */
    volverAGrados() {
        this.gradoSeleccionado.set(null);
        this.materiaSeleccionada.set(null);
        this.competenciaSeleccionada.set(null);
        this.competenciasCargadas.set([]);
        this.vistaActual.set('seleccion-grados');
    }

    /**
     * Selecciona una materia y muestra la vista de competencias
     */
    seleccionarMateria(cursoId: string) {
        this.materiaSeleccionada.set(cursoId);
        this.vistaActual.set('seleccion-competencias');
    }

    /**
     * Selecciona una competencia específica y prepara el quiz
     */
    seleccionarCompetencia(competenciaId: string) {
        const grado = this.gradoSeleccionado();
        const competencias = this.competenciasCargadas();

        if (!grado || competencias.length === 0) return;

        // Buscar la competencia en las competencias cargadas
        const competencia = competencias.find((c) => c.id === competenciaId);

        if (!competencia) {
            console.error(`Competencia ${competenciaId} no encontrada`);
            return;
        }

        const index = competencias.findIndex((c) => c.id === competenciaId);

        this.competenciaSeleccionada.set(competenciaId);
        this.competenciaIndex.set(index >= 0 ? index : 0);
        this.competenciaActual.set(competencia);
        this.preguntasActuales.set(competencia.preguntas);

        // Iniciar directamente el quiz
        this.iniciarQuiz();
    }

    /**
     * Vuelve a la selección de materias
     */
    volverAMaterias() {
        this.materiaSeleccionada.set(null);
        this.competenciaSeleccionada.set(null);
        this.competenciaIndex.set(0);
        this.reiniciarQuiz();
        this.vistaActual.set('seleccion-materias');
    }

    /**
     * Vuelve a la vista de competencias
     */
    volverACompetencias() {
        this.competenciaSeleccionada.set(null);
        this.reiniciarQuiz();
        this.vistaActual.set('seleccion-competencias');
    }

    /**
     * Inicia el quiz
     */
    iniciarQuiz() {
        this.reiniciarQuiz();
        this.vistaActual.set('jugando');
    }

    /**
     * Responde una pregunta
     */
    responderPregunta(respuestaIndex: number) {
        const preguntaIndex = this.preguntaActual();
        const preguntas = this.preguntasActuales();

        if (preguntaIndex >= preguntas.length) return;

        const pregunta = preguntas[preguntaIndex];
        const esCorrecta = pregunta.respuesta_correcta === respuestaIndex;

        // Guardar respuesta
        const respuestas = this.respuestasUsuario();
        respuestas.push({
            preguntaIndex,
            respuestaSeleccionada: respuestaIndex,
            esCorrecta,
        });
        this.respuestasUsuario.set(respuestas);

        // Mostrar feedback
        this.ultimaRespuestaCorrecta.set(esCorrecta);
        this.mostrarFeedback.set(true);
    }

    /**
     * Continúa a la siguiente pregunta
     */
    siguientePregunta() {
        this.mostrarFeedback.set(false);
        const siguiente = this.preguntaActual() + 1;

        // Si no hay más preguntas, mostrar resultados
        if (siguiente >= this.preguntasActuales().length) {
            this.vistaActual.set('resultados');
        } else {
            this.preguntaActual.set(siguiente);
        }
    }

    /**
     * Obtiene el progreso actual (0-100)
     */
    getProgreso(): number {
        const total = this.preguntasActuales().length;
        if (total === 0) return 0;

        const actual = this.preguntaActual();
        return Math.round((actual / total) * 100);
    }

    /**
     * Obtiene el puntaje actual
     */
    getPuntaje(): number {
        const respuestas = this.respuestasUsuario();
        return respuestas.filter((r) => r.esCorrecta).length;
    }

    /**
     * Reinicia el estado del quiz
     */
    reiniciarQuiz() {
        this.preguntaActual.set(0);
        this.respuestasUsuario.set([]);
        this.mostrarFeedback.set(false);
        this.ultimaRespuestaCorrecta.set(false);
    }

    /**
     * Vuelve a jugar (reinicia el quiz actual y vuelve a competencias)
     */
    volverAJugar() {
        this.volverACompetencias();
    }

    /**
     * Resetea todo el estado del juego
     */
    resetear() {
        this.gradoSeleccionado.set(null);
        this.materiaSeleccionada.set(null);
        this.vistaActual.set('seleccion-grados');
    }

    /**
     * Obtiene las materias del grado actual desde las competencias cargadas
     */
    getMateriasDelGrado(): Materia[] {
        const competencias = this.competenciasCargadas();
        const cursos = this.cursos();

        // Obtener cursos únicos de las competencias cargadas
        const cursosIds = Array.from(new Set(competencias.map((c) => c.curso_id)));

        // Mapear a la estructura de Materia
        return cursosIds
            .map((cursoId) => {
                const curso = cursos.find((c) => c.id === cursoId);
                return curso
                    ? {
                          nombre: curso.id,
                          imagen: curso.imgUrl,
                          puntaje: 0,
                      }
                    : null;
            })
            .filter((m): m is Materia => m !== null);
    }

    /**
     * Obtiene las competencias de una materia específica
     */
    getCompetenciasPorMateria(cursoId: string): Competencia[] {
        return this.competenciasCargadas().filter((c) => c.curso_id === cursoId);
    }

    /**
     * Obtiene el nombre legible de una materia
     */
    getNombreMateria(cursoId: string): string {
        const curso = this.cursos().find((c) => c.id === cursoId);
        return curso?.nombre || cursoId;
    }
}
