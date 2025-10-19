import { Injectable } from '@angular/core';
import { supabaseConfig } from '../config/supabase.config';
import { CompetenciaRegistro, CompetenciaRegistroData } from '../models/user.model';

/**
 * Servicio para manejar competencias en Supabase
 * Maneja todas las operaciones CRUD de registros de competencias
 */
@Injectable({
    providedIn: 'root',
})
export class CompetenciasSupabaseService {
    private supabaseUrl: string = supabaseConfig.supabaseUrl;
    private supabaseKey: string = supabaseConfig.supabaseKey;
    private headers: HeadersInit;

    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            apikey: this.supabaseKey,
            Authorization: `Bearer ${this.supabaseKey}`,
        };
    }

    async guardarCompetencia(userId: string, data: CompetenciaRegistroData): Promise<CompetenciaRegistro | null> {
        try {
            const porcentaje = Math.round((data.puntaje / data.totalPreguntas) * 100);

            // Llamar a la función RPC upsert_competencia
            const response = await fetch(`${this.supabaseUrl}/rest/v1/rpc/upsert_competencia`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    p_user_id: userId,
                    p_grado: data.grado,
                    p_materia: data.materia,
                    p_competencia_id: data.competencia,
                    p_puntaje: data.puntaje,
                    p_total_preguntas: data.totalPreguntas,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(`Error al guardar competencia: ${JSON.stringify(error)}`);
            }

            const resultado = await response.json();

            console.log('✅ Competencia guardada en Supabase');

            // Construir el objeto CompetenciaRegistro desde la respuesta
            return this.mapSupabaseToCompetencia(resultado, userId, data.grado, data.materia, data.competencia, data.totalPreguntas);
        } catch (error) {
            console.error('❌ Error al guardar competencia:', error);
            return null;
        }
    }

    /**
     * Obtiene todas las competencias de un usuario
     */
    async obtenerCompetenciasUsuario(userId: string): Promise<CompetenciaRegistro[]> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/competencias?user_id=eq.${userId}&select=*&order=fecha_ultimo_intento.desc`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener competencias: ${response.status}`);
            }

            const competencias = await response.json();

            return competencias.map((c: any) => this.mapSupabaseCompetenciaToModel(c));
        } catch (error) {
            console.error('❌ Error al obtener competencias:', error);
            return [];
        }
    }

    /**
     * Obtiene una competencia específica
     */
    async obtenerCompetencia(userId: string, grado: number, materia: string, competenciaId: string): Promise<CompetenciaRegistro | null> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/competencias?user_id=eq.${userId}&grado=eq.${grado}&materia=eq.${encodeURIComponent(materia)}&competencia_id=eq.${encodeURIComponent(competenciaId)}&select=*`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener competencia: ${response.status}`);
            }

            const competencias = await response.json();

            if (competencias.length === 0) return null;

            return this.mapSupabaseCompetenciaToModel(competencias[0]);
        } catch (error) {
            console.error('❌ Error al obtener competencia:', error);
            return null;
        }
    }

    /**
     * Obtiene competencias filtradas por grado
     */
    async obtenerCompetenciasPorGrado(userId: string, grado: number): Promise<CompetenciaRegistro[]> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/competencias?user_id=eq.${userId}&grado=eq.${grado}&select=*&order=fecha_ultimo_intento.desc`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener competencias: ${response.status}`);
            }

            const competencias = await response.json();

            return competencias.map((c: any) => this.mapSupabaseCompetenciaToModel(c));
        } catch (error) {
            console.error('❌ Error al obtener competencias por grado:', error);
            return [];
        }
    }

    /**
     * Obtiene competencias filtradas por materia
     */
    async obtenerCompetenciasPorMateria(userId: string, grado: number, materia: string): Promise<CompetenciaRegistro[]> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/competencias?user_id=eq.${userId}&grado=eq.${grado}&materia=eq.${encodeURIComponent(materia)}&select=*&order=fecha_ultimo_intento.desc`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener competencias: ${response.status}`);
            }

            const competencias = await response.json();

            return competencias.map((c: any) => this.mapSupabaseCompetenciaToModel(c));
        } catch (error) {
            console.error('❌ Error al obtener competencias por materia:', error);
            return [];
        }
    }

    /**
     * Calcula el puntaje total de un usuario
     * (También se puede obtener directamente del campo puntuacion en la tabla usuarios)
     */
    async calcularPuntajeTotal(userId: string): Promise<number> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/rpc/calcular_puntaje_total`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    usuario_id: userId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error al calcular puntaje: ${response.status}`);
            }

            const puntaje = await response.json();
            return puntaje || 0;
        } catch (error) {
            console.error('❌ Error al calcular puntaje total:', error);
            return 0;
        }
    }

    /**
     * Obtiene estadísticas del usuario
     */
    async obtenerEstadisticasUsuario(userId: string): Promise<any> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/vista_estadisticas_usuario?user_id=eq.${userId}&select=*`, {
                method: 'GET',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al obtener estadísticas: ${response.status}`);
            }

            const stats = await response.json();
            return stats.length > 0 ? stats[0] : null;
        } catch (error) {
            console.error('❌ Error al obtener estadísticas:', error);
            return null;
        }
    }

    /**
     * Elimina todas las competencias de un usuario
     * (Útil si se quiere resetear el progreso)
     */
    async eliminarCompetenciasUsuario(userId: string): Promise<boolean> {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/competencias?user_id=eq.${userId}`, {
                method: 'DELETE',
                headers: this.headers,
            });

            if (!response.ok) {
                throw new Error(`Error al eliminar competencias: ${response.status}`);
            }

            console.log('✅ Competencias eliminadas de Supabase');
            return true;
        } catch (error) {
            console.error('❌ Error al eliminar competencias:', error);
            return false;
        }
    }

    /**
     * Mapea el resultado de la función upsert_competencia a CompetenciaRegistro
     */
    private mapSupabaseToCompetencia(resultado: any, userId: string, grado: number, materia: string, competencia: string, totalPreguntas: number): CompetenciaRegistro {
        const key = `${userId}_${grado}_${materia}_${competencia}`;

        return {
            id: key,
            userId: userId,
            grado: grado,
            materia: materia,
            competencia: competencia,
            puntaje: resultado.puntaje || 0,
            totalPreguntas: totalPreguntas,
            porcentaje: resultado.porcentaje || 0,
            intentos: resultado.intentos || 1,
            mejorPuntaje: resultado.mejor_puntaje || 0,
            fechaPrimerIntento: new Date(resultado.fecha_primer_intento),
            fechaUltimoIntento: new Date(resultado.fecha_ultimo_intento),
        };
    }

    /**
     * Mapea una competencia de Supabase (snake_case) a CompetenciaRegistro (camelCase)
     */
    private mapSupabaseCompetenciaToModel(supabaseComp: any): CompetenciaRegistro {
        const key = `${supabaseComp.user_id}_${supabaseComp.grado}_${supabaseComp.materia}_${supabaseComp.competencia_id}`;

        return {
            id: key,
            userId: supabaseComp.user_id,
            grado: supabaseComp.grado,
            materia: supabaseComp.materia,
            competencia: supabaseComp.competencia_id,
            puntaje: supabaseComp.puntaje,
            totalPreguntas: supabaseComp.total_preguntas,
            porcentaje: supabaseComp.porcentaje,
            intentos: supabaseComp.intentos,
            mejorPuntaje: supabaseComp.mejor_puntaje,
            fechaPrimerIntento: new Date(supabaseComp.fecha_primer_intento),
            fechaUltimoIntento: new Date(supabaseComp.fecha_ultimo_intento),
        };
    }
}
