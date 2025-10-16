import { GradoData } from '../preguntas.types';

export const grado6v2: GradoData = {
  ingles: {
    frase: 'You are ready to conquer English! 🏆🌟',
    mision_logro: 'Dominar inglés a nivel intermedio',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Passive Voice',
        descripcion: 'Usa la voz pasiva correctamente',
        objetivo: 'Transformar oraciones a voz pasiva',
        preguntas: [
          {
            pregunta: '"They built the house" en pasiva es:',
            opciones: ['The house is built', 'The house was built', 'The house built', 'The house building'],
            respuesta: 1
          },
          {
            pregunta: '"Shakespeare wrote Hamlet" en pasiva:',
            opciones: ['Hamlet is written by Shakespeare', 'Hamlet was written by Shakespeare', 'Hamlet wrote by Shakespeare', 'Hamlet writing by Shakespeare'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuándo usamos la voz pasiva?',
            opciones: ['Siempre', 'Cuando el objeto es más importante', 'Nunca', 'Solo en pasado'],
            respuesta: 1
          },
          {
            pregunta: 'The cake ___ by Mary.',
            opciones: ['make', 'makes', 'was made', 'is making'],
            respuesta: 2
          },
          {
            pregunta: 'English ___ all over the world.',
            opciones: ['speak', 'speaks', 'is spoken', 'speaking'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Reported Speech',
        descripcion: 'Reporta lo que otros dijeron',
        objetivo: 'Usar el estilo indirecto',
        preguntas: [
          {
            pregunta: 'He said, "I am tired." → He said ___ tired.',
            opciones: ['I am', 'he was', 'he is', 'I was'],
            respuesta: 1
          },
          {
            pregunta: 'She said, "I will come." → She said ___.',
            opciones: ['she will come', 'she would come', 'I will come', 'I would come'],
            respuesta: 1
          },
          {
            pregunta: 'They said, "We are students." → They said ___.',
            opciones: ['we are students', 'they were students', 'we were students', 'they are students'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué cambia en reported speech?',
            opciones: ['Nada', 'Pronombres y tiempos verbales', 'Solo pronombres', 'Solo verbos'],
            respuesta: 1
          },
          {
            pregunta: '"Do you like pizza?" → He asked if ___.',
            opciones: ['I like pizza', 'I liked pizza', 'you liked pizza', 'you like pizza'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Phrasal Verbs',
        descripcion: 'Domina verbos con preposiciones',
        objetivo: 'Usar phrasal verbs comunes',
        preguntas: [
          {
            pregunta: '¿Qué significa "give up"?',
            opciones: ['Dar algo', 'Rendirse', 'Subir', 'Bajar'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué significa "look after"?',
            opciones: ['Buscar', 'Mirar después', 'Cuidar', 'Ver atrás'],
            respuesta: 2
          },
          {
            pregunta: 'Please ___ the lights when you leave.',
            opciones: ['turn off', 'turn on', 'turn up', 'turn down'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué significa "run into"?',
            opciones: ['Correr adentro', 'Encontrarse casualmente', 'Escapar', 'Entrar corriendo'],
            respuesta: 1
          },
          {
            pregunta: 'I need to ___ this information.',
            opciones: ['find out', 'find in', 'find up', 'find down'],
            respuesta: 0
          }
        ]
      }
    ]
  },
  matematica: {
    frase: '¡Las matemáticas son poder! 💪🔢',
    mision_logro: 'Resolver problemas de nivel avanzado',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Álgebra Básica',
        descripcion: 'Introduce ecuaciones y variables',
        objetivo: 'Resolver ecuaciones simples',
        preguntas: [
          {
            pregunta: 'Si x + 5 = 12, ¿cuánto vale x?',
            opciones: ['5', '6', '7', '8'],
            respuesta: 2
          },
          {
            pregunta: 'Si 3x = 15, ¿cuánto vale x?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 2
          },
          {
            pregunta: 'Si 2x + 3 = 11, ¿cuánto vale x?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es una variable?',
            opciones: ['Un número fijo', 'Un valor desconocido', 'Una operación', 'Un resultado'],
            respuesta: 1
          },
          {
            pregunta: 'Si x - 4 = 10, ¿cuánto vale x?',
            opciones: ['12', '13', '14', '15'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Proporcionalidad',
        descripcion: 'Resuelve problemas de proporciones',
        objetivo: 'Aplicar regla de tres',
        preguntas: [
          {
            pregunta: 'Si 3 lápices cuestan 6 soles, ¿cuánto cuestan 5 lápices?',
            opciones: ['8 soles', '9 soles', '10 soles', '12 soles'],
            respuesta: 2
          },
          {
            pregunta: 'Si 2 kg de manzanas cuestan 8 soles, ¿cuánto cuesta 1 kg?',
            opciones: ['2 soles', '3 soles', '4 soles', '5 soles'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es una proporción directa?',
            opciones: ['Cuando una aumenta, la otra disminuye', 'Cuando ambas aumentan o disminuyen juntas', 'No existe', 'Cuando son iguales'],
            respuesta: 1
          },
          {
            pregunta: 'Si 4 obreros hacen un trabajo en 6 días, ¿en cuántos días lo harán 8 obreros?',
            opciones: ['2 días', '3 días', '4 días', '6 días'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se resuelve una regla de tres simple?',
            opciones: ['Sumando', 'Multiplicando cruzado', 'Restando', 'Dividiendo directo'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Estadística Básica',
        descripcion: 'Analiza datos y gráficos',
        objetivo: 'Interpretar información estadística',
        preguntas: [
          {
            pregunta: '¿Qué es la media aritmética?',
            opciones: ['El valor más frecuente', 'El promedio', 'El valor central', 'El rango'],
            respuesta: 1
          },
          {
            pregunta: 'La media de 4, 6, 8 y 10 es:',
            opciones: ['6', '7', '8', '9'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la moda?',
            opciones: ['El promedio', 'El valor que más se repite', 'El valor central', 'La diferencia'],
            respuesta: 1
          },
          {
            pregunta: 'En el conjunto {2, 3, 3, 5, 7}, ¿cuál es la moda?',
            opciones: ['2', '3', '5', '7'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la mediana?',
            opciones: ['El promedio', 'La moda', 'El valor central ordenado', 'El rango'],
            respuesta: 2
          }
        ]
      }
    ]
  },
  comunicacion: {
    frase: '¡Comunica con maestría! 🎓✍️',
    mision_logro: 'Dominar la expresión oral y escrita',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Literatura Latinoamericana',
        descripcion: 'Conoce grandes autores de América',
        objetivo: 'Apreciar la literatura regional',
        preguntas: [
          {
            pregunta: '¿Quién escribió "Cien años de soledad"?',
            opciones: ['Pablo Neruda', 'Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar'],
            respuesta: 1
          },
          {
            pregunta: '¿De qué país es Mario Vargas Llosa?',
            opciones: ['Chile', 'Argentina', 'Perú', 'Colombia'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué es el realismo mágico?',
            opciones: ['Realismo puro', 'Mezcla de realidad y fantasía', 'Solo fantasía', 'Ciencia ficción'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién fue César Vallejo?',
            opciones: ['Pintor', 'Poeta peruano', 'Músico', 'Actor'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué es importante la literatura?',
            opciones: ['No es importante', 'Refleja y crea cultura', 'Solo entretiene', 'No tiene función'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Redacción Avanzada',
        descripcion: 'Escribe textos complejos',
        objetivo: 'Producir textos bien estructurados',
        preguntas: [
          {
            pregunta: '¿Qué es la tesis en un texto argumentativo?',
            opciones: ['Conclusión', 'Idea principal que se defiende', 'Un ejemplo', 'Una cita'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un ensayo?',
            opciones: ['Un cuento', 'Análisis reflexivo de un tema', 'Una novela', 'Un poema'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo debe ser la introducción?',
            opciones: ['Muy larga', 'Clara y atractiva', 'Con conclusión', 'Sin importancia'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué hace la conclusión?',
            opciones: ['Introduce el tema', 'Cierra y sintetiza ideas', 'Desarrolla argumentos', 'No sirve'],
            respuesta: 1
          },
          {
            pregunta: '¿Es importante revisar y corregir tu texto?',
            opciones: ['No', 'Sí, es esencial', 'A veces', 'Nunca'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Análisis Literario',
        descripcion: 'Analiza obras literarias',
        objetivo: 'Interpretar textos profundamente',
        preguntas: [
          {
            pregunta: '¿Qué es el tema de una obra?',
            opciones: ['El título', 'La idea central', 'El personaje', 'El final'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el conflicto en una narración?',
            opciones: ['El inicio', 'El problema central', 'El final feliz', 'Los personajes'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el narrador omnisciente?',
            opciones: ['Sabe todo', 'Sabe poco', 'Es un personaje', 'No existe'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es el clímax?',
            opciones: ['El inicio', 'El momento de mayor tensión', 'El final', 'La introducción'],
            respuesta: 1
          },
          {
            pregunta: '¿Se puede interpretar una obra de varias formas?',
            opciones: ['No, solo una', 'Sí, depende del lector', 'No tiene sentido', 'Es imposible'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  ciencia_tecnologia: {
    frase: '¡La ciencia y tecnología cambian el mundo! 🌍💻',
    mision_logro: 'Comprender ciencia aplicada y tecnología',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Sistema Nervioso',
        descripcion: 'Comprende cómo funciona tu cerebro',
        objetivo: 'Entender el sistema nervioso',
        preguntas: [
          {
            pregunta: '¿Cuál es el órgano principal del sistema nervioso?',
            opciones: ['Corazón', 'Cerebro', 'Pulmones', 'Estómago'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué transmiten las neuronas?',
            opciones: ['Sangre', 'Impulsos eléctricos', 'Oxígeno', 'Nutrientes'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué controla el sistema nervioso?',
            opciones: ['Solo el pensamiento', 'Todas las funciones del cuerpo', 'Solo el movimiento', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un reflejo?',
            opciones: ['Pensamiento', 'Respuesta automática', 'Decisión consciente', 'Un sentimiento'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde está la médula espinal?',
            opciones: ['En el cerebro', 'En la columna vertebral', 'En el corazón', 'En los músculos'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Energías Renovables',
        descripcion: 'Conoce alternativas energéticas',
        objetivo: 'Comprender energías limpias',
        preguntas: [
          {
            pregunta: '¿Cuál es una energía renovable?',
            opciones: ['Petróleo', 'Solar', 'Carbón', 'Gas natural'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué son importantes las energías renovables?',
            opciones: ['No son importantes', 'No contaminan y son infinitas', 'Son más caras', 'No funcionan'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué genera la energía eólica?',
            opciones: ['Agua', 'Viento', 'Sol', 'Tierra'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la energía hidroeléctrica?',
            opciones: ['Del sol', 'Del viento', 'Del agua', 'Del carbón'],
            respuesta: 2
          },
          {
            pregunta: '¿Los paneles solares producen electricidad?',
            opciones: ['No', 'Sí', 'Solo de noche', 'Solo en invierno'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Tecnología Digital',
        descripcion: 'Comprende el mundo digital',
        objetivo: 'Usar tecnología responsablemente',
        preguntas: [
          {
            pregunta: '¿Qué es el internet?',
            opciones: ['Un programa', 'Red global de computadoras', 'Un celular', 'Una página web'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el software?',
            opciones: ['El hardware', 'Programas y aplicaciones', 'Un cable', 'Una pantalla'],
            respuesta: 1
          },
          {
            pregunta: '¿Es importante proteger tu información personal online?',
            opciones: ['No', 'Sí, es crucial', 'A veces', 'No importa'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la inteligencia artificial?',
            opciones: ['Humanos inteligentes', 'Máquinas que aprenden', 'Un juego', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿La tecnología es neutral?',
            opciones: ['Sí, siempre es buena', 'Depende de cómo se use', 'Siempre es mala', 'No tiene efecto'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  personal_social: {
    frase: '¡Sé el cambio que quieres ver! ✊🌟',
    mision_logro: 'Ser un ciudadano global consciente',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'República del Perú',
        descripcion: 'Conoce la historia republicana',
        objetivo: 'Comprender el Perú moderno',
        preguntas: [
          {
            pregunta: '¿Cuándo empezó la República del Perú?',
            opciones: ['1810', '1821', '1824', '1830'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién fue el primer presidente del Perú?',
            opciones: ['San Martín', 'José de la Riva Agüero', 'Bolívar', 'Gamarra'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué fue la Guerra del Pacífico?',
            opciones: ['Guerra civil', 'Guerra contra Chile', 'Guerra contra España', 'Guerra contra Ecuador'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién fue Miguel Grau?',
            opciones: ['Un político', 'Héroe naval', 'Un escritor', 'Un científico'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la democracia?',
            opciones: ['Gobierno de uno', 'Gobierno del pueblo', 'Gobierno militar', 'No hay gobierno'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Globalización',
        descripcion: 'Comprende el mundo interconectado',
        objetivo: 'Entender fenómenos globales',
        preguntas: [
          {
            pregunta: '¿Qué es la globalización?',
            opciones: ['Aislamiento', 'Interconexión mundial', 'Solo comercio', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo afecta la globalización?',
            opciones: ['No afecta', 'En economía, cultura y sociedad', 'Solo economía', 'Solo cultura'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué facilita la globalización?',
            opciones: ['Aislamiento', 'Tecnología y transporte', 'Fronteras cerradas', 'Guerras'],
            respuesta: 1
          },
          {
            pregunta: '¿Tiene aspectos negativos la globalización?',
            opciones: ['No, solo positivos', 'Sí, como desigualdad', 'Solo negativos', 'No tiene efectos'],
            respuesta: 1
          },
          {
            pregunta: '¿Podemos ser ciudadanos globales?',
            opciones: ['No', 'Sí, pensando globalmente', 'Solo si viajas', 'Es imposible'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Desarrollo Sostenible',
        descripcion: 'Aprende sobre sostenibilidad',
        objetivo: 'Comprender el desarrollo responsable',
        preguntas: [
          {
            pregunta: '¿Qué es el desarrollo sostenible?',
            opciones: ['Desarrollo sin límites', 'Desarrollo que cuida el futuro', 'Solo crecimiento económico', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿Por qué es importante reciclar?',
            opciones: ['No es importante', 'Reduce contaminación', 'Es moda', 'No sirve'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el cambio climático?',
            opciones: ['Cambios normales', 'Alteración del clima por acción humana', 'No existe', 'Solo calor'],
            respuesta: 1
          },
          {
            pregunta: '¿Podemos ayudar al planeta?',
            opciones: ['No', 'Sí, con acciones cotidianas', 'Solo gobiernos', 'Solo empresas'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué son los Objetivos de Desarrollo Sostenible?',
            opciones: ['No existen', 'Metas globales de la ONU', 'Solo para ricos', 'No importan'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  arte_cultura: {
    frase: '¡Crea arte que inspire al mundo! 🌟🎨🎭',
    mision_logro: 'Ser un creador consciente y versátil',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Arte Contemporáneo',
        descripcion: 'Explora el arte actual',
        objetivo: 'Apreciar arte moderno y contemporáneo',
        preguntas: [
          {
            pregunta: '¿Qué caracteriza al arte contemporáneo?',
            opciones: ['Solo pintura', 'Diversidad de medios y conceptos', 'Solo escultura', 'Es antiguo'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el arte conceptual?',
            opciones: ['Solo belleza', 'La idea es más importante que la forma', 'No existe', 'Solo técnica'],
            respuesta: 1
          },
          {
            pregunta: '¿El arte digital es arte?',
            opciones: ['No', 'Sí', 'Solo el tradicional', 'No tiene valor'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es una instalación artística?',
            opciones: ['Una pintura', 'Obra en espacio tridimensional', 'Una escultura pequeña', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿El arte debe tener un mensaje?',
            opciones: ['Siempre', 'Puede tenerlo o no', 'Nunca', 'Es obligatorio'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Fusión Musical',
        descripcion: 'Mezcla géneros musicales',
        objetivo: 'Apreciar la diversidad musical',
        preguntas: [
          {
            pregunta: '¿Qué es la fusión musical?',
            opciones: ['Un género', 'Mezcla de estilos diferentes', 'Solo rock', 'No existe'],
            respuesta: 1
          },
          {
            pregunta: '¿Puedes mezclar música tradicional con moderna?',
            opciones: ['No', 'Sí, eso es innovación', 'Es prohibido', 'No funciona'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es el jazz?',
            opciones: ['Música clásica', 'Género afroamericano con improvisación', 'Rock', 'Música andina'],
            respuesta: 1
          },
          {
            pregunta: '¿La música tiene fronteras?',
            opciones: ['Sí, muchas', 'No, es universal', 'Solo por idioma', 'Siempre'],
            respuesta: 1
          },
          {
            pregunta: '¿Es válido crear tu propio estilo musical?',
            opciones: ['No', 'Sí, eso es creatividad', 'Solo profesionales', 'Es imposible'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Performance Art',
        descripcion: 'Arte en vivo y experimental',
        objetivo: 'Comprender el arte performático',
        preguntas: [
          {
            pregunta: '¿Qué es el performance art?',
            opciones: ['Teatro tradicional', 'Arte de acción en vivo', 'Pintura', 'Escultura'],
            respuesta: 1
          },
          {
            pregunta: '¿El performance puede tener mensaje social?',
            opciones: ['No', 'Sí', 'Nunca', 'No tiene sentido'],
            respuesta: 1
          },
          {
            pregunta: '¿Necesitas un escenario para hacer performance?',
            opciones: ['Sí, siempre', 'No, puede ser en cualquier lugar', 'Solo teatros', 'Solo museos'],
            respuesta: 1
          },
          {
            pregunta: '¿El cuerpo puede ser medio artístico?',
            opciones: ['No', 'Sí', 'Solo pinceles', 'No funciona'],
            respuesta: 1
          },
          {
            pregunta: '¿El arte puede generar cambio social?',
            opciones: ['No', 'Sí, sensibiliza y cuestiona', 'Solo entretiene', 'No tiene poder'],
            respuesta: 1
          }
        ]
      }
    ]
  }
};
