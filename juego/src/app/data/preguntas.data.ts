// Importar todos los grados
import { grado1 } from './grados/grado1.data';
import { grado2 } from './grados/grado2.data';
import { grado3 } from './grados/grado3.data';
import { grado4 } from './grados/grado4.data';
import { grado5 } from './grados/grado5.data';
import { grado6 } from './grados/grado6.data';
import type { GradoData, MateriaKey, Pregunta, Competencia } from './preguntas.types';
import { getMateriaLabel, getMateriaKey, MATERIAS_KEYS } from './materias.constants';

// Base de datos de preguntas por grado
export const preguntasDB: Record<number, GradoData> = {
  1: grado1,
  2: grado2,
  3: grado3,
  4: grado4,
  5: grado5,
  6: grado6
};

// Función helper para obtener preguntas de una materia y competencia específica
export function getPreguntasPorMateriaYCompetencia(
  grado: number,
  materiaKey: string,
  competencia: 'competencia1' | 'competencia2' | 'competencia3'
): Pregunta[] {
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

  const competenciaData = materiaData.competencias[competencia];
  if (!competenciaData) {
    console.error(`Competencia ${competencia} no encontrada`);
    return [];
  }

  return competenciaData.preguntas;
}

// Función helper para obtener información de una competencia
export function getCompetenciaInfo(
  grado: number,
  materiaKey: string,
  competencia: 'competencia1' | 'competencia2' | 'competencia3'
): Competencia | null {
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

  const competenciaData = materiaData.competencias[competencia];
  if (!competenciaData) {
    return null;
  }

  return {
    nombre: competenciaData.nombre,
    descripcion: competenciaData.descripcion,
    objetivo: competenciaData.objetivo,
    preguntas: competenciaData.preguntas
  };
}

// Función helper para obtener todas las materias disponibles (con labels para UI)
export function getMateriasDisponibles() {
  return MATERIAS_KEYS.map(key => ({
    key,
    label: getMateriaLabel(key)
  }));
}

// Re-exportar types y constantes para uso en otros módulos
export type { Pregunta, Competencia, MateriaData, GradoData, MateriaKey } from './preguntas.types';
export { getMateriaLabel, getMateriaKey, MATERIAS_KEYS, MATERIAS_LABELS } from './materias.constants';
