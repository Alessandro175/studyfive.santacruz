import { GradoData } from '../preguntas.types';

export const grado1v2: GradoData = {
  ingles: {
    frase: 'Learning English opens doors to the world! 🌍',
    mision_logro: 'Dominar los fundamentos del inglés básico',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Saludos y Presentaciones',
        descripcion: 'Aprende a saludar y presentarte en inglés',
        objetivo: 'Dominar los saludos básicos y cómo presentarse',
        preguntas: [
          {
            pregunta: '¿Cómo se dice "Hola" en inglés?',
            opciones: ['Goodbye', 'Hello', 'Thanks', 'Please'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué significa "Good morning"?',
            opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Adiós'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se dice "¿Cómo te llamas?" en inglés?',
            opciones: ['How are you?', 'What is your name?', 'Where are you?', 'How old are you?'],
            respuesta: 1
          },
          {
            pregunta: 'Si alguien dice "My name is John", ¿qué está haciendo?',
            opciones: ['Preguntando tu edad', 'Presentándose', 'Despidiéndose', 'Saludando'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se dice "Adiós" en inglés?',
            opciones: ['Hello', 'Thanks', 'Goodbye', 'Please'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Colores y Números',
        descripcion: 'Identifica colores y números del 1 al 10',
        objetivo: 'Reconocer y nombrar colores básicos y números',
        preguntas: [
          {
            pregunta: '¿De qué color es el cielo?',
            opciones: ['Red', 'Blue', 'Green', 'Yellow'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos dedos tienes en una mano?',
            opciones: ['Three', 'Four', 'Five', 'Six'],
            respuesta: 2
          },
          {
            pregunta: '¿Cómo se dice "rojo" en inglés?',
            opciones: ['Blue', 'Red', 'Green', 'Yellow'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué número es "seven"?',
            opciones: ['6', '7', '8', '9'],
            respuesta: 1
          },
          {
            pregunta: '¿De qué color es una banana?',
            opciones: ['Red', 'Blue', 'Yellow', 'Green'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Animales y Familia',
        descripcion: 'Vocabulario de animales y miembros de la familia',
        objetivo: 'Identificar animales comunes y miembros de la familia',
        preguntas: [
          {
            pregunta: '¿Cómo se dice "perro" en inglés?',
            opciones: ['Cat', 'Dog', 'Bird', 'Fish'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué significa "mother"?',
            opciones: ['Padre', 'Madre', 'Hermano', 'Hermana'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué animal dice "meow"?',
            opciones: ['Dog', 'Cat', 'Bird', 'Cow'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se dice "hermana" en inglés?',
            opciones: ['Brother', 'Sister', 'Mother', 'Father'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué animal vuela?',
            opciones: ['Fish', 'Dog', 'Bird', 'Cat'],
            respuesta: 2
          }
        ]
      }
    ]
  },
  matematica: {
    frase: '¡Las matemáticas son divertidas y fáciles! 🔢',
    mision_logro: 'Dominar los números y operaciones básicas',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Números y Conteo',
        descripcion: 'Aprende a contar del 1 al 20',
        objetivo: 'Dominar el conteo básico y reconocer números',
        preguntas: [
          {
            pregunta: '¿Cuántos dedos tienes en total?',
            opciones: ['5', '8', '10', '20'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué número viene después del 5?',
            opciones: ['4', '6', '7', '8'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas patas tiene un perro?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: 'Si tienes 3 manzanas y recibes 2 más, ¿cuántas tienes?',
            opciones: ['4', '5', '6', '7'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué número es mayor: 7 o 4?',
            opciones: ['4', '7', 'Son iguales', 'Ninguno'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Sumas Básicas',
        descripcion: 'Resuelve sumas sencillas hasta el 10',
        objetivo: 'Realizar operaciones de suma básicas',
        preguntas: [
          {
            pregunta: '¿Cuánto es 2 + 2?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 5 + 3?',
            opciones: ['6', '7', '8', '9'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 1 + 1?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuánto es 4 + 4?',
            opciones: ['6', '7', '8', '9'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuánto es 3 + 2?',
            opciones: ['4', '5', '6', '7'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Formas Geométricas',
        descripcion: 'Identifica círculos, cuadrados y triángulos',
        objetivo: 'Reconocer formas geométricas básicas',
        preguntas: [
          {
            pregunta: '¿Cuántos lados tiene un triángulo?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué forma tiene una pelota?',
            opciones: ['Cuadrado', 'Círculo', 'Triángulo', 'Rectángulo'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántos lados tiene un cuadrado?',
            opciones: ['2', '3', '4', '5'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué forma tiene una ventana?',
            opciones: ['Círculo', 'Triángulo', 'Cuadrado', 'Estrella'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuántos lados tiene un círculo?',
            opciones: ['0', '1', '2', '3'],
            respuesta: 0
          }
        ]
      }
    ]
  },
  comunicacion: {
    frase: '¡Comunicarte bien es súper importante! 📖',
    mision_logro: 'Dominar la lectura y escritura básica',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Vocales y Consonantes',
        descripcion: 'Reconoce las vocales y algunas consonantes',
        objetivo: 'Identificar y diferenciar vocales de consonantes',
        preguntas: [
          {
            pregunta: '¿Cuántas vocales tiene el español?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál de estas es una vocal?',
            opciones: ['B', 'A', 'C', 'D'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué letra empieza "Oso"?',
            opciones: ['A', 'E', 'I', 'O'],
            respuesta: 3
          },
          {
            pregunta: '¿Cuál palabra empieza con vocal?',
            opciones: ['Casa', 'Perro', 'Árbol', 'Mesa'],
            respuesta: 2
          },
          {
            pregunta: '¿Cuál es la primera vocal?',
            opciones: ['A', 'E', 'I', 'O'],
            respuesta: 0
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Lectura de Palabras',
        descripcion: 'Lee palabras simples y cortas',
        objetivo: 'Desarrollar la lectura de palabras básicas',
        preguntas: [
          {
            pregunta: '¿Cómo se escribe el animal que dice "miau"?',
            opciones: ['Pero', 'Gato', 'Pato', 'Rato'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué palabra es más corta?',
            opciones: ['Elefante', 'Sol', 'Mariposa', 'Computadora'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas letras tiene "Casa"?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué palabra rima con "Gato"?',
            opciones: ['Casa', 'Pato', 'Mesa', 'Luna'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué letra termina "Amor"?',
            opciones: ['A', 'M', 'O', 'R'],
            respuesta: 3
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Expresión Oral',
        descripcion: 'Expresa ideas y sentimientos',
        objetivo: 'Comunicarse de forma clara y ordenada',
        preguntas: [
          {
            pregunta: '¿Qué dices cuando llegas a un lugar?',
            opciones: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo pides algo amablemente?',
            opciones: ['Dame', 'Quiero', 'Por favor', 'Ahora'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué dices después de recibir ayuda?',
            opciones: ['Hola', 'Adiós', 'Gracias', 'Perdón'],
            respuesta: 2
          },
          {
            pregunta: '¿Cómo te despides?',
            opciones: ['Hola', 'Buenos días', 'Adiós', 'Por favor'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué dices si te equivocas?',
            opciones: ['Gracias', 'Perdón', 'Hola', 'Bien'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  ciencia_tecnologia: {
    frase: '¡Descubre el mundo científico! 🔬',
    mision_logro: 'Explorar los conceptos básicos de ciencia',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'El Cuerpo Humano',
        descripcion: 'Identifica las partes del cuerpo',
        objetivo: 'Reconocer las partes principales del cuerpo',
        preguntas: [
          {
            pregunta: '¿Con qué parte del cuerpo vemos?',
            opciones: ['Oídos', 'Ojos', 'Nariz', 'Boca'],
            respuesta: 1
          },
          {
            pregunta: '¿Cuántas manos tenemos?',
            opciones: ['1', '2', '3', '4'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué escuchamos?',
            opciones: ['Ojos', 'Nariz', 'Oídos', 'Boca'],
            respuesta: 2
          },
          {
            pregunta: '¿Con qué caminamos?',
            opciones: ['Manos', 'Brazos', 'Piernas', 'Cabeza'],
            respuesta: 2
          },
          {
            pregunta: '¿Dónde está el cerebro?',
            opciones: ['En la cabeza', 'En el pecho', 'En la pierna', 'En el brazo'],
            respuesta: 0
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Los Sentidos',
        descripcion: 'Conoce los cinco sentidos',
        objetivo: 'Identificar y usar los sentidos',
        preguntas: [
          {
            pregunta: '¿Cuántos sentidos tenemos?',
            opciones: ['3', '4', '5', '6'],
            respuesta: 2
          },
          {
            pregunta: '¿Con qué sentido olemos las flores?',
            opciones: ['Vista', 'Oído', 'Olfato', 'Tacto'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué sentido usamos para escuchar música?',
            opciones: ['Vista', 'Oído', 'Gusto', 'Tacto'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué sentido probamos la comida?',
            opciones: ['Olfato', 'Gusto', 'Vista', 'Tacto'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué sentido usamos para tocar objetos?',
            opciones: ['Vista', 'Oído', 'Gusto', 'Tacto'],
            respuesta: 3
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Plantas y Animales',
        descripcion: 'Diferencia seres vivos de no vivos',
        objetivo: 'Clasificar seres vivos y reconocer sus características',
        preguntas: [
          {
            pregunta: '¿Cuál de estos es un ser vivo?',
            opciones: ['Piedra', 'Árbol', 'Mesa', 'Libro'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué necesitan las plantas para crecer?',
            opciones: ['Juguetes', 'Agua y sol', 'Zapatos', 'Carros'],
            respuesta: 1
          },
          {
            pregunta: '¿Los animales nacen y crecen?',
            opciones: ['Sí', 'No', 'A veces', 'Nunca'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué animal vive en el agua?',
            opciones: ['Perro', 'Gato', 'Pez', 'Pájaro'],
            respuesta: 2
          },
          {
            pregunta: '¿Las plantas respiran?',
            opciones: ['Sí', 'No', 'Solo de día', 'Solo de noche'],
            respuesta: 0
          }
        ]
      }
    ]
  },
  personal_social: {
    frase: '¡Conoce tu familia y tu comunidad! 👨‍👩‍👧‍👦',
    mision_logro: 'Comprender tu entorno social',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'La Familia',
        descripcion: 'Identifica los miembros de la familia',
        objetivo: 'Reconocer y valorar a la familia',
        preguntas: [
          {
            pregunta: '¿Quién es la mamá de tu mamá?',
            opciones: ['Tía', 'Abuela', 'Hermana', 'Prima'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se llama el hermano de tu papá?',
            opciones: ['Tío', 'Primo', 'Abuelo', 'Hermano'],
            respuesta: 0
          },
          {
            pregunta: '¿Quiénes forman tu familia?',
            opciones: ['Solo tú', 'Tus amigos', 'Tus padres y hermanos', 'Tus juguetes'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué debes hacer cuando llegas a casa?',
            opciones: ['Gritar', 'Saludar', 'Dormir', 'Llorar'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo debes tratar a tu familia?',
            opciones: ['Con amor', 'Con enojo', 'Con tristeza', 'Con miedo'],
            respuesta: 0
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Mi Comunidad',
        descripcion: 'Conoce tu comunidad y sus lugares',
        objetivo: 'Identificar lugares importantes de la comunidad',
        preguntas: [
          {
            pregunta: '¿Dónde vas cuando estás enfermo?',
            opciones: ['Escuela', 'Hospital', 'Parque', 'Tienda'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde aprendes a leer y escribir?',
            opciones: ['Casa', 'Escuela', 'Parque', 'Cine'],
            respuesta: 1
          },
          {
            pregunta: '¿Quién ayuda si hay un incendio?',
            opciones: ['Maestro', 'Bombero', 'Cocinero', 'Cantante'],
            respuesta: 1
          },
          {
            pregunta: '¿Dónde compras alimentos?',
            opciones: ['Hospital', 'Escuela', 'Mercado', 'Parque'],
            respuesta: 2
          },
          {
            pregunta: '¿Quién cuida la seguridad?',
            opciones: ['Policía', 'Profesor', 'Doctor', 'Panadero'],
            respuesta: 0
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Normas de Convivencia',
        descripcion: 'Aprende normas para vivir en sociedad',
        objetivo: 'Practicar el respeto y la convivencia',
        preguntas: [
          {
            pregunta: '¿Qué debes hacer antes de hablar?',
            opciones: ['Gritar', 'Levantar la mano', 'Saltar', 'Correr'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo debes tratar a tus compañeros?',
            opciones: ['Con respeto', 'Con burlas', 'Con empujones', 'Con gritos'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué haces si ves basura en el piso?',
            opciones: ['Dejarla', 'Recogerla', 'Pisarla', 'Ignorarla'],
            respuesta: 1
          },
          {
            pregunta: '¿Está bien compartir tus juguetes?',
            opciones: ['No, nunca', 'Sí, siempre', 'Solo si me dan dinero', 'No me importa'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué debes decir si te ayudan?',
            opciones: ['Nada', 'Gracias', 'Adiós', 'Hola'],
            respuesta: 1
          }
        ]
      }
    ]
  },
  arte_cultura: {
    frase: '¡Crea y expresa tu arte! 🎨',
    mision_logro: 'Desarrollar tu creatividad artística',
    competencias: [
      {
        id: 'competencia_01',
        nombre: 'Colores Primarios',
        descripcion: 'Identifica los colores básicos',
        objetivo: 'Reconocer y usar colores primarios',
        preguntas: [
          {
            pregunta: '¿Cuáles son los colores primarios?',
            opciones: ['Rojo, verde, azul', 'Rojo, amarillo, azul', 'Verde, naranja, morado', 'Blanco, negro, gris'],
            respuesta: 1
          },
          {
            pregunta: '¿De qué color es el sol?',
            opciones: ['Rojo', 'Amarillo', 'Azul', 'Verde'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué color tiene el cielo?',
            opciones: ['Rojo', 'Verde', 'Azul', 'Amarillo'],
            respuesta: 2
          },
          {
            pregunta: '¿De qué color es una fresa?',
            opciones: ['Rojo', 'Azul', 'Amarillo', 'Verde'],
            respuesta: 0
          },
          {
            pregunta: '¿Qué color sale al mezclar rojo y amarillo?',
            opciones: ['Verde', 'Morado', 'Naranja', 'Azul'],
            respuesta: 2
          }
        ]
      },
      {
        id: 'competencia_02',
        nombre: 'Música y Sonidos',
        descripcion: 'Reconoce sonidos y ritmos',
        objetivo: 'Desarrollar el oído musical',
        preguntas: [
          {
            pregunta: '¿Qué hace un tambor?',
            opciones: ['Ilumina', 'Suena', 'Vuela', 'Nada'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué instrumento puedes soplar?',
            opciones: ['Tambor', 'Flauta', 'Piano', 'Guitarra'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué animal canta?',
            opciones: ['Pez', 'Pájaro', 'Serpiente', 'Tortuga'],
            respuesta: 1
          },
          {
            pregunta: '¿Cómo se llama una canción sin palabras?',
            opciones: ['Poema', 'Cuento', 'Melodía', 'Dibujo'],
            respuesta: 2
          },
          {
            pregunta: '¿Qué haces cuando escuchas música alegre?',
            opciones: ['Llorar', 'Bailar', 'Dormir', 'Estudiar'],
            respuesta: 1
          }
        ]
      },
      {
        id: 'competencia_03',
        nombre: 'Expresión Artística',
        descripcion: 'Crea y expresa a través del arte',
        objetivo: 'Desarrollar la creatividad artística',
        preguntas: [
          {
            pregunta: '¿Qué usas para dibujar?',
            opciones: ['Comida', 'Lápiz', 'Agua', 'Ropa'],
            respuesta: 1
          },
          {
            pregunta: '¿En qué se pinta?',
            opciones: ['Aire', 'Papel', 'Sonido', 'Olor'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué forma tiene una pelota dibujada?',
            opciones: ['Cuadrado', 'Círculo', 'Triángulo', 'Estrella'],
            respuesta: 1
          },
          {
            pregunta: '¿Con qué material puedes moldear figuras?',
            opciones: ['Agua', 'Plastilina', 'Aire', 'Luz'],
            respuesta: 1
          },
          {
            pregunta: '¿Qué puedes crear con tu imaginación?',
            opciones: ['Nada', 'Todo', 'Solo números', 'Solo letras'],
            respuesta: 1
          }
        ]
      }
    ]
  }
};
