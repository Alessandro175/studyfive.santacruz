export interface User {
  id: string;
  nickname: string;
  genero: 'masculino' | 'femenino' | 'otro';
  colorPiel: string;
  colorPelo: string;
  puntuacion: number;
  fechaCreacion: Date;
  ultimaActualizacion: Date;
}

export interface UserCreate {
  nickname: string;
  genero: 'masculino' | 'femenino' | 'otro';
  colorPiel: string;
  colorPelo: string;
}

/**
 * Registro de una competencia completada por un usuario
 * Key format: "userId_grado_materia_competenciaId"
 * Ejemplo: "abc123_1_ingles_competencia_01"
 */
export interface CompetenciaRegistro {
  id: string; // userId_grado_materia_competenciaId
  userId: string;
  grado: number;
  materia: string; // key normalizada (ingles, matematica, etc.)
  competencia: string; // competenciaId dinámico (competencia_01, competencia_02, etc.)
  puntaje: number; // 0-5 respuestas correctas
  totalPreguntas: number; // normalmente 5
  porcentaje: number; // 0-100
  intentos: number; // número de veces que ha jugado esta competencia
  mejorPuntaje: number; // mejor puntaje histórico
  fechaPrimerIntento: Date;
  fechaUltimoIntento: Date;
}

/**
 * Datos para crear/actualizar un registro de competencia
 */
export interface CompetenciaRegistroData {
  grado: number;
  materia: string;
  competencia: string; // competenciaId dinámico (competencia_01, competencia_02, etc.)
  puntaje: number;
  totalPreguntas: number;
}
