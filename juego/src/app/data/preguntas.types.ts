import { MateriaKey } from './materias.constants';

// Re-exportar MateriaKey para acceso directo
export type { MateriaKey } from './materias.constants';

export interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: number; // índice de la respuesta correcta (0-3)
}

export interface Competencia {
  id: string; // competencia_01, competencia_02, etc.
  nombre: string;
  descripcion: string;
  objetivo: string;
  preguntas: Pregunta[];
}

export interface MateriaData {
  competencias: Competencia[]; // Array escalable de competencias
  frase: string; // Frase motivacional de la materia
  mision_logro: string; // Descripción del logro al completar todas las competencias
}

export type GradoData = Record<MateriaKey, MateriaData>;
