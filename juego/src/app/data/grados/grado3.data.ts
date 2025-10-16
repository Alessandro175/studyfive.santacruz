import { GradoData } from '../preguntas.types';

export const grado3: GradoData = {
  ingles: {
    competencias: {
      competencia1: {
        nombre: 'Present Simple',
        descripcion: 'Uso del presente simple en inglés',
        objetivo: 'Conjugar verbos en presente',
        preguntas: [
          {
            pregunta: 'She ___ to school every day',
            opciones: ['go', 'goes', 'going', 'went'],
            respuesta: 1
          },
          {
            pregunta: 'I ___ English',
            opciones: ['speak', 'speaks', 'speaking', 'spoke'],
            respuesta: 0
          },
          {
            pregunta: 'They ___ soccer on Sundays',
            opciones: ['play', 'plays', 'playing', 'played'],
            respuesta: 0
          },
          {
            pregunta: 'He ___ his homework',
            opciones: ['do', 'does', 'doing', 'did'],
            respuesta: 1
          },
          {
            pregunta: 'We ___ lunch at 12 pm',
            opciones: ['have', 'has', 'having', 'had'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Prepositions of Place',
        descripcion: 'Preposiciones de lugar (in, on, under)',
        objetivo: 'Ubicar objetos correctamente',
        preguntas: [
          {
            pregunta: 'The book is ___ the table',
            opciones: ['in', 'on', 'under', 'at'],
            respuesta: 1
          },
          {
            pregunta: 'The cat is ___ the box',
            opciones: ['in', 'on', 'at', 'from'],
            respuesta: 0
          },
          {
            pregunta: 'The shoes are ___ the bed',
            opciones: ['on', 'in', 'under', 'at'],
            respuesta: 2
          },
          {
            pregunta: 'I live ___ Lima',
            opciones: ['on', 'at', 'in', 'under'],
            respuesta: 2
          },
          {
            pregunta: 'The picture is ___ the wall',
            opciones: ['in', 'on', 'under', 'at'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Food and Drinks',
        descripcion: 'Vocabulario de alimentos y bebidas',
        objetivo: 'Nombrar comidas en inglés',
        preguntas: [
          {
            pregunta: '¿Cómo se dice "manzana"?',
            opciones: ['Orange', 'Apple', 'Banana', 'Grape'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es "water"?',
            opciones: ['Agua', 'Leche', 'Jugo', 'Refresco'],
            respuesta: 0
          },
          {
            pregunta: '¿Cómo se dice "pan"?',
            opciones: ['Bread', 'Butter', 'Cheese', 'Meat'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es "chicken"?',
            opciones: ['Cerdo', 'Res', 'Pollo', 'Pescado'],
            respuesta: 2
          },
          {
            pregunta: '"Milk" significa:',
            opciones: ['Agua', 'Leche', 'Café', 'Té'],
            respuesta: 1
          }
        ]
      }
    }
  },
  matematica: {
    competencias: {
      competencia1: {
        nombre: 'Multiplicación Básica',
        descripcion: 'Tablas del 2, 3, 4 y 5',
        objetivo: 'Memorizar tablas de multiplicar',
        preguntas: [
          {
            pregunta: '¿Cuánto es 3 × 4?',
            opciones: ['7', '10', '12', '15'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 5 × 5?',
            opciones: ['20', '25', '30', '35'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 2 × 8?',
            opciones: ['14', '16', '18', '20'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 4 × 6?',
            opciones: ['20', '22', '24', '26'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 3 × 7?',
            opciones: ['18', '20', '21', '24'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Fracciones Simples',
        descripcion: 'Introducción a medios y cuartos',
        objetivo: 'Entender fracciones básicas',
        preguntas: [
          {
            pregunta: 'Un medio es igual a:',
            opciones: ['1/2', '1/3', '1/4', '1/5'],
            respuesta: 0
          },
          {
            pregunta: 'Si divides una pizza en 4 partes iguales, cada parte es:',
            opciones: ['Un medio', 'Un tercio', 'Un cuarto', 'Un quinto'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es la mitad de 10?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 2
          },
          {
            pregunta: 'Un cuarto de 8 es:',
            opciones: ['1', '2', '3', '4'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos medios tiene un entero?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Perímetro',
        descripcion: 'Calcula el contorno de figuras',
        objetivo: 'Sumar lados para obtener perímetro',
        preguntas: [
          {
            pregunta: 'Un cuadrado tiene lados de 5 cm. ¿Cuál es su perímetro?',
            opciones: ['10 cm', '15 cm', '20 cm', '25 cm'],
            respuesta: 2
          },
          {
            pregunta: 'El perímetro es:',
            opciones: ['El área', 'La suma de los lados', 'El volumen', 'La altura'],
            respuesta: 1
          },
          {
            pregunta: 'Un rectángulo mide 3 cm y 5 cm. Su perímetro es:',
            opciones: ['8 cm', '13 cm', '15 cm', '16 cm'],
            respuesta: 3
          },
          {
            pregunta: 'Un triángulo tiene lados de 4, 5 y 6 cm. Su perímetro es:',
            opciones: ['10 cm', '12 cm', '15 cm', '20 cm'],
            respuesta: 2
          },
          {
            pregunta: '¿Cómo calculas el perímetro de un cuadrado de lado 7 cm?',
            opciones: ['7 + 7', '7 × 2', '7 × 4', '7 × 7'],
            respuesta: 2
          }
        ]
      }
    }
  },
  comunicacion: {
    competencias: {
      competencia1: {
        nombre: 'Sustantivos y Adjetivos',
        descripcion: 'Identifica sustantivos y sus calificativos',
        objetivo: 'Diferenciar tipos de palabras',
        preguntas: [
          {
            pregunta: '¿Cuál es el sustantivo? "El perro negro"',
            opciones: ['El', 'perro', 'negro', 'El perro'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el adjetivo? "Casa grande"',
            opciones: ['Casa', 'grande', 'Ambos', 'Ninguno'],
            respuesta: 1
          },
          {
            pregunta: 'Los sustantivos nombran:',
            opciones: ['Acciones', 'Cosas o seres', 'Cualidades', 'Lugares solo'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué adjetivo describe "león"? El león ___',
            opciones: ['corre', 'feroz', 'en', 'y'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es un sustantivo propio?',
            opciones: ['mesa', 'Juan', 'feliz', 'correr'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Verbos en Presente',
        descripcion: 'Conjuga verbos en tiempo presente',
        objetivo: 'Usar verbos correctamente',
        preguntas: [
          {
            pregunta: 'Yo ___ a la escuela',
            opciones: ['voy', 'vas', 'va', 'vamos'],
            respuesta: 0
          },
          {
            pregunta: 'Ellos ___ fútbol',
            opciones: ['juego', 'juegas', 'juega', 'juegan'],
            respuesta: 3
          },
          {
            pregunta: 'Los verbos expresan:',
            opciones: ['Nombres', 'Acciones', 'Cualidades', 'Lugares'],
            respuesta: 1
          },
          {
            pregunta: 'Tú ___ un libro',
            opciones: ['leo', 'lees', 'lee', 'leen'],
            respuesta: 1
          },
          {
            pregunta: 'Nosotros ___ en el parque',
            opciones: ['corro', 'corres', 'corre', 'corremos'],
            respuesta: 3
          }
        ]
      },
      competencia3: {
        nombre: 'Comprensión de Textos',
        descripcion: 'Lee y entiende textos informativos',
        objetivo: 'Extraer información clave',
        preguntas: [
          {
            pregunta: '¿Qué es la idea principal de un texto?',
            opciones: ['El título', 'Lo más importante', 'El final', 'El autor'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde buscas información sobre animales?',
            opciones: ['En una receta', 'En una enciclopedia', 'En un poema', 'En una carta'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué son los párrafos?',
            opciones: ['Oraciones sueltas', 'Bloques de texto', 'Títulos', 'Imágenes'],
            respuesta: 1
          },
          {
            pregunta: 'Un texto informativo sirve para:',
            opciones: ['Entretener', 'Enseñar', 'Cantar', 'Dibujar'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué signo termina una pregunta?',
            opciones: ['.', ',', '?', '!'],
            respuesta: 2
          }
        ]
      }
    }
  },
  ciencia_tecnologia: {
    competencias: {
      competencia1: {
        nombre: 'Las Plantas',
        descripcion: 'Partes y funciones de las plantas',
        objetivo: 'Comprender la fotosíntesis básica',
        preguntas: [
          {
            pregunta: '¿Qué parte de la planta absorbe agua?',
            opciones: ['Hoja', 'Flor', 'Raíz', 'Tallo'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué necesitan las plantas para vivir?',
            opciones: ['Solo agua', 'Agua y sol', 'Solo sol', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué producen las plantas?',
            opciones: ['Agua', 'Oxígeno', 'Tierra', 'Piedras'],
            respuesta: 1
          },
          {
            pregunta: '¿Las flores sirven para?',
            opciones: ['Decorar', 'Reproducción', 'Comer', 'Jugar'],
            respuesta: 1
          },
          {
            pregunta: '¿El tallo transporta?',
            opciones: ['Animales', 'Agua y nutrientes', 'Aire', 'Luz'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Animales Ovíparos y Vivíparos',
        descripcion: 'Formas de reproducción animal',
        objetivo: 'Clasificar por tipo de nacimiento',
        preguntas: [
          {
            pregunta: 'Los animales que nacen de huevos son:',
            opciones: ['Vivíparos', 'Ovíparos', 'Mamíferos', 'Reptiles'],
            respuesta: 1
          },
          {
            pregunta: '¿El perro es ovíparo o vivíparo?',
            opciones: ['Ovíparo', 'Vivíparo', 'Ninguno', 'Ambos'],
            respuesta: 1
          },
          {
            pregunta: '¿Las aves son?',
            opciones: ['Vivíparas', 'Ovíparas', 'Mamíferas', 'Peces'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué animal nace de huevo?',
            opciones: ['Perro', 'Gato', 'Gallina', 'Vaca'],
            respuesta: 2
          },
          {
            pregunta: 'Los mamíferos son generalmente:',
            opciones: ['Ovíparos', 'Vivíparos', 'No se reproducen', 'Ambos'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'La Materia',
        descripcion: 'Estados y propiedades de la materia',
        objetivo: 'Identificar sólidos, líquidos y gases',
        preguntas: [
          {
            pregunta: '¿Cuántos estados de la materia existen principalmente?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: 'El agua es un ejemplo de:',
            opciones: ['Sólido', 'Líquido', 'Gas', 'Plasma'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué estado tiene forma definida?',
            opciones: ['Sólido', 'Líquido', 'Gas', 'Ninguno'],
            respuesta: 0
          },
          {
            pregunta: 'El aire es un:',
            opciones: ['Sólido', 'Líquido', 'Gas', 'Mineral'],
            respuesta: 2
          },
          {
            pregunta: 'Una piedra es un:',
            opciones: ['Sólido', 'Líquido', 'Gas', 'Líquido y sólido'],
            respuesta: 0
          }
        ]
      }
    }
  },
  personal_social: {
    competencias: {
      competencia1: {
        nombre: 'El Perú y sus Regiones',
        descripcion: 'Geografía básica del Perú',
        objetivo: 'Identificar las tres regiones naturales',
        preguntas: [
          {
            pregunta: '¿Cuántas regiones naturales tiene el Perú?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué región está junto al mar?',
            opciones: ['Sierra', 'Costa', 'Selva', 'Montaña'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde están los Andes?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Mar'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué región tiene más árboles?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Desierto'],
            respuesta: 2
          },
          {
            pregunta: '¿Lima está en qué región?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Ninguna'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Héroes Nacionales',
        descripcion: 'Conoce personajes importantes de la historia peruana',
        objetivo: 'Valorar la historia nacional',
        preguntas: [
          {
            pregunta: '¿Quién proclamó la independencia del Perú?',
            opciones: ['Bolívar', 'San Martín', 'Grau', 'Bolognesi'],
            respuesta: 1
          },
          {
            pregunta: '¿Miguel Grau fue un héroe de?',
            opciones: ['La independencia', 'La guerra del Pacífico', 'La conquista', 'La colonia'],
            respuesta: 1
          },
          {
            pregunta: '¿En qué fecha es la independencia del Perú?',
            opciones: ['28 de julio', '8 de diciembre', '1 de mayo', '25 de diciembre'],
            respuesta: 0
          },
          {
            pregunta: '¿Francisco Bolognesi defendió?',
            opciones: ['Lima', 'Cusco', 'Arica', 'Arequipa'],
            respuesta: 2
          },
          {
            pregunta: '¿Un héroe es alguien que?',
            opciones: ['Es famoso', 'Defiende su patria', 'Tiene dinero', 'Juega bien'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Trabajo en Equipo',
        descripcion: 'Importancia de la colaboración',
        objetivo: 'Desarrollar habilidades sociales',
        preguntas: [
          {
            pregunta: 'Trabajar en equipo significa:',
            opciones: ['Trabajar solo', 'Trabajar con otros', 'No trabajar', 'Competir'],
            respuesta: 1
          },
          {
            pregunta: 'En un equipo todos deben:',
            opciones: ['Mandar', 'Obedecer', 'Participar', 'Dormir'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué haces si un compañero necesita ayuda?',
            opciones: ['Ignóralo', 'Ayúdalo', 'Ríete', 'Sal corriendo'],
            respuesta: 1
          },
          {
            pregunta: '¿Es bueno compartir ideas en un equipo?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: 'Un buen líder de equipo:',
            opciones: ['Escucha a todos', 'Solo manda', 'No participa', 'Trabaja solo'],
            respuesta: 0
          }
        ]
      }
    }
  },
  arte_cultura: {
    competencias: {
      competencia1: {
        nombre: 'Arte Peruano',
        descripcion: 'Manifestaciones culturales del Perú',
        objetivo: 'Valorar el arte nacional',
        preguntas: [
          {
            pregunta: '¿Qué civilización construyó Machu Picchu?',
            opciones: ['Los Mayas', 'Los Aztecas', 'Los Incas', 'Los Egipcios'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es un retablo ayacuchano?',
            opciones: ['Una comida', 'Una artesanía', 'Un baile', 'Un juego'],
            respuesta: 1
          },
          {
            pregunta: '¿El mate burilado es de?',
            opciones: ['Arequipa', 'Cusco', 'Huancayo', 'Lima'],
            respuesta: 2
          },
          {
            pregunta: '¿La marinera es una?',
            opciones: ['Comida', 'Danza', 'Ciudad', 'Planta'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué instrumento musical es peruano?',
            opciones: ['Piano', 'Guitarra', 'Cajón', 'Violín'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Ritmo y Melodía',
        descripcion: 'Elementos básicos de la música',
        objetivo: 'Distinguir ritmo de melodía',
        preguntas: [
          {
            pregunta: '¿Qué es el ritmo?',
            opciones: ['El color', 'El tiempo en la música', 'El tamaño', 'El peso'],
            respuesta: 1
          },
          {
            pregunta: 'La melodía es:',
            opciones: ['La secuencia de sonidos', 'El silencio', 'El ruido', 'El volumen'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué marca el ritmo en una canción?',
            opciones: ['La letra', 'El tiempo', 'El cantante', 'El micrófono'],
            respuesta: 1
          },
          {
            pregunta: 'Cuando cantamos seguimos la:',
            opciones: ['Pintura', 'Melodía', 'Escultura', 'Danza'],
            respuesta: 1
          },
          {
            pregunta: 'El cajón peruano marca:',
            opciones: ['La melodía', 'El ritmo', 'La letra', 'El tono'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Teatro y Expresión',
        descripcion: 'Introducción al teatro',
        objetivo: 'Desarrollar expresión corporal',
        preguntas: [
          {
            pregunta: '¿Qué es el teatro?',
            opciones: ['Un deporte', 'Una representación', 'Una comida', 'Un lugar'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién actúa en el teatro?',
            opciones: ['Los actores', 'Los pintores', 'Los cocineros', 'Los doctores'],
            respuesta: 0
          },
          {
            pregunta: 'En el teatro representamos:',
            opciones: ['Números', 'Historias', 'Colores', 'Formas'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué necesitas para hacer mímica?',
            opciones: ['Hablar mucho', 'Tu cuerpo', 'Colores', 'Instrumentos'],
            respuesta: 1
          },
          {
            pregunta: 'Un escenario es:',
            opciones: ['Donde se actúa', 'Donde se cocina', 'Donde se duerme', 'Donde se estudia'],
            respuesta: 0
          }
        ]
      }
    }
  }
};
