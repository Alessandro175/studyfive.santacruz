import { GradoData } from '../preguntas.types';

export const grado2v2: GradoData = {
    ingles: {
        frase: 'Keep learning, you are doing great! 🌟',
        mision_logro: 'Ampliar vocabulario y expresiones básicas',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Days and Months',
                descripcion: 'Aprende los días de la semana y meses del año',
                objetivo: 'Dominar vocabulario de tiempo',
                preguntas: [
                    {
                        pregunta: '¿Cuántos días tiene una semana?',
                        opciones: ['5', '6', '7', '8'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cómo se dice "lunes" en inglés?',
                        opciones: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué día viene después de Friday?',
                        opciones: ['Thursday', 'Saturday', 'Sunday', 'Monday'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántos meses tiene el año?',
                        opciones: ['10', '11', '12', '13'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cómo se dice "enero" en inglés?',
                        opciones: ['February', 'March', 'January', 'April'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Food and Drinks',
                descripcion: 'Vocabulario de comidas y bebidas',
                objetivo: 'Identificar alimentos comunes en inglés',
                preguntas: [
                    {
                        pregunta: '¿Cómo se dice "manzana" en inglés?',
                        opciones: ['Orange', 'Apple', 'Banana', 'Grape'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué bebes en el desayuno?',
                        opciones: ['Milk', 'Table', 'Chair', 'Book'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cómo se dice "agua" en inglés?',
                        opciones: ['Juice', 'Milk', 'Water', 'Soda'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué significa "bread"?',
                        opciones: ['Carne', 'Pan', 'Queso', 'Huevo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo se dice "me gusta" en inglés?',
                        opciones: ['I hate', 'I like', 'I want', 'I need'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Actions and Verbs',
                descripcion: 'Aprende verbos de acción comunes',
                objetivo: 'Usar verbos básicos en inglés',
                preguntas: [
                    {
                        pregunta: '¿Cómo se dice "correr" en inglés?',
                        opciones: ['Walk', 'Jump', 'Run', 'Swim'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué significa "jump"?',
                        opciones: ['Caminar', 'Saltar', 'Dormir', 'Comer'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo se dice "comer" en inglés?',
                        opciones: ['Drink', 'Sleep', 'Eat', 'Play'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué haces cuando estás cansado?',
                        opciones: ['Run', 'Jump', 'Sleep', 'Dance'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cómo se dice "jugar" en inglés?',
                        opciones: ['Work', 'Study', 'Play', 'Read'],
                        respuesta: 2,
                    },
                ],
            },
        ],
    },
    matematica: {
        frase: '¡Suma, resta y mucho más! 🧮',
        mision_logro: 'Dominar operaciones básicas y problemas',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Sumas con Llevadas',
                descripcion: 'Aprende a sumar números de dos cifras',
                objetivo: 'Realizar sumas con reagrupación',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 15 + 8?',
                        opciones: ['21', '22', '23', '24'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 27 + 5?',
                        opciones: ['30', '31', '32', '33'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 19 + 12?',
                        opciones: ['29', '30', '31', '32'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 34 + 6?',
                        opciones: ['38', '39', '40', '41'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 25 + 25?',
                        opciones: ['45', '48', '50', '55'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Restas Básicas',
                descripcion: 'Resuelve restas sencillas',
                objetivo: 'Dominar la operación de resta',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 10 - 5?',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 15 - 7?',
                        opciones: ['6', '7', '8', '9'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 20 - 12?',
                        opciones: ['6', '7', '8', '9'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Si tienes 13 caramelos y regalas 5, ¿cuántos te quedan?',
                        opciones: ['6', '7', '8', '9'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 25 - 10?',
                        opciones: ['12', '13', '14', '15'],
                        respuesta: 3,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Medidas y Tiempo',
                descripcion: 'Aprende sobre longitud y tiempo',
                objetivo: 'Comprender unidades básicas de medida',
                preguntas: [
                    {
                        pregunta: '¿Cuántos minutos tiene una hora?',
                        opciones: ['50', '55', '60', '65'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Con qué mides tu altura?',
                        opciones: ['Litros', 'Metros', 'Kilos', 'Horas'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántas horas tiene un día?',
                        opciones: ['20', '22', '24', '26'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué es más largo: un metro o un centímetro?',
                        opciones: ['Metro', 'Centímetro', 'Iguales', 'Ninguno'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cuántos días tiene febrero normalmente?',
                        opciones: ['27', '28', '29', '30'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    comunicacion: {
        frase: '¡Lee, escribe y comunícate mejor! ✍️',
        mision_logro: 'Mejorar comprensión lectora y escritura',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Sílabas y Palabras',
                descripcion: 'Separa palabras en sílabas',
                objetivo: 'Dominar la división silábica',
                preguntas: [
                    {
                        pregunta: '¿Cuántas sílabas tiene "casa"?',
                        opciones: ['1', '2', '3', '4'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántas sílabas tiene "mariposa"?',
                        opciones: ['2', '3', '4', '5'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuál palabra tiene más sílabas?',
                        opciones: ['Sol', 'Luna', 'Estrella', 'Mar'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Separa "gato" en sílabas:',
                        opciones: ['g-ato', 'ga-to', 'gat-o', 'No se puede'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántas sílabas tiene "computadora"?',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Comprensión Lectora',
                descripcion: 'Entiende lo que lees',
                objetivo: 'Desarrollar comprensión de textos simples',
                preguntas: [
                    {
                        pregunta: '"El gato duerme." ¿Quién duerme?',
                        opciones: ['El perro', 'El gato', 'La casa', 'El niño'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '"María juega en el parque." ¿Dónde juega María?',
                        opciones: ['En casa', 'En la escuela', 'En el parque', 'En la playa'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '"El sol brilla en el cielo." ¿Qué hace el sol?',
                        opciones: ['Duerme', 'Brilla', 'Corre', 'Canta'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '"Pedro come manzanas." ¿Qué come Pedro?',
                        opciones: ['Peras', 'Uvas', 'Manzanas', 'Naranjas'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué signo va al final de una pregunta?',
                        opciones: ['Punto', 'Coma', 'Signo de interrogación', 'Guion'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Producción de Textos',
                descripcion: 'Escribe oraciones completas',
                objetivo: 'Crear oraciones con sentido',
                preguntas: [
                    {
                        pregunta: '¿Cuál oración está bien escrita?',
                        opciones: ['gato El corre', 'El gato corre', 'corre gato El', 'El corre gato'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué palabra debe ir con mayúscula?',
                        opciones: ['gato', 'juan', 'mesa', 'lápiz'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Con qué empieza una oración?',
                        opciones: ['Punto', 'Mayúscula', 'Coma', 'Minúscula'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Completa: "El perro ___ en el jardín"',
                        opciones: ['juega', 'jardín', 'perro', 'casa'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Qué signo se usa para separar palabras en una lista?',
                        opciones: ['Punto', 'Coma', 'Interrogación', 'Exclamación'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    ciencia_tecnologia: {
        frase: '¡Experimenta y descubre! 🧪',
        mision_logro: 'Explorar fenómenos naturales',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Estados de la Materia',
                descripcion: 'Conoce sólido, líquido y gaseoso',
                objetivo: 'Identificar los tres estados de la materia',
                preguntas: [
                    {
                        pregunta: '¿En qué estado está el agua de los ríos?',
                        opciones: ['Sólido', 'Líquido', 'Gaseoso', 'Plasma'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿En qué estado está el hielo?',
                        opciones: ['Sólido', 'Líquido', 'Gaseoso', 'Ninguno'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿En qué estado está el aire?',
                        opciones: ['Sólido', 'Líquido', 'Gaseoso', 'No tiene estado'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué pasa cuando el hielo se calienta?',
                        opciones: ['Se congela más', 'Se derrite', 'Se evapora', 'No cambia'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué estado tiene forma definida?',
                        opciones: ['Líquido', 'Gaseoso', 'Sólido', 'Todos'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Ciclo del Agua',
                descripcion: 'Comprende cómo circula el agua',
                objetivo: 'Entender las etapas del ciclo del agua',
                preguntas: [
                    {
                        pregunta: '¿De dónde viene la lluvia?',
                        opciones: ['Del suelo', 'De las nubes', 'Del mar directamente', 'De los árboles'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo se llama cuando el agua se convierte en vapor?',
                        opciones: ['Condensación', 'Evaporación', 'Precipitación', 'Solidificación'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué forma las nubes?',
                        opciones: ['Humo', 'Vapor de agua', 'Polvo', 'Aire'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Adónde va el agua cuando llueve?',
                        opciones: ['Desaparece', 'Va a ríos y mares', 'Se queda en el cielo', 'Se congela'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El agua se pierde en el ciclo?',
                        opciones: ['Sí, mucha', 'No, se recicla', 'A veces', 'Solo en verano'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Animales y Hábitats',
                descripcion: 'Aprende dónde viven los animales',
                objetivo: 'Relacionar animales con sus hábitats',
                preguntas: [
                    {
                        pregunta: '¿Dónde vive un pez?',
                        opciones: ['En el bosque', 'En el agua', 'En el desierto', 'En el cielo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué animal vive en el desierto?',
                        opciones: ['Pez', 'Pingüino', 'Camello', 'Rana'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Dónde vive un oso polar?',
                        opciones: ['En la selva', 'En el hielo', 'En el desierto', 'En la ciudad'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué animal vuela?',
                        opciones: ['Serpiente', 'Pez', 'Águila', 'Tortuga'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Los animales necesitan un hábitat para vivir?',
                        opciones: ['No', 'Sí', 'Solo algunos', 'Nunca'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    personal_social: {
        frase: '¡Conoce tu historia y cultura! 🏛️',
        mision_logro: 'Comprender tu identidad y sociedad',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Mi Identidad',
                descripcion: 'Conoce quién eres y de dónde vienes',
                objetivo: 'Valorar la identidad personal y cultural',
                preguntas: [
                    {
                        pregunta: '¿Qué es tu nombre?',
                        opciones: ['Tu apellido', 'Tu edad', 'Cómo te llamas', 'Dónde vives'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué celebramos el 28 de julio en Perú?',
                        opciones: ['Navidad', 'Independencia', 'Año Nuevo', 'Carnaval'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuál es la capital de Perú?',
                        opciones: ['Cusco', 'Arequipa', 'Lima', 'Trujillo'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿De qué color es la bandera peruana?',
                        opciones: ['Azul y blanco', 'Rojo y blanco', 'Verde y blanco', 'Amarillo y rojo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Todos somos importantes?',
                        opciones: ['No', 'Sí', 'Solo algunos', 'No sé'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Derechos y Deberes',
                descripcion: 'Conoce tus derechos como niño',
                objetivo: 'Comprender derechos y responsabilidades',
                preguntas: [
                    {
                        pregunta: '¿Tienes derecho a la educación?',
                        opciones: ['No', 'Sí', 'Solo si pago', 'No sé'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Es tu deber hacer la tarea?',
                        opciones: ['No', 'Sí', 'A veces', 'Nunca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Tienes derecho a tener un nombre?',
                        opciones: ['No', 'Sí', 'Solo si quiero', 'A veces'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Es tu deber respetar a los demás?',
                        opciones: ['No', 'Sí', 'Solo a los adultos', 'Solo a los niños'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Tienes derecho a jugar?',
                        opciones: ['No', 'Sí', 'Solo en vacaciones', 'Solo los fines de semana'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Historia Local',
                descripcion: 'Aprende sobre tu comunidad',
                objetivo: 'Conocer la historia de tu localidad',
                preguntas: [
                    {
                        pregunta: '¿Quiénes vivieron en Perú antes de los españoles?',
                        opciones: ['Los romanos', 'Los incas', 'Los egipcios', 'Los vikingos'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Machu Picchu está en Perú?',
                        opciones: ['No', 'Sí', 'En Chile', 'En Brasil'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué idioma hablaban los incas?',
                        opciones: ['Español', 'Inglés', 'Quechua', 'Francés'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cómo se llama la moneda de Perú?',
                        opciones: ['Peso', 'Dólar', 'Sol', 'Euro'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Es importante conocer nuestra historia?',
                        opciones: ['No', 'Sí', 'A veces', 'No importa'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    arte_cultura: {
        frase: '¡Expresa tu creatividad! 🎭',
        mision_logro: 'Desarrollar habilidades artísticas',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Mezcla de Colores',
                descripcion: 'Crea colores secundarios',
                objetivo: 'Comprender la teoría del color',
                preguntas: [
                    {
                        pregunta: '¿Qué color sale de mezclar azul y amarillo?',
                        opciones: ['Rojo', 'Verde', 'Naranja', 'Morado'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué color sale de mezclar rojo y azul?',
                        opciones: ['Verde', 'Naranja', 'Morado', 'Gris'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Los colores secundarios se hacen mezclando?',
                        opciones: ['No', 'Sí', 'A veces', 'Nunca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué obtienes si mezclas todos los colores?',
                        opciones: ['Blanco', 'Negro', 'Café oscuro', 'Transparente'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿El blanco y negro son colores?',
                        opciones: ['Sí', 'No', 'Solo el blanco', 'Solo el negro'],
                        respuesta: 0,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Ritmo y Danza',
                descripcion: 'Aprende sobre ritmos musicales',
                objetivo: 'Desarrollar el sentido rítmico',
                preguntas: [
                    {
                        pregunta: '¿Qué es el ritmo?',
                        opciones: ['Un color', 'Una forma', 'Un patrón de sonidos', 'Un sabor'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Puedes bailar sin música?',
                        opciones: ['No, nunca', 'Sí, con ritmo interno', 'Solo en silencio', 'No existe'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué instrumento marca el ritmo?',
                        opciones: ['Flauta', 'Tambor', 'Piano', 'Guitarra'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Las danzas típicas tienen ritmo?',
                        opciones: ['No', 'Sí', 'Solo algunas', 'Nunca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Puedes crear tu propio ritmo?',
                        opciones: ['No', 'Sí', 'Solo los músicos', 'Es imposible'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Expresión Teatral',
                descripcion: 'Expresa emociones con tu cuerpo',
                objetivo: 'Desarrollar la expresión corporal',
                preguntas: [
                    {
                        pregunta: '¿Cómo expresas que estás triste?',
                        opciones: ['Riendo', 'Llorando', 'Saltando', 'Gritando de alegría'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El teatro usa palabras y gestos?',
                        opciones: ['Solo palabras', 'Solo gestos', 'Ambos', 'Ninguno'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Puedes actuar sin hablar?',
                        opciones: ['No', 'Sí, con mímica', 'Es imposible', 'No tiene sentido'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué son las emociones?',
                        opciones: ['Números', 'Sentimientos', 'Colores', 'Sonidos'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Todos pueden actuar?',
                        opciones: ['No', 'Sí, con práctica', 'Solo los adultos', 'Solo los niños'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
};
