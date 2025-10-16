import { Injectable, signal } from '@angular/core';

export type VistaJuego = 'seleccion-grados' | 'seleccion-materias' | 'jugando';

export interface Materia {
  nombre: string;
  imagen: string;
  puntaje: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // Estado de la vista actual
  vistaActual = signal<VistaJuego>('seleccion-grados');
  
  // Grado seleccionado (1-6)
  gradoSeleccionado = signal<number | null>(null);
  
  // Materia seleccionada
  materiaSeleccionada = signal<string | null>(null);

  // Materias por grado (todas tienen las mismas materias)
  materias: Materia[] = [
    {
      nombre: 'Inglés',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7344f9e9-92b0-4866-83ec-e516c26697d5.png',
      puntaje: 0
    },
    {
      nombre: 'Matemática',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44310e98-8556-42b5-bd9e-948d44db06f6.png',
      puntaje: 0
    },
    {
      nombre: 'Comunicación',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/780030d2-ad72-4a0c-8056-f8adedc058e0.png',
      puntaje: 0
    },
    {
      nombre: 'Ciencia y Tecnología',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8654c946-2772-4be6-b915-8a6ca2b1cd6f.png',
      puntaje: 0
    },
    {
      nombre: 'Personal Social',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46cdf4a7-6748-4e93-98df-73d1bda51860.png',
      puntaje: 0
    },
    {
      nombre: 'Arte y Cultura',
      imagen: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e0de5b8-070c-41c1-8d90-52b1b380cf19.png',
      puntaje: 0
    }
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
    this.vistaActual.set('seleccion-grados');
  }

  /**
   * Selecciona una materia y cambia a la vista de juego
   */
  seleccionarMateria(materia: string) {
    this.materiaSeleccionada.set(materia);
    this.vistaActual.set('jugando');
  }

  /**
   * Vuelve a la selección de materias
   */
  volverAMaterias() {
    this.materiaSeleccionada.set(null);
    this.vistaActual.set('seleccion-materias');
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
