import { GradoData } from '../preguntas.types';

export const grado3v2: GradoData = {
    ingles: {
        frase: 'English is fun and useful! 📚',
        mision_logro: 'Construir oraciones y conversaciones simples',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Present Simple',
                descripcion: 'Usa el tiempo presente correctamente',
                objetivo: 'Dominar el presente simple en inglés',
                preguntas: [
                    {
                        pregunta: 'I ___ to school every day.',
                        opciones: ['go', 'goes', 'going', 'went'],
                        respuesta: 0,
                    },
                    {
                        pregunta: 'She ___ English.',
                        opciones: ['speak', 'speaks', 'speaking', 'spoke'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuál es correcta?',
                        opciones: ['He play soccer', 'He plays soccer', 'He playing soccer', 'He played soccer'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'They ___ in Lima.',
                        opciones: ['live', 'lives', 'living', 'lived'],
                        respuesta: 0,
                    },
                    {
                        pregunta: 'Does she like pizza?',
                        opciones: ['Yes, she like', 'Yes, she likes', 'Yes, she does', 'Yes, she do'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Places and Locations',
                descripcion: 'Describe lugares y ubicaciones',
                objetivo: 'Usar preposiciones de lugar',
                preguntas: [
                    {
                        pregunta: 'The book is ___ the table.',
                        opciones: ['in', 'on', 'under', 'behind'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo se dice "detrás de"?',
                        opciones: ['in front of', 'behind', 'next to', 'between'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'The cat is ___ the box.',
                        opciones: ['next', 'between', 'inside', 'outside'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué significa "between"?',
                        opciones: ['Encima', 'Debajo', 'Entre', 'Lejos'],
                        respuesta: 2,
                    },
                    {
                        pregunta: "Where is the bank? It's ___ the supermarket.",
                        opciones: ['next to', 'next', 'to next', 'nexting'],
                        respuesta: 0,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Question Words',
                descripcion: 'Aprende a hacer preguntas',
                objetivo: 'Usar palabras interrogativas correctamente',
                preguntas: [
                    {
                        pregunta: '___ is your name?',
                        opciones: ['Who', 'What', 'Where', 'When'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '___ are you from?',
                        opciones: ['What', 'Where', 'Who', 'How'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '___ old are you?',
                        opciones: ['What', 'Where', 'How', 'Who'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '___ is your best friend?',
                        opciones: ['What', 'Where', 'When', 'Who'],
                        respuesta: 3,
                    },
                    {
                        pregunta: '___ do you live?',
                        opciones: ['What', 'Where', 'Who', 'How'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    matematica: {
        frase: '¡Multiplica tu conocimiento! ✖️',
        mision_logro: 'Dominar multiplicación y división básica',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Tablas de Multiplicar',
                descripcion: 'Aprende las tablas del 2 al 5',
                objetivo: 'Memorizar y aplicar tablas básicas',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 3 × 4?',
                        opciones: ['10', '11', '12', '13'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 5 × 5?',
                        opciones: ['20', '25', '30', '35'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuánto es 2 × 8?',
                        opciones: ['14', '15', '16', '17'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 4 × 6?',
                        opciones: ['22', '23', '24', '25'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Si tengo 3 cajas con 7 manzanas cada una, ¿cuántas tengo?',
                        opciones: ['18', '19', '20', '21'],
                        respuesta: 3,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'División Básica',
                descripcion: 'Comprende la división como reparto',
                objetivo: 'Resolver divisiones sencillas',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 12 ÷ 3?',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuánto es 20 ÷ 5?',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Si repartes 15 caramelos entre 3 niños, ¿cuántos le tocan a cada uno?',
                        opciones: ['4', '5', '6', '7'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuánto es 18 ÷ 2?',
                        opciones: ['7', '8', '9', '10'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 24 ÷ 4?',
                        opciones: ['5', '6', '7', '8'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Fracciones Simples',
                descripcion: 'Introduce el concepto de fracciones',
                objetivo: 'Comprender medios y cuartos',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es la mitad de 10?',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué fracción representa la mitad?',
                        opciones: ['1/3', '1/2', '1/4', '2/3'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Si divides una pizza en 4 partes iguales, cada parte es:',
                        opciones: ['Un medio', 'Un tercio', 'Un cuarto', 'Un quinto'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es un cuarto de 12?',
                        opciones: ['2', '3', '4', '6'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es más grande: 1/2 o 1/4?',
                        opciones: ['1/4', '1/2', 'Son iguales', 'No se puede saber'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    comunicacion: {
        frase: '¡Expresa tus ideas con claridad! 💬',
        mision_logro: 'Mejorar redacción y comprensión',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Sustantivos y Adjetivos',
                descripcion: 'Identifica y usa sustantivos y adjetivos',
                objetivo: 'Reconocer clases de palabras',
                preguntas: [
                    {
                        pregunta: '¿Qué es un sustantivo?',
                        opciones: ['Una acción', 'Un nombre', 'Una cualidad', 'Un lugar'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'En "El perro NEGRO", ¿qué es "negro"?',
                        opciones: ['Sustantivo', 'Verbo', 'Adjetivo', 'Artículo'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuál es el sustantivo en "La casa grande"?',
                        opciones: ['La', 'casa', 'grande', 'Ninguno'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué palabra describe cómo es algo?',
                        opciones: ['Sustantivo', 'Verbo', 'Adjetivo', 'Artículo'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Elige el adjetivo: "El cielo azul"',
                        opciones: ['El', 'cielo', 'azul', 'Ninguno'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'El Párrafo',
                descripcion: 'Organiza ideas en párrafos',
                objetivo: 'Escribir párrafos coherentes',
                preguntas: [
                    {
                        pregunta: '¿Cómo empieza un párrafo?',
                        opciones: ['Con punto', 'Con mayúscula', 'Con coma', 'Con guion'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué contiene un párrafo?',
                        opciones: ['Solo una palabra', 'Una idea principal', 'Solo números', 'Solo signos'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Con qué termina un párrafo?',
                        opciones: ['Coma', 'Punto y aparte', 'Guion', 'Signo de interrogación'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Las oraciones en un párrafo deben tener relación?',
                        opciones: ['No', 'Sí', 'A veces', 'Nunca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántas ideas principales debe tener un párrafo?',
                        opciones: ['Ninguna', 'Una', 'Muchas sin relación', 'No importa'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Tipos de Textos',
                descripcion: 'Reconoce diferentes tipos de textos',
                objetivo: 'Diferenciar textos narrativos, descriptivos e instructivos',
                preguntas: [
                    {
                        pregunta: '¿Qué tipo de texto cuenta una historia?',
                        opciones: ['Descriptivo', 'Narrativo', 'Instructivo', 'Informativo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué texto te dice cómo hacer algo?',
                        opciones: ['Narrativo', 'Descriptivo', 'Instructivo', 'Poético'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Una receta de cocina es un texto:',
                        opciones: ['Narrativo', 'Descriptivo', 'Instructivo', 'Poético'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué texto describe cómo es algo?',
                        opciones: ['Narrativo', 'Descriptivo', 'Instructivo', 'Noticia'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Un cuento es un texto:',
                        opciones: ['Instructivo', 'Descriptivo', 'Narrativo', 'Científico'],
                        respuesta: 2,
                    },
                ],
            },
        ],
    },
    ciencia_tecnologia: {
        frase: '¡Investiga y aprende! 🌱',
        mision_logro: 'Comprender seres vivos y su entorno',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Cadena Alimenticia',
                descripcion: 'Comprende cómo se alimentan los seres vivos',
                objetivo: 'Identificar productores, consumidores y descomponedores',
                preguntas: [
                    {
                        pregunta: '¿Quién produce su propio alimento?',
                        opciones: ['Los animales', 'Las plantas', 'Los hongos', 'Las bacterias'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué comen los herbívoros?',
                        opciones: ['Carne', 'Plantas', 'Ambos', 'Piedras'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué son los leones?',
                        opciones: ['Herbívoros', 'Carnívoros', 'Omnívoros', 'Plantas'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué animales comen plantas y carne?',
                        opciones: ['Herbívoros', 'Carnívoros', 'Omnívoros', 'Ninguno'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Quién descompone la materia orgánica?',
                        opciones: ['Leones', 'Plantas', 'Bacterias y hongos', 'Pájaros'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Sistema Solar',
                descripcion: 'Conoce los planetas y el sol',
                objetivo: 'Identificar componentes del sistema solar',
                preguntas: [
                    {
                        pregunta: '¿Cuántos planetas tiene nuestro sistema solar?',
                        opciones: ['7', '8', '9', '10'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué planeta está más cerca del Sol?',
                        opciones: ['Venus', 'Tierra', 'Mercurio', 'Marte'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿En qué planeta vivimos?',
                        opciones: ['Marte', 'Venus', 'Júpiter', 'Tierra'],
                        respuesta: 3,
                    },
                    {
                        pregunta: '¿Qué es el Sol?',
                        opciones: ['Un planeta', 'Una estrella', 'Un satélite', 'Un cometa'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué gira alrededor de la Tierra?',
                        opciones: ['El Sol', 'Marte', 'La Luna', 'Venus'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Energía y Movimiento',
                descripcion: 'Comprende formas de energía',
                objetivo: 'Identificar tipos de energía',
                preguntas: [
                    {
                        pregunta: '¿Qué tipo de energía da el Sol?',
                        opciones: ['Química', 'Luminosa y calorífica', 'Nuclear', 'Eólica'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué energía usan los molinos de viento?',
                        opciones: ['Solar', 'Eólica', 'Hidráulica', 'Química'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué produce movimiento?',
                        opciones: ['La energía', 'El color', 'El olor', 'El sabor'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿De dónde viene la energía de las plantas?',
                        opciones: ['Del agua', 'Del sol', 'Del aire', 'De la tierra'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Se puede crear o destruir la energía?',
                        opciones: ['Sí, ambas', 'No, solo se transforma', 'Solo crear', 'Solo destruir'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    personal_social: {
        frase: '¡Conoce tu pasado para construir tu futuro! 🗺️',
        mision_logro: 'Comprender tu historia y geografía',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Geografía del Perú',
                descripcion: 'Conoce las regiones del Perú',
                objetivo: 'Identificar costa, sierra y selva',
                preguntas: [
                    {
                        pregunta: '¿Cuántas regiones naturales tiene el Perú?',
                        opciones: ['2', '3', '4', '5'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Dónde está la cordillera de los Andes?',
                        opciones: ['En la costa', 'En la sierra', 'En la selva', 'En el mar'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué región tiene playas?',
                        opciones: ['Sierra', 'Selva', 'Costa', 'Ninguna'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Dónde está el río Amazonas?',
                        opciones: ['Costa', 'Sierra', 'Selva', 'Desierto'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué ciudad está en la sierra?',
                        opciones: ['Lima', 'Iquitos', 'Cusco', 'Trujillo'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Culturas Preincaicas',
                descripcion: 'Conoce las culturas antes de los incas',
                objetivo: 'Identificar culturas antiguas del Perú',
                preguntas: [
                    {
                        pregunta: '¿Qué cultura hizo las líneas de Nasca?',
                        opciones: ['Inca', 'Nasca', 'Mochica', 'Chavín'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Dónde vivieron los Mochicas?',
                        opciones: ['En la sierra', 'En la costa norte', 'En la selva', 'En Lima'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué cultura es considerada la "cultura matriz"?',
                        opciones: ['Inca', 'Mochica', 'Chavín', 'Paracas'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Los incas fueron la única cultura en Perú?',
                        opciones: ['Sí', 'No, hubo muchas antes', 'Solo ellos y españoles', 'No hubo otras'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué cultura hizo hermosos textiles?',
                        opciones: ['Paracas', 'Solo incas', 'Ninguna', 'Solo españoles'],
                        respuesta: 0,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Ciudadanía Activa',
                descripcion: 'Participa en tu comunidad',
                objetivo: 'Comprender la participación ciudadana',
                preguntas: [
                    {
                        pregunta: '¿Qué es ser un buen ciudadano?',
                        opciones: ['No hacer nada', 'Cumplir deberes y respetar derechos', 'Solo estudiar', 'Solo trabajar'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Puedes ayudar en tu comunidad?',
                        opciones: ['No, solo los adultos', 'Sí, de muchas formas', 'No importa', 'Nunca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué debes hacer si ves basura en la calle?',
                        opciones: ['Dejarla', 'Botarla al tacho', 'Tirar más', 'Ignorarla'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Es importante votar cuando seas mayor?',
                        opciones: ['No', 'Sí', 'Da igual', 'No sirve'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Respetar las normas de tránsito es importante?',
                        opciones: ['No', 'Sí', 'Solo para adultos', 'Solo para policías'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    arte_cultura: {
        frase: '¡Crea arte con propósito! 🖼️',
        mision_logro: 'Expresar ideas a través del arte',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Técnicas de Dibujo',
                descripcion: 'Aprende diferentes técnicas artísticas',
                objetivo: 'Aplicar diversas técnicas de dibujo',
                preguntas: [
                    {
                        pregunta: '¿Qué técnica usa agua y colores?',
                        opciones: ['Óleo', 'Acuarela', 'Carboncillo', 'Pastel'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Con qué haces un dibujo en carbón?',
                        opciones: ['Acuarela', 'Lápices de colores', 'Carboncillo', 'Temperas'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué necesitas para hacer un collage?',
                        opciones: ['Solo pintura', 'Recortes y pegamento', 'Solo lápiz', 'Nada'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es la perspectiva en dibujo?',
                        opciones: ['Un color', 'Dar profundidad', 'Un tipo de papel', 'Una forma'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Puedes mezclar técnicas en una obra?',
                        opciones: ['No, nunca', 'Sí', 'Es prohibido', 'No tiene sentido'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Música Peruana',
                descripcion: 'Conoce la música tradicional',
                objetivo: 'Valorar la música de tu país',
                preguntas: [
                    {
                        pregunta: '¿Qué instrumento es típico de los Andes?',
                        opciones: ['Guitarra eléctrica', 'Quena', 'Batería', 'Saxofón'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es la marinera?',
                        opciones: ['Una comida', 'Un baile típico', 'Un instrumento', 'Un color'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El cajón es un instrumento peruano?',
                        opciones: ['No', 'Sí', 'Es de España', 'Es de México'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué baile es típico de la costa?',
                        opciones: ['Huayno', 'Marinera', 'Huaylas', 'Scissors dance'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿La música tradicional es importante?',
                        opciones: ['No', 'Sí, es parte de nuestra identidad', 'No importa', 'Solo la moderna'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Teatro y Dramatización',
                descripcion: 'Crea personajes y escenas',
                objetivo: 'Desarrollar habilidades teatrales',
                preguntas: [
                    {
                        pregunta: '¿Qué es un personaje?',
                        opciones: ['Un objeto', 'Alguien en una historia', 'Un lugar', 'Un color'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es un diálogo?',
                        opciones: ['Un monólogo', 'Conversación entre personajes', 'Un grito', 'Un silencio'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es el escenario?',
                        opciones: ['El público', 'Donde actúan los actores', 'La entrada', 'El baño'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué se usa para cambiar de personaje?',
                        opciones: ['Nada', 'Vestuario y actuación', 'Solo voz', 'Solo nombre'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Todos pueden actuar?',
                        opciones: ['No', 'Sí, con práctica y creatividad', 'Solo profesionales', 'Solo niños'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
};
