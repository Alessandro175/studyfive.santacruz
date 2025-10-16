import { GradoData } from '../preguntas.types';

export const grado5: GradoData = {
  ingles: {
    competencias: {
      competencia1: {
        nombre: 'Future Tense (Will)',
        descripcion: 'Expresar acciones futuras',
        objetivo: 'Usar "will" para hablar del futuro',
        preguntas: [
          {
            pregunta: 'I ___ travel to Spain next year',
            opciones: ['will', 'would', 'was', 'were'],
            respuesta: 0
          },
          {
            pregunta: 'She ___ not come to the party',
            opciones: ['will', 'wills', 'willing', 'willed'],
            respuesta: 0
          },
          {
            pregunta: '___ you help me tomorrow?',
            opciones: ['Will', 'Would', 'Was', 'Were'],
            respuesta: 0
          },
          {
            pregunta: 'They ___ study for the exam',
            opciones: ['will', 'would', 'was', 'were'],
            respuesta: 0
          },
          {
            pregunta: 'It ___ rain this afternoon',
            opciones: ['will', 'wills', 'willing', 'willed'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Comparatives and Superlatives',
        descripcion: 'Comparar y destacar cualidades',
        objetivo: 'Usar -er, -est, more, most',
        preguntas: [
          {
            pregunta: 'This book is ___ than that one',
            opciones: ['good', 'better', 'best', 'gooder'],
            respuesta: 1
          },
          {
            pregunta: 'She is the ___ student in class',
            opciones: ['smart', 'smarter', 'smartest', 'more smart'],
            respuesta: 2
          },
          {
            pregunta: 'My house is ___ expensive than yours',
            opciones: ['more', 'most', 'much', 'many'],
            respuesta: 0
          },
          {
            pregunta: 'He is ___ than his brother',
            opciones: ['tall', 'taller', 'tallest', 'more tall'],
            respuesta: 1
          },
          {
            pregunta: 'This is the ___ day of my life',
            opciones: ['happy', 'happier', 'happiest', 'more happy'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Jobs and Professions',
        descripcion: 'Vocabulario de profesiones',
        objetivo: 'Nombrar diferentes trabajos',
        preguntas: [
          {
            pregunta: 'A person who teaches is a:',
            opciones: ['Doctor', 'Teacher', 'Engineer', 'Artist'],
            respuesta: 1
          },
          {
            pregunta: 'Someone who cures people is a:',
            opciones: ['Teacher', 'Doctor', 'Chef', 'Pilot'],
            respuesta: 1
          },
          {
            pregunta: '"Chef" significa:',
            opciones: ['Profesor', 'Doctor', 'Cocinero', 'Piloto'],
            respuesta: 2
          },
          {
            pregunta: 'A person who flies planes is a:',
            opciones: ['Driver', 'Pilot', 'Sailor', 'Engineer'],
            respuesta: 1
          },
          {
            pregunta: '"Lawyer" significa:',
            opciones: ['Doctor', 'Ingeniero', 'Abogado', 'Arquitecto'],
            respuesta: 2
          }
        ]
      }
    }
  },
  matematica: {
    competencias: {
      competencia1: {
        nombre: 'Fracciones Equivalentes',
        descripcion: 'Identificar fracciones que representan lo mismo',
        objetivo: 'Simplificar y amplificar fracciones',
        preguntas: [
          {
            pregunta: '¿Cuál fracción es equivalente a 1/2?',
            opciones: ['1/3', '2/4', '1/4', '3/5'],
            respuesta: 1
          },
          {
            pregunta: '¿2/4 es lo mismo que?',
            opciones: ['1/2', '1/3', '2/3', '3/4'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuánto es 3/6 simplificado?',
            opciones: ['1/3', '1/2', '2/3', '3/4'],
            respuesta: 1
          },
          {
            pregunta: '¿4/8 es igual a?',
            opciones: ['1/4', '1/2', '1/3', '2/3'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es equivalente a 3/9?',
            opciones: ['1/3', '1/2', '2/3', '3/4'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Porcentajes',
        descripcion: 'Introducción a los porcentajes',
        objetivo: 'Calcular porcentajes simples',
        preguntas: [
          {
            pregunta: '¿Cuánto es 50% de 100?',
            opciones: ['25', '50', '75', '100'],
            respuesta: 1
          },
          {
            pregunta: '¿25% de 100 es?',
            opciones: ['10', '25', '50', '75'],
            respuesta: 1
          },
          {
            pregunta: '¿100% significa?',
            opciones: ['Nada', 'La mitad', 'Todo', 'Un cuarto'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 10% de 50?',
            opciones: ['5', '10', '15', '20'],
            respuesta: 0
          },
          {
            pregunta: '50% es lo mismo que:',
            opciones: ['1/4', '1/2', '3/4', '1/3'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Volumen',
        descripcion: 'Concepto de espacio tridimensional',
        objetivo: 'Calcular volumen de cubos',
        preguntas: [
          {
            pregunta: '¿Cómo se calcula el volumen de un cubo?',
            opciones: ['Lado × lado', 'Lado × lado × lado', 'Lado + lado', 'Lado ÷ lado'],
            respuesta: 1
          },
          {
            pregunta: 'El volumen se mide en:',
            opciones: ['cm²', 'cm³', 'cm', 'kg'],
            respuesta: 1
          },
          {
            pregunta: 'Un cubo de lado 3 cm tiene un volumen de:',
            opciones: ['9 cm³', '18 cm³', '27 cm³', '36 cm³'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es el volumen?',
            opciones: ['El contorno', 'El espacio que ocupa', 'El peso', 'El color'],
            respuesta: 1
          },
          {
            pregunta: 'Un cubo de lado 2 cm tiene volumen:',
            opciones: ['4 cm³', '6 cm³', '8 cm³', '10 cm³'],
            respuesta: 2
          }
        ]
      }
    }
  },
  comunicacion: {
    competencias: {
      competencia1: {
        nombre: 'El Verbo',
        descripcion: 'Tiempos verbales (presente, pasado, futuro)',
        objetivo: 'Conjugar verbos correctamente',
        preguntas: [
          {
            pregunta: '¿En qué tiempo está? "Yo comeré mañana"',
            opciones: ['Presente', 'Pasado', 'Futuro', 'Ninguno'],
            respuesta: 2
          },
          {
            pregunta: '"Ellos jugaron" está en:',
            opciones: ['Presente', 'Pasado', 'Futuro', 'Condicional'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el verbo? "María estudia mucho"',
            opciones: ['María', 'estudia', 'mucho', 'María estudia'],
            respuesta: 1
          },
          {
            pregunta: 'Nosotros ___ (ir) al cine ayer',
            opciones: ['vamos', 'fuimos', 'iremos', 'íbamos'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué expresan los verbos?',
            opciones: ['Nombres', 'Acciones o estados', 'Lugares', 'Cualidades'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'La Oración',
        descripcion: 'Sujeto, predicado y complementos',
        objetivo: 'Analizar oraciones simples',
        preguntas: [
          {
            pregunta: '¿Cuál es el sujeto? "El perro ladra"',
            opciones: ['El', 'perro', 'ladra', 'El perro'],
            respuesta: 3
          },
          {
            pregunta: '¿Cuál es el predicado? "María come manzanas"',
            opciones: ['María', 'come', 'manzanas', 'come manzanas'],
            respuesta: 3
          },
          {
            pregunta: '¿El sujeto es?',
            opciones: ['Quien hace la acción', 'La acción', 'El lugar', 'El tiempo'],
            respuesta: 0
          },
          {
            pregunta: '¿El predicado contiene?',
            opciones: ['Solo el sujeto', 'El verbo y complementos', 'Solo sustantivos', 'Solo adjetivos'],
            respuesta: 1
          },
          {
            pregunta: 'En "Los niños juegan", ¿quién es el sujeto?',
            opciones: ['Los', 'niños', 'juegan', 'Los niños'],
            respuesta: 3
          }
        ]
      },
      competencia3: {
        nombre: 'La Noticia',
        descripcion: 'Estructura de textos periodísticos',
        objetivo: 'Escribir noticias',
        preguntas: [
          {
            pregunta: '¿Qué pregunta responde una noticia?',
            opciones: ['Qué, quién, cuándo, dónde', 'Solo qué', 'Solo quién', 'Solo cuándo'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es el titular?',
            opciones: ['El final', 'El título de la noticia', 'El autor', 'La fecha'],
            respuesta: 1
          },
          {
            pregunta: 'Una noticia debe ser:',
            opciones: ['Ficticia', 'Verdadera', 'Divertida solo', 'Inventada'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde se publican las noticias?',
            opciones: ['Cuentos', 'Periódicos', 'Poemas', 'Fábulas'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el lead o entradilla?',
            opciones: ['El final', 'El primer párrafo', 'El título', 'La imagen'],
            respuesta: 1
          }
        ]
      }
    }
  },
  ciencia_tecnologia: {
    competencias: {
      competencia1: {
        nombre: 'El Cuerpo Humano',
        descripcion: 'Sistemas del cuerpo (digestivo, respiratorio, circulatorio)',
        objetivo: 'Comprender cómo funcionan los sistemas',
        preguntas: [
          {
            pregunta: '¿Qué órgano bombea la sangre?',
            opciones: ['Pulmón', 'Corazón', 'Estómago', 'Hígado'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde se digieren los alimentos?',
            opciones: ['Pulmones', 'Estómago', 'Corazón', 'Cerebro'],
            respuesta: 1
          },
          {
            pregunta: '¿Los pulmones sirven para?',
            opciones: ['Digerir', 'Respirar', 'Pensar', 'Mover'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué transporta la sangre?',
            opciones: ['Oxígeno y nutrientes', 'Solo agua', 'Solo aire', 'Solo comida'],
            respuesta: 0
          },
          {
            pregunta: '¿El cerebro controla?',
            opciones: ['Solo los brazos', 'Todo el cuerpo', 'Solo las piernas', 'Nada'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Energía',
        descripcion: 'Fuentes y transformaciones de energía',
        objetivo: 'Identificar tipos de energía',
        preguntas: [
          {
            pregunta: '¿Qué es la energía?',
            opciones: ['Un color', 'Capacidad de hacer trabajo', 'Un peso', 'Una temperatura'],
            respuesta: 1
          },
          {
            pregunta: '¿El Sol nos da energía?',
            opciones: ['Sí, solar', 'No', 'A veces', 'Solo de noche'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué energía usa una linterna?',
            opciones: ['Solar', 'Química (baterías)', 'Nuclear', 'Eólica'],
            respuesta: 1
          },
          {
            pregunta: 'La energía eólica proviene de:',
            opciones: ['El agua', 'El viento', 'El Sol', 'Las plantas'],
            respuesta: 1
          },
          {
            pregunta: '¿Las plantas transforman energía solar en?',
            opciones: ['Energía química', 'Energía eólica', 'Energía nuclear', 'No transforman'],
            respuesta: 0
          }
        ]
      },
      competencia3: {
        nombre: 'Mezclas y Soluciones',
        descripcion: 'Diferencias entre mezclas homogéneas y heterogéneas',
        objetivo: 'Clasificar tipos de mezclas',
        preguntas: [
          {
            pregunta: '¿Qué es una mezcla homogénea?',
            opciones: ['Se ven los componentes', 'No se ven los componentes', 'Es pura', 'Es un elemento'],
            respuesta: 1
          },
          {
            pregunta: 'El agua con sal es una:',
            opciones: ['Mezcla homogénea', 'Mezcla heterogénea', 'Sustancia pura', 'Elemento'],
            respuesta: 0
          },
          {
            pregunta: 'Una ensalada es una mezcla:',
            opciones: ['Homogénea', 'Heterogénea', 'Pura', 'Simple'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es una solución?',
            opciones: ['Mezcla heterogénea', 'Mezcla homogénea', 'Sustancia pura', 'Elemento'],
            respuesta: 1
          },
          {
            pregunta: '¿El aceite y el agua forman?',
            opciones: ['Mezcla homogénea', 'Mezcla heterogénea', 'Solución', 'Compuesto'],
            respuesta: 1
          }
        ]
      }
    }
  },
  personal_social: {
    competencias: {
      competencia1: {
        nombre: 'La Conquista del Perú',
        descripcion: 'Encuentro entre españoles e incas',
        objetivo: 'Comprender el proceso de conquista',
        preguntas: [
          {
            pregunta: '¿Quién conquistó el Perú?',
            opciones: ['Colón', 'Francisco Pizarro', 'Cortés', 'Magallanes'],
            respuesta: 1
          },
          {
            pregunta: '¿En qué año llegó Pizarro al Perú?',
            opciones: ['1492', '1532', '1821', '1879'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién era el Inca cuando llegaron los españoles?',
            opciones: ['Manco Cápac', 'Pachacútec', 'Atahualpa', 'Túpac Yupanqui'],
            respuesta: 2
          },
          {
            pregunta: '¿Dónde capturaron a Atahualpa?',
            opciones: ['Cusco', 'Lima', 'Cajamarca', 'Arequipa'],
            respuesta: 2
          },
          {
            pregunta: 'La conquista trajo al Perú:',
            opciones: ['Solo cosas buenas', 'Solo cosas malas', 'Cambios culturales', 'Nada'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Derechos y Deberes',
        descripcion: 'Derechos fundamentales de las personas',
        objetivo: 'Conocer y ejercer derechos',
        preguntas: [
          {
            pregunta: '¿Todos los niños tienen derecho a?',
            opciones: ['Trabajar', 'Educación', 'Votar', 'Conducir'],
            respuesta: 1
          },
          {
            pregunta: '¿Es un deber de los estudiantes?',
            opciones: ['Jugar todo el día', 'Estudiar', 'Ver TV', 'Dormir'],
            respuesta: 1
          },
          {
            pregunta: '¿Tienes derecho a expresar tus ideas?',
            opciones: ['Sí', 'No', 'Solo adultos', 'Solo niños'],
            respuesta: 0
          },
          {
            pregunta: '¿Es tu deber respetar a los demás?',
            opciones: ['No', 'Sí', 'A veces', 'Solo a amigos'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién protege los derechos de los niños?',
            opciones: ['Nadie', 'La UNICEF y el Estado', 'Solo los padres', 'Solo los profesores'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Economía Familiar',
        descripcion: 'Ingresos, gastos y ahorro',
        objetivo: 'Comprender el manejo del dinero',
        preguntas: [
          {
            pregunta: '¿Qué son los ingresos?',
            opciones: ['Lo que gastas', 'Lo que ganas', 'Lo que pierdes', 'Lo que prestas'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué es importante ahorrar?',
            opciones: ['No es importante', 'Para el futuro', 'Para gastar', 'Para perder'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un presupuesto?',
            opciones: ['Gastar sin pensar', 'Planificar ingresos y gastos', 'Solo gastar', 'Solo ahorrar'],
            respuesta: 1
          },
          {
            pregunta: '¿Es un gasto necesario?',
            opciones: ['Comida', 'Juguetes caros', 'Dulces', 'Videojuegos'],
            respuesta: 0
          },
          {
            pregunta: '¿Dónde puedes ahorrar tu dinero?',
            opciones: ['Debajo del colchón', 'En un banco', 'Gastándolo', 'Perdiéndolo'],
            respuesta: 1
          }
        ]
      }
    }
  },
  arte_cultura: {
    competencias: {
      competencia1: {
        nombre: 'Líneas Nazca',
        descripcion: 'Patrimonio cultural peruano',
        objetivo: 'Conocer geoglifos de Nazca',
        preguntas: [
          {
            pregunta: '¿Dónde están las Líneas de Nazca?',
            opciones: ['Cusco', 'Lima', 'Ica/Nazca', 'Arequipa'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué cultura creó las líneas?',
            opciones: ['Inca', 'Nazca', 'Moche', 'Chavín'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se ven mejor las líneas?',
            opciones: ['Desde el suelo', 'Desde el aire', 'De noche', 'Bajo el agua'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué figuras hay en Nazca?',
            opciones: ['Animales y figuras geométricas', 'Solo círculos', 'Solo cuadrados', 'Nada'],
            respuesta: 0
          },
          {
            pregunta: '¿Las líneas de Nazca son Patrimonio de?',
            opciones: ['Perú solo', 'Humanidad (UNESCO)', 'España', 'USA'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Perspectiva',
        descripcion: 'Dibujo con profundidad',
        objetivo: 'Crear ilusión de 3D',
        preguntas: [
          {
            pregunta: '¿Qué es la perspectiva en el arte?',
            opciones: ['Un color', 'Dar profundidad', 'Un pincel', 'Una técnica de pintura'],
            respuesta: 1
          },
          {
            pregunta: '¿Los objetos lejanos se ven?',
            opciones: ['Más grandes', 'Más pequeños', 'Iguales', 'Más oscuros'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué son las líneas de fuga?',
            opciones: ['Líneas rectas', 'Líneas que van al horizonte', 'Líneas curvas', 'Líneas verticales'],
            respuesta: 1
          },
          {
            pregunta: 'En la perspectiva, el horizonte es:',
            opciones: ['Abajo', 'Donde se unen cielo y tierra', 'Arriba', 'En el centro'],
            respuesta: 1
          },
          {
            pregunta: '¿La perspectiva ayuda a?',
            opciones: ['Colorear', 'Dar sensación de profundidad', 'Borrar', 'Cortar'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Instrumentos Andinos',
        descripcion: 'Música de los Andes',
        objetivo: 'Reconocer instrumentos peruanos',
        preguntas: [
          {
            pregunta: '¿Qué es la quena?',
            opciones: ['Un tambor', 'Una flauta', 'Una guitarra', 'Un cajón'],
            respuesta: 1
          },
          {
            pregunta: '¿El charango es parecido a?',
            opciones: ['Un tambor', 'Una guitarra pequeña', 'Una flauta', 'Un piano'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la zampoña?',
            opciones: ['Una flauta de varios tubos', 'Un tambor', 'Una cuerda', 'Un piano'],
            respuesta: 0
          },
          {
            pregunta: '¿De qué región son estos instrumentos?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Extranjeros'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué se toca la quena?',
            opciones: ['Soplando', 'Golpeando', 'Rasgando', 'Frotando'],
            respuesta: 0
          }
        ]
      }
    }
  }
};
