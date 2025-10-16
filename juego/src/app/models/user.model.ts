export interface User {
  id: string;
  nickname: string;
  genero: 'masculino' | 'femenino' | 'otro';
  colorPiel: string;
  colorPelo: string;
  formaCara?: string;
  puntuacion: number;
  fechaCreacion: Date;
  ultimaActualizacion: Date;
}

export interface UserCreate {
  nickname: string;
  genero: 'masculino' | 'femenino' | 'otro';
  colorPiel: string;
  colorPelo: string;
  formaCara?: string;
}
