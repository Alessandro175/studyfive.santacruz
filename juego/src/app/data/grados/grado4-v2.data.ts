import { GradoData } from '../preguntas.types';

export const grado4v2: GradoData = {
    ingles: {
        frase: 'English opens the world to you! 🌍✨',
        mision_logro: 'Comunicarte con fluidez básica',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Past Simple',
                descripcion: 'Habla sobre el pasado',
                objetivo: 'Usar correctamente el pasado simple',
                preguntas: [
                    {
                        pregunta: 'Yesterday, I ___ to the park.',
                        opciones: ['go', 'goes', 'went', 'going'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'She ___ a book last week.',
                        opciones: ['read', 'reads', 'reading', 'readed'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cuál es el pasado de "play"?',
                        opciones: ['play', 'plays', 'played', 'playing'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'They ___ soccer yesterday.',
                        opciones: ['play', 'plays', 'played', 'playing'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Did you ___ your homework?',
                        opciones: ['do', 'did', 'does', 'done'],
                        respuesta: 0,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Comparatives',
                descripcion: 'Compara personas y objetos',
                objetivo: 'Usar adjetivos comparativos',
                preguntas: [
                    {
                        pregunta: 'An elephant is ___ than a mouse.',
                        opciones: ['big', 'bigger', 'biggest', 'more big'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'This book is ___ than that one.',
                        opciones: ['interesting', 'interestinger', 'more interesting', 'most interesting'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'She is ___ than her brother.',
                        opciones: ['tall', 'taller', 'tallest', 'more tall'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'This test is ___ than the last one.',
                        opciones: ['easy', 'easier', 'easiest', 'more easy'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Summer is ___ than winter.',
                        opciones: ['hot', 'hotter', 'hottest', 'more hot'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Daily Routines',
                descripcion: 'Describe tu rutina diaria',
                objetivo: 'Expresar actividades cotidianas',
                preguntas: [
                    {
                        pregunta: 'I usually ___ at 7 AM.',
                        opciones: ['wake up', 'wakes up', 'waking up', 'woke up'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cómo se dice "desayunar"?',
                        opciones: ['have lunch', 'have dinner', 'have breakfast', 'have snack'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'She ___ to school by bus.',
                        opciones: ['go', 'goes', 'going', 'went'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué significa "brush your teeth"?',
                        opciones: ['Lavarse las manos', 'Cepillarse los dientes', 'Peinarse', 'Bañarse'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'At night, I ___ my homework.',
                        opciones: ['do', 'does', 'doing', 'did'],
                        respuesta: 0,
                    },
                ],
            },
        ],
    },
    matematica: {
        frase: '¡Resuelve problemas como un experto! 🎯',
        mision_logro: 'Aplicar matemáticas a situaciones reales',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Multiplicación Avanzada',
                descripcion: 'Multiplica números de dos cifras',
                objetivo: 'Dominar multiplicaciones complejas',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 15 × 6?',
                        opciones: ['80', '85', '90', '95'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 23 × 4?',
                        opciones: ['88', '90', '92', '94'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Si una caja tiene 12 lápices y compras 8 cajas, ¿cuántos lápices tienes?',
                        opciones: ['86', '92', '96', '100'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 25 × 8?',
                        opciones: ['180', '190', '200', '210'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 17 × 5?',
                        opciones: ['75', '80', '85', '90'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'División con Residuo',
                descripcion: 'Divide con residuos',
                objetivo: 'Comprender divisiones inexactas',
                preguntas: [
                    {
                        pregunta: '¿Cuánto es 17 ÷ 5? (cociente)',
                        opciones: ['2', '3', '4', '5'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'En 17 ÷ 5, ¿cuál es el residuo?',
                        opciones: ['1', '2', '3', '4'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuánto es 25 ÷ 4? (cociente)',
                        opciones: ['5', '6', '7', '8'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Si repartes 23 caramelos entre 5 niños, ¿cuántos sobran?',
                        opciones: ['1', '2', '3', '4'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Cuánto es 30 ÷ 7? (cociente)',
                        opciones: ['3', '4', '5', '6'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Fracciones Equivalentes',
                descripcion: 'Trabaja con fracciones',
                objetivo: 'Comparar y simplificar fracciones',
                preguntas: [
                    {
                        pregunta: '¿Cuál fracción es equivalente a 1/2?',
                        opciones: ['1/3', '2/4', '1/4', '3/5'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué fracción es mayor: 2/3 o 1/2?',
                        opciones: ['2/3', '1/2', 'Son iguales', 'No se puede saber'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cuánto es 1/4 + 1/4?',
                        opciones: ['1/8', '2/8', '1/2', '2/4'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Simplifica 4/8:',
                        opciones: ['1/2', '2/4', '1/4', 'No se puede'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Cuánto es 3/4 de 12?',
                        opciones: ['6', '8', '9', '12'],
                        respuesta: 2,
                    },
                ],
            },
        ],
    },
    comunicacion: {
        frase: '¡Comunícate con estilo y claridad! 📝',
        mision_logro: 'Escribir textos bien estructurados',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Verbos y Tiempos',
                descripcion: 'Usa verbos en diferentes tiempos',
                objetivo: 'Conjugar verbos correctamente',
                preguntas: [
                    {
                        pregunta: '¿Cuál es el tiempo de "Mañana iré al parque"?',
                        opciones: ['Pasado', 'Presente', 'Futuro', 'Ninguno'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'En "Ayer jugué fútbol", el verbo está en:',
                        opciones: ['Presente', 'Pasado', 'Futuro', 'Infinitivo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuál verbo está en presente?',
                        opciones: ['Corrí', 'Corro', 'Correré', 'Correr'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Conjuga "comer" en futuro (yo):',
                        opciones: ['Como', 'Comí', 'Comeré', 'Comía'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué es un verbo?',
                        opciones: ['Una cualidad', 'Una acción', 'Un nombre', 'Un lugar'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Conectores Lógicos',
                descripcion: 'Une ideas con conectores',
                objetivo: 'Usar conectores para dar coherencia',
                preguntas: [
                    {
                        pregunta: '¿Qué conector indica causa?',
                        opciones: ['Pero', 'Porque', 'Entonces', 'Después'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Completa: "Estudié mucho, ___ aprobé el examen"',
                        opciones: ['pero', 'porque', 'entonces', 'aunque'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué conector indica contraste?',
                        opciones: ['Y', 'Porque', 'Pero', 'Entonces'],
                        respuesta: 2,
                    },
                    {
                        pregunta: 'Completa: "Quería salir, ___ estaba lloviendo"',
                        opciones: ['y', 'porque', 'pero', 'entonces'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Para qué sirven los conectores?',
                        opciones: ['Para separar ideas', 'Para relacionar ideas', 'Para confundir', 'No sirven'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Texto Argumentativo',
                descripcion: 'Defiende tu opinión con argumentos',
                objetivo: 'Escribir textos argumentativos simples',
                preguntas: [
                    {
                        pregunta: '¿Qué es un argumento?',
                        opciones: ['Una pelea', 'Una razón para apoyar una idea', 'Una historia', 'Una descripción'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'En un texto argumentativo, ¿qué presentas primero?',
                        opciones: ['Conclusión', 'Argumentos', 'Tu opinión', 'Ejemplos'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué debes usar para apoyar tu opinión?',
                        opciones: ['Solo emociones', 'Argumentos y ejemplos', 'Gritos', 'Nada'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo terminas un texto argumentativo?',
                        opciones: ['Sin conclusión', 'Con una conclusión', 'Con una pregunta', 'Con puntos suspensivos'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Es válido tener opinión diferente con respeto?',
                        opciones: ['No', 'Sí', 'Solo si todos están de acuerdo', 'Nunca'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    ciencia_tecnologia: {
        frase: '¡Descubre los secretos de la naturaleza! 🔭',
        mision_logro: 'Comprender fenómenos científicos',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Fotosíntesis',
                descripcion: 'Comprende cómo las plantas producen alimento',
                objetivo: 'Entender el proceso de fotosíntesis',
                preguntas: [
                    {
                        pregunta: '¿Qué necesitan las plantas para hacer fotosíntesis?',
                        opciones: ['Solo agua', 'Sol, agua y CO2', 'Solo aire', 'Solo tierra'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué producen las plantas en la fotosíntesis?',
                        opciones: ['CO2', 'Oxígeno y glucosa', 'Solo agua', 'Nitrógeno'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Dónde ocurre la fotosíntesis?',
                        opciones: ['En las raíces', 'En las hojas', 'En el tallo', 'En las flores'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué pigmento hace que las hojas sean verdes?',
                        opciones: ['Caroteno', 'Clorofila', 'Melanina', 'Hemoglobina'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Por qué es importante la fotosíntesis?',
                        opciones: ['No es importante', 'Produce oxígeno para respirar', 'Solo para las plantas', 'No tiene función'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Fuerza y Movimiento',
                descripcion: 'Comprende las fuerzas que causan movimiento',
                objetivo: 'Entender conceptos de física básica',
                preguntas: [
                    {
                        pregunta: '¿Qué es una fuerza?',
                        opciones: ['Un color', 'Un empuje o jale', 'Un sonido', 'Una luz'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué fuerza hace que caigas cuando saltas?',
                        opciones: ['Magnetismo', 'Gravedad', 'Fricción', 'Electricidad'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es la fricción?',
                        opciones: ['Un tipo de luz', 'Fuerza que frena el movimiento', 'Un líquido', 'Un gas'],
                        respuesta: 1,
                    },
                    {
                        pregunta: 'Si empujas una caja con más fuerza, ¿qué pasa?',
                        opciones: ['Se mueve más rápido', 'Se mueve más lento', 'No se mueve', 'Desaparece'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Los objetos en reposo se mueven solos?',
                        opciones: ['Sí, siempre', 'No, necesitan una fuerza', 'A veces', 'Depende del color'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Ecosistemas',
                descripcion: 'Comprende las relaciones en un ecosistema',
                objetivo: 'Identificar componentes de ecosistemas',
                preguntas: [
                    {
                        pregunta: '¿Qué es un ecosistema?',
                        opciones: ['Solo animales', 'Solo plantas', 'Seres vivos e inertes interactuando', 'Solo agua'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué son los factores abióticos?',
                        opciones: ['Seres vivos', 'Elementos sin vida (agua, sol, aire)', 'Solo animales', 'Solo plantas'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué pasa si desaparece un eslabón de la cadena?',
                        opciones: ['Nada', 'Se afecta todo el ecosistema', 'Solo ese animal', 'Mejora todo'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué es un productor en un ecosistema?',
                        opciones: ['Un carnívoro', 'Una planta', 'Un descomponedor', 'Un consumidor'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Los humanos afectamos los ecosistemas?',
                        opciones: ['No', 'Sí, positiva y negativamente', 'Solo positivamente', 'Solo negativamente'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    personal_social: {
        frase: '¡Conoce tu pasado, construye tu futuro! 🏺',
        mision_logro: 'Comprender la historia y geografía nacional',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Imperio Incaico',
                descripcion: 'Conoce la grandeza del Tahuantinsuyo',
                objetivo: 'Comprender la organización inca',
                preguntas: [
                    {
                        pregunta: '¿Cómo se llamaba el imperio de los incas?',
                        opciones: ['Tahuantinsuyo', 'Azteca', 'Maya', 'Olmeca'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Quién era el máximo gobernante inca?',
                        opciones: ['El rey', 'El Sapa Inca', 'El presidente', 'El curaca'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuántos suyos tenía el Tahuantinsuyo?',
                        opciones: ['2', '3', '4', '5'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué construyeron los incas para comunicarse?',
                        opciones: ['Carreteras', 'Caminos (qhapaq ñan)', 'Aviones', 'Barcos'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cuál era la capital del imperio inca?',
                        opciones: ['Lima', 'Arequipa', 'Cusco', 'Trujillo'],
                        respuesta: 2,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Conquista del Perú',
                descripcion: 'Comprende la llegada de los españoles',
                objetivo: 'Entender el proceso de la conquista',
                preguntas: [
                    {
                        pregunta: '¿Quién conquistó el imperio inca?',
                        opciones: ['Cristóbal Colón', 'Francisco Pizarro', 'Hernán Cortés', 'Américo Vespucio'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿En qué año llegaron los españoles al Perú?',
                        opciones: ['1492', '1521', '1532', '1542'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué buscaban los españoles?',
                        opciones: ['Aventuras', 'Oro y riquezas', 'Amigos', 'Comida'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué pasó con el Sapa Inca Atahualpa?',
                        opciones: ['Escapó', 'Fue capturado y ejecutado', 'Se hizo amigo de Pizarro', 'Nada'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Cómo se llamó el periodo después de la conquista?',
                        opciones: ['República', 'Virreinato', 'Imperio', 'Democracia'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Regiones del Perú',
                descripcion: 'Conoce la diversidad geográfica',
                objetivo: 'Identificar características de cada región',
                preguntas: [
                    {
                        pregunta: '¿Qué región tiene el clima más cálido y húmedo?',
                        opciones: ['Costa', 'Sierra', 'Selva', 'Todas igual'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Dónde están los nevados?',
                        opciones: ['Costa', 'Sierra', 'Selva', 'Mar'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué región tiene poca lluvia?',
                        opciones: ['Selva', 'Sierra', 'Costa', 'Todas'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Dónde está el lago Titicaca?',
                        opciones: ['Costa', 'Sierra', 'Selva', 'No existe'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué actividad económica es importante en la costa?',
                        opciones: ['Ganadería de alpacas', 'Pesca', 'Caza', 'Ninguna'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
    arte_cultura: {
        frase: '¡El arte es expresión del alma! 🎨🎭',
        mision_logro: 'Apreciar y crear arte con significado',
        competencias: [
            {
                id: 'competencia_01',
                nombre: 'Arte Precolombino',
                descripcion: 'Conoce el arte de culturas antiguas',
                objetivo: 'Valorar el arte de nuestros ancestros',
                preguntas: [
                    {
                        pregunta: '¿Qué cultura hizo hermosos textiles?',
                        opciones: ['Paracas', 'Romana', 'Griega', 'Egipcia'],
                        respuesta: 0,
                    },
                    {
                        pregunta: '¿Qué representan las líneas de Nasca?',
                        opciones: ['Nada', 'Figuras geométricas y animales', 'Solo líneas', 'Carreteras'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué material usaban los mochicas para sus cerámicas?',
                        opciones: ['Metal', 'Arcilla', 'Madera', 'Piedra'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Los incas trabajaban en oro y plata?',
                        opciones: ['No', 'Sí', 'Solo oro', 'Solo plata'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Es importante preservar el arte antiguo?',
                        opciones: ['No', 'Sí, es nuestra herencia', 'No importa', 'Solo el moderno'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_02',
                nombre: 'Música y Folclore',
                descripcion: 'Aprecia la música tradicional',
                objetivo: 'Valorar la música de todas las regiones',
                preguntas: [
                    {
                        pregunta: '¿Qué es el huayno?',
                        opciones: ['Una comida', 'Un baile andino', 'Un animal', 'Una planta'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿De qué región es la marinera?',
                        opciones: ['Selva', 'Sierra', 'Costa', 'Todas'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿Qué instrumento es el charango?',
                        opciones: ['De viento', 'De cuerda', 'De percusión', 'Electrónico'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El festejo es música de qué región?',
                        opciones: ['Sierra', 'Selva', 'Costa (afroperuana)', 'Ninguna'],
                        respuesta: 2,
                    },
                    {
                        pregunta: '¿La música folclórica representa nuestra identidad?',
                        opciones: ['No', 'Sí', 'Solo la moderna', 'No importa'],
                        respuesta: 1,
                    },
                ],
            },
            {
                id: 'competencia_03',
                nombre: 'Expresión Creativa',
                descripcion: 'Crea tu propio arte',
                objetivo: 'Desarrollar tu creatividad personal',
                preguntas: [
                    {
                        pregunta: '¿Qué es la creatividad?',
                        opciones: ['Copiar', 'Crear algo original', 'Destruir', 'Nada'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Puedes mezclar diferentes estilos artísticos?',
                        opciones: ['No, nunca', 'Sí, eso es innovación', 'Es prohibido', 'Solo profesionales'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El arte tiene reglas estrictas?',
                        opciones: ['Sí, muy estrictas', 'No, la creatividad es libre', 'Solo algunas', 'Depende'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿Qué necesitas para ser artista?',
                        opciones: ['Solo talento innato', 'Práctica y pasión', 'Dinero', 'Nada'],
                        respuesta: 1,
                    },
                    {
                        pregunta: '¿El arte puede transmitir mensajes?',
                        opciones: ['No', 'Sí', 'Solo palabras transmiten', 'Es imposible'],
                        respuesta: 1,
                    },
                ],
            },
        ],
    },
};
