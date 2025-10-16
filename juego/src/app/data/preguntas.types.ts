import { MateriaKey } from './materias.constants';

// Re-exportar MateriaKey para acceso directo
export type { MateriaKey } from './materias.constants';

export interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: number; // índice de la respuesta correcta (0-3)
}

export interface Competencia {
  nombre: string;
  descripcion: string;
  objetivo: string;
  preguntas: Pregunta[];
}

export interface MateriaData {
  competencias: {
    competencia1: Competencia;
    competencia2: Competencia;
    competencia3: Competencia;
  };
}

export type GradoData = Record<MateriaKey, MateriaData>;
