import { Injectable } from '@angular/core';

interface Curso {
    id: string;
    nombre: string;
    descripcion: string;
    imgUrl: string;
}

interface Pregunta {
    id: number;
    pregunta: string;
    opciones: string[];
    respuesta_correcta: number;
}

interface Competencia {
    id: string;
    curso_id: string;
    nombre: string;
    descripcion_corta: string;
    preguntas: Pregunta[];
}

@Injectable({
    providedIn: 'root',
})
export class RepositorioService {
    // Cache para cursos
    private cursosCache: Curso[] | null = null;

    // Cache para competencias por grado
    private competenciasCache: Map<number, Competencia[]> = new Map();

    constructor() {}

    /**
     * Obtiene la lista de cursos
     * Primera vez: hace fetch
     * Siguientes veces: retorna desde cache
     */
    async getCursos(): Promise<Curso[]> {
        // Si ya están en cache, retornar desde ahí
        if (this.cursosCache !== null) {
            console.log('📦 Cursos cargados desde cache');
            return this.cursosCache;
        }

        try {
            console.log('🌐 Obteniendo cursos desde el servidor...');
            const response = await fetch('/img/cursos.json');

            if (!response.ok) {
                throw new Error(`Error al cargar cursos: ${response.status}`);
            }

            const cursos = await response.json();

            // Guardar en cache
            this.cursosCache = cursos;
            console.log('✅ Cursos cargados y guardados en cache');

            return cursos;
        } catch (error) {
            console.error('❌ Error al cargar cursos:', error);
            throw error;
        }
    }

    /**
     * Obtiene las competencias de un grado específico
     * Primera vez: hace fetch
     * Siguientes veces: retorna desde cache
     * @param grado Número del grado (1-6)
     */
    async getCompetenciasPorGrado(grado: number): Promise<Competencia[]> {
        // Validar grado
        if (grado < 1 || grado > 6) {
            throw new Error('El grado debe estar entre 1 y 6');
        }

        // Si ya están en cache, retornar desde ahí
        if (this.competenciasCache.has(grado)) {
            console.log(`📦 Competencias del grado ${grado} cargadas desde cache`);
            return this.competenciasCache.get(grado)!;
        }

        try {
            console.log(`🌐 Obteniendo competencias del grado ${grado} desde el servidor...`);
            const response = await fetch(`/img/competencias_0${grado}_grado.json`);

            if (!response.ok) {
                throw new Error(`Error al cargar competencias del grado ${grado}: ${response.status}`);
            }

            const competencias = await response.json();

            // Guardar en cache
            this.competenciasCache.set(grado, competencias);
            console.log(`✅ Competencias del grado ${grado} cargadas y guardadas en cache`);

            return competencias;
        } catch (error) {
            console.error(`❌ Error al cargar competencias del grado ${grado}:`, error);
            throw error;
        }
    }

    /**
     * Obtiene las competencias de un curso específico en un grado
     * @param grado Número del grado (1-6)
     * @param cursoId ID del curso (ej: 'matematica', 'comunicacion')
     */
    async getCompetenciasPorCurso(grado: number, cursoId: string): Promise<Competencia[]> {
        const competencias = await this.getCompetenciasPorGrado(grado);
        return competencias.filter((comp) => comp.curso_id === cursoId);
    }

    /**
     * Obtiene una competencia específica por su ID
     * @param grado Número del grado (1-6)
     * @param competenciaId ID de la competencia (ej: 'mat1_1')
     */
    async getCompetenciaPorId(grado: number, competenciaId: string): Promise<Competencia | null> {
        const competencias = await this.getCompetenciasPorGrado(grado);
        return competencias.find((comp) => comp.id === competenciaId) || null;
    }

    /**
     * Limpia el cache de cursos
     */
    limpiarCacheCursos(): void {
        this.cursosCache = null;
        console.log('🗑️ Cache de cursos limpiado');
    }

    /**
     * Limpia el cache de competencias de un grado específico
     * @param grado Número del grado (1-6) - Si no se especifica, limpia todo
     */
    limpiarCacheCompetencias(grado?: number): void {
        if (grado !== undefined) {
            this.competenciasCache.delete(grado);
            console.log(`🗑️ Cache de competencias del grado ${grado} limpiado`);
        } else {
            this.competenciasCache.clear();
            console.log('🗑️ Cache de todas las competencias limpiado');
        }
    }

    /**
     * Limpia todo el cache
     */
    limpiarTodoElCache(): void {
        this.limpiarCacheCursos();
        this.limpiarCacheCompetencias();
        console.log('🗑️ Todo el cache ha sido limpiado');
    }

    /**
     * Precarga las competencias de todos los grados
     * Útil para cargar todo al inicio de la aplicación
     */
    async precargarTodo(): Promise<void> {
        try {
            console.log('🚀 Precargando todos los datos...');

            // Cargar cursos
            await this.getCursos();

            // Cargar competencias de todos los grados
            const promesas = [];
            for (let grado = 1; grado <= 6; grado++) {
                promesas.push(this.getCompetenciasPorGrado(grado));
            }

            await Promise.all(promesas);
            console.log('✅ Todos los datos han sido precargados');
        } catch (error) {
            console.error('❌ Error al precargar datos:', error);
            throw error;
        }
    }
}
