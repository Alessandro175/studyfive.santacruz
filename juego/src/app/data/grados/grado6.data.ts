import { GradoData } from '../preguntas.types';

export const grado6: GradoData = {
  ingles: {
    competencias: {
      competencia1: {
        nombre: 'Present Perfect',
        descripcion: 'Acciones que iniciaron en el pasado y continúan',
        objetivo: 'Usar have/has + participio',
        preguntas: [
          {
            pregunta: 'I ___ finished my homework',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 1
          },
          {
            pregunta: 'She ___ lived here for 5 years',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 0
          },
          {
            pregunta: 'They ___ never visited Paris',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 1
          },
          {
            pregunta: 'He ___ already eaten lunch',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 0
          },
          {
            pregunta: 'We ___ not seen that movie',
            opciones: ['has', 'have', 'had', 'having'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Modal Verbs',
        descripcion: 'Can, should, must, may',
        objetivo: 'Expresar habilidad, obligación y permiso',
        preguntas: [
          {
            pregunta: 'You ___ study for the exam (obligación)',
            opciones: ['can', 'should', 'may', 'could'],
            respuesta: 1
          },
          {
            pregunta: 'She ___ swim very well (habilidad)',
            opciones: ['can', 'must', 'should', 'may'],
            respuesta: 0
          },
          {
            pregunta: '___ I go to the bathroom? (permiso)',
            opciones: ['Can', 'Must', 'Should', 'Have'],
            respuesta: 0
          },
          {
            pregunta: 'You ___ not smoke here (prohibición)',
            opciones: ['can', 'must', 'should', 'may'],
            respuesta: 1
          },
          {
            pregunta: 'We ___ help our parents (deber moral)',
            opciones: ['can', 'should', 'may', 'could'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Science Vocabulary',
        descripcion: 'Términos científicos en inglés',
        objetivo: 'Vocabulario académico',
        preguntas: [
          {
            pregunta: '¿Qué es "matter"?',
            opciones: ['Materia', 'Energía', 'Fuerza', 'Luz'],
            respuesta: 0
          },
          {
            pregunta: '"Gravity" significa:',
            opciones: ['Masa', 'Gravedad', 'Velocidad', 'Aceleración'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es "ecosystem"?',
            opciones: ['Ecosistema', 'Animal', 'Planta', 'Piedra'],
            respuesta: 0
          },
          {
            pregunta: '"Cell" en biología es:',
            opciones: ['Célula', 'Tejido', 'Órgano', 'Sistema'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es "photosynthesis"?',
            opciones: ['Respiración', 'Fotosíntesis', 'Digestión', 'Circulación'],
            respuesta: 1
          }
        ]
      }
    }
  },
  matematica: {
    competencias: {
      competencia1: {
        nombre: 'Razones y Proporciones',
        descripcion: 'Relaciones entre cantidades',
        objetivo: 'Resolver problemas de proporcionalidad',
        preguntas: [
          {
            pregunta: 'Si 2 lápices cuestan 4 soles, ¿cuánto cuestan 5 lápices?',
            opciones: ['8 soles', '10 soles', '12 soles', '15 soles'],
            respuesta: 1
          },
          {
            pregunta: 'Una razón es:',
            opciones: ['Una suma', 'Una comparación', 'Una resta', 'Una división solo'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es la razón de 6 a 3?',
            opciones: ['1:2', '2:1', '3:1', '1:3'],
            respuesta: 1
          },
          {
            pregunta: 'Si 3 obreros construyen en 6 días, ¿cuántos días tardan 6 obreros?',
            opciones: ['3 días', '6 días', '9 días', '12 días'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es una proporción?',
            opciones: ['Una suma', 'Igualdad de razones', 'Una resta', 'Un número'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Números Enteros',
        descripcion: 'Positivos y negativos',
        objetivo: 'Operar con números negativos',
        preguntas: [
          {
            pregunta: '¿Cuánto es 5 + (-3)?',
            opciones: ['2', '8', '-2', '-8'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuánto es -4 - 2?',
            opciones: ['-2', '2', '-6', '6'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué número es mayor: -5 o -2?',
            opciones: ['-5', '-2', 'Son iguales', 'No se comparan'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es (-2) × 3?',
            opciones: ['6', '-6', '5', '-5'],
            respuesta: 1
          },
          {
            pregunta: 'El opuesto de 7 es:',
            opciones: ['7', '-7', '0', '14'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Estadística Básica',
        descripcion: 'Media, moda y mediana',
        objetivo: 'Interpretar datos',
        preguntas: [
          {
            pregunta: '¿Qué es la media?',
            opciones: ['El promedio', 'El valor más frecuente', 'El del medio', 'El máximo'],
            respuesta: 0
          },
          {
            pregunta: 'La moda de 2, 3, 3, 5, 7 es:',
            opciones: ['2', '3', '5', '7'],
            respuesta: 1
          },
          {
            pregunta: 'La mediana de 1, 3, 5, 7, 9 es:',
            opciones: ['1', '3', '5', '9'],
            respuesta: 2
          },
          {
            pregunta: '¿Cómo calculas la media de 4, 6, 8?',
            opciones: ['4+6+8', '(4+6+8)/3', '6', '8-4'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la moda?',
            opciones: ['El promedio', 'El más frecuente', 'El del medio', 'El mayor'],
            respuesta: 1
          }
        ]
      }
    }
  },
  comunicacion: {
    competencias: {
      competencia1: {
        nombre: 'Literatura Peruana',
        descripcion: 'Autores y obras representativas',
        objetivo: 'Conocer la literatura nacional',
        preguntas: [
          {
            pregunta: '¿Quién escribió "Tradiciones Peruanas"?',
            opciones: ['Vallejo', 'Palma', 'Arguedas', 'Vargas Llosa'],
            respuesta: 1
          },
          {
            pregunta: '¿César Vallejo fue un gran?',
            opciones: ['Poeta', 'Político', 'Científico', 'Pintor'],
            respuesta: 0
          },
          {
            pregunta: '"Los Ríos Profundos" es de:',
            opciones: ['Palma', 'Vallejo', 'Arguedas', 'Vargas Llosa'],
            respuesta: 2
          },
          {
            pregunta: '¿Un género literario es?',
            opciones: ['La narración', 'El color', 'El tamaño', 'El peso'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué es una metáfora?',
            opciones: ['Comparación directa', 'Figura literaria', 'Un poema', 'Un cuento'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Argumentación',
        descripcion: 'Exponer y defender ideas',
        objetivo: 'Estructurar argumentos',
        preguntas: [
          {
            pregunta: '¿Qué es un argumento?',
            opciones: ['Una pelea', 'Una razón para defender una idea', 'Una suma', 'Una pregunta'],
            respuesta: 1
          },
          {
            pregunta: 'Un texto argumentativo busca:',
            opciones: ['Narrar', 'Convencer', 'Describir', 'Informar solo'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué debe tener un buen argumento?',
            opciones: ['Solo opinión', 'Razones y ejemplos', 'Solo ejemplos', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿La tesis es?',
            opciones: ['Un ejemplo', 'La idea principal a defender', 'Una pregunta', 'Un título'],
            respuesta: 1
          },
          {
            pregunta: '¿Los conectores argumentativos sirven para?',
            opciones: ['Separar ideas', 'Unir y relacionar argumentos', 'Confundir', 'Decorar'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Ortografía Avanzada',
        descripcion: 'Uso de B/V, C/S/Z, G/J',
        objetivo: 'Escribir sin errores ortográficos',
        preguntas: [
          {
            pregunta: '¿Cómo se escribe? "Ha_ilidad"',
            opciones: ['Habilidad', 'Havilidad', 'Habilidá', 'Avilidá'],
            respuesta: 0
          },
          {
            pregunta: '¿Cómo se escribe? "_ivilización"',
            opciones: ['Civilización', 'Sivilisasión', 'Civilisación', 'Sivilización'],
            respuesta: 0
          },
          {
            pregunta: 'Se escribe con B las terminaciones del imperfecto:',
            opciones: ['Sí (-aba, -ábamos)', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: '¿Cómo se escribe? "_eografía"',
            opciones: ['Jeografía', 'Geografía', 'Geograpia', 'Jeograpia'],
            respuesta: 1
          },
          {
            pregunta: 'Antes de B y P se escribe:',
            opciones: ['N', 'M', 'R', 'L'],
            respuesta: 1
          }
        ]
      }
    }
  },
  ciencia_tecnologia: {
    competencias: {
      competencia1: {
        nombre: 'Reproducción Humana',
        descripcion: 'Sistema reproductor y desarrollo',
        objetivo: 'Comprender la reproducción de forma científica',
        preguntas: [
          {
            pregunta: '¿Dónde se desarrolla el bebé?',
            opciones: ['En el estómago', 'En el útero', 'En los pulmones', 'En el corazón'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos cromosomas tiene una célula humana normal?',
            opciones: ['23', '46', '48', '50'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la fecundación?',
            opciones: ['Unión de células sexuales', 'División celular', 'Respiración', 'Digestión'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuánto dura aproximadamente un embarazo?',
            opciones: ['6 meses', '9 meses', '12 meses', '3 meses'],
            respuesta: 1
          },
          {
            pregunta: '¿Los caracteres sexuales secundarios aparecen en?',
            opciones: ['La niñez', 'La pubertad', 'La vejez', 'El nacimiento'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Electricidad y Magnetismo',
        descripcion: 'Conceptos básicos de electricidad',
        objetivo: 'Entender circuitos simples',
        preguntas: [
          {
            pregunta: '¿Qué es un circuito eléctrico?',
            opciones: ['Un camino cerrado para la electricidad', 'Un cable', 'Una batería', 'Un foco'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué necesita un circuito para funcionar?',
            opciones: ['Solo cables', 'Fuente, conductor y receptor', 'Solo un foco', 'Solo una pila'],
            respuesta: 1
          },
          {
            pregunta: '¿Los metales son buenos?',
            opciones: ['Aislantes', 'Conductores', 'Ni uno ni otro', 'Ambos'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un imán?',
            opciones: ['Atrae metales', 'Repele todo', 'No hace nada', 'Solo pega'],
            respuesta: 0
          },
          {
            pregunta: 'La electricidad estática se produce por:',
            opciones: ['Fricción', 'Agua', 'Aire', 'Luz'],
            respuesta: 0
          }
        ]
      },
      competencia3: {
        nombre: 'Cambio Climático',
        descripcion: 'Causas y consecuencias del calentamiento global',
        objetivo: 'Comprender problemas ambientales',
        preguntas: [
          {
            pregunta: '¿Qué es el efecto invernadero?',
            opciones: ['Gases que atrapan calor', 'Un tipo de lluvia', 'Un fenómeno espacial', 'Una estación'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuál es un gas de efecto invernadero?',
            opciones: ['Oxígeno', 'CO2 (dióxido de carbono)', 'Nitrógeno', 'Hidrógeno'],
            respuesta: 1
          },
          {
            pregunta: '¿El calentamiento global causa?',
            opciones: ['Deshielo de glaciares', 'Más frío', 'Nada', 'Menos lluvia solo'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué actividad humana contribuye al cambio climático?',
            opciones: ['Plantar árboles', 'Quemar combustibles fósiles', 'Reciclar', 'Caminar'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo podemos reducir el impacto ambiental?',
            opciones: ['Usar más plástico', 'Reducir, reutilizar, reciclar', 'Desperdiciar energía', 'Talar árboles'],
            respuesta: 1
          }
        ]
      }
    }
  },
  personal_social: {
    competencias: {
      competencia1: {
        nombre: 'Guerra del Pacífico',
        descripcion: 'Conflicto entre Perú, Chile y Bolivia',
        objetivo: 'Conocer este periodo histórico',
        preguntas: [
          {
            pregunta: '¿En qué años fue la Guerra del Pacífico?',
            opciones: ['1821-1824', '1879-1884', '1941-1942', '1968-1975'],
            respuesta: 1
          },
          {
            pregunta: '¿Contra qué país peleó principalmente el Perú?',
            opciones: ['Ecuador', 'Brasil', 'Chile', 'Argentina'],
            respuesta: 2
          },
          {
            pregunta: '¿Quién fue Miguel Grau?',
            opciones: ['Un presidente', 'Héroe naval', 'Un conquistador', 'Un político'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué perdió el Perú en esta guerra?',
            opciones: ['Nada', 'Territorios del sur', 'Todo el país', 'Lima'],
            respuesta: 1
          },
          {
            pregunta: '¿Francisco Bolognesi defendió?',
            opciones: ['Lima', 'Cusco', 'El Morro de Arica', 'Arequipa'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Constitución Política',
        descripcion: 'Leyes fundamentales del Perú',
        objetivo: 'Conocer el marco legal del país',
        preguntas: [
          {
            pregunta: '¿Qué es la Constitución?',
            opciones: ['Un libro', 'Ley suprema del país', 'Una novela', 'Un periódico'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos poderes del Estado hay?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 2
          },
          {
            pregunta: '¿Quién hace las leyes?',
            opciones: ['El presidente', 'El Congreso', 'Los jueces', 'El pueblo directamente'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién aplica las leyes y juzga?',
            opciones: ['Ejecutivo', 'Legislativo', 'Judicial', 'Ninguno'],
            respuesta: 2
          },
          {
            pregunta: '¿El presidente representa al poder?',
            opciones: ['Legislativo', 'Ejecutivo', 'Judicial', 'Ninguno'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Regiones del Perú',
        descripcion: 'División política actual',
        objetivo: 'Conocer la geografía política',
        preguntas: [
          {
            pregunta: '¿Cuántas regiones tiene el Perú?',
            opciones: ['20', '24', '25', '26'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es la capital del Perú?',
            opciones: ['Cusco', 'Arequipa', 'Lima', 'Trujillo'],
            respuesta: 2
          },
          {
            pregunta: '¿La región más grande del Perú es?',
            opciones: ['Lima', 'Cusco', 'Loreto', 'Arequipa'],
            respuesta: 2
          },
          {
            pregunta: '¿Arequipa está en qué región natural?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Mar'],
            respuesta: 1
          },
          {
            pregunta: '¿La región de Ucayali está en?',
            opciones: ['Costa', 'Sierra', 'Selva', 'Frontera'],
            respuesta: 2
          }
        ]
      }
    }
  },
  arte_cultura: {
    competencias: {
      competencia1: {
        nombre: 'Arquitectura Peruana',
        descripcion: 'Estilos arquitectónicos a través del tiempo',
        objetivo: 'Reconocer patrimonio arquitectónico',
        preguntas: [
          {
            pregunta: '¿Qué es Machu Picchu?',
            opciones: ['Una ciudad inca', 'Un templo colonial', 'Un museo', 'Un parque'],
            respuesta: 0
          },
          {
            pregunta: '¿La arquitectura colonial se caracteriza por?',
            opciones: ['Piedra inca', 'Balcones y iglesias barrocas', 'Modernismo', 'Minimalismo'],
            respuesta: 1
          },
          {
            pregunta: '¿Chan Chan fue construida por?',
            opciones: ['Incas', 'Chimú', 'Moche', 'Nazca'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde hay más construcciones coloniales?',
            opciones: ['Selva', 'Costa y sierra', 'Montañas altas', 'Playas'],
            respuesta: 1
          },
          {
            pregunta: '¿El Centro Histórico de Lima es Patrimonio?',
            opciones: ['Nacional solo', 'De la Humanidad', 'Local', 'No lo es'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Composición Visual',
        descripcion: 'Equilibrio, contraste, armonía',
        objetivo: 'Crear obras balanceadas',
        preguntas: [
          {
            pregunta: '¿Qué es la composición en el arte?',
            opciones: ['El color', 'La organización de elementos', 'El tamaño', 'El peso'],
            respuesta: 1
          },
          {
            pregunta: '¿El contraste es?',
            opciones: ['Usar colores iguales', 'Diferencias marcadas', 'Solo blanco y negro', 'Sin diferencias'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la simetría?',
            opciones: ['Equilibrio desigual', 'Equilibrio igual en ambos lados', 'Sin orden', 'Caos'],
            respuesta: 1
          },
          {
            pregunta: 'La regla de los tercios sirve para:',
            opciones: ['Dividir en tres', 'Componer fotos y pinturas', 'Sumar', 'Restar'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué crea profundidad en una composición?',
            opciones: ['El color', 'La perspectiva', 'El peso', 'El olor'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Teatro Peruano',
        descripcion: 'Historia del teatro en el Perú',
        objetivo: 'Valorar las artes escénicas',
        preguntas: [
          {
            pregunta: '¿Qué es el "Teatro de títeres"?',
            opciones: ['Teatro con muñecos', 'Teatro sin actores', 'Teatro musical', 'Teatro de sombras'],
            respuesta: 0
          },
          {
            pregunta: '¿Una obra de teatro tiene?',
            opciones: ['Solo diálogos', 'Actos, escenas y diálogos', 'Solo música', 'Solo baile'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es un monólogo?',
            opciones: ['Hablan todos', 'Habla solo uno', 'No hablan', 'Cantan'],
            respuesta: 1
          },
          {
            pregunta: '¿La escenografía es?',
            opciones: ['Los actores', 'El decorado del escenario', 'El público', 'El guion'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la improvisación teatral?',
            opciones: ['Seguir el guion exacto', 'Actuar sin guion previo', 'No actuar', 'Leer'],
            respuesta: 1
          }
        ]
      }
    }
  }
};
