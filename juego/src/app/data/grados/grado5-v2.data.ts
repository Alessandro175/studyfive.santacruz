import { GradoData } from '../preguntas.types';

export const grado5v2: GradoData = {
  ingles: {
    frase: 'Master English, master the world! 🌎📖',
    mision_logro: 'Comunicarte con confianza en inglés',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Present Perfect',
        descripcion: 'Habla sobre experiencias pasadas',
        objetivo: 'Usar el presente perfecto correctamente',
        preguntas: [
          {
            pregunta: 'I ___ never ___ to Paris.',
            opciones: ['has/been', 'have/been', 'have/go', 'has/go'],
            respuesta: 1
          },
          {
            pregunta: 'She ___ already ___ her homework.',
            opciones: ['have/finish', 'has/finished', 'have/finished', 'has/finish'],
            respuesta: 1
          },
          {
            pregunta: 'Have you ___ eaten sushi?',
            opciones: ['never', 'ever', 'already', 'just'],
            respuesta: 1
          },
          {
            pregunta: 'They ___ lived here for 5 years.',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuándo usamos "yet"?',
            opciones: ['Afirmativas', 'Negativas e interrogativas', 'Solo preguntas', 'Nunca'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Modal Verbs',
        descripcion: 'Expresa posibilidad, obligación y habilidad',
        objetivo: 'Usar verbos modales correctamente',
        preguntas: [
          {
            pregunta: 'You ___ study for the exam.',
            opciones: ['can', 'should', 'may', 'might'],
            respuesta: 1
          },
          {
            pregunta: '___ I borrow your pen?',
            opciones: ['Should', 'Must', 'Can', 'Have to'],
            respuesta: 2
          },
          {
            pregunta: 'She ___ speak three languages.',
            opciones: ['can', 'must', 'should', 'have to'],
            respuesta: 0
          },
          {
            pregunta: 'You ___ wear a uniform at school (obligación).',
            opciones: ['can', 'may', 'must', 'could'],
            respuesta: 2
          },
          {
            pregunta: 'It ___ rain tomorrow (posibilidad).',
            opciones: ['must', 'should', 'might', 'can'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Conditional Sentences',
        descripcion: 'Habla sobre situaciones hipotéticas',
        objetivo: 'Formar oraciones condicionales',
        preguntas: [
          {
            pregunta: 'If it ___, we will stay home.',
            opciones: ['rain', 'rains', 'rained', 'raining'],
            respuesta: 1
          },
          {
            pregunta: 'I would travel if I ___ money.',
            opciones: ['have', 'has', 'had', 'having'],
            respuesta: 2
          },
          {
            pregunta: 'If you study hard, you ___ pass.',
            opciones: ['will', 'would', 'can', 'could'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué tipo de condicional es "If I were rich, I would buy a car"?',
            opciones: ['Tipo 0', 'Tipo 1', 'Tipo 2', 'Tipo 3'],
            respuesta: 2
          },
          {
            pregunta: 'If she ___ earlier, she catches the bus.',
            opciones: ['leave', 'leaves', 'left', 'leaving'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  matematica: {
    frase: '¡Las matemáticas son el lenguaje del universo! 🔢🌌',
    mision_logro: 'Resolver problemas complejos',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Números Decimales',
        descripcion: 'Opera con números decimales',
        objetivo: 'Dominar operaciones con decimales',
        preguntas: [
          {
            pregunta: '¿Cuánto es 3.5 + 2.3?',
            opciones: ['5.8', '5.7', '6.8', '5.9'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuánto es 10.5 - 3.2?',
            opciones: ['7.2', '7.3', '7.4', '7.5'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 2.5 × 4?',
            opciones: ['8', '9', '10', '11'],
            respuesta: 2
          },
          {
            pregunta: 'Convierte 3/4 a decimal:',
            opciones: ['0.25', '0.5', '0.75', '1'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué decimal es mayor: 0.8 o 0.75?',
            opciones: ['0.75', '0.8', 'Son iguales', 'No se puede saber'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Porcentajes',
        descripcion: 'Calcula porcentajes',
        objetivo: 'Resolver problemas con porcentajes',
        preguntas: [
          {
            pregunta: '¿Cuánto es el 50% de 80?',
            opciones: ['30', '35', '40', '45'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es el 25% de 100?',
            opciones: ['20', '25', '30', '35'],
            respuesta: 1
          },
          {
            pregunta: 'Si un pantalón cuesta 60 soles y tiene 20% de descuento, ¿cuánto pagas?',
            opciones: ['40', '45', '48', '50'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué porcentaje es 15 de 60?',
            opciones: ['20%', '25%', '30%', '35%'],
            respuesta: 1
          },
          {
            pregunta: 'El 10% de 250 es:',
            opciones: ['20', '25', '30', '35'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Geometría',
        descripcion: 'Calcula áreas y perímetros',
        objetivo: 'Resolver problemas geométricos',
        preguntas: [
          {
            pregunta: '¿Cuál es el perímetro de un cuadrado de lado 5 cm?',
            opciones: ['15 cm', '20 cm', '25 cm', '30 cm'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el área de un rectángulo de 6 cm × 4 cm?',
            opciones: ['20 cm²', '22 cm²', '24 cm²', '26 cm²'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuántos lados tiene un hexágono?',
            opciones: ['5', '6', '7', '8'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el área de un triángulo con base 8 cm y altura 5 cm?',
            opciones: ['15 cm²', '20 cm²', '25 cm²', '30 cm²'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se calcula el área de un círculo?',
            opciones: ['π × r', 'π × r²', '2π × r', 'π × d'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  comunicacion: {
    frase: '¡Domina el lenguaje, domina el mundo! ✍️📚',
    mision_logro: 'Comunicarte con precisión y estilo',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Análisis Sintáctico',
        descripcion: 'Identifica partes de la oración',
        objetivo: 'Analizar oraciones gramaticalmente',
        preguntas: [
          {
            pregunta: 'En "El niño corre rápido", ¿cuál es el sujeto?',
            opciones: ['El', 'niño', 'El niño', 'corre'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es el predicado?',
            opciones: ['Quién hace la acción', 'Lo que se dice del sujeto', 'Un adjetivo', 'Un sustantivo'],
            respuesta: 1
          },
          {
            pregunta: 'En "María estudia matemáticas", ¿cuál es el verbo?',
            opciones: ['María', 'estudia', 'matemáticas', 'Ninguno'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el objeto directo?',
            opciones: ['Quién hace la acción', 'Sobre quién recae la acción', 'Un adjetivo', 'Una preposición'],
            respuesta: 1
          },
          {
            pregunta: 'En "Juan le dio un libro a María", ¿cuál es el objeto indirecto?',
            opciones: ['Juan', 'libro', 'a María', 'dio'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Figuras Literarias',
        descripcion: 'Reconoce recursos literarios',
        objetivo: 'Identificar figuras retóricas',
        preguntas: [
          {
            pregunta: '"Tus ojos son dos luceros" es un ejemplo de:',
            opciones: ['Comparación', 'Metáfora', 'Hipérbole', 'Personificación'],
            respuesta: 1
          },
          {
            pregunta: '"El viento susurraba secretos" es:',
            opciones: ['Metáfora', 'Comparación', 'Personificación', 'Hipérbole'],
            respuesta: 2
          },
          {
            pregunta: '"Es tan alto como una jirafa" es:',
            opciones: ['Metáfora', 'Comparación', 'Hipérbole', 'Personificación'],
            respuesta: 1
          },
          {
            pregunta: '"Estoy muerto de hambre" es:',
            opciones: ['Literal', 'Hipérbole', 'Metáfora', 'Comparación'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué figura usa "como", "cual", "parece"?',
            opciones: ['Metáfora', 'Comparación', 'Hipérbole', 'Personificación'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Géneros Literarios',
        descripcion: 'Diferencia géneros literarios',
        objetivo: 'Clasificar textos por género',
        preguntas: [
          {
            pregunta: '¿Qué género literario cuenta historias con personajes?',
            opciones: ['Lírico', 'Narrativo', 'Dramático', 'Ensayo'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué género se escribe en verso y expresa emociones?',
            opciones: ['Narrativo', 'Dramático', 'Lírico', 'Épico'],
            respuesta: 2
          },
          {
            pregunta: 'Una obra de teatro pertenece al género:',
            opciones: ['Narrativo', 'Lírico', 'Dramático', 'Épico'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es una novela?',
            opciones: ['Un poema largo', 'Una narración extensa', 'Una obra de teatro', 'Un ensayo'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es un subgénero narrativo?',
            opciones: ['Soneto', 'Cuento', 'Oda', 'Comedia'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  ciencia_tecnologia: {
    frase: '¡La ciencia es la clave del futuro! 🚀🔬',
    mision_logro: 'Comprender principios científicos avanzados',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Sistema Circulatorio',
        descripcion: 'Comprende cómo circula la sangre',
        objetivo: 'Entender el sistema circulatorio humano',
        preguntas: [
          {
            pregunta: '¿Qué órgano bombea la sangre?',
            opciones: ['Pulmones', 'Corazón', 'Hígado', 'Riñones'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué transporta la sangre?',
            opciones: ['Solo oxígeno', 'Oxígeno y nutrientes', 'Solo agua', 'Solo aire'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas cavidades tiene el corazón?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué son las arterias?',
            opciones: ['Llevan sangre al corazón', 'Llevan sangre desde el corazón', 'No existen', 'Son músculos'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde se intercambia oxígeno por CO2?',
            opciones: ['Corazón', 'Pulmones', 'Estómago', 'Cerebro'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Electricidad y Magnetismo',
        descripcion: 'Comprende fenómenos electromagnéticos',
        objetivo: 'Entender conceptos básicos de electricidad',
        preguntas: [
          {
            pregunta: '¿Qué es un circuito eléctrico?',
            opciones: ['Un cable', 'Un camino cerrado para la electricidad', 'Una lámpara', 'Una pila'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué materiales conducen electricidad?',
            opciones: ['Madera', 'Plástico', 'Metales', 'Caucho'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué hace un interruptor?',
            opciones: ['Nada', 'Abre o cierra el circuito', 'Genera electricidad', 'Almacena energía'],
            respuesta: 1
          },
          {
            pregunta: '¿Los imanes atraen todo?',
            opciones: ['Sí', 'No, solo metales ferromagnéticos', 'Solo madera', 'Todo menos metal'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué son los polos de un imán?',
            opciones: ['Norte y Sur', 'Este y Oeste', 'Arriba y Abajo', 'No tienen polos'],
            respuesta: 0
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Método Científico',
        descripcion: 'Aplica el método científico',
        objetivo: 'Comprender cómo se hace ciencia',
        preguntas: [
          {
            pregunta: '¿Cuál es el primer paso del método científico?',
            opciones: ['Experimentar', 'Observar', 'Concluir', 'Publicar'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es una hipótesis?',
            opciones: ['Una conclusión', 'Una posible explicación', 'Un experimento', 'Una ley'],
            respuesta: 1
          },
          {
            pregunta: '¿Para qué sirve el experimento?',
            opciones: ['Para jugar', 'Para comprobar la hipótesis', 'Para gastar tiempo', 'No sirve'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué haces si tu hipótesis es incorrecta?',
            opciones: ['Abandonar', 'Formular una nueva', 'Mentir', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿Es importante registrar los resultados?',
            opciones: ['No', 'Sí', 'A veces', 'Nunca'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  personal_social: {
    frase: '¡Construye una sociedad mejor! 🏛️🌍',
    mision_logro: 'Ser un ciudadano consciente y activo',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Independencia del Perú',
        descripcion: 'Comprende el proceso de independencia',
        objetivo: 'Entender la lucha por la libertad',
        preguntas: [
          {
            pregunta: '¿En qué año se proclamó la independencia del Perú?',
            opciones: ['1810', '1821', '1824', '1830'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién proclamó la independencia?',
            opciones: ['Simón Bolívar', 'José de San Martín', 'Túpac Amaru', 'Miguel Grau'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde se proclamó la independencia?',
            opciones: ['Cusco', 'Arequipa', 'Lima', 'Trujillo'],
            respuesta: 2
          },
          {
            pregunta: '¿Quién consolidó la independencia en Ayacucho?',
            opciones: ['San Martín', 'Bolívar y Sucre', 'O\'Higgins', 'Miranda'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué lucharon los próceres?',
            opciones: ['Por dinero', 'Por libertad', 'Por fama', 'Por tierras'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Geografía Económica',
        descripcion: 'Comprende las actividades económicas',
        objetivo: 'Identificar sectores productivos del Perú',
        preguntas: [
          {
            pregunta: '¿Cuál es el sector primario?',
            opciones: ['Industria', 'Servicios', 'Extracción de recursos', 'Tecnología'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué actividad pertenece al sector secundario?',
            opciones: ['Pesca', 'Manufactura', 'Turismo', 'Minería'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué recursos minerales tiene Perú?',
            opciones: ['Ninguno', 'Cobre, oro, plata', 'Solo carbón', 'Solo hierro'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la agricultura?',
            opciones: ['Criar animales', 'Cultivar plantas', 'Pescar', 'Construir'],
            respuesta: 1
          },
          {
            pregunta: '¿El turismo a qué sector pertenece?',
            opciones: ['Primario', 'Secundario', 'Terciario', 'Ninguno'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Derechos Humanos',
        descripcion: 'Conoce tus derechos fundamentales',
        objetivo: 'Comprender y defender derechos humanos',
        preguntas: [
          {
            pregunta: '¿Qué son los derechos humanos?',
            opciones: ['Privilegios', 'Derechos universales de toda persona', 'Solo para adultos', 'No existen'],
            respuesta: 1
          },
          {
            pregunta: '¿Todos tenemos los mismos derechos?',
            opciones: ['No', 'Sí', 'Solo los adultos', 'Solo algunos países'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es un derecho humano?',
            opciones: ['Tener auto', 'Vivir dignamente', 'Tener celular', 'Ser rico'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién debe respetar los derechos humanos?',
            opciones: ['Solo gobiernos', 'Todos', 'Solo policías', 'Nadie'],
            respuesta: 1
          },
          {
            pregunta: '¿Es la educación un derecho?',
            opciones: ['No', 'Sí', 'Solo en algunos países', 'Es un privilegio'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  arte_cultura: {
    frase: '¡El arte transforma el mundo! 🎨🎭🎵',
    mision_logro: 'Crear y apreciar arte con profundidad',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Historia del Arte',
        descripcion: 'Conoce movimientos artísticos',
        objetivo: 'Apreciar diferentes estilos artísticos',
        preguntas: [
          {
            pregunta: '¿Qué es el Renacimiento?',
            opciones: ['Un periodo medieval', 'Renacimiento del arte clásico', 'Arte moderno', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién pintó la Mona Lisa?',
            opciones: ['Picasso', 'Van Gogh', 'Leonardo da Vinci', 'Dalí'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué caracteriza al arte abstracto?',
            opciones: ['Realismo extremo', 'No representa la realidad literal', 'Solo paisajes', 'Solo retratos'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el impresionismo?',
            opciones: ['Arte religioso', 'Captura impresiones de luz', 'Arte abstracto', 'Arte digital'],
            respuesta: 1
          },
          {
            pregunta: '¿El arte tiene función social?',
            opciones: ['No', 'Sí, refleja y cuestiona la sociedad', 'Solo decorativa', 'Ninguna'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Composición Musical',
        descripcion: 'Comprende estructura musical',
        objetivo: 'Analizar y crear música',
        preguntas: [
          {
            pregunta: '¿Qué es una escala musical?',
            opciones: ['Un instrumento', 'Secuencia ordenada de notas', 'Un ritmo', 'Un género'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas notas tiene la escala diatónica?',
            opciones: ['5', '6', '7', '8'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es el compás en música?',
            opciones: ['Un instrumento', 'Organización rítmica', 'Un volumen', 'Una nota'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la melodía?',
            opciones: ['Ritmo', 'Secuencia de notas musicales', 'Volumen', 'Timbre'],
            respuesta: 1
          },
          {
            pregunta: '¿Puedes crear tu propia música?',
            opciones: ['No', 'Sí, con creatividad', 'Solo profesionales', 'Es imposible'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Expresión Corporal',
        descripcion: 'Comunica con tu cuerpo',
        objetivo: 'Dominar la expresión no verbal',
        preguntas: [
          {
            pregunta: '¿Qué es la danza contemporánea?',
            opciones: ['Danza antigua', 'Danza moderna y experimental', 'Solo ballet', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿El lenguaje corporal comunica?',
            opciones: ['No', 'Sí, emociones e ideas', 'Solo palabras comunican', 'A veces'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la coreografía?',
            opciones: ['Un instrumento', 'Secuencia planeada de movimientos', 'Un tipo de música', 'Un color'],
            respuesta: 1
          },
          {
            pregunta: '¿La danza es arte?',
            opciones: ['No', 'Sí', 'Solo el ballet', 'Solo moderna'],
            respuesta: 1
          },
          {
            pregunta: '¿Puedes expresar emociones sin palabras?',
            opciones: ['No', 'Sí, con gestos y movimientos', 'Es imposible', 'Solo hablando'],
            respuesta: 1
          }
        ]
      }
    ]
  }
};
