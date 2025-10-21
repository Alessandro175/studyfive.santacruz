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
            console.log('💾 Guardando competencia:', {
                userId,
                grado: data.grado,
                materia: data.materia,
                competencia: data.competencia,
                puntaje: data.puntaje,
                totalPreguntas: data.totalPreguntas
            });

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
                const error = await response.text();
                console.error('❌ Error HTTP al guardar competencia:', response.status, error);
                throw new Error(`Error al guardar competencia: ${response.status} - ${error}`);
            }

            const resultado = await response.json();
            console.log('✅ Respuesta de Supabase:', resultado);

            // Construir el objeto CompetenciaRegistro desde la respuesta
            const competencia = this.mapSupabaseCompetenciaToModel(resultado);
            console.log('✅ Competencia guardada correctamente:', competencia);
            
            return competencia;
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
