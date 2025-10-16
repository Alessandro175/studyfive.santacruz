import { GradoData } from '../preguntas.types';

export const grado4: GradoData = {
  ingles: {
    competencias: {
      competencia1: {
        nombre: 'Past Simple',
        descripcion: 'Verbos en pasado simple',
        objetivo: 'Usar verbos en tiempo pasado',
        preguntas: [
          {
            pregunta: 'I ___ to the park yesterday',
            opciones: ['go', 'goes', 'went', 'going'],
            respuesta: 2
          },
          {
            pregunta: 'She ___ her homework last night',
            opciones: ['do', 'does', 'did', 'doing'],
            respuesta: 2
          },
          {
            pregunta: 'They ___ soccer last weekend',
            opciones: ['play', 'plays', 'played', 'playing'],
            respuesta: 2
          },
          {
            pregunta: 'We ___ pizza for dinner',
            opciones: ['eat', 'eats', 'ate', 'eating'],
            respuesta: 2
          },
          {
            pregunta: 'He ___ a movie on Saturday',
            opciones: ['watch', 'watches', 'watched', 'watching'],
            respuesta: 2
          }
        ]
      },
      competencia2: {
        nombre: 'Question Words',
        descripcion: 'Palabras interrogativas (What, Where, When)',
        objetivo: 'Formular preguntas correctamente',
        preguntas: [
          {
            pregunta: '___ is your name?',
            opciones: ['What', 'Where', 'When', 'Who'],
            respuesta: 0
          },
          {
            pregunta: '___ do you live?',
            opciones: ['What', 'Where', 'When', 'How'],
            respuesta: 1
          },
          {
            pregunta: '___ is your birthday?',
            opciones: ['What', 'Where', 'When', 'Why'],
            respuesta: 2
          },
          {
            pregunta: '___ is she? She is my sister',
            opciones: ['What', 'Where', 'When', 'Who'],
            respuesta: 3
          },
          {
            pregunta: '___ old are you?',
            opciones: ['What', 'Where', 'How', 'Why'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Parts of the House',
        descripcion: 'Vocabulario de la casa (habitaciones)',
        objetivo: 'Nombrar partes de la casa',
        preguntas: [
          {
            pregunta: '¿Dónde cocinas?',
            opciones: ['Bedroom', 'Kitchen', 'Bathroom', 'Living room'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde duermes?',
            opciones: ['Kitchen', 'Bedroom', 'Bathroom', 'Garage'],
            respuesta: 1
          },
          {
            pregunta: '"Living room" significa:',
            opciones: ['Cocina', 'Baño', 'Sala', 'Dormitorio'],
            respuesta: 2
          },
          {
            pregunta: '¿Dónde te bañas?',
            opciones: ['Kitchen', 'Bedroom', 'Bathroom', 'Living room'],
            respuesta: 2
          },
          {
            pregunta: '"Roof" significa:',
            opciones: ['Pared', 'Piso', 'Techo', 'Ventana'],
            respuesta: 2
          }
        ]
      }
    }
  },
  matematica: {
    competencias: {
      competencia1: {
        nombre: 'División Básica',
        descripcion: 'División entre números de una cifra',
        objetivo: 'Realizar divisiones simples',
        preguntas: [
          {
            pregunta: '¿Cuánto es 12 ÷ 3?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 20 ÷ 4?',
            opciones: ['4', '5', '6', '7'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 18 ÷ 6?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 15 ÷ 5?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 24 ÷ 6?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Números Decimales',
        descripcion: 'Introducción a décimas',
        objetivo: 'Leer y escribir decimales simples',
        preguntas: [
          {
            pregunta: '¿Cómo se lee 2.5?',
            opciones: ['Dos cinco', 'Dos punto cinco', 'Veinticinco', 'Dos y medio'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 0.5 + 0.5?',
            opciones: ['0.10', '1.0', '0.25', '1.5'],
            respuesta: 1
          },
          {
            pregunta: 'El número 3.2 se lee:',
            opciones: ['Tres dos', 'Treinta y dos', 'Tres punto dos', 'Tres con dos'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué número es mayor: 1.8 o 1.3?',
            opciones: ['1.8', '1.3', 'Son iguales', 'No se puede saber'],
            respuesta: 0
          },
          {
            pregunta: '¿Cuántas décimas tiene 1.5?',
            opciones: ['1', '5', '15', '10'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Área de Figuras',
        descripcion: 'Calcula el área de cuadrados y rectángulos',
        objetivo: 'Multiplicar base por altura',
        preguntas: [
          {
            pregunta: 'Un cuadrado tiene lados de 4 cm. ¿Cuál es su área?',
            opciones: ['8 cm²', '12 cm²', '16 cm²', '20 cm²'],
            respuesta: 2
          },
          {
            pregunta: 'El área de un rectángulo de 5 cm × 3 cm es:',
            opciones: ['8 cm²', '10 cm²', '15 cm²', '20 cm²'],
            respuesta: 2
          },
          {
            pregunta: '¿Cómo se calcula el área de un cuadrado?',
            opciones: ['Lado + lado', 'Lado × lado', 'Lado ÷ lado', 'Lado - lado'],
            respuesta: 1
          },
          {
            pregunta: 'El área se mide en:',
            opciones: ['Centímetros', 'Centímetros cuadrados', 'Metros', 'Kilogramos'],
            respuesta: 1
          },
          {
            pregunta: 'Un rectángulo de 6 cm × 2 cm tiene un área de:',
            opciones: ['8 cm²', '10 cm²', '12 cm²', '16 cm²'],
            respuesta: 2
          }
        ]
      }
    }
  },
  comunicacion: {
    competencias: {
      competencia1: {
        nombre: 'El Artículo',
        descripcion: 'Artículos definidos e indefinidos',
        objetivo: 'Usar correctamente el, la, un, una',
        preguntas: [
          {
            pregunta: '¿Qué artículo va antes? ___ casa',
            opciones: ['El', 'La', 'Los', 'Las'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué artículo es indefinido?',
            opciones: ['El', 'La', 'Un', 'Los'],
            respuesta: 2
          },
          {
            pregunta: '___ perros son animales',
            opciones: ['El', 'La', 'Los', 'Las'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es un artículo definido?',
            opciones: ['Un', 'Una', 'El', 'Unos'],
            respuesta: 2
          },
          {
            pregunta: 'Vi a ___ niña en el parque',
            opciones: ['un', 'una', 'el', 'la'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'El Párrafo',
        descripcion: 'Estructura y organización de párrafos',
        objetivo: 'Escribir textos coherentes',
        preguntas: [
          {
            pregunta: '¿Un párrafo tiene?',
            opciones: ['Una palabra', 'Varias oraciones', 'Solo un punto', 'Solo comas'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo empieza un párrafo?',
            opciones: ['Con minúscula', 'Con mayúscula', 'Con número', 'Con signo'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué lleva cada oración dentro de un párrafo?',
            opciones: ['Un punto final', 'Muchas comas', 'Signos de pregunta', 'Guiones'],
            respuesta: 0
          },
          {
            pregunta: 'La sangría es:',
            opciones: ['El título', 'El espacio al inicio', 'El punto', 'La coma'],
            respuesta: 1
          },
          {
            pregunta: 'Un buen párrafo debe tener:',
            opciones: ['Muchas ideas sueltas', 'Una idea principal', 'Solo preguntas', 'Solo exclamaciones'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'La Fábula',
        descripcion: 'Características de las fábulas',
        objetivo: 'Identificar la moraleja',
        preguntas: [
          {
            pregunta: '¿Qué es una fábula?',
            opciones: ['Una noticia', 'Un cuento con enseñanza', 'Una receta', 'Un poema'],
            respuesta: 1
          },
          {
            pregunta: '¿Los personajes de las fábulas son generalmente?',
            opciones: ['Personas', 'Animales', 'Plantas', 'Objetos'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es la moraleja?',
            opciones: ['El título', 'La enseñanza', 'El autor', 'El final'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién escribió "La liebre y la tortuga"?',
            opciones: ['Esopo', 'Shakespeare', 'Cervantes', 'García Márquez'],
            respuesta: 0
          },
          {
            pregunta: 'Las fábulas sirven para:',
            opciones: ['Aburrir', 'Enseñar valores', 'Confundir', 'Dormir'],
            respuesta: 1
          }
        ]
      }
    }
  },
  ciencia_tecnologia: {
    competencias: {
      competencia1: {
        nombre: 'El Sistema Solar',
        descripcion: 'Planetas y componentes del sistema solar',
        objetivo: 'Conocer nuestro sistema planetario',
        preguntas: [
          {
            pregunta: '¿Cuántos planetas tiene el sistema solar?',
            opciones: ['7', '8', '9', '10'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuál es el planeta más cercano al Sol?',
            opciones: ['Venus', 'Tierra', 'Mercurio', 'Marte'],
            respuesta: 2
          },
          {
            pregunta: '¿En qué planeta vivimos?',
            opciones: ['Marte', 'Venus', 'Tierra', 'Júpiter'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es el planeta más grande?',
            opciones: ['Tierra', 'Saturno', 'Júpiter', 'Neptuno'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué planeta tiene anillos visibles?',
            opciones: ['Marte', 'Saturno', 'Tierra', 'Mercurio'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Cadena Alimenticia',
        descripcion: 'Relaciones entre productores, consumidores y descomponedores',
        objetivo: 'Comprender el flujo de energía',
        preguntas: [
          {
            pregunta: '¿Quiénes son los productores?',
            opciones: ['Los animales', 'Las plantas', 'Los hongos', 'Las piedras'],
            respuesta: 1
          },
          {
            pregunta: '¿Un conejo es un consumidor?',
            opciones: ['Sí, primario', 'No', 'Es productor', 'Es descomponedor'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué comen los herbívoros?',
            opciones: ['Carne', 'Plantas', 'Todo', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿Los hongos son?',
            opciones: ['Productores', 'Consumidores', 'Descomponedores', 'Ninguno'],
            respuesta: 2
          },
          {
            pregunta: '¿Un león es consumidor?',
            opciones: ['Primario', 'Secundario', 'Terciario', 'Productor'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Fuerza y Movimiento',
        descripcion: 'Conceptos básicos de física',
        objetivo: 'Entender que las fuerzas producen cambios',
        preguntas: [
          {
            pregunta: '¿Qué es una fuerza?',
            opciones: ['Un empujón o jalón', 'Un color', 'Un sonido', 'Una temperatura'],
            respuesta: 0
          },
          {
            pregunta: 'La gravedad hace que los objetos:',
            opciones: ['Suban', 'Caigan', 'Floten', 'Desaparezcan'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué necesitas para mover un objeto?',
            opciones: ['Luz', 'Fuerza', 'Color', 'Olor'],
            respuesta: 1
          },
          {
            pregunta: 'La fricción es:',
            opciones: ['Una fuerza que frena', 'Una fuerza que acelera', 'Un tipo de luz', 'Un sonido'],
            respuesta: 0
          },
          {
            pregunta: '¿Por qué cae una pelota cuando la sueltas?',
            opciones: ['Por la luz', 'Por la gravedad', 'Por el viento', 'Por el sonido'],
            respuesta: 1
          }
        ]
      }
    }
  },
  personal_social: {
    competencias: {
      competencia1: {
        nombre: 'Los Incas',
        descripcion: 'Historia del Imperio Inca',
        objetivo: 'Conocer la cultura precolombina más importante del Perú',
        preguntas: [
          {
            pregunta: '¿Quién fue el fundador del Imperio Inca?',
            opciones: ['Pachacútec', 'Atahualpa', 'Manco Cápac', 'Túpac Yupanqui'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál era la capital del Imperio Inca?',
            opciones: ['Lima', 'Cusco', 'Arequipa', 'Trujillo'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se llamaba el rey inca?',
            opciones: ['Curaca', 'Inca', 'Cacique', 'Virrey'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué es Machu Picchu?',
            opciones: ['Una playa', 'Una ciudad inca', 'Un río', 'Una montaña'],
            respuesta: 1
          },
          {
            pregunta: '¿Los incas adoraban principalmente al?',
            opciones: ['Inti (Sol)', 'Luna', 'Mar', 'Viento'],
            respuesta: 0
          }
        ]
      },
      competencia2: {
        nombre: 'Democracia y Participación',
        descripcion: 'Conceptos básicos de ciudadanía',
        objetivo: 'Entender la importancia de participar',
        preguntas: [
          {
            pregunta: '¿Qué es la democracia?',
            opciones: ['Un juego', 'Gobierno del pueblo', 'Una comida', 'Un deporte'],
            respuesta: 1
          },
          {
            pregunta: '¿A qué edad puedes votar en Perú?',
            opciones: ['16 años', '18 años', '21 años', '25 años'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué significa participar?',
            opciones: ['Ver desde lejos', 'Ser parte de algo', 'Criticar', 'Dormir'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién elige al presidente?',
            opciones: ['Los militares', 'El pueblo', 'Los ricos', 'Los extranjeros'],
            respuesta: 1
          },
          {
            pregunta: 'En tu aula, ¿cómo eliges al delegado?',
            opciones: ['Lo elige el profesor', 'Votamos todos', 'Se sortea', 'No se elige'],
            respuesta: 1
          }
        ]
      },
      competencia3: {
        nombre: 'Recursos Naturales',
        descripcion: 'Identificar y cuidar los recursos',
        objetivo: 'Valorar el medio ambiente',
        preguntas: [
          {
            pregunta: '¿Qué es un recurso natural?',
            opciones: ['Lo que la naturaleza nos da', 'Lo que fabricamos', 'Lo que compramos', 'Lo que vendemos'],
            respuesta: 0
          },
          {
            pregunta: '¿El agua es un recurso?',
            opciones: ['Renovable', 'No renovable', 'Artificial', 'Importado'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué recurso natural es limitado?',
            opciones: ['Aire', 'Petróleo', 'Luz solar', 'Viento'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo cuidamos el agua?',
            opciones: ['Desperdiciándola', 'No usándola', 'Ahorrándola', 'Contaminándola'],
            respuesta: 2
          },
          {
            pregunta: '¿Los árboles son recursos?',
            opciones: ['Sí, renovables', 'No', 'Solo los grandes', 'Solo los pequeños'],
            respuesta: 0
          }
        ]
      }
    }
  },
  arte_cultura: {
    competencias: {
      competencia1: {
        nombre: 'Danzas Peruanas',
        descripcion: 'Danzas típicas de las regiones',
        objetivo: 'Conocer el folklore nacional',
        preguntas: [
          {
            pregunta: '¿La marinera es de qué región?',
            opciones: ['Sierra', 'Costa', 'Selva', 'Todas'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué danza usa tijeras?',
            opciones: ['Huayno', 'Marinera', 'Danza de tijeras', 'Festejo'],
            respuesta: 2
          },
          {
            pregunta: '¿El festejo es de qué origen?',
            opciones: ['Inca', 'Afroperuano', 'Español', 'Asiático'],
            respuesta: 1
          },
          {
            pregunta: '¿La diablada es de?',
            opciones: ['Puno', 'Lima', 'Iquitos', 'Piura'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué danza se baila en pareja?',
            opciones: ['Danza de tijeras', 'Marinera', 'Saya', 'Huaylarsh'],
            respuesta: 1
          }
        ]
      },
      competencia2: {
        nombre: 'Colores y Mezclas',
        descripcion: 'Teoría del color',
        objetivo: 'Crear colores secundarios',
        preguntas: [
          {
            pregunta: '¿Cuántos colores primarios hay?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: '¿Azul + amarillo da?',
            opciones: ['Rojo', 'Verde', 'Naranja', 'Morado'],
            respuesta: 1
          },
          {
            pregunta: '¿Rojo + azul da?',
            opciones: ['Verde', 'Naranja', 'Morado', 'Café'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es un color secundario?',
            opciones: ['Rojo', 'Verde', 'Azul', 'Amarillo'],
            respuesta: 1
          },
          {
            pregunta: '¿Rojo + amarillo da?',
            opciones: ['Verde', 'Morado', 'Naranja', 'Café'],
            respuesta: 2
          }
        ]
      },
      competencia3: {
        nombre: 'Música y Emociones',
        descripcion: 'La música expresa sentimientos',
        objetivo: 'Relacionar música con emociones',
        preguntas: [
          {
            pregunta: '¿Una música rápida te hace sentir?',
            opciones: ['Triste', 'Alegre', 'Enojado', 'Aburrido'],
            respuesta: 1
          },
          {
            pregunta: '¿Una música lenta puede ser?',
            opciones: ['Alegre', 'Triste', 'Divertida', 'Ruidosa'],
            respuesta: 1
          },
          {
            pregunta: '¿La música puede cambiar tu estado de ánimo?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué emoción expresa una canción de cuna?',
            opciones: ['Alegría', 'Tristeza', 'Calma', 'Enojo'],
            respuesta: 2
          },
          {
            pregunta: '¿El volumen alto puede expresar?',
            opciones: ['Calma', 'Energía', 'Sueño', 'Aburrimiento'],
            respuesta: 1
          }
        ]
      }
    }
  }
};
