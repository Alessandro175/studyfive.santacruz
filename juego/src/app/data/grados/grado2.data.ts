import { GradoData } from '../preguntas.types';

export const grado2: GradoData = {
  ingles: {
    competencias: {
      competencia1: {
        nombre: 'Verb "To Be"',
        descripcion: 'Aprende el verbo to be en presente',
        objetivo: 'Usar correctamente I am, you are, he/she is',
        preguntas: [
          {
            pregunta: '¿Cómo se completa? I ___ a student',
            opciones: ['am', 'is', 'are', 'be'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuál es correcto? She ___ happy',
            opciones: ['am', 'is', 'are', 'be'],
            respuesta: 1
          },
          {
            pregunta: 'You ___ my friend',
            opciones: ['am', 'is', 'are', 'be'],
            respuesta: 2
          },
          {
            pregunta: 'They ___ teachers',
            opciones: ['am', 'is', 'are', 'be'],
            respuesta: 2
          },
          {
            pregunta: 'It ___ a cat',
            opciones: ['am', 'is', 'are', 'be'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Días y Meses',
        descripcion: 'Aprende los días de la semana y meses del año',
        objetivo: 'Identificar y nombrar días y meses en inglés',
        preguntas: [
          {
            pregunta: '¿Cuántos días tiene una semana?',
            opciones: ['Five', 'Six', 'Seven', 'Eight'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué significa "Monday"?',
            opciones: ['Domingo', 'Lunes', 'Martes', 'Miércoles'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el primer mes del año?',
            opciones: ['December', 'January', 'February', 'March'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué día viene después de "Saturday"?',
            opciones: ['Monday', 'Friday', 'Sunday', 'Tuesday'],
            respuesta: 2
          },
          {
            pregunta: '¿En qué mes celebramos Navidad?',
            opciones: ['January', 'November', 'December', 'October'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Partes de la Casa',
        descripcion: 'Vocabulario de las habitaciones y objetos del hogar',
        objetivo: 'Identificar partes de una casa en inglés',
        preguntas: [
          {
            pregunta: '¿Dónde duermes?',
            opciones: ['Kitchen', 'Bedroom', 'Bathroom', 'Garden'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde cocinas?',
            opciones: ['Kitchen', 'Bedroom', 'Bathroom', 'Living room'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué significa "door"?',
            opciones: ['Ventana', 'Puerta', 'Techo', 'Piso'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde te bañas?',
            opciones: ['Kitchen', 'Bedroom', 'Bathroom', 'Garden'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es "window"?',
            opciones: ['Ventana', 'Puerta', 'Techo', 'Pared'],
            respuesta: 0
          }
        ]
      }
    }
  },
  matematica: {
    competencias: {
      competencia1: {
        nombre: 'Sumas y Restas hasta 20',
        descripcion: 'Operaciones básicas hasta el 20',
        objetivo: 'Resolver sumas y restas simples',
        preguntas: [
          {
            pregunta: '¿Cuánto es 12 + 5?',
            opciones: ['15', '16', '17', '18'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 18 - 6?',
            opciones: ['10', '11', '12', '13'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 9 + 8?',
            opciones: ['15', '16', '17', '18'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 15 - 7?',
            opciones: ['6', '7', '8', '9'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 6 + 6?',
            opciones: ['10', '11', '12', '13'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Números Pares e Impares',
        descripcion: 'Identifica números pares e impares',
        objetivo: 'Diferenciar pares de impares',
        preguntas: [
          {
            pregunta: '¿Cuál de estos es un número par?',
            opciones: ['3', '5', '8', '9'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es impar?',
            opciones: ['2', '4', '7', '8'],
            respuesta: 2
          },
          {
            pregunta: '¿El número 10 es par o impar?',
            opciones: ['Par', 'Impar', 'Ninguno', 'Ambos'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuál número viene entre 6 y 8?',
            opciones: ['5', '7', '9', '10'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos números pares hay entre 1 y 10?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Medidas: Largo y Corto',
        descripcion: 'Compara longitudes y tamaños',
        objetivo: 'Entender conceptos de medición básica',
        preguntas: [
          {
            pregunta: '¿Qué es más largo?',
            opciones: ['Un lápiz', 'Una regla', 'Una goma', 'Un borrador'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos centímetros tiene un metro?',
            opciones: ['10', '50', '100', '1000'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué animal es más alto?',
            opciones: ['Hormiga', 'Perro', 'Jirafa', 'Gato'],
            respuesta: 2
          },
          {
            pregunta: '¿Con qué mides tu estatura?',
            opciones: ['Reloj', 'Metro', 'Balanza', 'Termómetro'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es más corto?',
            opciones: ['Un río', 'Un charco', 'Un lago', 'Un mar'],
            respuesta: 1
          }
        ]
      }
    }
  },
  comunicacion: {
    competencias: {
      competencia1: {
        nombre: 'Sílabas y Palabras',
        descripcion: 'Separa palabras en sílabas',
        objetivo: 'Identificar sílabas en palabras',
        preguntas: [
          {
            pregunta: '¿Cuántas sílabas tiene "Mariposa"?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuántas sílabas tiene "Sol"?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué palabra tiene 3 sílabas?',
            opciones: ['Pan', 'Pelota', 'Computadora', 'Sol'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se separa "Perro"?',
            opciones: ['Pe-rro', 'Per-ro', 'P-erro', 'Perr-o'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué sílaba empieza "Casa"?',
            opciones: ['Ca', 'Sa', 'As', 'Co'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Oraciones Simples',
        descripcion: 'Construye oraciones con sujeto y predicado',
        objetivo: 'Formar oraciones correctas',
        preguntas: [
          {
            pregunta: '¿Cuál es una oración completa?',
            opciones: ['El perro', 'Come pan', 'El perro come', 'Perro come pan'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué falta? "María ___ en el parque"',
            opciones: ['corre', 'corriendo', 'correr', 'corrió'],
            respuesta: 0
          },
          {
            pregunta: '¿Quién hace la acción en "Juan estudia"?',
            opciones: ['Estudia', 'Juan', 'Nadie', 'Todos'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál palabra debe llevar mayúscula?',
            opciones: ['casa', 'perro', 'juan', 'mesa'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué signo va al final? "Hola"',
            opciones: [',', '.', '?', '!'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Cuentos Cortos',
        descripcion: 'Lee y comprende cuentos breves',
        objetivo: 'Desarrollar comprensión lectora',
        preguntas: [
          {
            pregunta: 'En "El patito feo", ¿qué le pasaba al patito?',
            opciones: ['Era hermoso', 'Era diferente', 'Era malo', 'Era grande'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un cuento?',
            opciones: ['Una canción', 'Una historia', 'Un dibujo', 'Un número'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién escribió "Caperucita Roja"?',
            opciones: ['Un científico', 'Un contador', 'Un escritor', 'Un médico'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué viene primero en un cuento?',
            opciones: ['El final', 'El inicio', 'El medio', 'La moraleja'],
            respuesta: 1
          },
          {
            pregunta: '¿Los cuentos son reales o inventados?',
            opciones: ['Reales', 'Inventados', 'Mitad y mitad', 'Ninguno'],
            respuesta: 1
          }
        ]
      }
    }
  },
  ciencia_tecnologia: {
    competencias: {
      competencia1: {
        nombre: 'El Agua',
        descripcion: 'Propiedades y estados del agua',
        objetivo: 'Comprender el ciclo del agua',
        preguntas: [
          {
            pregunta: '¿Cuántos estados tiene el agua?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es el hielo?',
            opciones: ['Agua líquida', 'Agua sólida', 'Agua gaseosa', 'Agua caliente'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el vapor?',
            opciones: ['Agua sólida', 'Agua líquida', 'Agua gaseosa', 'Agua fría'],
            respuesta: 2
          },
          {
            pregunta: '¿De dónde viene la lluvia?',
            opciones: ['Del suelo', 'De las nubes', 'Del sol', 'De los árboles'],
            respuesta: 1
          },
          {
            pregunta: '¿El agua del mar es dulce o salada?',
            opciones: ['Dulce', 'Salada', 'Amarga', 'Ácida'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Animales Vertebrados',
        descripcion: 'Identifica animales con columna vertebral',
        objetivo: 'Clasificar animales vertebrados',
        preguntas: [
          {
            pregunta: '¿Qué animal es vertebrado?',
            opciones: ['Araña', 'Perro', 'Hormiga', 'Abeja'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué tienen todos los vertebrados?',
            opciones: ['Alas', 'Columna vertebral', 'Antenas', 'Tentáculos'],
            respuesta: 1
          },
          {
            pregunta: '¿Los peces son vertebrados?',
            opciones: ['Sí', 'No', 'Algunos', 'Ninguno'],
            respuesta: 0
          },
          {
            pregunta: '¿Las aves tienen huesos?',
            opciones: ['Sí', 'No', 'Solo algunas', 'Ninguna'],
            respuesta: 0
          },
          {
            pregunta: '¿El ser humano es vertebrado?',
            opciones: ['Sí', 'No', 'A veces', 'Depende'],
            respuesta: 0
          }
        ]
      },
      competencia3: {
        nombre: 'El Sol y la Tierra',
        descripcion: 'Relación entre el Sol y nuestro planeta',
        objetivo: 'Entender el día y la noche',
        preguntas: [
          {
            pregunta: '¿Qué nos da luz y calor?',
            opciones: ['La Luna', 'El Sol', 'Las estrellas', 'La Tierra'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué hay día y noche?',
            opciones: ['El Sol se apaga', 'La Tierra gira', 'La Luna tapa', 'Las nubes cubren'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas horas tiene un día?',
            opciones: ['12', '18', '24', '30'],
            respuesta: 2
          },
          {
            pregunta: '¿La Tierra es un planeta o una estrella?',
            opciones: ['Planeta', 'Estrella', 'Luna', 'Cometa'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuándo sale el Sol?',
            opciones: ['En la noche', 'En la mañana', 'En la tarde', 'A medianoche'],
            respuesta: 1
          }
        ]
      }
    }
  },
  personal_social: {
    competencias: {
      competencia1: {
        nombre: 'Deberes y Derechos',
        descripcion: 'Conoce tus derechos como niño',
        objetivo: 'Reconocer derechos fundamentales',
        preguntas: [
          {
            pregunta: '¿Tienes derecho a ir a la escuela?',
            opciones: ['Sí', 'No', 'A veces', 'Depende'],
            respuesta: 0
          },
          {
            pregunta: '¿Es tu deber hacer la tarea?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: '¿Tienes derecho a tener un nombre?',
            opciones: ['Sí', 'No', 'Solo algunos', 'Depende'],
            respuesta: 0
          },
          {
            pregunta: '¿Debes respetar a tus maestros?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: '¿Tienes derecho a jugar?',
            opciones: ['Sí', 'No', 'Solo en vacaciones', 'Solo los fines de semana'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Mi Barrio',
        descripcion: 'Identifica lugares de tu barrio',
        objetivo: 'Conocer tu entorno cercano',
        preguntas: [
          {
            pregunta: '¿Qué es un barrio?',
            opciones: ['Una ciudad', 'Una parte de la ciudad', 'Un país', 'Un continente'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde compras el pan?',
            opciones: ['Hospital', 'Panadería', 'Escuela', 'Parque'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién entrega las cartas?',
            opciones: ['Médico', 'Cartero', 'Bombero', 'Policía'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde juegas con otros niños?',
            opciones: ['Hospital', 'Escuela', 'Parque', 'Banco'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué hace un vecino?',
            opciones: ['Vive lejos', 'Vive cerca', 'No lo conoces', 'Es un familiar'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Símbolos Patrios',
        descripcion: 'Conoce los símbolos de tu país',
        objetivo: 'Identificar símbolos nacionales',
        preguntas: [
          {
            pregunta: '¿Cuántos colores tiene la bandera del Perú?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué colores tiene la bandera peruana?',
            opciones: ['Rojo y blanco', 'Azul y blanco', 'Verde y amarillo', 'Negro y blanco'],
            respuesta: 0
          },
          {
            pregunta: '¿Cómo se llama el himno de un país?',
            opciones: ['Canción nacional', 'Himno nacional', 'Música nacional', 'Poema nacional'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el escudo del Perú?',
            opciones: ['Un león', 'Una vicuña', 'Un águila', 'Un cóndor'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuándo cantamos el himno nacional?',
            opciones: ['Solo en casa', 'En actos cívicos', 'Nunca', 'Solo en fiestas'],
            respuesta: 1
          }
        ]
      }
    }
  },
  arte_cultura: {
    competencias: {
      competencia1: {
        nombre: 'Colores Secundarios',
        descripcion: 'Mezcla colores primarios',
        objetivo: 'Crear colores secundarios',
        preguntas: [
          {
            pregunta: '¿Qué color sale de mezclar azul y amarillo?',
            opciones: ['Verde', 'Naranja', 'Morado', 'Negro'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué color sale de rojo y azul?',
            opciones: ['Verde', 'Naranja', 'Morado', 'Rosa'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué color sale de rojo y amarillo?',
            opciones: ['Verde', 'Naranja', 'Morado', 'Café'],
            respuesta: 1
          },
          {
            pregunta: '¿Los colores secundarios son?',
            opciones: ['Rojo, azul, amarillo', 'Verde, naranja, morado', 'Blanco, negro, gris', 'Rosa, café, celeste'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué color es el pasto?',
            opciones: ['Azul', 'Amarillo', 'Verde', 'Rojo'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Instrumentos Musicales',
        descripcion: 'Identifica familias de instrumentos',
        objetivo: 'Clasificar instrumentos musicales',
        preguntas: [
          {
            pregunta: '¿Qué tipo de instrumento es el tambor?',
            opciones: ['Cuerda', 'Viento', 'Percusión', 'Eléctrico'],
            respuesta: 2
          },
          {
            pregunta: '¿La guitarra tiene cuerdas?',
            opciones: ['Sí', 'No', 'A veces', 'Depende'],
            respuesta: 0
          },
          {
            pregunta: '¿Con qué tocas el piano?',
            opciones: ['Con las manos', 'Con los pies', 'Con la boca', 'Con palos'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué instrumento se sopla?',
            opciones: ['Guitarra', 'Tambor', 'Flauta', 'Piano'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuántas teclas blancas tiene un piano pequeño?',
            opciones: ['Menos de 10', 'Entre 10 y 30', 'Más de 30', 'Ninguna'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Dibujo y Creatividad',
        descripcion: 'Técnicas básicas de dibujo',
        objetivo: 'Desarrollar habilidades artísticas',
        preguntas: [
          {
            pregunta: '¿Con qué dibujas líneas negras?',
            opciones: ['Lápiz', 'Agua', 'Arena', 'Aire'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué forma tiene un círculo?',
            opciones: ['Cuadrada', 'Redonda', 'Triangular', 'Rectangular'],
            respuesta: 1
          },
          {
            pregunta: '¿Puedes borrar el lápiz?',
            opciones: ['Sí', 'No', 'A veces', 'Depende'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué necesitas para pintar con acuarelas?',
            opciones: ['Fuego', 'Agua', 'Tierra', 'Viento'],
            respuesta: 1
          },
          {
            pregunta: '¿El dibujo es una forma de arte?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          }
        ]
      }
    }
  }
};
