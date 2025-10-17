import { Injectable, signal } from '@angular/core';
import { Pregunta, Competencia, getCompetenciaInfo, getPreguntasPorMateriaYCompetencia, getCompetenciasPorMateria, getMateriaLabel, getMateriaKey, getMateriasDisponibles } from '../data/preguntas.data';

export type VistaJuego = 'seleccion-grados' | 'seleccion-materias' | 'seleccion-competencias' | 'jugando' | 'resultados';

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

    // Materia seleccionada
    materiaSeleccionada = signal<string | null>(null);

    // Competencia seleccionada (ID dinámico: competencia_01, competencia_02, etc.)
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

    // Materias por grado (con keys normalizadas y labels para UI)
    materias: Materia[] = [
        {
            nombre: 'ingles',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7344f9e9-92b0-4866-83ec-e516c26697d5.png',
            puntaje: 0,
        },
        {
            nombre: 'matematica',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44310e98-8556-42b5-bd9e-948d44db06f6.png',
            puntaje: 0,
        },
        {
            nombre: 'comunicacion',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/780030d2-ad72-4a0c-8056-f8adedc058e0.png',
            puntaje: 0,
        },
        {
            nombre: 'ciencia_tecnologia',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8654c946-2772-4be6-b915-8a6ca2b1cd6f.png',
            puntaje: 0,
        },
        {
            nombre: 'personal_social',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46cdf4a7-6748-4e93-98df-73d1bda51860.png',
            puntaje: 0,
        },
        {
            nombre: 'arte_cultura',
            imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e0de5b8-070c-41c1-8d90-52b1b380cf19.png',
            puntaje: 0,
        },
    ];

    /**
     * Selecciona un grado y cambia a la vista de materias
     */
    seleccionarGrado(grado: number) {
        this.gradoSeleccionado.set(grado);
        this.vistaActual.set('seleccion-materias');
    }

    /**
     * Vuelve a la selección de grados
     */
    volverAGrados() {
        this.gradoSeleccionado.set(null);
        this.materiaSeleccionada.set(null);
        this.competenciaSeleccionada.set(null);
        this.vistaActual.set('seleccion-grados');
    }

    /**
     * Selecciona una materia y muestra la vista de competencias
     */
    seleccionarMateria(materia: string) {
        this.materiaSeleccionada.set(materia);
        this.vistaActual.set('seleccion-competencias');
    }

    /**
     * Selecciona una competencia específica y prepara el quiz
     */
    seleccionarCompetencia(competenciaId: string) {
        const grado = this.gradoSeleccionado();
        const materia = this.materiaSeleccionada();

        if (!grado || !materia) return;

        // Obtener todas las competencias de la materia
        const competencias = getCompetenciasPorMateria(grado, materia);
        const index = competencias.findIndex((c) => c.id === competenciaId);

        this.competenciaSeleccionada.set(competenciaId);
        this.competenciaIndex.set(index >= 0 ? index : 0);

        // Cargar datos de la competencia
        const competenciaInfo = getCompetenciaInfo(grado, materia, competenciaId);
        this.competenciaActual.set(competenciaInfo);

        if (competenciaInfo) {
            const preguntas = getPreguntasPorMateriaYCompetencia(grado, materia, competenciaId);
            this.preguntasActuales.set(preguntas);
        }

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
        const esCorrecta = pregunta.respuesta === respuestaIndex;

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
     * Obtiene las materias del grado actual
     */
    getMateriasDelGrado(): Materia[] {
        // Por ahora todas los grados tienen las mismas materias
        // Podrías filtrar o modificar según el grado si lo necesitas
        return this.materias;
    }
}
