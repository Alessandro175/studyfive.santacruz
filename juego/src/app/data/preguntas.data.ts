// Importar todos los grados (versión 2 con estructura escalable)
import { grado1v2 } from './grados/grado1-v2.data';
import { grado2v2 } from './grados/grado2-v2.data';
import { grado3v2 } from './grados/grado3-v2.data';
import { grado4v2 } from './grados/grado4-v2.data';
import { grado5v2 } from './grados/grado5-v2.data';
import { grado6v2 } from './grados/grado6-v2.data';
import type { GradoData, MateriaKey, Pregunta, Competencia } from './preguntas.types';
import { getMateriaLabel, getMateriaKey, MATERIAS_KEYS } from './materias.constants';

// Base de datos de preguntas por grado
export const preguntasDB: Record<number, GradoData> = {
    1: grado1v2,
    2: grado2v2,
    3: grado3v2,
    4: grado4v2,
    5: grado5v2,
    6: grado6v2,
};

// Función helper para obtener preguntas de una materia y competencia específica (por ID)
export function getPreguntasPorMateriaYCompetencia(grado: number, materiaKey: string, competenciaId: string): Pregunta[] {
    // Normalizar la materia key si viene con el formato antiguo
    const normalizedKey = getMateriaKey(materiaKey);

    if (!normalizedKey) {
        console.error(`Materia inválida: ${materiaKey}`);
        return [];
    }

    const gradoData = preguntasDB[grado];
    if (!gradoData) {
        console.error(`Grado ${grado} no encontrado`);
        return [];
    }

    const materiaData = gradoData[normalizedKey as MateriaKey];
    if (!materiaData) {
        console.error(`Materia ${normalizedKey} no encontrada en grado ${grado}`);
        return [];
    }

    // Buscar la competencia por ID en el array
    const competenciaData = materiaData.competencias.find((c) => c.id === competenciaId);
    if (!competenciaData) {
        console.error(`Competencia ${competenciaId} no encontrada`);
        return [];
    }

    return competenciaData.preguntas;
}

// Función helper para obtener información de una competencia (por ID)
export function getCompetenciaInfo(grado: number, materiaKey: string, competenciaId: string): Competencia | null {
    const normalizedKey = getMateriaKey(materiaKey);

    if (!normalizedKey) {
        return null;
    }

    const gradoData = preguntasDB[grado];
    if (!gradoData) {
        return null;
    }

    const materiaData = gradoData[normalizedKey as MateriaKey];
    if (!materiaData) {
        return null;
    }

    // Buscar la competencia por ID en el array
    const competenciaData = materiaData.competencias.find((c) => c.id === competenciaId);
    if (!competenciaData) {
        return null;
    }

    return competenciaData;
}

// Función helper para obtener todas las competencias de una materia
export function getCompetenciasPorMateria(grado: number, materiaKey: string): Competencia[] {
    const normalizedKey = getMateriaKey(materiaKey);

    if (!normalizedKey) {
        return [];
    }

    const gradoData = preguntasDB[grado];
    if (!gradoData) {
        return [];
    }

    const materiaData = gradoData[normalizedKey as MateriaKey];
    if (!materiaData) {
        return [];
    }

    return materiaData.competencias;
}

// Función helper para obtener todas las materias disponibles (con labels para UI)
export function getMateriasDisponibles() {
    return MATERIAS_KEYS.map((key) => ({
        key,
        label: getMateriaLabel(key),
    }));
}

// Re-exportar types y constantes para uso en otros módulos
export type { Pregunta, Competencia, MateriaData, GradoData, MateriaKey } from './preguntas.types';
export { getMateriaLabel, getMateriaKey, MATERIAS_KEYS, MATERIAS_LABELS } from './materias.constants';
