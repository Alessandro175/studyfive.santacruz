        // Base de datos de preguntas por grado y materia
const bancoPreguntas = {
    1: {
        'Inglés': [
            {
                pregunta: "¿Cómo se dice 'hola' en inglés?",
                opciones: ["Hello", "Goodbye", "Thank you", "Apple"],
                respuestaCorrecta: 0,
                explicacion: "La palabra 'Hello' significa 'hola' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'perro'?",
                opciones: ["Cat", "House", "Dog", "Book"],
                respuestaCorrecta: 2,
                explicacion: "'Dog' es la palabra correcta para 'perro' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'gato' en inglés?",
                opciones: ["Dog", "Cat", "Bird", "Fish"],
                respuestaCorrecta: 1,
                explicacion: "'Cat' significa 'gato' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'casa'?",
                opciones: ["Car", "Tree", "House", "Ball"],
                respuestaCorrecta: 2,
                explicacion: "'House' significa 'casa' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'libro' en inglés?",
                opciones: ["Book", "Pen", "Apple", "Desk"],
                respuestaCorrecta: 0,
                explicacion: "'Book' significa 'libro' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'manzana'?",
                opciones: ["Orange", "Apple", "Banana", "Grape"],
                respuestaCorrecta: 1,
                explicacion: "'Apple' significa 'manzana' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'adiós' en inglés?",
                opciones: ["Hello", "Goodbye", "Please", "Thank you"],
                respuestaCorrecta: 1,
                explicacion: "'Goodbye' significa 'adiós' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'mamá'?",
                opciones: ["Father", "Mother", "Sister", "Brother"],
                respuestaCorrecta: 1,
                explicacion: "'Mother' significa 'mamá' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'papá' en inglés?",
                opciones: ["Father", "Mother", "Baby", "Family"],
                respuestaCorrecta: 0,
                explicacion: "'Father' significa 'papá' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'pelota'?",
                opciones: ["Toy", "Ball", "Game", "Play"],
                respuestaCorrecta: 1,
                explicacion: "'Ball' significa 'pelota' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'agua' en inglés?",
                opciones: ["Water", "Milk", "Juice", "Tea"],
                respuestaCorrecta: 0,
                explicacion: "'Water' significa 'agua' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'sol'?",
                opciones: ["Moon", "Star", "Sun", "Sky"],
                respuestaCorrecta: 2,
                explicacion: "'Sun' significa 'sol' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'luna' en inglés?",
                opciones: ["Sun", "Moon", "Star", "Cloud"],
                respuestaCorrecta: 1,
                explicacion: "'Moon' significa 'luna' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'flor'?",
                opciones: ["Tree", "Flower", "Leaf", "Grass"],
                respuestaCorrecta: 1,
                explicacion: "'Flower' significa 'flor' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'árbol' en inglés?",
                opciones: ["Tree", "Branch", "Root", "Leaf"],
                respuestaCorrecta: 0,
                explicacion: "'Tree' significa 'árbol' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'carro'?",
                opciones: ["Bus", "Car", "Train", "Bike"],
                respuestaCorrecta: 1,
                explicacion: "'Car' significa 'carro' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'escuela' en inglés?",
                opciones: ["House", "School", "Store", "Park"],
                respuestaCorrecta: 1,
                explicacion: "'School' significa 'escuela' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'niño'?",
                opciones: ["Girl", "Boy", "Baby", "Man"],
                respuestaCorrecta: 1,
                explicacion: "'Boy' significa 'niño' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'niña' en inglés?",
                opciones: ["Boy", "Girl", "Woman", "Baby"],
                respuestaCorrecta: 1,
                explicacion: "'Girl' significa 'niña' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'mesa'?",
                opciones: ["Chair", "Table", "Desk", "Bed"],
                respuestaCorrecta: 1,
                explicacion: "'Table' significa 'mesa' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'silla' en inglés?",
                opciones: ["Chair", "Table", "Sofa", "Bed"],
                respuestaCorrecta: 0,
                explicacion: "'Chair' significa 'silla' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'mano'?",
                opciones: ["Foot", "Hand", "Arm", "Leg"],
                respuestaCorrecta: 1,
                explicacion: "'Hand' significa 'mano' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'pie' en inglés?",
                opciones: ["Hand", "Foot", "Leg", "Arm"],
                respuestaCorrecta: 1,
                explicacion: "'Foot' significa 'pie' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'ojo'?",
                opciones: ["Ear", "Eye", "Nose", "Mouth"],
                respuestaCorrecta: 1,
                explicacion: "'Eye' significa 'ojo' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'nariz' en inglés?",
                opciones: ["Eye", "Ear", "Nose", "Mouth"],
                respuestaCorrecta: 2,
                explicacion: "'Nose' significa 'nariz' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'boca'?",
                opciones: ["Eye", "Nose", "Ear", "Mouth"],
                respuestaCorrecta: 3,
                explicacion: "'Mouth' significa 'boca' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'rojo' en inglés?",
                opciones: ["Red", "Blue", "Green", "Yellow"],
                respuestaCorrecta: 0,
                explicacion: "'Red' significa 'rojo' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'azul'?",
                opciones: ["Red", "Blue", "Green", "Yellow"],
                respuestaCorrecta: 1,
                explicacion: "'Blue' significa 'azul' en inglés."
            },
            {
                pregunta: "¿Cómo se dice 'verde' en inglés?",
                opciones: ["Red", "Blue", "Green", "Yellow"],
                respuestaCorrecta: 2,
                explicacion: "'Green' significa 'verde' en inglés."
            },
            {
                pregunta: "¿Cuál es la palabra en inglés para 'amarillo'?",
                opciones: ["Red", "Blue", "Green", "Yellow"],
                respuestaCorrecta: 3,
                explicacion: "'Yellow' significa 'amarillo' en inglés."
            }
        ],
        'Matemática': [
            {pregunta:"Completa la secuencia: 2, 4, 6, __, 10",opciones:["7","8","9","5"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 2 en 2: 2+2=4, 4+2=6, 6+2=8, 8+2=10"},
            {pregunta:"Completa la operación: 3 + 2 = __",opciones:["4","5","6","1"],respuestaCorrecta:1,explicacion:"Si tienes 3 objetos y agregas 2 más, tendrás 5 objetos"},
            {pregunta:"Completa la operación: 8 - 3 = __",opciones:["5","6","4","11"],respuestaCorrecta:0,explicacion:"Si tienes 8 objetos y quitas 3, te quedan 5 objetos"},
            {pregunta:"Completa la secuencia: 5, 10, 15, __",opciones:["18","20","16","25"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 5 en 5: 5+5=10, 10+5=15, 15+5=20"},
            {pregunta:"Completa la operación: 7 + 1 = __",opciones:["8","6","9","7"],respuestaCorrecta:0,explicacion:"Cuando agregas 1 a cualquier número, obtienes el siguiente número"},
            {pregunta:"Completa la operación: 10 - 2 = __",opciones:["7","8","9","12"],respuestaCorrecta:1,explicacion:"Si tienes 10 objetos y quitas 2, te quedan 8 objetos"},
            {pregunta:"Completa la operación: 5 + 3 - 2 = __",opciones:["6","7","5","10"],respuestaCorrecta:0,explicacion:"Primero sumas: 5+3=8, luego restas: 8-2=6"},
            {pregunta:"Completa la secuencia: 1, 3, 5, __, 9",opciones:["6","7","8","4"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 2 en 2: 1+2=3, 3+2=5, 5+2=7, 7+2=9"},
            {pregunta:"Completa la operación: 4 + 4 = __",opciones:["8","6","10","0"],respuestaCorrecta:0,explicacion:"4+4 es el doble de 4, que es igual a 8"},
            {pregunta:"Completa la operación: 7 - 4 = __",opciones:["2","3","4","11"],respuestaCorrecta:1,explicacion:"Si tienes 7 objetos y quitas 4, te quedan 3 objetos"},
            {pregunta:"Completa la secuencia: 10, 20, __, 40",opciones:["25","30","35","50"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 10 en 10: 10+10=20, 20+10=30, 30+10=40"},
            {pregunta:"Completa la operación: 6 + 2 = __",opciones:["8","4","7","10"],respuestaCorrecta:0,explicacion:"Si tienes 6 objetos y agregas 2 más, tendrás 8 objetos"},
            {pregunta:"Completa la operación: 9 - 5 = __",opciones:["3","4","5","14"],respuestaCorrecta:1,explicacion:"Si tienes 9 objetos y quitas 5, te quedan 4 objetos"},
            {pregunta:"Completa la operación: 4 - 1 + 3 = __",opciones:["6","5","7","2"],respuestaCorrecta:0,explicacion:"Primero restas: 4-1=3, luego sumas: 3+3=6"},
            {pregunta:"Completa la secuencia: 3, 6, 9, __, 15",opciones:["11","12","13","18"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 3 en 3: 3+3=6, 6+3=9, 9+3=12, 12+3=15"},
            {pregunta:"Completa la operación: 5 + 3 = __",opciones:["7","8","9","2"],respuestaCorrecta:1,explicacion:"Si tienes 5 objetos y agregas 3 más, tendrás 8 objetos"},
            {pregunta:"Completa la operación: 6 - 3 = __",opciones:["2","3","4","9"],respuestaCorrecta:1,explicacion:"Si tienes 6 objetos y quitas 3, te quedan 3 objetos"},
            {pregunta:"Completa la secuencia: 2, 5, 8, __",opciones:["10","11","12","13"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 3 en 3: 2+3=5, 5+3=8, 8+3=11"},
            {pregunta:"Completa la operación: 2 + 6 = __",opciones:["8","4","7","10"],respuestaCorrecta:0,explicacion:"Si tienes 2 objetos y agregas 6 más, tendrás 8 objetos"},
            {pregunta:"Completa la operación: 5 - 2 = __",opciones:["2","3","4","7"],respuestaCorrecta:1,explicacion:"Si tienes 5 objetos y quitas 2, te quedan 3 objetos"},
            {pregunta:"Completa la operación: 7 + 2 - 4 = __",opciones:["5","6","4","13"],respuestaCorrecta:0,explicacion:"Primero sumas: 7+2=9, luego restas: 9-4=5"},
            {pregunta:"Completa la secuencia: 4, 8, 12, __, 20",opciones:["14","16","15","24"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 4 en 4: 4+4=8, 8+4=12, 12+4=16, 16+4=20"},
            {pregunta:"Completa la operación: 1 + 8 = __",opciones:["9","7","10","8"],respuestaCorrecta:0,explicacion:"Si tienes 1 objeto y agregas 8 más, tendrás 9 objetos"},
            {pregunta:"Completa la operación: 8 - 1 = __",opciones:["6","7","9","8"],respuestaCorrecta:1,explicacion:"Si tienes 8 objetos y quitas 1, te quedan 7 objetos"},
            {pregunta:"Completa la secuencia: 1, 4, 7, __, 13",opciones:["9","10","11","8"],respuestaCorrecta:1,explicacion:"La secuencia aumenta de 3 en 3: 1+3=4, 4+3=7, 7+3=10, 10+3=13"},
            {pregunta:"Completa la operación: 9 + 1 = __",opciones:["10","8","11","9"],respuestaCorrecta:0,explicacion:"Si tienes 9 objetos y agregas 1 más, tendrás 10 objetos"},
            {pregunta:"Completa la operación: 10 - 7 = __",opciones:["2","3","4","17"],respuestaCorrecta:1,explicacion:"Si tienes 10 objetos y quitas 7, te quedan 3 objetos"},
            {pregunta:"Completa la operación: 8 - 3 + 1 = __",opciones:["5","6","4","12"],respuestaCorrecta:1,explicacion:"Primero restas: 8-3=5, luego sumas: 5+1=6"},
            {pregunta:"Completa la operación: 3 + 5 = __",opciones:["7","8","9","2"],respuestaCorrecta:1,explicacion:"Si tienes 3 objetos y agregas 5 más, tendrás 8 objetos"},
            {pregunta:"Completa la operación: 9 - 3 = __",opciones:["5","6","7","12"],respuestaCorrecta:1,explicacion:"Si tienes 9 objetos y quitas 3, te quedan 6 objetos"}
        ],
        'Comunicación': [
            {pregunta:"¿Cuál es el primer día de la semana?",opciones:["Martes", "Lunes", "Domingo", "Miércoles"],respuestaCorrecta: 1,explicacion:"El lunes es el primer día de la semana según el calendario escolar y laboral."},
            {pregunta:"¿Cuántas vocales tiene el alfabeto español?",opciones: ["4", "5", "6", "3"],respuestaCorrecta: 1,explicacion: "El alfabeto español tiene 5 vocales: a, e, i, o, u."},
            {pregunta:"¿Qué animal vive en el agua?",opciones: ["León", "Pez", "Conejo", "Pájaro"],respuestaCorrecta: 1,explicacion: "El pez es un animal que vive en el agua."},
            {pregunta:"¿Qué animal dice 'miau'?",opciones: ["Perro", "Gato", "Vaca", "Pato"],respuestaCorrecta: 1,explicacion: "El gato es el animal que hace el sonido 'miau'."},
            {pregunta:"¿Cuántos dedos tenemos en una mano?",opciones: ["4", "5", "6", "3"],respuestaCorrecta: 1,explicacion: "Cada mano tiene 5 dedos: pulgar, índice, medio, anular y meñique."},
            {pregunta:"¿De qué color es el sol?",opciones: ["Azul", "Amarillo", "Verde", "Rojo"],respuestaCorrecta: 1,explicacion: "El sol se ve de color amarillo desde la Tierra."},
            {pregunta:"¿Cuál es la primera letra del Alfabeto",opciones:["C","S","F","A"],respuestaCorrecta: 3,explicacion:"La letra A es la primera letra del alfabeto."},
            {pregunta:"¿Qué es una palabra?",opciones:["Un número","Un conjunto de letras que tiene significado","Un dibujo","Un juego"],respuestaCorrecta:"Un conjunto de letras que tiene un significado",explicacion: "Porque esta establecido correctamente"},
            {pregunta:"¿Qué es un cuento?",opciones: ["Un número", "Una receta", "Una pelota", "Una historia inventada"],respuestaCorrecta: 3,explicacion: "Porque es una historia fictisia deacuerdo a nuestros gustos"},
            {pregunta:"¿Cuál es una palabra con m?",opciones: ["Mamá", "Niño", "Soldado", "Susy"],respuestaCorrecta: 0,explicacion: "Es la palabra que empieza con M"},
            {pregunta:"¿Qué animal dice 'Gua'?",opciones: ["Perro", "Gato", "Oso", "Oveja"],respuestaCorrecta: 0,explicacion: "El Perro es el animal que hace el sonido Guau'."},
            {pregunta:"¿Cuántos dedos tenemos en una mano?",opciones: ["4", "5", "6", "3"],respuestaCorrecta: 1,explicacion: "Cada mano tiene 5 dedos: pulgar, índice, medio, anular y meñique."},
            {pregunta:"¿De qué color son los Árboles?",opciones: ["Rosado", "Celeste", "Verde", "Rojo"],respuestaCorrecta: 2,explicacion: "Los Árboles se ven de color Verde en la Tierra."},
            {pregunta:"¿Cuál es la Ultima letra del Alfabeto",opciones:["z","O","R","A"],respuestaCorrecta: 0,explicacion:"La letra Z es la Ultima letra del alfabeto."},
        ],
        'Ciencia y Tecnología': [ 
            {
            pregunta: "¿Qué necesitan las plantas para crecer?",
            opciones: ["Agua y luz solar", "Solo tierra", "Solo aire", "Solo agua"],
            respuestaCorrecta: 0,
            explicacion: "Las plantas necesitan agua, luz solar, aire y tierra para crecer sanas y fuertes."
            },
            {
            pregunta: "¿Cuántas patas tiene una araña?",
            opciones: ["6 patas", "8 patas", "4 patas", "10 patas"],
            respuestaCorrecta: 1,
            explicacion: "Las arañas tienen 8 patas. Son diferentes a los insectos que tienen 6 patas."
            },
            {
            pregunta: "¿Qué aparato usamos para hablar con personas que están lejos?",
            opciones: ["Teléfono", "Televisión", "Radio", "Computadora"],
            respuestaCorrecta: 0,
            explicacion: "El teléfono nos permite hablar con personas que están en otros lugares."
            },
            {
            pregunta: "¿Qué sale del grifo cuando lo abrimos?",
            opciones: ["Aire", "Agua", "Leche", "Jugo"],
            respuestaCorrecta: 1,
            explicacion: "Del grifo sale agua, que es muy importante para beber, cocinar y lavar."
            },
            {
            pregunta: "¿Cuál de estos animales vive en el agua?",
            opciones: ["Perro", "Gato", "Pez", "Pájaro"],
            respuestaCorrecta: 2,
            explicacion: "Los peces viven en el agua, tienen aletas para nadar y branquias para respirar."
            },
            {
            pregunta: "¿Qué vemos en el cielo durante el día?",
            opciones: ["Luna", "Estrellas", "Sol", "Planetas"],
            respuestaCorrecta: 2,
            explicacion: "Durante el día vemos el Sol, que nos da luz y calor."
            },
            {
            pregunta: "¿Qué aparato nos ayuda a ver programas y películas?",
            opciones: ["Televisión", "Refrigerador", "Lavadora", "Horno"],
            respuestaCorrecta: 0,
            explicacion: "La televisión nos permite ver programas, películas y noticias."
            },
            {
            pregunta: "¿Cuál de estos es un animal que vuela?",
            opciones: ["Elefante", "Pájaro", "Pez", "Serpiente"],
            respuestaCorrecta: 1,
            explicacion: "Los pájaros tienen alas que les permiten volar por el cielo."
            },
            {
            pregunta: "¿Qué parte del cuerpo usamos para ver?",
            opciones: ["Oídos", "Nariz", "Ojos", "Boca"],
            respuestaCorrecta: 2,
            explicacion: "Usamos los ojos para ver todo lo que está a nuestro alrededor."
            },
            {
            pregunta: "¿Qué aparato mantiene fría nuestra comida?",
            opciones: ["Televisión", "Refrigerador", "Teléfono", "Computadora"],
            respuestaCorrecta: 1,
            explicacion: "El refrigerador mantiene fría la comida para que no se dañe."
            },
            {
            pregunta: "¿Cuál de estos es un mamífero?",
            opciones: ["Pez", "Pájaro", "Perro", "Serpiente"],
            respuestaCorrecta: 2,
            explicacion: "El perro es un mamífero porque tiene pelo y toma leche de su mamá cuando es bebé."
            },
            {
            pregunta: "¿Qué vemos en el cielo durante la noche?",
            opciones: ["Sol", "Luna", "Nubes", "Arcoíris"],
            respuestaCorrecta: 1,
            explicacion: "Durante la noche vemos la luna, que nos da luz cuando está oscuro."
            },
            {
            pregunta: "¿Cuál de estos materiales se puede reciclar?",
            opciones: ["Papel", "Comida", "Piedras", "Tierra"],
            respuestaCorrecta: 0,
            explicacion: "El papel se puede reciclar para hacer nuevos libros y cuadernos."
            },
            {
            pregunta: "¿Qué parte de la planta está bajo la tierra?",
            opciones: ["Hojas", "Flores", "Raíces", "Ramas"],
            respuestaCorrecta: 2,
            explicacion: "Las raíces están bajo la tierra y ayudan a la planta a obtener agua y nutrientes."
            },
            {
            pregunta: "¿Cuál es la fuente de energía más importante para la Tierra?",
            opciones: ["Luna", "Sol", "Viento", "Agua"],
            respuestaCorrecta: 1,
            explicacion: "El Sol es la fuente de energía más importante, nos da luz y calor."
            },
            {
            pregunta: "¿Qué aparato usamos para escuchar música?",
            opciones: ["Refrigerador", "Radio", "Lavadora", "Horno"],
            respuestaCorrecta: 1,
            explicacion: "El radio nos permite escuchar música y noticias."
            },
            {
            pregunta: "¿Cuántos sentidos tiene el ser humano?",
            opciones: ["3", "4", "5", "6"],
            respuestaCorrecta: 2,
            explicacion: "Tenemos 5 sentidos: vista, oído, olfato, gusto y tacto."
            },
            {
            pregunta: "¿Qué insecto hace miel?",
            opciones: ["Hormiga", "Abeja", "Mosca", "Mariposa"],
            respuestaCorrecta: 1,
            explicacion: "Las abejas hacen miel en sus colmenas y es muy dulce y nutritiva."
            },
            {
            pregunta: "¿Cuál de estos no es un estado del agua?",
            opciones: ["Líquido", "Sólido", "Gaseoso", "Amarillo"],
            respuestaCorrecta: 3,
            explicacion: "El agua puede ser líquida, sólida (hielo) o gaseosa (vapor), pero amarillo es un color."
            },
            {
            pregunta: "¿Qué aparato nos ayuda a lavar la ropa?",
            opciones: ["Televisión", "Refrigerador", "Lavadora", "Teléfono"],
            respuestaCorrecta: 2,
            explicacion: "La lavadora nos ayuda a limpiar nuestra ropa con agua y jabón."
            },
            {
            pregunta: "¿Cuál de estos animales pone huevos?",
            opciones: ["Perro", "Gato", "Gallina", "Vaca"],
            respuestaCorrecta: 2,
            explicacion: "La gallina pone huevos que podemos comer y de donde nacen los pollitos."
            },
            {
            pregunta: "¿Qué necesitamos para que funcione una linterna?",
            opciones: ["Agua", "Pilas", "Tierra", "Aire"],
            respuestaCorrecta: 1,
            explicacion: "Las pilas o baterías dan energía a la linterna para que pueda dar luz."
            },
            {
            pregunta: "¿Cuál de estos es un planeta?",
            opciones: ["Sol", "Luna", "Tierra", "Estrella"],
            respuestaCorrecta: 2,
            explicacion: "La Tierra es el planeta donde vivimos, es redonda y gira alrededor del Sol."
            },
            {
            pregunta: "¿Qué parte del cuerpo usamos para oler?",
            opciones: ["Ojos", "Nariz", "Boca", "Oídos"],
            respuestaCorrecta: 1,
            explicacion: "Usamos la nariz para oler las flores, la comida y muchas otras cosas."
            },
            {
            pregunta: "¿Cuál de estos aparatos nos ayuda a comunicarnos por internet?",
            opciones: ["Horno", "Computadora", "Lavadora", "Refrigerador"],
            respuestaCorrecta: 1,
            explicacion: "La computadora nos permite usar internet para comunicarnos y aprender."
            },
            {
            pregunta: "¿Qué animal es conocido por ser el rey de la selva?",
            opciones: ["Elefante", "León", "Jirafa", "Mono"],
            respuestaCorrecta: 1,
            explicacion: "El león es conocido como el rey de la selva porque es fuerte y valiente."
            },
            {
            pregunta: "¿Cuál de estos es un medio de transporte?",
            opciones: ["Mesa", "Carro", "Silla", "Cama"],
            respuestaCorrecta: 1,
            explicacion: "El carro es un medio de transporte que nos ayuda a movernos de un lugar a otro."
            },
            {
            pregunta: "¿Qué órgano del cuerpo bombea la sangre?",
            opciones: ["Cerebro", "Corazón", "Pulmones", "Estómago"],
            respuestaCorrecta: 1,
            explicacion: "El corazón bombea la sangre por todo nuestro cuerpo para mantenernos vivos."
            },
            {
            pregunta: "¿Cuál de estos materiales conduce la electricidad?",
            opciones: ["Madera", "Plástico", "Metal", "Papel"],
            respuestaCorrecta: 2,
            explicacion: "Los metales como el cobre conducen la electricidad, por eso se usan en los cables."
            }    
        ],
        'Personal Social': [
            {
            pregunta: "¿Cuál es la capital del Perú?",
            opciones: ["Cusco", "Lima", "Arequipa", "Trujillo"],
            respuestaCorrecta: 1,
            explicacion: "Lima es la capital del Perú, donde vive el presidente y están las oficinas más importantes del gobierno."
            },
            {
            pregunta: "¿Cuáles son los colores de la bandera peruana?",
            opciones: ["Azul y blanco", "Rojo y blanco", "Verde y rojo", "Amarillo y rojo"],
            respuestaCorrecta: 1,
            explicacion: "La bandera del Perú tiene dos franjas rojas y una blanca en el medio."
            },
            {
            pregunta: "¿Qué valor practicamos cuando decimos 'por favor' y 'gracias'?",
            opciones: ["Honestidad", "Cortesía", "Valentía", "Justicia"],
            respuestaCorrecta: 1,
            explicacion: "La cortesía es ser educado y respetuoso con otras personas."
            },
            {
            pregunta: "¿Cuál es el animal nacional del Perú?",
            opciones: ["Llama", "Vicuña", "Alpaca", "Cóndor"],
            respuestaCorrecta: 1,
            explicacion: "La vicuña es el animal nacional del Perú, aparece en el escudo nacional."
            },
            {
            pregunta: "¿Qué debemos hacer cuando vemos a alguien que necesita ayuda?",
            opciones: ["Ignorarlo", "Reírnos", "Ayudarlo", "Alejarnos"],
            respuestaCorrecta: 2,
            explicacion: "Debemos ayudar a las personas que lo necesitan, eso se llama solidaridad."
            },
            {
            pregunta: "¿En qué continente está el Perú?",
            opciones: ["Asia", "Europa", "América", "África"],
            respuestaCorrecta: 2,
            explicacion: "El Perú está en América del Sur, junto con otros países como Brasil y Argentina."
            },
            {
            pregunta: "¿Cuál es un plato típico peruano?",
            opciones: ["Pizza", "Ceviche", "Hamburguesa", "Tacos"],
            respuestaCorrecta: 1,
            explicacion: "El ceviche es un plato típico peruano hecho con pescado y limón."
            },
            {
            pregunta: "¿Qué significa respetar a nuestros padres?",
            opciones: ["Desobedecerlos", "Obedecerlos y amarlos", "Gritarles", "Ignorarlos"],
            respuestaCorrecta: 1,
            explicacion: "Respetar a nuestros padres significa obedecerlos, amarlos y ser agradecidos con ellos."
            },
            {
            pregunta: "¿Cuál es el océano que baña las costas del Perú?",
            opciones: ["Océano Atlántico", "Océano Pacífico", "Océano Índico", "Océano Ártico"],
            respuestaCorrecta: 1,
            explicacion: "El Océano Pacífico baña toda la costa peruana, desde Tumbes hasta Tacna."
            },
            {
            pregunta: "¿Qué celebramos el 28 de julio en el Perú?",
            opciones: ["Navidad", "Año Nuevo", "Fiestas Patrias", "Día de la Madre"],
            respuestaCorrecta: 2,
            explicacion: "El 28 de julio celebramos las Fiestas Patrias, el día de la independencia del Perú."
            },
            {
            pregunta: "¿Cuál es una región natural del Perú?",
            opciones: ["La costa", "El desierto", "La montaña", "El valle"],
            respuestaCorrecta: 0,
            explicacion: "El Perú tiene tres regiones naturales: costa, sierra y selva."
            },
            {
            pregunta: "¿Qué valor mostramos cuando decimos la verdad?",
            opciones: ["Mentira", "Honestidad", "Pereza", "Egoísmo"],
            respuestaCorrecta: 1,
            explicacion: "La honestidad es decir siempre la verdad, incluso cuando es difícil."
            },
            {
            pregunta: "¿Cuál es el río más largo del Perú?",
            opciones: ["Río Rímac", "Río Amazonas", "Río Ucayali", "Río Marañón"],
            respuestaCorrecta: 1,
            explicacion: "El río Amazonas es el más largo y nace en el Perú, en la región de Arequipa."
            },
            {
            pregunta: "¿Qué hacemos cuando compartimos nuestros juguetes?",
            opciones: ["Ser egoístas", "Ser generosos", "Ser envidiosos", "Ser perezosos"],
            respuestaCorrecta: 1,
            explicacion: "Ser generosos significa compartir lo que tenemos con otros niños."
            },
            {
            pregunta: "¿Cuál fue la civilización más importante del antiguo Perú?",
            opciones: ["Los Mayas", "Los Incas", "Los Aztecas", "Los Egipcios"],
            respuestaCorrecta: 1,
            explicacion: "Los Incas fueron la civilización más importante del Perú, construyeron Machu Picchu."
            },
            {
            pregunta: "¿Cuál es el departamento más grande del Perú?",
            opciones: ["Lima", "Cusco", "Loreto", "Arequipa"],
            respuestaCorrecta: 2,
            explicacion: "Loreto es el departamento más grande del Perú y está en la selva amazónica."
            },
            {
            pregunta: "¿Qué debemos hacer con la basura?",
            opciones: ["Botarla al suelo", "Botarla al tacho", "Quemarla", "Dejarla donde sea"],
            respuestaCorrecta: 1,
            explicacion: "Debemos botar la basura en el tacho para mantener limpio nuestro ambiente."
            },
            {
            pregunta: "¿Cuál es un símbolo patrio del Perú?",
            opciones: ["La rosa", "El escudo nacional", "La paloma", "El gato"],
            respuestaCorrecta: 1,
            explicacion: "El escudo nacional es un símbolo patrio que representa al Perú."
            },
            {
            pregunta: "¿Qué significa ser responsable?",
            opciones: ["Hacer travesuras", "Cumplir nuestros deberes", "Ser flojo", "Mentir"],
            respuestaCorrecta: 1,
            explicacion: "Ser responsable significa cumplir con nuestros deberes y tareas."
            },
            {
            pregunta: "¿Cuál es un producto que se cultiva en la costa peruana?",
            opciones: ["Papa", "Algodón", "Café", "Cacao"],
            respuestaCorrecta: 1,
            explicacion: "El algodón se cultiva en la costa peruana gracias al clima cálido."
            },
            {
            pregunta: "¿Qué valor practicamos cuando esperamos nuestro turno?",
            opciones: ["Impaciencia", "Paciencia", "Prisa", "Nerviosismo"],
            respuestaCorrecta: 1,
            explicacion: "La paciencia es saber esperar nuestro turno sin desesperarnos."
            },
            {
            pregunta: "¿Cuál es el nombre del himno nacional del Perú?",
            opciones: ["Himno Nacional", "Somos libres", "Viva el Perú", "Patria querida"],
            respuestaCorrecta: 0,
            explicacion: "Nuestro himno se llama 'Himno Nacional' y empieza con 'Somos libres'."
            },
            {
            pregunta: "¿Qué hacemos cuando respetamos las reglas de la escuela?",
            opciones: ["Ser rebeldes", "Ser obedientes", "Ser traviesos", "Ser perezosos"],
            respuestaCorrecta: 1,
            explicacion: "Ser obedientes significa seguir las reglas y normas de la escuela."
            },
            {
            pregunta: "¿Cuál es un baile típico del Perú?",
            opciones: ["Salsa", "Marinera", "Tango", "Cumbia"],
            respuestaCorrecta: 1,
            explicacion: "La marinera es un baile típico peruano muy elegante y hermoso."
            },
            {
            pregunta: "¿Qué región del Perú es conocida por sus montañas?",
            opciones: ["La costa", "La sierra", "La selva", "El desierto"],
            respuestaCorrecta: 1,
            explicacion: "La sierra es la región de las montañas, donde están los Andes."
            },
            {
            pregunta: "¿Qué valor mostramos cuando pedimos perdón?",
            opciones: ["Orgullo", "Humildad", "Soberbia", "Terquedad"],
            respuestaCorrecta: 1,
            explicacion: "La humildad es reconocer nuestros errores y pedir perdón."
            },
            {
            pregunta: "¿Cuál es el lago más alto del mundo que está en el Perú?",
            opciones: ["Lago Titicaca", "Lago Junín", "Lago Pomacochas", "Lago Llanganuco"],
            respuestaCorrecta: 0,
            explicacion: "El Lago Titicaca está entre Perú y Bolivia, es el lago navegable más alto del mundo."
            },
            {
            pregunta: "¿Qué debemos hacer cuando alguien nos saluda?",
            opciones: ["Ignorarlo", "Saludarlo también", "Voltear la cara", "Alejarnos"],
            respuestaCorrecta: 1,
            explicacion: "Debemos saludar también, eso muestra respeto y buena educación."
            },
            {
            pregunta: "¿Cuál es un instrumento musical típico del Perú?",
            opciones: ["Piano", "Quena", "Guitarra eléctrica", "Batería"],
            respuestaCorrecta: 1,
            explicacion: "La quena es un instrumento musical típico del Perú, hecho de caña."
            },
            {
            pregunta: "¿Qué significa amar a nuestra patria?",
            opciones: ["Odiar otros países", "Cuidar y respetar el Perú", "Irse del país", "Criticar todo"],
            respuestaCorrecta: 1,
            explicacion: "Amar a nuestra patria significa cuidar y respetar el Perú, nuestro país."
            }
        ],
        'Arte y Cultura': [
                    {
      pregunta: "¿Qué usamos para dibujar líneas y formas?",
      opciones: ["Pegamento", "Lápiz", "Tijera", "Goma"],
      respuestaCorrecta: 1,
      explicacion: "El lápiz nos ayuda a dibujar formas y líneas con facilidad."
    },
    {
      pregunta: "¿Qué danza es típica de la selva peruana?",
      opciones: ["Samba", "Marinera", "Danza de las tijeras", "Pandilla"],
      respuestaCorrecta: 3,
      explicacion: "La pandilla es una danza alegre de la región amazónica del Perú."
    },
    {
      pregunta: "¿Qué usamos para borrar dibujos de lápiz?",
      opciones: ["Goma", "Papel", "Tijera", "Lápiz de color"],
      respuestaCorrecta: 0,
      explicacion: "La goma sirve para borrar trazos de lápiz."
    },
    {
      pregunta: "¿Qué instrumento musical tiene cuerdas?",
      opciones: ["Cajón", "Zampoña", "Guitarra", "Tambor"],
      respuestaCorrecta: 2,
      explicacion: "La guitarra es un instrumento de cuerdas que se toca con los dedos o pua."
    },
    {
      pregunta: "¿Qué color usamos para pintar el cielo?",
      opciones: ["Rojo", "Azul", "Marrón", "Negro"],
      respuestaCorrecta: 1,
      explicacion: "El cielo suele representarse con el color azul en los dibujos."
    },
    {
      pregunta: "¿Qué expresión usamos en el arte teatral?",
      opciones: ["Silencio", "Voz y cuerpo", "Dormir", "Saltos altos"],
      respuestaCorrecta: 1,
      explicacion: "En el teatro se usan la voz y el cuerpo para expresar emociones."
    },
    {
      pregunta: "¿Qué color es parte de la bandera del Perú?",
      opciones: ["Verde", "Amarillo", "Rojo", "Azul"],
      respuestaCorrecta: 2,
      explicacion: "El rojo es uno de los colores principales de la bandera del Perú."
    },
    {
      pregunta: "¿Qué es una pintura?",
      opciones: ["Un baile", "Una canción", "Una imagen hecha con colores", "Un instrumento"],
      respuestaCorrecta: 2,
      explicacion: "Una pintura es una forma de arte visual creada con colores."
    },
    {
      pregunta: "¿Qué usamos para pegar papeles en un collage?",
      opciones: ["Tijera", "Pintura", "Goma", "Témpera"],
      respuestaCorrecta: 2,
      explicacion: "La goma o pegamento nos permite unir piezas de papel."
    },
    {
      pregunta: "¿Qué danza tradicional se baila en Puno?",
      opciones: ["Caporales", "Marinera", "Pandilla", "Diablada"],
      respuestaCorrecta: 3,
      explicacion: "La Diablada es una danza típica del altiplano peruano, especialmente en Puno."
    },
                { pregunta: "¿Qué usamos para pintar un dibujo?",
                opciones: ["Pincel", "Tenedor", "Regla", "Cepillo"],
                respuestaCorrecta: 0,
                explicacion: "El pincel sirve para pintar con témperas o acuarelas."
                },
                {
                pregunta: "¿Qué color se obtiene al mezclar azul con amarillo?",
                opciones: ["Rojo", "Naranja", "Verde", "Gris"],
                respuestaCorrecta: 2,
                explicacion: "Mezclando azul y amarillo se forma el color verde."
                },
                {
                pregunta: "¿Cuál de estos es un instrumento musical peruano?",
                opciones: ["Cajón", "Violín", "Trombón", "Flauta dulce"],
                respuestaCorrecta: 0,
                explicacion: "El cajón es un instrumento de percusión peruano."
                },
                {
                pregunta: "¿Qué usamos para colorear nuestros dibujos?",
                opciones: ["Tizas", "Lápices de colores", "Clavos", "Piedras"],
                respuestaCorrecta: 1,
                explicacion: "Los lápices de colores sirven para colorear dibujos."
                },
                {
                pregunta: "¿Qué es la marinera?",
                opciones: ["Un tipo de pintura", "Un instrumento", "Un baile peruano", "Un color"],
                respuestaCorrecta: 2,
                explicacion: "La marinera es una danza tradicional del Perú."
                },
                {
                pregunta: "¿Cuál de estos es un color primario?",
                opciones: ["Verde", "Naranja", "Rojo", "Rosado"],
                respuestaCorrecta: 2,
                explicacion: "Rojo es un color primario junto al azul y amarillo."
                },
                {
                pregunta: "¿Qué se usa para hacer una melodía?",
                opciones: ["Colores", "Instrumentos musicales", "Tijeras", "Pegamento"],
                respuestaCorrecta: 1,
                explicacion: "Los instrumentos musicales crean melodías y ritmos."
                },
                {
                pregunta: "¿Qué danza peruana se baila con pañuelos?",
                opciones: ["Samba", "Huayno", "Marinera", "Polca"],
                respuestaCorrecta: 2,
                explicacion: "La marinera se baila con pañuelos y mucho ritmo."
                },
                {
                pregunta: "¿Qué usamos para crear sonidos en el arte musical?",
                opciones: ["Goma", "Tijera", "Instrumentos", "Papel"],
                respuestaCorrecta: 2,
                explicacion: "Los instrumentos musicales permiten crear sonidos."
                },
                {
                pregunta: "¿Qué es un mural?",
                opciones: ["Un baile", "Un dibujo grande en la pared", "Una canción", "Un instrumento"],
                respuestaCorrecta: 1,
                explicacion: "Un mural es una pintura grande en una pared."
                },
                {
                pregunta: "¿Qué instrumento de viento es usado en la música andina?",
                opciones: ["Guitarra", "Zampoña", "Cajón", "Maracas"],
                respuestaCorrecta: 1,
                explicacion: "La zampoña es un instrumento típico de la sierra del Perú."
                },
                {
                pregunta: "¿Qué color se forma al mezclar rojo con azul?",
                opciones: ["Naranja", "Celeste", "Morado", "Gris"],
                respuestaCorrecta: 2,
                explicacion: "Rojo y azul forman el color morado."
                },
                {
                pregunta: "¿Qué parte del cuerpo usamos para tocar el cajón?",
                opciones: ["Codos", "Manos", "Rodillas", "Cabeza"],
                respuestaCorrecta: 1,
                explicacion: "El cajón se toca con las manos haciendo ritmos."
                },
                {
                pregunta: "¿Qué es la creatividad?",
                opciones: ["Dormir mucho", "Jugar fútbol", "Inventar y crear cosas", "Repetir lo mismo"],
                respuestaCorrecta: 2,
                explicacion: "La creatividad es imaginar y crear algo nuevo y original."
                },
                {
                pregunta: "¿Qué se usa para hacer música con ritmo?",
                opciones: ["Instrumentos de percusión", "Pegamento", "Tizas", "Tijeras"],
                respuestaCorrecta: 0,
                explicacion: "Los instrumentos de percusión como el cajón dan ritmo a la música."
                },
                {
                pregunta: "¿Cuál de estos es un ejemplo de arte?",
                opciones: ["Una pintura", "Un cuaderno vacío", "Una regla", "Un borrador"],
                respuestaCorrecta: 0,
                explicacion: "La pintura es una forma de expresión artística."
                },
                {
                pregunta: "¿Qué material usamos para moldear figuras con las manos?",
                opciones: ["Cartón", "Plastilina", "Papel", "Tiza"],
                respuestaCorrecta: 1,
                explicacion: "La plastilina permite crear figuras con las manos."
                },
                {
                pregunta: "¿Cuál de estas es una danza alegre del Perú?",
                opciones: ["Rock", "Polca", "Caporales", "Balada"],
                respuestaCorrecta: 2,
                explicacion: "Los caporales son una danza festiva del altiplano peruano."
                },
                {
                pregunta: "¿Qué instrumento se sopla para hacer sonidos?",
                opciones: ["Guitarra", "Cajón", "Zampoña", "Tambores"],
                respuestaCorrecta: 2,
                explicacion: "La zampoña se sopla para producir notas musicales."
                },
                {
                pregunta: "¿Qué forma de arte usamos para contar historias con imágenes?",
                opciones: ["Pintura", "Dibujo", "Teatro", "Cine"],
                respuestaCorrecta: 1,
                explicacion: "El dibujo permite representar historias o escenas con imágenes."
                }     
        ],
    }, 
    2:{
        'Inglés': [
            {
                pregunta: "¿De qué color es el sol?",
                opciones: ["Azul", "Amarillo", "Verde", "Rojo"],
                respuestaCorrecta: 1,
                explicacion: "El sol es de color amarillo."
            },
            {
                pregunta: "¿Cómo se dice 'perro' en inglés?",
                opciones: ["Cat", "Fish", "Dog", "Bird"],
                respuestaCorrecta: 2,
                explicacion: "'Perro' se dice 'Dog' en inglés."
            },
            {
                pregunta: "¿Cuál de estos es una fruta?",
                opciones: ["Apple", "Car", "Chair", "Shoe"],
                respuestaCorrecta: 0,
                explicacion: "'Apple' significa manzana, una fruta."
            },
            {
                pregunta: "¿Cuál es el opuesto de 'big'?",
                opciones: ["Small", "Tall", "Hot", "Fast"],
                respuestaCorrecta: 0,
                explicacion: "'Small' es lo opuesto de 'big'."
            },
            {
                pregunta: "¿Qué número viene después del nueve?",
                opciones: ["Ten", "Eleven", "Eight", "Seven"],
                respuestaCorrecta: 0,
                explicacion: "Después de nueve viene diez: 'Ten'."
            },
            {
                pregunta: "¿Qué animal dice 'meow'?",
                opciones: ["Dog", "Cow", "Cat", "Duck"],
                respuestaCorrecta: 2,
                explicacion: "El gato dice 'meow'."
            },
            {
                pregunta: "¿Qué usas en los pies?",
                opciones: ["Hat", "Shoes", "Shirt", "Gloves"],
                respuestaCorrecta: 1,
                explicacion: "'Shoes' son zapatos."
            },
            {
                pregunta: "¿Cómo se dice 'casa' en inglés?",
                opciones: ["Car", "Horse", "House", "Hat"],
                respuestaCorrecta: 2,
                explicacion: "'Casa' en inglés es 'House'."
            },
            {
                pregunta: "¿Cuál de estos es un color?",
                opciones: ["Book", "Blue", "Box", "Bat"],
                respuestaCorrecta: 1,
                explicacion: "'Blue' significa azul, un color."
            },
            {
                pregunta: "¿Cómo se dice 'gato' en inglés?",
                opciones: ["Rat", "Dog", "Bird", "Cat"],
                respuestaCorrecta: 3,
                explicacion: "'Gato' se dice 'Cat'."
            },
            {
                pregunta: "¿Qué hacen las abejas?",
                opciones: ["Milk", "Honey", "Juice", "Tea"],
                respuestaCorrecta: 1,
                explicacion: "Las abejas producen miel: 'Honey'."
            },
            {
                pregunta: "¿Qué usas para escribir?",
                opciones: ["Pen", "Fork", "Spoon", "Eraser"],
                respuestaCorrecta: 0,
                explicacion: "Se escribe con un bolígrafo: 'Pen'."
            },
            {
                pregunta: "¿De qué color es el pasto?",
                opciones: ["Red", "Green", "Black", "Pink"],
                respuestaCorrecta: 1,
                explicacion: "El pasto es verde: 'Green'."
            },
            {
                pregunta: "¿Cuál es un miembro de la familia?",
                opciones: ["Brother", "Chair", "Book", "Fish"],
                respuestaCorrecta: 0,
                explicacion: "'Brother' significa hermano."
            },
            {
                pregunta: "¿Cómo se dice 'libro' en inglés?",
                opciones: ["Book", "Table", "Pen", "Bag"],
                respuestaCorrecta: 0,
                explicacion: "'Libro' se dice 'Book'."
            },
            {
                pregunta: "¿Qué es un 'bird'?",
                opciones: ["Nada", "Vuela", "Camina", "Ladra"],
                respuestaCorrecta: 1,
                explicacion: "'Bird' significa pájaro, y vuela."
            },
            {
                pregunta: "¿Cuál de estos es un día de la semana?",
                opciones: ["January", "Blue", "Tuesday", "Cold"],
                respuestaCorrecta: 2,
                explicacion: "'Tuesday' es martes."
            },
            {
                pregunta: "¿Cuál es una fruta?",
                opciones: ["Banana", "Car", "Ball", "Table"],
                respuestaCorrecta: 0,
                explicacion: "'Banana' es plátano."
            },
            {
                pregunta: "¿De qué color es una banana?",
                opciones: ["Purple", "Green", "Yellow", "Blue"],
                respuestaCorrecta: 2,
                explicacion: "Las bananas son amarillas: 'Yellow'."
            },
            {
                pregunta: "¿Cómo se dice 'agua' en inglés?",
                opciones: ["Juice", "Milk", "Water", "Soda"],
                respuestaCorrecta: 2,
                explicacion: "'Agua' se dice 'Water'."
            },
            {
                pregunta: "¿Qué animal ladra?",
                opciones: ["Cat", "Bird", "Fish", "Dog"],
                respuestaCorrecta: 3,
                explicacion: "El perro ladra: 'Dog'."
            },
            {
                pregunta: "¿Cuánto es 3 + 2 en inglés?",
                opciones: ["Five", "Four", "Six", "Three"],
                respuestaCorrecta: 0,
                explicacion: "3 + 2 es cinco: 'Five'."
            },
            {
                pregunta: "¿Cómo se dice 'hola' en inglés?",
                opciones: ["Hi", "Bye", "Please", "Thanks"],
                respuestaCorrecta: 0,
                explicacion: "'Hola' se dice 'Hi'."
            },
            {
                pregunta: "¿Cuál es el opuesto de 'cold'?",
                opciones: ["Hot", "Fast", "Big", "Dry"],
                respuestaCorrecta: 0,
                explicacion: "'Hot' significa caliente, lo opuesto de 'cold'."
            },
            {
                pregunta: "¿Cuál es una verdura?",
                opciones: ["Apple", "Tomato", "Bread", "Milk"],
                respuestaCorrecta: 1,
                explicacion: "'Tomato' es un vegetal."
            },
            {
                pregunta: "¿Qué usas para tomar sopa?",
                opciones: ["Fork", "Spoon", "Knife", "Cup"],
                respuestaCorrecta: 1,
                explicacion: "Se usa cuchara: 'Spoon'."
            },
            {
                pregunta: "¿Cómo se dice 'gracias' en inglés?",
                opciones: ["Hello", "Bye", "Thanks", "Sorry"],
                respuestaCorrecta: 2,
                explicacion: "'Gracias' se dice 'Thanks'."
            },
            {
                pregunta: "¿Cuál de estos es una figura?",
                opciones: ["Triangle", "Apple", "Dog", "Car"],
                respuestaCorrecta: 0,
                explicacion: "'Triangle' significa triángulo."
            },
            {
                pregunta: "¿Cuál es el opuesto de 'happy'?",
                opciones: ["Sad", "Big", "Tall", "Fast"],
                respuestaCorrecta: 0,
                explicacion: "'Sad' es triste, lo opuesto de feliz."
            },
            {
                pregunta: "¿Cómo se dice 'escuela' en inglés?",
                opciones: ["School", "Teacher", "Class", "Book"],
                respuestaCorrecta: 0,
                explicacion: "'Escuela' se dice 'School'."
            }
        ],
        'Matemática': [
            {
                pregunta: "¿Cuánto es 8 + 6?",
                opciones: ["14", "12", "13", "15"],
                respuestaCorrecta: 0,
                explicacion: "8 + 6 es igual a 14."
            },
            {
                pregunta: "¿Qué número viene después del 49?",
                opciones: ["48", "50", "51", "47"],
                respuestaCorrecta: 1,
                explicacion: "Después del 49 viene el número 50."
            },
            {
                pregunta: "¿Cuál es el número mayor?",
                opciones: ["37", "29", "43", "35"],
                respuestaCorrecta: 2,
                explicacion: "43 es el número mayor."
            },
            {
                pregunta: "¿Cuánto es 10 - 4?",
                opciones: ["6", "7", "5", "8"],
                respuestaCorrecta: 0,
                explicacion: "10 menos 4 es 6."
            },
            {
                pregunta: "¿Cuántos lados tiene un cuadrado?",
                opciones: ["3", "4", "5", "6"],
                respuestaCorrecta: 1,
                explicacion: "Un cuadrado tiene 4 lados iguales."
            },
            {
                pregunta: "¿Cuánto es 7 + 5?",
                opciones: ["13", "11", "12", "14"],
                respuestaCorrecta: 2,
                explicacion: "7 más 5 es 12."
            },
            {
                pregunta: "¿Cuál es el doble de 6?",
                opciones: ["12", "10", "8", "14"],
                respuestaCorrecta: 0,
                explicacion: "El doble de 6 es 12."
            },
            {
                pregunta: "¿Qué número es menor?",
                opciones: ["22", "19", "30", "25"],
                respuestaCorrecta: 1,
                explicacion: "19 es el menor de los cuatro."
            },
            {
                pregunta: "¿Cuánto es 3 + 3 + 3?",
                opciones: ["6", "9", "12", "8"],
                respuestaCorrecta: 1,
                explicacion: "3 + 3 + 3 es igual a 9."
            },
            {
                pregunta: "¿Qué forma tiene una moneda de un sol?",
                opciones: ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"],
                respuestaCorrecta: 1,
                explicacion: "La moneda tiene forma de círculo."
            },
            {
                pregunta: "¿Cuánto es 15 - 7?",
                opciones: ["8", "9", "7", "6"],
                respuestaCorrecta: 0,
                explicacion: "15 menos 7 es 8."
            },
            {
                pregunta: "¿Qué número falta? 30, 31, ___, 33",
                opciones: ["32", "34", "29", "35"],
                respuestaCorrecta: 0,
                explicacion: "El número que sigue a 31 es 32."
            },
            {
                pregunta: "Si tengo 5 soles y gasto 2, ¿cuántos me quedan?",
                opciones: ["2", "3", "4", "5"],
                respuestaCorrecta: 1,
                explicacion: "5 - 2 = 3 soles."
            },
            {
                pregunta: "¿Qué número es par?",
                opciones: ["7", "5", "2", "9"],
                respuestaCorrecta: 2,
                explicacion: "2 es un número par."
            },
            {
                pregunta: "¿Cuánto es 4 x 2?",
                opciones: ["8", "6", "10", "7"],
                respuestaCorrecta: 0,
                explicacion: "4 por 2 es igual a 8."
            },
            {
                pregunta: "¿Cuántas patas tiene una mesa común?",
                opciones: ["2", "3", "4", "5"],
                respuestaCorrecta: 2,
                explicacion: "Una mesa común tiene 4 patas."
            },
            {
                pregunta: "¿Qué número completa la serie? 10, 20, ___, 40",
                opciones: ["25", "30", "15", "35"],
                respuestaCorrecta: 1,
                explicacion: "La serie aumenta de 10 en 10."
            },
            {
                pregunta: "¿Cuánto es la mitad de 10?",
                opciones: ["4", "3", "6", "5"],
                respuestaCorrecta: 3,
                explicacion: "La mitad de 10 es 5."
            },
            {
                pregunta: "¿Cuál es el número anterior al 100?",
                opciones: ["98", "97", "99", "101"],
                respuestaCorrecta: 2,
                explicacion: "El número que viene antes de 100 es 99."
            },
            {
                pregunta: "¿Cuántos minutos tiene una hora?",
                opciones: ["30", "60", "100", "90"],
                respuestaCorrecta: 1,
                explicacion: "Una hora tiene 60 minutos."
            },
            {
                pregunta: "¿Cuánto es 9 + 9?",
                opciones: ["16", "17", "18", "19"],
                respuestaCorrecta: 2,
                explicacion: "9 más 9 es 18."
            },
            {
                pregunta: "¿Qué figura tiene 3 lados?",
                opciones: ["Círculo", "Cuadrado", "Triángulo", "Rectángulo"],
                respuestaCorrecta: 2,
                explicacion: "El triángulo tiene 3 lados."
            },
            {
                pregunta: "¿Cuánto es 20 - 5?",
                opciones: ["14", "15", "16", "13"],
                respuestaCorrecta: 1,
                explicacion: "20 menos 5 es 15."
            },
            {
                pregunta: "¿Cuántas ruedas tiene una bicicleta?",
                opciones: ["1", "2", "3", "4"],
                respuestaCorrecta: 1,
                explicacion: "Una bicicleta tiene 2 ruedas."
            },
            {
                pregunta: "¿Cuál es el siguiente múltiplo de 5 después de 15?",
                opciones: ["16", "18", "20", "22"],
                respuestaCorrecta: 2,
                explicacion: "Después de 15 viene 20 como múltiplo de 5."
            },
            {
                pregunta: "¿Qué número es impar?",
                opciones: ["10", "4", "6", "9"],
                respuestaCorrecta: 3,
                explicacion: "9 es un número impar."
            },
            {
                pregunta: "¿Cuánto es 6 + 7?",
                opciones: ["12", "14", "13", "15"],
                respuestaCorrecta: 2,
                explicacion: "6 más 7 es 13."
            },
            {
                pregunta: "¿Cuánto es 100 - 50?",
                opciones: ["60", "40", "50", "30"],
                respuestaCorrecta: 2,
                explicacion: "100 menos 50 es 50."
            },
            {
                pregunta: "¿Cuántas decenas hay en 70?",
                opciones: ["6", "7", "8", "5"],
                respuestaCorrecta: 1,
                explicacion: "70 tiene 7 decenas."
            },
            {
                pregunta: "¿Qué número es menor que 10 y par?",
                opciones: ["3", "7", "8", "9"],
                respuestaCorrecta: 2,
                explicacion: "8 es par y menor que 10."
            }

        ],
        'Comunicación': [
            {
                pregunta: "¿Qué es un sustantivo abstracto?",
                opciones: ["Algo que se puede tocar", "Una idea o sentimiento", "Un nombre propio", "Un adjetivo"],
                respuestaCorrecta: 1,
                explicacion: "Los sustantivos abstractos nombran ideas, sentimientos o cualidades que no se pueden percibir con los sentidos."
            },
            {
                pregunta: "¿Cuál es el propósito de un texto argumentativo?",
                opciones: ["Describir un objeto", "Contar una historia", "Convencer con razones", "Divertir al lector"],
                respuestaCorrecta: 2,
                explicacion: "El texto argumentativo busca convencer al lector con ideas y argumentos."
            },
            {
                pregunta: "¿Qué función del lenguaje predomina en un poema?",
                opciones: ["Referencial", "Expresiva", "Apelativa", "Fática"],
                respuestaCorrecta: 1,
                explicacion: "En los poemas predomina la función expresiva porque se transmiten emociones y sentimientos."
            },
            {
                pregunta: "¿Qué es un conector causal?",
                opciones: ["Une ideas opuestas", "Indica consecuencia", "Expresa causa", "Ordena acciones"],
                respuestaCorrecta: 2,
                explicacion: "Un conector causal indica la causa de una acción, como 'porque', 'ya que'."
            },
            {
                pregunta: "¿Qué es la denotación?",
                opciones: ["Sentido figurado", "Significado literal", "Interpretación libre", "Intención del emisor"],
                respuestaCorrecta: 1,
                explicacion: "La denotación es el significado literal o objetivo de una palabra."
            },
            {
                pregunta: "¿Qué es la entonación?",
                opciones: ["El volumen al hablar", "El orden de las palabras", "El ritmo de una oración", "El tono al hablar que da sentido"],
                respuestaCorrecta: 3,
                explicacion: "La entonación es el tono o modulación que damos al hablar y afecta el significado."
            },
            {
                pregunta: "¿Qué significa inferir en un texto?",
                opciones: ["Leer en voz alta", "Copiar ideas", "Decir lo que está escrito", "Sacar conclusiones a partir de lo leído"],
                respuestaCorrecta: 3,
                explicacion: "Inferir es obtener una idea que no está dicha directamente en el texto."
            },
            {
                pregunta: "¿Cuál es un ejemplo de lenguaje figurado?",
                opciones: ["El cielo está nublado", "Llueve mucho", "Está lloviendo a cántaros", "La lluvia es agua"],
                respuestaCorrecta: 2,
                explicacion: "Llover a cántaros es una metáfora, por lo tanto, lenguaje figurado."
            },
            {
                pregunta: "¿Qué es un texto expositivo?",
                opciones: ["Presenta datos y explica un tema", "Cuenta una historia", "Tiene diálogos", "Da opiniones"],
                respuestaCorrecta: 0,
                explicacion: "El texto expositivo informa y explica un tema con claridad."
            },
            {
                pregunta: "¿Qué tipo de narrador usa la primera persona?",
                opciones: ["Omnisciente", "Externo", "Protagonista", "Objetivo"],
                respuestaCorrecta: 2,
                explicacion: "El narrador protagonista cuenta los hechos desde su perspectiva, usando 'yo'."
            },
            {
                pregunta: "¿Qué es un campo semántico?",
                opciones: ["Palabras de diferentes temas", "Palabras sin relación", "Palabras que riman", "Palabras relacionadas por su significado"],
                respuestaCorrecta: 3,
                explicacion: "Un campo semántico es un conjunto de palabras relacionadas por su significado."
            },
            {
                pregunta: "¿Cuál es una característica del lenguaje formal?",
                opciones: ["Uso de jerga", "Tuteo", "Claridad y precisión", "Abreviaturas"],
                respuestaCorrecta: 2,
                explicacion: "El lenguaje formal se caracteriza por su claridad, precisión y respeto."
            },
            {
                pregunta: "¿Qué es un texto narrativo?",
                opciones: ["Explica un tema", "Argumenta una idea", "Cuenta hechos reales o ficticios", "Describe objetos"],
                respuestaCorrecta: 2,
                explicacion: "El texto narrativo cuenta una historia con personajes, lugar y tiempo."
            },
            {
                pregunta: "¿Qué es un adverbio?",
                opciones: ["Describe a un sustantivo", "Describe a un verbo, adjetivo u otro adverbio", "Es un pronombre", "Sustituye a un sustantivo"],
                respuestaCorrecta: 1,
                explicacion: "El adverbio modifica a un verbo, adjetivo u otro adverbio."
            },
            {
                pregunta: "¿Cuál es la idea principal de un texto?",
                opciones: ["La que aparece al final", "La más corta", "La que resume el tema central", "La que tiene un dibujo"],
                respuestaCorrecta: 2,
                explicacion: "La idea principal resume el contenido central del texto."
            },
            {
                pregunta: "¿Qué es una oración compuesta?",
                opciones: ["Tiene un solo verbo", "Tiene dos o más oraciones simples", "Es interrogativa", "Solo tiene sujeto"],
                respuestaCorrecta: 1,
                explicacion: "La oración compuesta tiene dos o más oraciones simples unidas por conectores."
            },
            {
                pregunta: "¿Qué es una metáfora?",
                opciones: ["Comparación directa", "Descripción exagerada", "Decir una cosa por otra", "Contraste de ideas"],
                respuestaCorrecta: 2,
                explicacion: "La metáfora es una forma de decir algo por medio de otra imagen sin usar 'como'."
            },
            {
                pregunta: "¿Qué significa persuadir?",
                opciones: ["Ordenar", "Asustar", "Convencer con argumentos", "Preguntar"],
                respuestaCorrecta: 2,
                explicacion: "Persuadir es convencer a alguien con razones o sentimientos."
            },
            {
                pregunta: "¿Qué es un texto discontinuo?",
                opciones: ["Un cuento", "Un poema", "Un gráfico o tabla", "Una novela"],
                respuestaCorrecta: 2,
                explicacion: "Los textos discontinuos presentan información de forma no lineal, como gráficos o mapas."
            },
            {
                pregunta: "¿Qué es el contexto comunicativo?",
                opciones: ["Solo el mensaje", "Lugar y tiempo donde ocurre la comunicación", "Solo el canal", "Solo el emisor y receptor"],
                respuestaCorrecta: 1,
                explicacion: "El contexto comunicativo es la situación, lugar y tiempo en el que ocurre la comunicación."
            },
            {
                pregunta: "¿Cuál de estos conectores indica oposición?",
                opciones: ["Por eso", "Pero", "Entonces", "Además"],
                respuestaCorrecta: 1,
                explicacion: "El conector 'pero' indica oposición entre dos ideas."
            },
            {
                pregunta: "¿Qué es la cohesión textual?",
                opciones: ["La extensión del texto", "La claridad de las ideas", "La unión entre las ideas del texto", "La cantidad de párrafos"],
                respuestaCorrecta: 2,
                explicacion: "La cohesión textual se refiere a cómo las partes del texto están conectadas."
            },
            {
                pregunta: "¿Qué es la silaba tónica?",
                opciones: ["La que se escribe en mayúscula", "La que tiene tilde siempre", "La que se pronuncia con más fuerza", "La que está al final"],
                respuestaCorrecta: 2,
                explicacion: "La sílaba tónica es la que lleva la mayor fuerza de pronunciación."
            },
            {
                pregunta: "¿Qué es una crónica?",
                opciones: ["Un resumen", "Una opinión", "Relato de hechos en orden cronológico", "Una carta formal"],
                respuestaCorrecta: 2,
                explicacion: "La crónica narra hechos reales en orden cronológico con opinión del autor."
            },
            {
                pregunta: "¿Qué función cumple el emisor en la comunicación?",
                opciones: ["Recibir el mensaje", "Codificar el mensaje", "Transmitir el canal", "Interrumpir la conversación"],
                respuestaCorrecta: 1,
                explicacion: "El emisor codifica y envía el mensaje al receptor."
            },
            {
                pregunta: "¿Cuál es un texto discontinuo?",
                opciones: ["Carta", "Noticia", "Gráfico", "Biografía"],
                respuestaCorrecta: 2,
                explicacion: "El gráfico es un ejemplo de texto discontinuo."
            },
            {
                pregunta: "¿Qué es un verbo en modo imperativo?",
                opciones: ["Indica duda", "Expresa una orden o ruego", "Describe acciones pasadas", "Muestra deseos"],
                respuestaCorrecta: 1,
                explicacion: "El modo imperativo se usa para dar órdenes o hacer pedidos."
            },
            {
                pregunta: "¿Qué tipo de texto es una noticia?",
                opciones: ["Narrativo", "Argumentativo", "Expositivo", "Informativo"],
                respuestaCorrecta: 3,
                explicacion: "La noticia es un texto informativo que comunica hechos actuales."
            },
            {
                pregunta: "¿Qué es una hipérbole?",
                opciones: ["Repetición de sonidos", "Comparación suave", "Exageración expresiva", "Contradicción de ideas"],
                respuestaCorrecta: 2,
                explicacion: "La hipérbole es una figura que exagera para dar énfasis."
            },
            {
                pregunta: "¿Qué es el lenguaje connotativo?",
                opciones: ["Significado literal", "Significado simbólico o figurado", "Significado de diccionario", "Significado técnico"],
                respuestaCorrecta: 1,
                explicacion: "El lenguaje connotativo usa palabras con sentido figurado o simbólico."
            }
        ],
        'Ciencia y Tecnología': [
            {
                pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
                opciones: ["Hojas", "Tallo", "Raíces", "Flores"],
                respuestaCorrecta: 2,
                explicacion: "Las raíces permiten absorber el agua y nutrientes del suelo."
            },
            {
                pregunta: "¿Cuál es la función principal del sistema respiratorio?",
                opciones: ["Digestionar los alimentos", "Bombear sangre", "Captar oxígeno", "Producir hormonas"],
                respuestaCorrecta: 2,
                explicacion: "El sistema respiratorio permite captar oxígeno del aire."
            },
            {
                pregunta: "¿Cuál es el estado sólido del agua?",
                opciones: ["Lluvia", "Niebla", "Hielo", "Vapor"],
                respuestaCorrecta: 2,
                explicacion: "Cuando el agua se congela se convierte en hielo, que es su estado sólido."
            },
            {
                pregunta: "¿Qué astro da luz y calor a la Tierra?",
                opciones: ["La Luna", "Marte", "El Sol", "Venus"],
                respuestaCorrecta: 2,
                explicacion: "El Sol es una estrella que proporciona luz y calor al planeta."
            },
            {
                pregunta: "¿Qué sentido usamos para oler?",
                opciones: ["Oído", "Vista", "Gusto", "Olfato"],
                respuestaCorrecta: 3,
                explicacion: "El olfato es el sentido que permite detectar olores con la nariz."
            },
            {
                pregunta: "¿Cuál es el órgano encargado del pensamiento?",
                opciones: ["Corazón", "Cerebro", "Estómago", "Pulmón"],
                respuestaCorrecta: 1,
                explicacion: "El cerebro es el órgano que controla los pensamientos y movimientos."
            },
            {
                pregunta: "¿Qué planeta es conocido como el planeta rojo?",
                opciones: ["Tierra", "Venus", "Marte", "Júpiter"],
                respuestaCorrecta: 2,
                explicacion: "Marte es llamado planeta rojo por su superficie oxidada."
            },
            {
                pregunta: "¿Qué usamos para medir la temperatura?",
                opciones: ["Reloj", "Termómetro", "Balanza", "Metro"],
                respuestaCorrecta: 1,
                explicacion: "El termómetro sirve para medir la temperatura."
            },
            {
                pregunta: "¿Qué animales nacen del vientre de su madre y toman leche?",
                opciones: ["Mamíferos", "Aves", "Reptiles", "Anfibios"],
                respuestaCorrecta: 0,
                explicacion: "Los mamíferos nacen del vientre y se alimentan de leche materna."
            },
            {
                pregunta: "¿Qué necesita una planta para hacer la fotosíntesis?",
                opciones: ["Agua, tierra y sombra", "Luz, agua y dióxido de carbono", "Agua, fuego y oxígeno", "Solo luz solar"],
                respuestaCorrecta: 1,
                explicacion: "La fotosíntesis ocurre con agua, luz solar y dióxido de carbono."
            },
            {
                pregunta: "¿Qué sentido usamos para ver?",
                opciones: ["Tacto", "Vista", "Gusto", "Oído"],
                respuestaCorrecta: 1,
                explicacion: "Usamos el sentido de la vista a través de los ojos para ver."
            },
            {
                pregunta: "¿Cómo se llama el satélite natural de la Tierra?",
                opciones: ["El Sol", "Venus", "La Luna", "Marte"],
                respuestaCorrecta: 2,
                explicacion: "La Luna es el único satélite natural de nuestro planeta."
            },
            {
                pregunta: "¿Cuál es el sistema del cuerpo que permite el movimiento?",
                opciones: ["Respiratorio", "Circulatorio", "Muscular y óseo", "Digestivo"],
                respuestaCorrecta: 2,
                explicacion: "Los músculos y huesos trabajan juntos para mover el cuerpo."
            },
            {
                pregunta: "¿Cuál es el líquido que transporta oxígeno en el cuerpo?",
                opciones: ["Sudor", "Saliva", "Sangre", "Agua"],
                respuestaCorrecta: 2,
                explicacion: "La sangre lleva oxígeno a todo el cuerpo."
            },
            {
                pregunta: "¿Qué fenómeno natural produce truenos y relámpagos?",
                opciones: ["Niebla", "Tormenta", "Terremoto", "Viento"],
                respuestaCorrecta: 1,
                explicacion: "Las tormentas pueden generar truenos y relámpagos."
            },
            {
                pregunta: "¿Qué planeta es el más cercano al Sol?",
                opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
                respuestaCorrecta: 0,
                explicacion: "Mercurio es el planeta más cercano al Sol."
            },
            {
                pregunta: "¿Qué es una fuente de energía renovable?",
                opciones: ["Petróleo", "Carbón", "Viento", "Gas natural"],
                respuestaCorrecta: 2,
                explicacion: "El viento es una fuente de energía limpia y renovable."
            },
            {
                pregunta: "¿Qué aparato usamos para ver objetos muy pequeños?",
                opciones: ["Telescopio", "Microscopio", "Prismáticos", "Reloj"],
                respuestaCorrecta: 1,
                explicacion: "El microscopio permite observar cosas diminutas."
            },
            {
                pregunta: "¿Qué parte del cuerpo nos ayuda a sentir el tacto?",
                opciones: ["Piel", "Hueso", "Ojos", "Pelo"],
                respuestaCorrecta: 0,
                explicacion: "La piel contiene receptores que nos permiten sentir."
            },
            {
                pregunta: "¿Cuál es el proceso donde los alimentos se transforman en energía?",
                opciones: ["Respiración", "Digestión", "Evaporación", "Crecimiento"],
                respuestaCorrecta: 1,
                explicacion: "La digestión convierte los alimentos en nutrientes y energía."
            },
            {
                pregunta: "¿Qué produce la energía eléctrica en una casa?",
                opciones: ["Motor", "Generador", "Planta eléctrica", "Enchufe"],
                respuestaCorrecta: 2,
                explicacion: "Las plantas eléctricas producen energía para las ciudades."
            },
            {
                pregunta: "¿Qué forma tiene la Tierra?",
                opciones: ["Plana", "Cuadrada", "Esférica", "Ovalada"],
                respuestaCorrecta: 2,
                explicacion: "La Tierra tiene forma esférica o redonda."
            },
            {
                pregunta: "¿Qué órgano usamos para saborear los alimentos?",
                opciones: ["Oído", "Lengua", "Nariz", "Ojos"],
                respuestaCorrecta: 1,
                explicacion: "La lengua tiene papilas gustativas para sentir sabores."
            },
            {
                pregunta: "¿Cuál es el principal recurso natural que bebemos?",
                opciones: ["Aire", "Sol", "Viento", "Agua"],
                respuestaCorrecta: 3,
                explicacion: "El agua es esencial para la vida y la consumimos diariamente."
            },
            {
                pregunta: "¿Qué planeta tiene anillos?",
                opciones: ["Saturno", "Marte", "Venus", "Mercurio"],
                respuestaCorrecta: 0,
                explicacion: "Saturno es famoso por sus grandes anillos de hielo y roca."
            },
            {
                pregunta: "¿Qué tipo de energía usa el sol?",
                opciones: ["Nuclear", "Eléctrica", "Solar", "Mecánica"],
                respuestaCorrecta: 2,
                explicacion: "El Sol produce energía solar que llega a la Tierra en forma de luz y calor."
            },
            {
                pregunta: "¿Qué sistema permite que los alimentos se digieran?",
                opciones: ["Respiratorio", "Circulatorio", "Digestivo", "Muscular"],
                respuestaCorrecta: 2,
                explicacion: "El sistema digestivo transforma los alimentos en energía."
            },
            {
                pregunta: "¿Qué planeta habitamos los humanos?",
                opciones: ["Venus", "Júpiter", "La Luna", "Tierra"],
                respuestaCorrecta: 3,
                explicacion: "Vivimos en el planeta Tierra."
            },
            {
                pregunta: "¿Qué ser vivo pone huevos y tiene plumas?",
                opciones: ["Perro", "Gallina", "Ballena", "Caballo"],
                respuestaCorrecta: 1,
                explicacion: "La gallina es un ave que pone huevos y tiene plumas."
            },
            {
                pregunta: "¿Qué material es un buen conductor de electricidad?",
                opciones: ["Plástico", "Madera", "Vidrio", "Cobre"],
                respuestaCorrecta: 3,
                explicacion: "El cobre es un excelente conductor eléctrico y se usa en cables."
            }
        ],
        'Personal Social': [
            {
            pregunta: "¿Cómo se llama el lugar donde vivimos con nuestra familia?",
            opciones: ["Casa", "Escuela", "Parque", "Mercado"],
            respuesta: "Casa"
            },
            {
            pregunta: "¿Quiénes forman parte de tu familia?",
            opciones: ["Padres, hermanos, abuelos", "Profesores, doctores, vecinos", "Amigos del colegio", "Animales del zoológico"],
            respuesta: "Padres, hermanos, abuelos"
            },
            {
            pregunta: "¿Qué debemos hacer antes de cruzar la calle?",
            opciones: ["Mirar a ambos lados", "Correr rápido", "Cantar", "Cerrar los ojos"],
            respuesta: "Mirar a ambos lados"
            },
            {
            pregunta: "¿Cuál es la capital del Perú?",
            opciones: ["Lima", "Cusco", "Arequipa", "Puno"],
            respuesta: "Lima"
            },
            {
            pregunta: "¿Qué valor mostramos al compartir nuestros juguetes?",
            opciones: ["Solidaridad", "Tristeza", "Enojo", "Orgullo"],
            respuesta: "Solidaridad"
            },
            {
            pregunta: "¿A dónde vamos para aprender con nuestros compañeros?",
            opciones: ["Escuela", "Hospital", "Mercado", "Casa"],
            respuesta: "Escuela"
            },
            {
            pregunta: "¿Qué persona nos ayuda cuando estamos enfermos?",
            opciones: ["Doctor", "Profesor", "Panadero", "Bombero"],
            respuesta: "Doctor"
            },
            {
            pregunta: "¿Cuál es el símbolo patrio que se iza los lunes?",
            opciones: ["Bandera del Perú", "Mapa del Perú", "Escudo", "Moneda"],
            respuesta: "Bandera del Perú"
            },
            {
            pregunta: "¿Qué se celebra el 28 de julio en el Perú?",
            opciones: ["Fiestas Patrias", "Navidad", "Semana Santa", "Carnaval"],
            respuesta: "Fiestas Patrias"
            },
            {
            pregunta: "¿Qué debemos hacer cuando alguien habla?",
            opciones: ["Escuchar con atención", "Hablar más fuerte", "Gritar", "Ignorar"],
            respuesta: "Escuchar con atención"
            },
            {
            pregunta: "¿Qué valor demostramos al decir siempre la verdad?",
            opciones: ["Honestidad", "Mentira", "Rencor", "Desobediencia"],
            respuesta: "Honestidad"
            },
            {
            pregunta: "¿Quién cuida el orden en una ciudad?",
            opciones: ["Policía", "Panadero", "Pescador", "Profesor"],
            respuesta: "Policía"
            },
            {
            pregunta: "¿Qué usamos para transportarnos por el agua?",
            opciones: ["Barco", "Auto", "Bicicleta", "Avión"],
            respuesta: "Barco"
            },
            {
            pregunta: "¿Qué significa ser puntual?",
            opciones: ["Llegar a tiempo", "Llegar tarde", "Irse sin avisar", "No asistir"],
            respuesta: "Llegar a tiempo"
            },
            {
            pregunta: "¿Cuál de estas acciones ayuda al medio ambiente?",
            opciones: ["Reciclar", "Botar basura al río", "Quemar árboles", "Usar plástico sin control"],
            respuesta: "Reciclar"
            },
            {
            pregunta: "¿Qué debemos hacer si cometemos un error?",
            opciones: ["Pedir disculpas", "Reírnos", "Escondernos", "Ignorarlo"],
            respuesta: "Pedir disculpas"
            },
            {
            pregunta: "¿Quién nos enseña en el colegio?",
            opciones: ["Profesor", "Cocinero", "Bombero", "Mecánico"],
            respuesta: "Profesor"
            },
            {
            pregunta: "¿Qué derecho tienen todos los niños?",
            opciones: ["A la educación", "A no comer", "A no jugar", "A trabajar siempre"],
            respuesta: "A la educación"
            },
            {
            pregunta: "¿Qué debemos hacer con los ancianos?",
            opciones: ["Respetarlos y ayudarlos", "Ignorarlos", "Reírnos", "Empujarlos"],
            respuesta: "Respetarlos y ayudarlos"
            },
            {
            pregunta: "¿Qué muestra una buena convivencia?",
            opciones: ["Respetar a los demás", "Gritar en clase", "Pelearnos", "Ensuciar el aula"],
            respuesta: "Respetar a los demás"
            }
        ],
        'Arte y Cultura': [
    {
        pregunta: "¿Qué es una obra de arte?",
        opciones: ["Una comida deliciosa", "Una creación artística que expresa ideas o emociones", "Una tarea del colegio", "Una película de acción"],
        respuestaCorrecta: 1,
        explicacion: "Una obra de arte es una creación artística que busca expresar ideas, emociones o belleza."
    },
    {
        pregunta: "¿Qué es el teatro?",
        opciones: ["Una técnica de dibujo", "Una danza típica", "Una forma de arte escénico", "Una pintura famosa"],
        respuestaCorrecta: 2,
        explicacion: "El teatro es una forma de arte escénico que representa historias frente a una audiencia."
    },
    {
        pregunta: "¿Cuál de estos es un instrumento de viento?",
        opciones: ["Guitarra", "Flauta", "Tambor", "Violín"],
        respuestaCorrecta: 1,
        explicacion: "La flauta es un instrumento de viento porque produce sonido al soplar aire en ella."
    },
    {
        pregunta: "¿Qué es la danza negra o afroperuana?",
        opciones: ["Una danza moderna", "Un estilo de teatro", "Una danza tradicional con raíces africanas", "Una técnica de pintura"],
        respuestaCorrecta: 2,
        explicacion: "La danza negra o afroperuana tiene raíces africanas y es típica de la costa del Perú."
    },
    {
        pregunta: "¿Qué color se obtiene al mezclar azul y amarillo?",
        opciones: ["Rojo", "Verde", "Naranja", "Marrón"],
        respuestaCorrecta: 1,
        explicacion: "Al mezclar azul y amarillo se obtiene el color verde."
    },
    {
        pregunta: "¿Qué significa arte abstracto?",
        opciones: ["Imita la realidad", "Usa formas reales", "No representa figuras reales", "Es una danza tradicional"],
        respuestaCorrecta: 2,
        explicacion: "El arte abstracto no representa figuras reales, sino formas y colores libres."
    },
    {
        pregunta: "¿Cuál es una danza típica del altiplano boliviano?",
        opciones: ["Caporales", "Marinera", "Saya", "Huayno"],
        respuestaCorrecta: 0,
        explicacion: "Los Caporales son una danza tradicional boliviana muy popular también en Perú."
    },
    {
        pregunta: "¿Qué instrumento se usa en las danzas andinas?",
        opciones: ["Piano", "Quena", "Saxofón", "Violonchelo"],
        respuestaCorrecta: 1,
        explicacion: "La quena es un instrumento de viento tradicional de los Andes."
    },
    {
        pregunta: "¿Qué representan los colores cálidos?",
        opciones: ["Tristeza", "Frialdad", "Alegría y energía", "Oscuridad"],
        respuestaCorrecta: 2,
        explicacion: "Los colores cálidos como el rojo, naranja y amarillo transmiten alegría y energía."
    },
    {
        pregunta: "¿Qué es una pintura mural?",
        opciones: ["Pintura sobre papel", "Pintura en tela", "Pintura hecha en una pared", "Pintura en cerámica"],
        respuestaCorrecta: 2,
        explicacion: "Una pintura mural es aquella que se realiza directamente sobre una pared."
    },
    {
        pregunta: "¿Qué baile peruano representa el cortejo del gallo y la gallina?",
        opciones: ["Marinera", "Huaylas", "Tondero", "Festejo"],
        respuestaCorrecta: 0,
        explicacion: "La marinera representa el galanteo entre el hombre y la mujer, como el gallo y la gallina."
    },
    {
        pregunta: "¿Qué es la escultura?",
        opciones: ["Un tipo de canto", "Una pintura", "Una forma de arte tridimensional", "Una danza"],
        respuestaCorrecta: 2,
        explicacion: "La escultura es una forma de arte que se realiza en tres dimensiones como piedra, madera o metal."
    },
    {
        pregunta: "¿Qué es una coreografía?",
        opciones: ["Un tipo de pintura", "Una secuencia de movimientos de baile", "Una melodía", "Un instrumento musical"],
        respuestaCorrecta: 1,
        explicacion: "La coreografía es la organización de los pasos y movimientos en una danza."
    },
    {
        pregunta: "¿Qué son los colores fríos?",
        opciones: ["Rojo, naranja, amarillo", "Azul, verde, violeta", "Negro y blanco", "Rosa y marrón"],
        respuestaCorrecta: 1,
        explicacion: "Los colores fríos como azul, verde y violeta transmiten calma y serenidad."
    },
    {
        pregunta: "¿Qué significa ritmo en la música?",
        opciones: ["El volumen de una canción", "La duración de los sonidos", "El tipo de voz", "La velocidad del viento"],
        respuestaCorrecta: 1,
        explicacion: "El ritmo es la organización de los sonidos y silencios en el tiempo."
    },
    {
        pregunta: "¿Qué tipo de arte se usa en el carnaval?",
        opciones: ["Arte digital", "Arte escénico y visual", "Arte culinario", "Arte fotográfico"],
        respuestaCorrecta: 1,
        explicacion: "En el carnaval se usa arte visual como disfraces y escénico como danzas y música."
    },
    {
        pregunta: "¿Qué representa el Festejo?",
        opciones: ["Fiestas europeas", "La vida en el campo", "La herencia africana", "Los incas"],
        respuestaCorrecta: 2,
        explicacion: "El festejo representa la alegría y tradición de la cultura afroperuana."
    },
    {
        pregunta: "¿Qué es una paleta de colores?",
        opciones: ["Una caja de crayones", "Una tabla donde se mezclan colores", "Una hoja para pintar", "Un dibujo"],
        respuestaCorrecta: 1,
        explicacion: "La paleta es donde los pintores mezclan sus colores."
    },
    {
        pregunta: "¿Qué es un autorretrato?",
        opciones: ["Pintura de otra persona", "Dibujo de un paisaje", "Pintura de uno mismo", "Foto grupal"],
        respuestaCorrecta: 2,
        explicacion: "El autorretrato es una representación de uno mismo hecha por el artista."
    },
    {
        pregunta: "¿Qué es el arte popular?",
        opciones: ["Arte moderno", "Arte de élite", "Arte de las comunidades y pueblos", "Arte de museos"],
        respuestaCorrecta: 2,
        explicacion: "El arte popular se hace en las comunidades y representa sus costumbres y creencias."
    },
    {
        pregunta: "¿Qué representa la danza Los Shapis?",
        opciones: ["La ciudad", "La selva", "El campo", "Los carnavales andinos"],
        respuestaCorrecta: 3,
        explicacion: "Los Shapis representan los carnavales de los Andes con colorido y alegría."
    }
]
    }, 
    3:{
        'Inglés': [
            {
                pregunta: "Elige el verbo correcto: She ___ to school every day.",
                opciones: ["go", "goes", "going", "gone"],
                respuestaCorrecta: 1,
                explicacion: "'She goes' es correcto porque el sujeto es tercera persona singular."
            },
            {
                pregunta: "¿Cuál es el plural de 'mouse'?",
                opciones: ["Mouses", "Mouse", "Mice", "Mices"],
                respuestaCorrecta: 2,
                explicacion: "El plural de 'mouse' es 'mice'."
            },
            {
                pregunta: "¿Qué hora es? 7:30",
                opciones: ["It's seven o'clock", "It's half past seven", "It's quarter to seven", "It's seven thirty-five"],
                respuestaCorrecta: 1,
                explicacion: "'Half past seven' significa 7:30."
            },
            {
                pregunta: "¿Cuál es el opuesto de 'early'?",
                opciones: ["Soon", "Late", "Fast", "Never"],
                respuestaCorrecta: 1,
                explicacion: "El opuesto de 'early' es 'late'."
            },
            {
                pregunta: "Selecciona la oración correcta:",
                opciones: ["He don't like apples", "He doesn't likes apples", "He doesn't like apples", "He not likes apples"],
                respuestaCorrecta: 2,
                explicacion: "'He doesn't like apples' es gramaticalmente correcto."
            },
            {
                pregunta: "¿Cuál de estas oraciones está en pasado?",
                opciones: ["I play soccer", "She eats a banana", "We watched a movie", "They go to school"],
                respuestaCorrecta: 2,
                explicacion: "'Watched' es pasado de 'watch'."
            },
            {
                pregunta: "¿Qué significa 'tall'?",
                opciones: ["Bajo", "Grande", "Alto", "Largo"],
                respuestaCorrecta: 2,
                explicacion: "'Tall' significa alto."
            },
            {
                pregunta: "Completa: My father is ___ than my brother.",
                opciones: ["tall", "taller", "tallest", "more tall"],
                respuestaCorrecta: 1,
                explicacion: "Se usa 'taller' para comparar entre dos personas."
            },
            {
                pregunta: "¿Dónde ___ you live?",
                opciones: ["does", "is", "do", "are"],
                respuestaCorrecta: 2,
                explicacion: "Con 'you' se usa 'do': 'Where do you live?'"
            },
            {
                pregunta: "¿Qué color se forma al mezclar azul y amarillo?",
                opciones: ["Purple", "Green", "Orange", "Brown"],
                respuestaCorrecta: 1,
                explicacion: "Azul + Amarillo = Verde (Green)."
            },
            {
                pregunta: "¿Cómo se dice 'Estoy cansado' en inglés?",
                opciones: ["I'm hungry", "I'm cold", "I'm tired", "I'm sad"],
                respuestaCorrecta: 2,
                explicacion: "'I'm tired' significa 'Estoy cansado'."
            },
            {
                pregunta: "¿Cuál de estas palabras es un verbo?",
                opciones: ["Quickly", "Eat", "Beautiful", "Dog"],
                respuestaCorrecta: 1,
                explicacion: "'Eat' es un verbo (acción)."
            },
            {
                pregunta: "¿Qué usas en los pies?",
                opciones: ["Hat", "Shirt", "Socks", "Gloves"],
                respuestaCorrecta: 2,
                explicacion: "Socks = Medias/calcetines para los pies."
            },
            {
                pregunta: "Elige la preposición correcta: The ball is ___ the box.",
                opciones: ["on", "in", "under", "between"],
                respuestaCorrecta: 1,
                explicacion: "'In' significa dentro de la caja."
            },
            {
                pregunta: "¿Qué significa 'weather'?",
                opciones: ["Tiempo (clima)", "Ropa", "Hora", "Fruta"],
                respuestaCorrecta: 0,
                explicacion: "'Weather' significa clima o tiempo."
            },
            {
                pregunta: "¿Cuál es un sinónimo de 'happy'?",
                opciones: ["Sad", "Angry", "Joyful", "Sleepy"],
                respuestaCorrecta: 2,
                explicacion: "'Joyful' significa lo mismo que 'happy'."
            },
            {
                pregunta: "¿Cuál de estas es una palabra interrogativa?",
                opciones: ["Blue", "Where", "Car", "Always"],
                respuestaCorrecta: 1,
                explicacion: "'Where' es una palabra interrogativa (¿Dónde?)."
            },
            {
                pregunta: "Elige el artículo correcto: ___ elephant is big.",
                opciones: ["A", "An", "The", "Some"],
                respuestaCorrecta: 1,
                explicacion: "Se usa 'an' antes de vocales como 'elephant'."
            },
            {
                pregunta: "¿Cuál de estos es un animal?",
                opciones: ["Chair", "Elephant", "Table", "Pencil"],
                respuestaCorrecta: 1,
                explicacion: "Elephant = Elefante, es un animal."
            },
            {
                pregunta: "¿Qué significa 'always'?",
                opciones: ["Nunca", "A veces", "Siempre", "Rápido"],
                respuestaCorrecta: 2,
                explicacion: "'Always' significa 'siempre'."
            },
            {
                pregunta: "Completa: She ___ reading a book.",
                opciones: ["is", "are", "be", "am"],
                respuestaCorrecta: 0,
                explicacion: "Se usa 'is' con 'she'."
            },
            {
                pregunta: "¿Cuál es el pasado de 'go'?",
                opciones: ["Goed", "Went", "Goes", "Going"],
                respuestaCorrecta: 1,
                explicacion: "El pasado de 'go' es 'went'."
            },
            {
                pregunta: "¿Qué animal hace 'moo'?",
                opciones: ["Dog", "Cat", "Cow", "Duck"],
                respuestaCorrecta: 2,
                explicacion: "La vaca (cow) hace 'moo'."
            },
            {
                pregunta: "¿Qué mes viene después de abril?",
                opciones: ["March", "June", "May", "July"],
                respuestaCorrecta: 2,
                explicacion: "Después de abril viene mayo (May)."
            },
            {
                pregunta: "¿Qué haces con los ojos?",
                opciones: ["Oír", "Ver", "Probar", "Oler"],
                respuestaCorrecta: 1,
                explicacion: "Con los ojos ves (see)."
            },
            {
                pregunta: "¿Cuál es el opuesto de 'big'?",
                opciones: ["Huge", "Short", "Small", "Long"],
                respuestaCorrecta: 2,
                explicacion: "'Small' significa pequeño, opuesto a 'big'."
            },
            {
                pregunta: "¿Qué significa 'friend'?",
                opciones: ["Enemigo", "Vecino", "Amigo", "Hermano"],
                respuestaCorrecta: 2,
                explicacion: "'Friend' significa 'amigo'."
            },
            {
                pregunta: "Selecciona la ortografía correcta:",
                opciones: ["Beutiful", "Beautiful", "Bautiful", "Beautifull"],
                respuestaCorrecta: 1,
                explicacion: "La forma correcta es 'Beautiful'."
            },
            {
                pregunta: "¿De qué color es un limón?",
                opciones: ["Green", "Red", "Yellow", "Blue"],
                respuestaCorrecta: 2,
                explicacion: "Un limón es de color amarillo (Yellow)."
            },
            {
                pregunta: "¿Cuál de estos es una fruta?",
                opciones: ["Apple", "Potato", "Lettuce", "Carrot"],
                respuestaCorrecta: 0,
                explicacion: "'Apple' es una fruta."
            }
        ],
        'Matemática': [
            {
                pregunta: "¿Cuánto es 324 + 145?",
                opciones: ["469", "479", "489", "499"],
                respuestaCorrecta: 1,
                explicacion: "324 + 145 = 469."
            },
            {
                pregunta: "¿Qué número viene antes del 300?",
                opciones: ["298", "299", "301", "302"],
                respuestaCorrecta: 1,
                explicacion: "El número anterior a 300 es 299."
            },
            {
                pregunta: "¿Cuánto es 5 x 8?",
                opciones: ["40", "35", "45", "48"],
                respuestaCorrecta: 0,
                explicacion: "5 multiplicado por 8 es 40."
            },
            {
                pregunta: "¿Qué número completa la serie: 100, 200, ___, 400?",
                opciones: ["250", "300", "350", "500"],
                respuestaCorrecta: 1,
                explicacion: "La serie aumenta de 100 en 100: 100, 200, 300, 400."
            },
            {
                pregunta: "¿Cuál es la mitad de 60?",
                opciones: ["25", "20", "30", "35"],
                respuestaCorrecta: 2,
                explicacion: "La mitad de 60 es 30."
            },
            {
                pregunta: "¿Cuánto es 900 - 350?",
                opciones: ["550", "560", "540", "580"],
                respuestaCorrecta: 0,
                explicacion: "900 - 350 = 550."
            },
            {
                pregunta: "¿Cuántos lados tiene un triángulo?",
                opciones: ["2", "3", "4", "5"],
                respuestaCorrecta: 1,
                explicacion: "El triángulo tiene 3 lados."
            },
            {
                pregunta: "¿Qué figura tiene todos sus lados iguales y 4 lados?",
                opciones: ["Rectángulo", "Cuadrado", "Triángulo", "Círculo"],
                respuestaCorrecta: 1,
                explicacion: "El cuadrado tiene 4 lados iguales."
            },
            {
                pregunta: "¿Qué número falta? 7 x ___ = 56",
                opciones: ["6", "8", "9", "7"],
                respuestaCorrecta: 1,
                explicacion: "7 x 8 = 56."
            },
            {
                pregunta: "¿Cuánto es 12 dividido entre 4?",
                opciones: ["2", "3", "4", "5"],
                respuestaCorrecta: 1,
                explicacion: "12 ÷ 4 = 3."
            },
            {
                pregunta: "¿Qué número es mayor: 654 o 645?",
                opciones: ["654", "645", "Son iguales", "Ninguno"],
                respuestaCorrecta: 0,
                explicacion: "654 es mayor que 645."
            },
            {
                pregunta: "Si tengo 3 docenas de huevos, ¿cuántos huevos tengo?",
                opciones: ["30", "36", "40", "24"],
                respuestaCorrecta: 1,
                explicacion: "Una docena son 12, entonces 3 x 12 = 36."
            },
            {
                pregunta: "¿Qué número es el doble de 18?",
                opciones: ["36", "20", "30", "40"],
                respuestaCorrecta: 0,
                explicacion: "El doble de 18 es 36."
            },
            {
                pregunta: "¿Cuál es el resultado de 100 ÷ 10?",
                opciones: ["5", "10", "15", "20"],
                respuestaCorrecta: 1,
                explicacion: "100 dividido entre 10 es 10."
            },
            {
                pregunta: "¿Cuántos centímetros hay en un metro?",
                opciones: ["10", "100", "1000", "50"],
                respuestaCorrecta: 1,
                explicacion: "1 metro tiene 100 centímetros."
            },
            {
                pregunta: "¿Qué número representa el valor posicional de las centenas en 482?",
                opciones: ["2", "4", "8", "400"],
                respuestaCorrecta: 3,
                explicacion: "En 482, el 4 está en la posición de centenas: 4 x 100 = 400."
            },
            {
                pregunta: "¿Qué número completa la secuencia: 3, 6, 9, ___, 15?",
                opciones: ["10", "11", "12", "13"],
                respuestaCorrecta: 2,
                explicacion: "La secuencia aumenta de 3 en 3, el número faltante es 12."
            },
            {
                pregunta: "¿Cuánto es 7 x 9?",
                opciones: ["63", "56", "72", "61"],
                respuestaCorrecta: 0,
                explicacion: "7 x 9 = 63."
            },
            {
                pregunta: "¿Cuál es el área de un cuadrado de lado 5 cm?",
                opciones: ["10 cm²", "25 cm²", "20 cm²", "15 cm²"],
                respuestaCorrecta: 1,
                explicacion: "Área del cuadrado = lado x lado = 5 x 5 = 25 cm²."
            },
            {
                pregunta: "¿Qué es un número par?",
                opciones: ["Se divide entre 3", "Termina en 1, 3, 5", "Termina en 0, 2, 4, 6 u 8", "No se puede contar"],
                respuestaCorrecta: 2,
                explicacion: "Los números pares terminan en 0, 2, 4, 6 u 8."
            },
            {
                pregunta: "¿Cuál es la tercera parte de 21?",
                opciones: ["7", "3", "10", "6"],
                respuestaCorrecta: 0,
                explicacion: "21 dividido entre 3 es 7."
            },
            {
                pregunta: "¿Cuál es la unidad de medida para pesar frutas?",
                opciones: ["Metro", "Litro", "Kilogramo", "Grado"],
                respuestaCorrecta: 2,
                explicacion: "Las frutas se pesan en kilogramos."
            },
            {
                pregunta: "¿Cuánto es 4 x 6?",
                opciones: ["24", "20", "22", "18"],
                respuestaCorrecta: 0,
                explicacion: "4 x 6 = 24."
            },
            {
                pregunta: "¿Qué número tiene el valor de decenas igual a 70 en 784?",
                opciones: ["8", "70", "7", "80"],
                respuestaCorrecta: 1,
                explicacion: "En 784, el 8 representa 80, que está en decenas."
            },
            {
                pregunta: "¿Cuál es el triple de 9?",
                opciones: ["27", "18", "21", "30"],
                respuestaCorrecta: 0,
                explicacion: "9 x 3 = 27."
            },
            {
                pregunta: "¿Qué figura tiene solo un lado curvo y ningún vértice?",
                opciones: ["Cuadrado", "Rectángulo", "Círculo", "Triángulo"],
                respuestaCorrecta: 2,
                explicacion: "El círculo tiene un solo lado curvo."
            },
            {
                pregunta: "¿Cuánto es 45 + 37?",
                opciones: ["82", "81", "80", "79"],
                respuestaCorrecta: 0,
                explicacion: "45 + 37 = 82."
            },
            {
                pregunta: "¿Cuál es el número más pequeño de esta lista: 245, 209, 310, 198?",
                opciones: ["209", "198", "245", "310"],
                respuestaCorrecta: 1,
                explicacion: "198 es el menor número de la lista."
            },
            {
                pregunta: "Si un lápiz cuesta S/ 3 y compro 4, ¿cuánto pago?",
                opciones: ["S/ 12", "S/ 10", "S/ 15", "S/ 8"],
                respuestaCorrecta: 0,
                explicacion: "3 x 4 = 12."
            },
            {
                pregunta: "¿Qué resultado da 100 - 67?",
                opciones: ["33", "43", "53", "34"],
                respuestaCorrecta: 0,
                explicacion: "100 - 67 = 33."
            }
        ],
        'Comunicación': [
            {
                pregunta: "¿Qué es una oración?",
                opciones: ["Una letra", "Un grupo de palabras con sentido completo", "Una palabra larga", "Un dibujo"],
                respuestaCorrecta: 1,
                explicacion: "Una oración es un conjunto de palabras que expresan una idea completa."
            },
            {
                pregunta: "¿Cuál es el sujeto en la oración: 'El perro ladra fuerte'?",
                opciones: ["El", "Ladra", "El perro", "Fuerte"],
                respuestaCorrecta: 2,
                explicacion: "El sujeto es quien realiza la acción, en este caso 'el perro'."
            },
            {
                pregunta: "¿Cuál es el verbo en la oración: 'María canta una canción'?",
                opciones: ["María", "Canta", "Canción", "Una"],
                respuestaCorrecta: 1,
                explicacion: "El verbo es 'canta', es la acción que realiza María."
            },
            {
                pregunta: "¿Qué tipo de texto es una receta de cocina?",
                opciones: ["Narrativo", "Instructivo", "Descriptivo", "Poético"],
                respuestaCorrecta: 1,
                explicacion: "La receta indica pasos para hacer algo, es instructivo."
            },
            {
                pregunta: "¿Qué signo se usa para hacer una pregunta?",
                opciones: ["¡!", ",", "¿?", "."],
                respuestaCorrecta: 2,
                explicacion: "Las preguntas se escriben entre signos de interrogación: ¿?"
            },
            {
                pregunta: "¿Cuál es un ejemplo de un sustantivo?",
                opciones: ["Correr", "Mesa", "Azul", "Rápidamente"],
                respuestaCorrecta: 1,
                explicacion: "‘Mesa’ es un sustantivo, porque nombra un objeto."
            },
            {
                pregunta: "¿Qué parte de la historia dice dónde y cuándo ocurre?",
                opciones: ["Inicio", "Nudo", "Desenlace", "Ambiente"],
                respuestaCorrecta: 3,
                explicacion: "El ambiente indica el lugar y el tiempo de la historia."
            },
            {
                pregunta: "¿Cuál es un sinónimo de 'bonito'?",
                opciones: ["Feo", "Lindo", "Oscuro", "Viejo"],
                respuestaCorrecta: 1,
                explicacion: "‘Lindo’ tiene un significado parecido a ‘bonito’."
            },
            {
                pregunta: "¿Qué es una rima?",
                opciones: ["Una figura geométrica", "Palabras que terminan igual", "Un nombre propio", "Un sonido fuerte"],
                respuestaCorrecta: 1,
                explicacion: "Las rimas son palabras que tienen sonidos finales similares."
            },
            {
                pregunta: "¿Cuál es el plural de 'niña'?",
                opciones: ["Niño", "Niñas", "Niñitas", "Niñaza"],
                respuestaCorrecta: 1,
                explicacion: "'Niñas' es la forma plural de 'niña'."
            },
            {
                pregunta: "¿Qué se usa al final de una oración afirmativa?",
                opciones: ["¿?", "¡!", ".", ","],
                respuestaCorrecta: 2,
                explicacion: "Se usa el punto al final de una oración afirmativa."
            },
            {
                pregunta: "¿Qué es un adjetivo?",
                opciones: ["Un número", "Un lugar", "Una palabra que describe al sustantivo", "Un pronombre"],
                respuestaCorrecta: 2,
                explicacion: "El adjetivo describe cómo es el sustantivo."
            },
            {
                pregunta: "¿Cuál es un ejemplo de texto narrativo?",
                opciones: ["Receta", "Cuento", "Cartel", "Noticia"],
                respuestaCorrecta: 1,
                explicacion: "El cuento es un texto narrativo, porque cuenta una historia."
            },
            {
                pregunta: "¿Qué función tiene una carta?",
                opciones: ["Describir una persona", "Narrar un cuento", "Comunicar un mensaje", "Hacer una lista"],
                respuestaCorrecta: 2,
                explicacion: "Una carta se usa para comunicarse con otra persona."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'grande'?",
                opciones: ["Gigante", "Pequeño", "Enorme", "Alto"],
                respuestaCorrecta: 1,
                explicacion: "El antónimo de 'grande' es 'pequeño'."
            },
            {
                pregunta: "¿Cómo se llama el orden de los hechos en una historia?",
                opciones: ["Ritmo", "Secuencia", "Adjetivo", "Tiempo"],
                respuestaCorrecta: 1,
                explicacion: "La secuencia organiza los hechos del inicio al final."
            },
            {
                pregunta: "¿Qué tipo de texto es un afiche que invita a un evento?",
                opciones: ["Narrativo", "Descriptivo", "Informativo", "Argumentativo"],
                respuestaCorrecta: 2,
                explicacion: "El afiche brinda información importante."
            },
            {
                pregunta: "¿Qué es un pronombre?",
                opciones: ["Una parte de un cuento", "Una persona", "Una palabra que reemplaza al nombre", "Un sinónimo"],
                respuestaCorrecta: 2,
                explicacion: "El pronombre reemplaza a un sustantivo (como 'él', 'ella')."
            },
            {
                pregunta: "¿Qué signo se usa para expresar sorpresa?",
                opciones: ["¿?", ".", ",", "¡!"],
                respuestaCorrecta: 3,
                explicacion: "¡! se usa para exclamaciones o sorpresa."
            },
            {
                pregunta: "¿Cuál es la sílaba tónica en la palabra 'camión'?",
                opciones: ["Ca", "Mión", "Cam", "Mión"],
                respuestaCorrecta: 3,
                explicacion: "La sílaba tónica es 'mión', es la que lleva el acento."
            },
            {
                pregunta: "¿Qué es una fábula?",
                opciones: ["Un cuento de miedo", "Un poema", "Un texto con animales que deja una enseñanza", "Una receta"],
                respuestaCorrecta: 2,
                explicacion: "La fábula es un relato corto con animales y una moraleja."
            },
            {
                pregunta: "¿Qué indica una moraleja?",
                opciones: ["Un personaje", "Una enseñanza", "Un final feliz", "Un título"],
                respuestaCorrecta: 1,
                explicacion: "La moraleja enseña una lección al final de la fábula."
            },
            {
                pregunta: "¿Qué parte de un texto nos da el nombre del contenido?",
                opciones: ["Conclusión", "Título", "Resumen", "Nudo"],
                respuestaCorrecta: 1,
                explicacion: "El título nos dice de qué trata el texto."
            },
            {
                pregunta: "¿Cuál es un ejemplo de una rima consonante?",
                opciones: ["Sol - mar", "Río - frío", "Luz - luna", "Cielo - casa"],
                respuestaCorrecta: 1,
                explicacion: "'Río' y 'frío' riman porque terminan igual."
            },
            {
                pregunta: "¿Qué indica el punto y seguido?",
                opciones: ["Fin del texto", "Que debemos gritar", "Que se continúa con otra oración en el mismo párrafo", "Una pregunta"],
                respuestaCorrecta: 2,
                explicacion: "El punto y seguido se usa para continuar en el mismo párrafo."
            },
            {
                pregunta: "¿Qué tipo de palabras son: 'ayer', 'mañana', 'hoy'?",
                opciones: ["Sustantivos", "Adjetivos", "Adverbios de tiempo", "Pronombres"],
                respuestaCorrecta: 2,
                explicacion: "Son adverbios de tiempo, indican cuándo ocurre algo."
            },
            {
                pregunta: "¿Qué palabra está escrita con tilde?",
                opciones: ["Arbol", "Maíz", "Casa", "Libro"],
                respuestaCorrecta: 1,
                explicacion: "‘Maíz’ lleva tilde en la 'í'."
            },
            {
                pregunta: "¿Qué se necesita para leer correctamente un texto?",
                opciones: ["Dormir", "Leer rápido", "Comprensión lectora", "Leer sin pensar"],
                respuestaCorrecta: 2,
                explicacion: "Comprender lo que se lee es fundamental."
            },
            {
                pregunta: "¿Cuál de estos es un texto poético?",
                opciones: ["Cuento", "Adivinanza", "Poema", "Cartel"],
                respuestaCorrecta: 2,
                explicacion: "El poema usa versos y rimas para expresar ideas."
            }
        ],
        'Ciencia y Tecnología': [
            {
                pregunta: "¿Qué órgano del cuerpo humano se encarga de bombear la sangre?",
                opciones: ["Cerebro", "Pulmón", "Corazón", "Hígado"],
                respuestaCorrecta: 2,
                explicacion: "El corazón es el órgano que bombea la sangre a todo el cuerpo."
            },
            {
                pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
                opciones: ["Hojas", "Tallo", "Raíces", "Flores"],
                respuestaCorrecta: 2,
                explicacion: "Las raíces permiten absorber el agua y nutrientes del suelo."
            },
            {
                pregunta: "¿Cuál es la función principal del sistema respiratorio?",
                opciones: ["Digestionar los alimentos", "Bombear sangre", "Captar oxígeno", "Producir hormonas"],
                respuestaCorrecta: 2,
                explicacion: "El sistema respiratorio permite captar oxígeno del aire."
            },
            {
                pregunta: "¿Cuál es el estado sólido del agua?",
                opciones: ["Lluvia", "Niebla", "Hielo", "Vapor"],
                respuestaCorrecta: 2,
                explicacion: "Cuando el agua se congela se convierte en hielo, que es su estado sólido."
            },
            {
                pregunta: "¿Qué astro da luz y calor a la Tierra?",
                opciones: ["La Luna", "Marte", "El Sol", "Venus"],
                respuestaCorrecta: 2,
                explicacion: "El Sol es una estrella que proporciona luz y calor al planeta."
            },
            {
                pregunta: "¿Qué sentido usamos para oler?",
                opciones: ["Oído", "Vista", "Gusto", "Olfato"],
                respuestaCorrecta: 3,
                explicacion: "El olfato es el sentido que permite detectar olores con la nariz."
            },
            {
                pregunta: "¿Cuál es el órgano encargado del pensamiento?",
                opciones: ["Corazón", "Cerebro", "Estómago", "Pulmón"],
                respuestaCorrecta: 1,
                explicacion: "El cerebro es el órgano que controla los pensamientos y movimientos."
            },
            {
                pregunta: "¿Qué planeta es conocido como el planeta rojo?",
                opciones: ["Tierra", "Venus", "Marte", "Júpiter"],
                respuestaCorrecta: 2,
                explicacion: "Marte es llamado planeta rojo por su superficie oxidada."
            },
            {
                pregunta: "¿Qué usamos para medir la temperatura?",
                opciones: ["Reloj", "Termómetro", "Balanza", "Metro"],
                respuestaCorrecta: 1,
                explicacion: "El termómetro sirve para medir la temperatura."
            },
            {
                pregunta: "¿Qué animales nacen del vientre de su madre y toman leche?",
                opciones: ["Mamíferos", "Aves", "Reptiles", "Anfibios"],
                respuestaCorrecta: 0,
                explicacion: "Los mamíferos nacen del vientre y se alimentan de leche materna."
            },
            {
                pregunta: "¿Qué necesita una planta para hacer la fotosíntesis?",
                opciones: ["Agua, tierra y sombra", "Luz, agua y dióxido de carbono", "Agua, fuego y oxígeno", "Solo luz solar"],
                respuestaCorrecta: 1,
                explicacion: "La fotosíntesis ocurre con agua, luz solar y dióxido de carbono."
            },
            {
                pregunta: "¿Qué sentido usamos para ver?",
                opciones: ["Tacto", "Vista", "Gusto", "Oído"],
                respuestaCorrecta: 1,
                explicacion: "Usamos el sentido de la vista a través de los ojos para ver."
            },
            {
                pregunta: "¿Cómo se llama el satélite natural de la Tierra?",
                opciones: ["El Sol", "Venus", "La Luna", "Marte"],
                respuestaCorrecta: 2,
                explicacion: "La Luna es el único satélite natural de nuestro planeta."
            },
            {
                pregunta: "¿Cuál es el sistema del cuerpo que permite el movimiento?",
                opciones: ["Respiratorio", "Circulatorio", "Muscular y óseo", "Digestivo"],
                respuestaCorrecta: 2,
                explicacion: "Los músculos y huesos trabajan juntos para mover el cuerpo."
            },
            {
                pregunta: "¿Cuál es el líquido que transporta oxígeno en el cuerpo?",
                opciones: ["Sudor", "Saliva", "Sangre", "Agua"],
                respuestaCorrecta: 2,
                explicacion: "La sangre lleva oxígeno a todo el cuerpo."
            },
            {
                pregunta: "¿Qué fenómeno natural produce truenos y relámpagos?",
                opciones: ["Niebla", "Tormenta", "Terremoto", "Viento"],
                respuestaCorrecta: 1,
                explicacion: "Las tormentas pueden generar truenos y relámpagos."
            },
            {
                pregunta: "¿Qué planeta es el más cercano al Sol?",
                opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
                respuestaCorrecta: 0,
                explicacion: "Mercurio es el planeta más cercano al Sol."
            },
            {
                pregunta: "¿Qué es una fuente de energía renovable?",
                opciones: ["Petróleo", "Carbón", "Viento", "Gas natural"],
                respuestaCorrecta: 2,
                explicacion: "El viento es una fuente de energía limpia y renovable."
            },
            {
                pregunta: "¿Qué aparato usamos para ver objetos muy pequeños?",
                opciones: ["Telescopio", "Microscopio", "Prismáticos", "Reloj"],
                respuestaCorrecta: 1,
                explicacion: "El microscopio permite observar cosas diminutas."
            },
            {
                pregunta: "¿Qué parte del cuerpo nos ayuda a sentir el tacto?",
                opciones: ["Piel", "Hueso", "Ojos", "Pelo"],
                respuestaCorrecta: 0,
                explicacion: "La piel contiene receptores que nos permiten sentir."
            },
            {
                pregunta: "¿Cuál es el proceso donde los alimentos se transforman en energía?",
                opciones: ["Respiración", "Digestión", "Evaporación", "Crecimiento"],
                respuestaCorrecta: 1,
                explicacion: "La digestión convierte los alimentos en nutrientes y energía."
            },
            {
                pregunta: "¿Qué produce la energía eléctrica en una casa?",
                opciones: ["Motor", "Generador", "Planta eléctrica", "Enchufe"],
                respuestaCorrecta: 2,
                explicacion: "Las plantas eléctricas producen energía para las ciudades."
            },
            {
                pregunta: "¿Qué forma tiene la Tierra?",
                opciones: ["Plana", "Cuadrada", "Esférica", "Ovalada"],
                respuestaCorrecta: 2,
                explicacion: "La Tierra tiene forma esférica o redonda."
            },
            {
                pregunta: "¿Qué órgano usamos para saborear los alimentos?",
                opciones: ["Oído", "Lengua", "Nariz", "Ojos"],
                respuestaCorrecta: 1,
                explicacion: "La lengua tiene papilas gustativas para sentir sabores."
            },
            {
                pregunta: "¿Cuál es el principal recurso natural que bebemos?",
                opciones: ["Aire", "Sol", "Viento", "Agua"],
                respuestaCorrecta: 3,
                explicacion: "El agua es esencial para la vida y la consumimos diariamente."
            },
            {
                pregunta: "¿Qué planeta tiene anillos?",
                opciones: ["Saturno", "Marte", "Venus", "Mercurio"],
                respuestaCorrecta: 0,
                explicacion: "Saturno es famoso por sus grandes anillos de hielo y roca."
            },
            {
                pregunta: "¿Qué tipo de energía usa el sol?",
                opciones: ["Nuclear", "Eléctrica", "Solar", "Mecánica"],
                respuestaCorrecta: 2,
                explicacion: "El Sol produce energía solar que llega a la Tierra en forma de luz y calor."
            },
            {
                pregunta: "¿Qué sistema permite que los alimentos se digieran?",
                opciones: ["Respiratorio", "Circulatorio", "Digestivo", "Muscular"],
                respuestaCorrecta: 2,
                explicacion: "El sistema digestivo transforma los alimentos en energía."
            },
            {
                pregunta: "¿Qué planeta habitamos los humanos?",
                opciones: ["Venus", "Júpiter", "La Luna", "Tierra"],
                respuestaCorrecta: 3,
                explicacion: "Vivimos en el planeta Tierra."
            },
            {
                pregunta: "¿Qué ser vivo pone huevos y tiene plumas?",
                opciones: ["Perro", "Gallina", "Ballena", "Caballo"],
                respuestaCorrecta: 1,
                explicacion: "La gallina es un ave que pone huevos y tiene plumas."
            },
            {
                pregunta: "¿Qué material es un buen conductor de electricidad?",
                opciones: ["Plástico", "Madera", "Vidrio", "Cobre"],
                respuestaCorrecta: 3,
                explicacion: "El cobre es un excelente conductor eléctrico y se usa en cables."
            }
        ], 
        'Personal Social': [
            {
                pregunta: "¿Qué es una familia?",
                opciones: ["Un grupo de animales", "Un grupo de amigos", "Un grupo de personas unidas por lazos de amor y parentesco", "Un equipo de fútbol"],
                respuestaCorrecta: 2,
                explicacion: "La familia es un grupo de personas que se aman y se cuidan mutuamente."
            },
            {
                pregunta: "¿Qué valores debemos practicar en casa?",
                opciones: ["Mentir y gritar", "Compartir y respetar", "Pegar y gritar", "No obedecer"],
                respuestaCorrecta: 1,
                explicacion: "Compartir y respetar fortalecen la convivencia familiar."
            },
            {
                pregunta: "¿Qué es una norma?",
                opciones: ["Un juguete", "Una comida", "Una regla para convivir mejor", "Un castigo"],
                respuestaCorrecta: 2,
                explicacion: "Las normas nos ayudan a vivir en armonía."
            },
            {
                pregunta: "¿Cuál de estas acciones es un deber?",
                opciones: ["Jugar todo el día", "No hacer tareas", "Cuidar el medio ambiente", "Ver televisión todo el día"],
                respuestaCorrecta: 2,
                explicacion: "Cuidar el medio ambiente es un deber de todos."
            },
            {
                pregunta: "¿Qué es la identidad?",
                opciones: ["Tener muchos amigos", "Parecerse a otros", "Conocer y valorar lo que nos hace únicos", "No saber quién eres"],
                respuestaCorrecta: 2,
                explicacion: "La identidad es saber quién eres y de dónde vienes."
            },
            {
                pregunta: "¿Cuál es un símbolo patrio del Perú?",
                opciones: ["La escarapela", "El escudo nacional", "La piñata", "El sombrero"],
                respuestaCorrecta: 1,
                explicacion: "El escudo nacional es uno de nuestros símbolos patrios."
            },
            {
                pregunta: "¿Qué celebramos el 28 de julio en Perú?",
                opciones: ["El Día del Niño", "La Navidad", "La Independencia del Perú", "La Semana Santa"],
                respuestaCorrecta: 2,
                explicacion: "El 28 de julio celebramos nuestra independencia."
            },
            {
                pregunta: "¿Quién fue el libertador del Perú?",
                opciones: ["Abraham Lincoln", "Simón Bolívar", "Don José de San Martín", "Miguel Grau"],
                respuestaCorrecta: 2,
                explicacion: "San Martín proclamó la independencia del Perú en 1821."
            },
            {
                pregunta: "¿Cuál es un derecho de los niños?",
                opciones: ["No ir al colegio", "No tener nombre", "Tener educación", "Trabajar desde pequeños"],
                respuestaCorrecta: 2,
                explicacion: "Todos los niños tienen derecho a una educación."
            },
            {
                pregunta: "¿Qué es la ciudadanía?",
                opciones: ["Vivir en otro planeta", "Derecho a participar en la vida del país", "Tener muchos juguetes", "No respetar las leyes"],
                respuestaCorrecta: 1,
                explicacion: "La ciudadanía implica derechos y deberes dentro del país."
            },
            {
                pregunta: "¿Qué significa convivencia?",
                opciones: ["Vivir en lugares separados", "Pelear todo el tiempo", "Vivir juntos respetándonos", "Comer mucho"],
                respuestaCorrecta: 2,
                explicacion: "Convivencia es vivir en armonía con los demás."
            },
            {
                pregunta: "¿Qué actitud muestra respeto?",
                opciones: ["Escuchar a los demás", "Interrumpir siempre", "Gritar al hablar", "Ignorar a tus compañeros"],
                respuestaCorrecta: 0,
                explicacion: "Escuchar a los demás es una muestra de respeto."
            },
            {
                pregunta: "¿Quién es el alcalde?",
                opciones: ["El que maneja un carro", "El jefe de una tienda", "La autoridad de un distrito", "Un cantante famoso"],
                respuestaCorrecta: 2,
                explicacion: "El alcalde dirige un distrito o ciudad."
            },
            {
                pregunta: "¿Qué es una comunidad?",
                opciones: ["Un grupo de animales", "Un grupo de personas que viven en un mismo lugar", "Una familia", "Un grupo escolar"],
                respuestaCorrecta: 1,
                explicacion: "La comunidad es un conjunto de personas que conviven en un mismo lugar."
            },
            {
                pregunta: "¿Qué significa ser solidario?",
                opciones: ["Ignorar a los demás", "Pensar solo en uno mismo", "Ayudar a quien lo necesita", "Ser egoísta"],
                respuestaCorrecta: 2,
                explicacion: "La solidaridad es ayudar sin esperar algo a cambio."
            },
            {
                pregunta: "¿Cuál es un medio de comunicación?",
                opciones: ["La comida", "La televisión", "El cuaderno", "La silla"],
                respuestaCorrecta: 1,
                explicacion: "La televisión permite transmitir información a muchas personas."
            },
            {
                pregunta: "¿Qué hacemos cuando reciclamos?",
                opciones: ["Botamos basura", "Quemamos papeles", "Reutilizamos materiales", "Contaminamos el agua"],
                respuestaCorrecta: 2,
                explicacion: "Reciclar ayuda a cuidar el medio ambiente."
            },
            {
                pregunta: "¿Qué representa la bandera del Perú?",
                opciones: ["El sol", "La unión del país", "La Navidad", "Las estaciones del año"],
                respuestaCorrecta: 1,
                explicacion: "La bandera simboliza nuestra identidad nacional."
            },
            {
                pregunta: "¿Qué debemos hacer al cruzar la calle?",
                opciones: ["Correr", "Hablar por teléfono", "Mirar ambos lados y usar el cruce peatonal", "Cerrar los ojos"],
                respuestaCorrecta: 2,
                explicacion: "Así evitamos accidentes y cuidamos nuestra vida."
            },
            {
                pregunta: "¿Quién fue Miguel Grau?",
                opciones: ["Un futbolista", "Un marinero valiente del Perú", "Un maestro", "Un médico"],
                respuestaCorrecta: 1,
                explicacion: "Miguel Grau es un héroe nacional por su valentía en la guerra."
            },
            {
                pregunta: "¿Qué debemos hacer con los adultos mayores?",
                opciones: ["Ignorarlos", "No ayudarlos", "Respetarlos y cuidarlos", "Burlarnos de ellos"],
                respuestaCorrecta: 2,
                explicacion: "Merecen respeto y cuidado por su experiencia y edad."
            },
            {
                pregunta: "¿Cuál es un deber de todo ciudadano?",
                opciones: ["Ensuciar las calles", "Cuidar su comunidad", "Gritar en clase", "No pagar impuestos"],
                respuestaCorrecta: 1,
                explicacion: "Cuidar la comunidad es responsabilidad de todos."
            },
            {
                pregunta: "¿Qué es un derecho?",
                opciones: ["Un permiso para hacer daño", "Una obligación", "Algo que podemos exigir para nuestro bienestar", "Un castigo"],
                respuestaCorrecta: 2,
                explicacion: "Los derechos son fundamentales para vivir con dignidad."
            },
            {
                pregunta: "¿Quién nos representa en el colegio?",
                opciones: ["El profesor", "El director", "El alcalde", "El brigadier o líder de aula"],
                respuestaCorrecta: 3,
                explicacion: "El brigadier representa a los estudiantes de su aula."
            },
            {
                pregunta: "¿Qué es el respeto?",
                opciones: ["Reírse de otros", "Escuchar, aceptar y valorar a los demás", "Gritar siempre", "Romper las reglas"],
                respuestaCorrecta: 1,
                explicacion: "Respetar es valorar a las personas tal como son."
            },
            {
                pregunta: "¿Por qué debemos cuidar el agua?",
                opciones: ["Porque sí", "Porque es un recurso importante para la vida", "Porque está de moda", "Porque lo dice mi profesor"],
                respuestaCorrecta: 1,
                explicacion: "El agua es vital para todos los seres vivos."
            },
            {
                pregunta: "¿Qué podemos hacer si alguien está triste?",
                opciones: ["Reírnos", "Ignorarlo", "Consolarlo o acompañarlo", "Hacerle bromas pesadas"],
                respuestaCorrecta: 2,
                explicacion: "Ayudar y consolar demuestra empatía y solidaridad."
            },
            {
                pregunta: "¿Qué es un mapa del Perú?",
                opciones: ["Un dibujo de personas", "Un gráfico que representa el territorio del país", "Una historieta", "Un cuento"],
                respuestaCorrecta: 1,
                explicacion: "El mapa muestra cómo es y dónde está el Perú."
            },
            {
                pregunta: "¿Qué es un conflicto?",
                opciones: ["Una fiesta", "Un malentendido o desacuerdo entre personas", "Un juego", "Un paseo"],
                respuestaCorrecta: 1,
                explicacion: "Los conflictos se resuelven con diálogo y respeto."
            },
            {
                pregunta: "¿Qué debemos hacer si cometemos un error?",
                opciones: ["Ocultarlo", "Culpar a otros", "Reconocerlo y aprender", "Enojarnos"],
                respuestaCorrecta: 2,
                explicacion: "Reconocer nuestros errores nos ayuda a mejorar."
            }
        ], 
        'Arte y Cultura': [
            {
                pregunta: "¿Cuántas notas musicales existen en total?",
                opciones: ["5", "7", "8", "6"],
                respuestaCorrecta: 1,
                explicacion: "Existen 7 notas musicales: do, re, mi, fa, sol, la y si."
            },
            {
                pregunta: "¿Qué ritmo musical es típico de la selva peruana?",
                opciones: ["Huayno", "Marinera", "Pandilla", "Saya"],
                respuestaCorrecta: 2,
                explicacion: "La pandilla es una danza y ritmo típico de la región amazónica del Perú."
            },
            {
                pregunta: "¿Cuál es un instrumento típico de la selva?",
                opciones: ["Quena", "Tambor con piel de mono", "Zampoña", "Trompeta"],
                respuestaCorrecta: 1,
                explicacion: "En la selva se usan tambores artesanales hechos con piel de animales."
            },
            {
                pregunta: "¿Qué danza boliviana es muy conocida y se baila en Perú también?",
                opciones: ["Saya", "Samba", "Cumbia", "Tondero"],
                respuestaCorrecta: 0,
                explicacion: "La saya es una danza afroboliviana que también se baila en la región sur del Perú."
            },
            {
                pregunta: "¿Qué colores se forman al mezclar azul y amarillo?",
                opciones: ["Verde", "Rojo", "Naranja", "Celeste"],
                respuestaCorrecta: 0,
                explicacion: "El verde se forma al mezclar azul con amarillo."
            },
            {
                pregunta: "¿Qué es un autorretrato?",
                opciones: ["Un dibujo de una casa", "Una pintura de uno mismo", "Una foto grupal", "Un paisaje"],
                respuestaCorrecta: 1,
                explicacion: "El autorretrato es una representación que hace una persona de sí misma."
            },
            {
                pregunta: "¿Qué artista pintó la famosa obra 'La Mona Lisa'?",
                opciones: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Monet"],
                respuestaCorrecta: 2,
                explicacion: "Leonardo da Vinci fue el autor de la famosa pintura 'La Mona Lisa'."
            },
            {
                pregunta: "¿Qué instrumento tiene cuerdas y se toca con arco?",
                opciones: ["Guitarra", "Piano", "Violín", "Tambor"],
                respuestaCorrecta: 2,
                explicacion: "El violín tiene cuerdas y se toca con un arco."
            },
            {
                pregunta: "¿Qué es una melodía?",
                opciones: ["Una escultura", "Una sucesión de sonidos musicales", "Un color", "Un tipo de baile"],
                respuestaCorrecta: 1,
                explicacion: "La melodía es una sucesión de notas que suenan agradables al oído."
            },
            {
                pregunta: "¿Qué instrumento musical se sopla y tiene teclas?",
                opciones: ["Zampoña", "Saxofón", "Acordeón", "Quena"],
                respuestaCorrecta: 2,
                explicacion: "El acordeón se toca soplando aire y presionando teclas."
            },
            {
                pregunta: "¿Qué pintura representa un paisaje natural?",
                opciones: ["Retrato", "Abstracto", "Paisaje", "Moderno"],
                respuestaCorrecta: 2,
                explicacion: "Un paisaje representa montañas, ríos, árboles o el campo."
            },
            {
                pregunta: "¿Qué danza representa la cosecha de arroz en la selva?",
                opciones: ["Pandilla", "Danza de los negritos", "Arroz chaufa", "Apu inca"],
                respuestaCorrecta: 0,
                explicacion: "La pandilla simboliza la cosecha y celebración amazónica."
            },
            {
                pregunta: "¿Cuál de estos es un color terciario?",
                opciones: ["Verde", "Naranja", "Marrón", "Rojo"],
                respuestaCorrecta: 2,
                explicacion: "El marrón se obtiene mezclando varios colores primarios y secundarios."
            },
            {
                pregunta: "¿Qué nota musical sigue después de FA?",
                opciones: ["SOL", "MI", "SI", "LA"],
                respuestaCorrecta: 0,
                explicacion: "La nota que sigue a FA es SOL."
            },
            {
                pregunta: "¿Qué instrumento de viento es típico de los Andes?",
                opciones: ["Zampoña", "Bajo", "Piano", "Batería"],
                respuestaCorrecta: 0,
                explicacion: "La zampoña es un instrumento tradicional andino hecho de cañas."
            },
            {
                pregunta: "¿Qué es la danza 'Los Shapis'?",
                opciones: ["Una danza del altiplano", "Una danza selvática alegre", "Una danza europea", "Una marcha militar"],
                respuestaCorrecta: 1,
                explicacion: "Los Shapis es una danza colorida y alegre de la selva central peruana."
            },
            {
                pregunta: "¿Qué son los colores fríos?",
                opciones: ["Rojo, amarillo, naranja", "Verde, azul, violeta", "Negro y blanco", "Dorado y plateado"],
                respuestaCorrecta: 1,
                explicacion: "Los colores fríos transmiten calma, como el azul y el verde."
            },
            {
                pregunta: "¿Qué tipo de arte se realiza con barro o arcilla?",
                opciones: ["Dibujo", "Pintura", "Escultura", "Música"],
                respuestaCorrecta: 2,
                explicacion: "La escultura usa materiales como el barro para formar figuras."
            },
            {
                pregunta: "¿Qué es una paleta de colores?",
                opciones: ["Una flauta", "Un conjunto de colores", "Un instrumento", "Una danza"],
                respuestaCorrecta: 1,
                explicacion: "La paleta contiene todos los colores que el artista va a usar."
            },
            {
                pregunta: "¿Qué danza se baila con trajes coloridos y máscaras en Bolivia?",
                opciones: ["Saya", "Caporales", "Cumbia", "Pandilla"],
                respuestaCorrecta: 1,
                explicacion: "Los Caporales es una danza boliviana con trajes brillantes y energía."
            },
            {
                pregunta: "¿Qué tipo de arte representa ideas con formas sin sentido real?",
                opciones: ["Realismo", "Abstracto", "Costumbrismo", "Cubismo"],
                respuestaCorrecta: 1,
                explicacion: "El arte abstracto usa líneas y colores para expresar emociones sin forma definida."
            },
            {
                pregunta: "¿Qué instrumento musical es muy usado en bandas escolares?",
                opciones: ["Trombón", "Quena", "Guitarra", "Zampoña"],
                respuestaCorrecta: 0,
                explicacion: "El trombón es común en bandas musicales escolares."
            },
            {
                pregunta: "¿Qué es un boceto?",
                opciones: ["Una canción", "Un dibujo rápido", "Una danza", "Una película"],
                respuestaCorrecta: 1,
                explicacion: "El boceto es un dibujo previo, hecho rápidamente para planificar una obra."
            },
            {
                pregunta: "¿Qué instrumento es parecido al tambor pero más pequeño?",
                opciones: ["Guitarra", "Bongo", "Violín", "Flauta"],
                respuestaCorrecta: 1,
                explicacion: "El bongo es un instrumento de percusión más pequeño que el tambor."
            },
            {
                pregunta: "¿Cuál es un color complementario del rojo?",
                opciones: ["Verde", "Azul", "Amarillo", "Marrón"],
                respuestaCorrecta: 0,
                explicacion: "El verde es el color complementario del rojo en el círculo cromático."
            },
            {
                pregunta: "¿Qué representa una pintura costumbrista?",
                opciones: ["La vida diaria de un pueblo", "Figuras abstractas", "Dibujos digitales", "Animales fantásticos"],
                respuestaCorrecta: 0,
                explicacion: "El costumbrismo muestra las tradiciones y actividades del pueblo."
            },
            {
                pregunta: "¿Qué danza de la selva se caracteriza por el uso de palos?",
                opciones: ["Pandilla", "Danza de la anaconda", "Palizada", "Sikuris"],
                respuestaCorrecta: 2,
                explicacion: "La palizada es una danza amazónica en la que se usan palos rítmicamente."
            },
            {
                pregunta: "¿Qué instrumento tiene teclas y cuerdas y se toca con los dedos?",
                opciones: ["Flauta", "Piano", "Guitarra", "Acordeón"],
                respuestaCorrecta: 2,
                explicacion: "La guitarra tiene cuerdas y se toca con los dedos."
            },
            {
                pregunta: "¿Qué forma geométrica se usa mucho en diseños artísticos?",
                opciones: ["Círculo", "Rombo", "Triángulo", "Todas las anteriores"],
                respuestaCorrecta: 3,
                explicacion: "Todas las formas geométricas pueden formar patrones artísticos."
            },
            {
                pregunta: "¿Qué colores forman el color gris?",
                opciones: ["Negro y blanco", "Rojo y azul", "Amarillo y marrón", "Naranja y verde"],
                respuestaCorrecta: 0,
                explicacion: "El gris se forma al mezclar blanco con negro."
            },
            {
                pregunta: "¿Qué instrumento es usado en la música de Caporales?",
                opciones: ["Zampoña", "Timbales", "Bombo", "Charango"],
                respuestaCorrecta: 2,
                explicacion: "El bombo es esencial en la danza Caporales por su ritmo fuerte."
            }
        ],
    },
    4:{
        'Inglés': [
            {
                pregunta: "¿Qué forma del verbo 'to be' corresponde con 'They'?",
                opciones: ["Is", "Am", "Are", "Be"],
                respuestaCorrecta: 2,
                explicacion: "Con 'They' se usa 'are'."
            },
            {
                pregunta: "¿Cuál es el pasado de 'go'?",
                opciones: ["Goed", "Went", "Gone", "Go"],
                respuestaCorrecta: 1,
                explicacion: "El pasado de 'go' es 'went'."
            },
            {
                pregunta: "¿Cómo se dice 'Tengo 10 años' en inglés?",
                opciones: ["I have 10 years", "I am 10 years", "I am 10 years old", "I have 10"],
                respuestaCorrecta: 2,
                explicacion: "La forma correcta es 'I am 10 years old'."
            },
            {
                pregunta: "¿Cuál es la forma negativa de 'She is happy'?",
                opciones: ["She happy not", "She is not happy", "Is not she happy", "She no happy"],
                respuestaCorrecta: 1,
                explicacion: "La forma negativa correcta es 'She is not happy'."
            },
            {
                pregunta: "¿Cuál es el plural de 'child'?",
                opciones: ["Childs", "Children", "Childes", "Chields"],
                respuestaCorrecta: 1,
                explicacion: "El plural irregular de 'child' es 'children'."
            },
            {
                pregunta: "¿Cómo se dice 'Ella juega fútbol' en inglés?",
                opciones: ["She play football", "She plays football", "She playing football", "She is play football"],
                respuestaCorrecta: 1,
                explicacion: "En presente simple con 'she', el verbo lleva 's': 'She plays football'."
            },
            {
                pregunta: "¿Qué significa 'always'?",
                opciones: ["Nunca", "A veces", "Siempre", "Rápido"],
                respuestaCorrecta: 2,
                explicacion: "'Always' significa 'siempre'."
            },
            {
                pregunta: "¿Cómo se dice 'Nosotros estamos comiendo'?",
                opciones: ["We are eat", "We eating", "We are eating", "We eats"],
                respuestaCorrecta: 2,
                explicacion: "'We are eating' es la forma correcta en presente continuo."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'early'?",
                opciones: ["Soon", "Late", "Fast", "Quick"],
                respuestaCorrecta: 1,
                explicacion: "El opuesto de 'early' es 'late'."
            },
            {
                pregunta: "¿Qué pronombre se usa para un animal (cuando no se sabe su sexo)?",
                opciones: ["He", "She", "It", "They"],
                respuestaCorrecta: 2,
                explicacion: "Se usa 'it' para animales de forma general."
            },
            {
                pregunta: "¿Qué significa 'What time is it?'",
                opciones: ["¿Dónde está?", "¿Qué hora es?", "¿Qué día es hoy?", "¿Qué estás haciendo?"],
                respuestaCorrecta: 1,
                explicacion: "'What time is it?' significa '¿Qué hora es?'."
            },
            {
                pregunta: "¿Cómo se dice 'Mi madre cocina bien'?",
                opciones: ["My mother cook good", "My mother cooks good", "My mother cooks well", "My mother well cooks"],
                respuestaCorrecta: 2,
                explicacion: "'Well' es el adverbio correcto, y con 'she' usamos 'cooks'."
            },
            {
                pregunta: "¿Qué significa 'She doesn’t like apples'?",
                opciones: ["Ella no le gusta las manzanas", "Ella no come manzanas", "Ella no quiere manzanas", "Ella no tiene manzanas"],
                respuestaCorrecta: 0,
                explicacion: "La oración en negativo con 'doesn’t' significa que no le gusta."
            },
            {
                pregunta: "¿Cuál es la forma correcta de preguntar '¿Dónde vives?'?",
                opciones: ["Where do you live?", "Where are you live?", "Where live you?", "Where you living?"],
                respuestaCorrecta: 0,
                explicacion: "La pregunta correcta en presente simple es 'Where do you live?'."
            },
            {
                pregunta: "¿Qué significa 'It is raining'?",
                opciones: ["Está lloviendo", "Hace sol", "Está nevando", "Hace calor"],
                respuestaCorrecta: 0,
                explicacion: "'It is raining' se traduce como 'Está lloviendo'."
            },
            {
                pregunta: "¿Qué tiempo verbal es 'She is reading'?",
                opciones: ["Pasado", "Futuro", "Presente simple", "Presente continuo"],
                respuestaCorrecta: 3,
                explicacion: "El verbo 'is reading' está en presente continuo."
            },
            {
                pregunta: "¿Cómo se dice 'Estoy cansado' en inglés?",
                opciones: ["I am tired", "I tired", "I am sleepy", "I am angry"],
                respuestaCorrecta: 0,
                explicacion: "La forma correcta es 'I am tired'."
            },
            {
                pregunta: "¿Cuál es el adjetivo correcto en 'The elephant is ___ than the dog'?",
                opciones: ["big", "bigger", "more big", "biggest"],
                respuestaCorrecta: 1,
                explicacion: "'Bigger' es el comparativo entre dos."
            },
            {
                pregunta: "¿Qué significa 'How are you?'",
                opciones: ["¿Cómo te llamas?", "¿Dónde vives?", "¿Cómo estás?", "¿Qué haces?"],
                respuestaCorrecta: 2,
                explicacion: "'How are you?' significa '¿Cómo estás?'."
            },
            {
                pregunta: "¿Qué significa 'She has long hair'?",
                opciones: ["Ella tiene el cabello largo", "Ella es alta", "Ella corre rápido", "Ella tiene uñas largas"],
                respuestaCorrecta: 0,
                explicacion: "'Long hair' es 'cabello largo'."
            },
            {
                pregunta: "¿Cómo se dice 'ayer' en inglés?",
                opciones: ["Tomorrow", "Today", "Yesterday", "Now"],
                respuestaCorrecta: 2,
                explicacion: "'Ayer' en inglés es 'yesterday'."
            },
            {
                pregunta: "¿Cómo se dice 'tienen hambre' en inglés?",
                opciones: ["They have hungry", "They are hungry", "They hungry", "They has hungry"],
                respuestaCorrecta: 1,
                explicacion: "La forma correcta es 'They are hungry'."
            },
            {
                pregunta: "¿Qué significa 'My favorite subject is English'?",
                opciones: ["Me gusta bailar", "Mi asignatura favorita es inglés", "Inglés es difícil", "Mi escuela es bilingüe"],
                respuestaCorrecta: 1,
                explicacion: "La frase significa 'Mi asignatura favorita es inglés'."
            },
            {
                pregunta: "¿Qué pregunta es correcta para: 'I am ten years old'?",
                opciones: ["How many are you?", "What is your age?", "How old are you?", "What years you have?"],
                respuestaCorrecta: 2,
                explicacion: "La pregunta correcta es 'How old are you?'."
            },
            {
                pregunta: "¿Qué significa 'in front of'?",
                opciones: ["Detrás de", "Encima de", "Delante de", "Al lado de"],
                respuestaCorrecta: 2,
                explicacion: "'In front of' significa 'delante de'."
            },
            {
                pregunta: "¿Cómo se dice 'Ella no tiene una bicicleta'?",
                opciones: ["She hasn’t a bike", "She doesn’t have a bike", "She don’t have a bike", "She not has a bike"],
                respuestaCorrecta: 1,
                explicacion: "La forma negativa correcta es 'She doesn’t have a bike'."
            },
            {
                pregunta: "¿Qué significa 'Let’s play'?",
                opciones: ["Vamos a jugar", "Vamos a correr", "Déjame en paz", "Estudiaremos"],
                respuestaCorrecta: 0,
                explicacion: "'Let’s play' significa 'Vamos a jugar'."
            },
            {
                pregunta: "¿Cuál es la forma correcta del plural de 'mouse'?",
                opciones: ["Mouses", "Mices", "Mouse", "Mice"],
                respuestaCorrecta: 3,
                explicacion: "El plural irregular de 'mouse' es 'mice'."
            },
            {
                pregunta: "¿Qué significa 'She is brushing her teeth'?",
                opciones: ["Ella se lava las manos", "Ella está peinando su cabello", "Ella está cepillando sus dientes", "Ella está vistiéndose"],
                respuestaCorrecta: 2,
                explicacion: "La frase 'She is brushing her teeth' significa 'Ella está cepillando sus dientes'."
            },
            {
                pregunta: "¿Qué significa 'I want to learn English'?",
                opciones: ["Quiero enseñar inglés", "Estoy aprendiendo inglés", "Quiero aprender inglés", "Debo aprender inglés"],
                respuestaCorrecta: 2,
                explicacion: "'I want to learn English' se traduce como 'Quiero aprender inglés'."
            }
        ],
        'Matemática': [
            {
                pregunta: "¿Cuánto es 250 + 375?",
                opciones: ["615", "625", "635", "645"],
                respuestaCorrecta: 1,
                explicacion: "250 + 375 = 625."
            },
            {
                pregunta: "¿Cuál es el valor posicional del 7 en 4782?",
                opciones: ["Centena", "Decena", "Unidad de mil", "Unidad"],
                respuestaCorrecta: 0,
                explicacion: "El 7 está en el lugar de las centenas."
            },
            {
                pregunta: "¿Qué número es el doble de 146?",
                opciones: ["282", "292", "296", "300"],
                respuestaCorrecta: 1,
                explicacion: "146 × 2 = 292."
            },
            {
                pregunta: "¿Cuál es el resultado de 540 - 285?",
                opciones: ["255", "245", "265", "275"],
                respuestaCorrecta: 2,
                explicacion: "540 - 285 = 265."
            },
            {
                pregunta: "¿Qué número completa la secuencia? 3, 6, 12, 24, ___",
                opciones: ["36", "42", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Cada número se duplica: 24 × 2 = 48."
            },
            {
                pregunta: "¿Cuál es el área de un rectángulo de 8 m por 6 m?",
                opciones: ["42 m²", "46 m²", "48 m²", "50 m²"],
                respuestaCorrecta: 2,
                explicacion: "Área = 8 × 6 = 48 m²."
            },
            {
                pregunta: "¿Cuál es el perímetro de un cuadrado con lados de 9 cm?",
                opciones: ["36 cm", "27 cm", "45 cm", "30 cm"],
                respuestaCorrecta: 0,
                explicacion: "9 × 4 = 36 cm."
            },
            {
                pregunta: "¿Cuántos centímetros hay en un metro?",
                opciones: ["10", "100", "1000", "10000"],
                respuestaCorrecta: 1,
                explicacion: "1 metro = 100 centímetros."
            },
            {
                pregunta: "¿Qué fracción representa la mitad?",
                opciones: ["1/2", "1/3", "2/3", "3/4"],
                respuestaCorrecta: 0,
                explicacion: "La mitad es 1/2."
            },
            {
                pregunta: "Si tengo S/ 30 y gasto S/ 12.50, ¿cuánto me queda?",
                opciones: ["S/ 17.50", "S/ 18.50", "S/ 16.50", "S/ 15.50"],
                respuestaCorrecta: 0,
                explicacion: "30 - 12.50 = 17.50."
            },
            {
                pregunta: "¿Qué figura tiene 3 lados?",
                opciones: ["Triángulo", "Cuadrado", "Círculo", "Rectángulo"],
                respuestaCorrecta: 0,
                explicacion: "El triángulo tiene 3 lados."
            },
            {
                pregunta: "¿Qué operación usamos para repartir en partes iguales?",
                opciones: ["Suma", "Resta", "Multiplicación", "División"],
                respuestaCorrecta: 3,
                explicacion: "La división reparte en partes iguales."
            },
            {
                pregunta: "¿Cuál es el triple de 45?",
                opciones: ["125", "135", "140", "145"],
                respuestaCorrecta: 1,
                explicacion: "45 × 3 = 135."
            },
            {
                pregunta: "¿Cuánto es 6 × 7?",
                opciones: ["42", "36", "48", "40"],
                respuestaCorrecta: 0,
                explicacion: "6 por 7 es 42."
            },
            {
                pregunta: "¿Cuánto es 81 ÷ 9?",
                opciones: ["7", "8", "9", "10"],
                respuestaCorrecta: 2,
                explicacion: "81 dividido entre 9 es 9."
            },
            {
                pregunta: "¿Qué unidad usamos para medir peso?",
                opciones: ["Litros", "Metros", "Gramos", "Segundos"],
                respuestaCorrecta: 2,
                explicacion: "Los gramos miden peso."
            },
            {
                pregunta: "¿Cuál es el número anterior a 1000?",
                opciones: ["999", "998", "1001", "990"],
                respuestaCorrecta: 0,
                explicacion: "El anterior a 1000 es 999."
            },
            {
                pregunta: "¿Qué número falta? 250, 260, ___, 280",
                opciones: ["270", "265", "275", "255"],
                respuestaCorrecta: 0,
                explicacion: "Secuencia de +10, falta 270."
            },
            {
                pregunta: "¿Cuántos minutos hay en una hora?",
                opciones: ["100", "60", "30", "90"],
                respuestaCorrecta: 1,
                explicacion: "60 minutos = 1 hora."
            },
            {
                pregunta: "¿Cuál es la décima parte de 100?",
                opciones: ["10", "5", "20", "1"],
                respuestaCorrecta: 0,
                explicacion: "100 ÷ 10 = 10."
            },
            {
                pregunta: "Si compro 3 cuadernos a S/ 4 cada uno, ¿cuánto gasto?",
                opciones: ["S/ 10", "S/ 12", "S/ 8", "S/ 6"],
                respuestaCorrecta: 1,
                explicacion: "3 × 4 = S/ 12."
            },
            {
                pregunta: "¿Qué figura tiene todos sus lados iguales y 4 lados?",
                opciones: ["Cuadrado", "Rectángulo", "Triángulo", "Trapecio"],
                respuestaCorrecta: 0,
                explicacion: "El cuadrado tiene 4 lados iguales."
            },
            {
                pregunta: "¿Qué número falta? 1, 3, 5, ___, 9",
                opciones: ["6", "7", "8", "10"],
                respuestaCorrecta: 1,
                explicacion: "Secuencia de impares: falta el 7."
            },
            {
                pregunta: "Si tengo 5 cajas con 6 naranjas cada una, ¿cuántas tengo en total?",
                opciones: ["30", "36", "25", "26"],
                respuestaCorrecta: 0,
                explicacion: "5 × 6 = 30 naranjas."
            },
            {
                pregunta: "¿Cuánto es 900 - 245?",
                opciones: ["655", "665", "675", "685"],
                respuestaCorrecta: 0,
                explicacion: "900 - 245 = 655."
            },
            {
                pregunta: "¿Cuál es la mitad de 64?",
                opciones: ["30", "32", "34", "36"],
                respuestaCorrecta: 1,
                explicacion: "64 ÷ 2 = 32."
            },
            {
                pregunta: "¿Qué hora es si el reloj marca 3 y 30?",
                opciones: ["Tres y media", "Tres en punto", "Cuatro menos cuarto", "Tres y cuarto"],
                respuestaCorrecta: 0,
                explicacion: "3:30 es 'tres y media'."
            },
            {
                pregunta: "¿Cuál es el número mayor?",
                opciones: ["345", "543", "435", "354"],
                respuestaCorrecta: 1,
                explicacion: "543 es el número mayor."
            },
            {
                pregunta: "¿Qué número tiene 3 centenas, 4 decenas y 2 unidades?",
                opciones: ["342", "243", "324", "432"],
                respuestaCorrecta: 0,
                explicacion: "3C = 300, 4D = 40, 2U = 2 → 342."
            },
            {
                pregunta: "¿Cuánto es 8 × 8?",
                opciones: ["64", "48", "72", "56"],
                respuestaCorrecta: 0,
                explicacion: "8 por 8 es 64."
            },
            {
                pregunta: "¿Qué figura tiene forma redonda y no tiene lados?",
                opciones: ["Círculo", "Cuadrado", "Rombo", "Rectángulo"],
                respuestaCorrecta: 0,
                explicacion: "El círculo no tiene lados."
            }
        ],
        'Comunicación': [
            {
                pregunta: "¿Cuál es el sinónimo de 'alegre'?",
                opciones: ["Triste", "Feliz", "Enojado", "Tímido"],
                respuestaCorrecta: 1,
                explicacion: "'Feliz' es un sinónimo de 'alegre'."
            },
            {
                pregunta: "¿Qué es una oración?",
                opciones: [
                "Una letra",
                "Una palabra inventada",
                "Un conjunto de palabras con sentido completo",
                "Un dibujo"
                ],
                respuestaCorrecta: 2,
                explicacion: "Una oración es un conjunto de palabras que expresan una idea completa."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'rápido'?",
                opciones: ["Ligero", "Veloz", "Lento", "Ágil"],
                respuestaCorrecta: 2,
                explicacion: "El antónimo de 'rápido' es 'lento'."
            },
            {
                pregunta: "¿Cuál es un ejemplo de una oración interrogativa?",
                opciones: [
                "¡Qué bonita flor!",
                "¿Dónde vives?",
                "Corre muy rápido.",
                "Esa casa es azul."
                ],
                respuestaCorrecta: 1,
                explicacion: "La oración '¿Dónde vives?' es una pregunta, por eso es interrogativa."
            },
            {
                pregunta: "¿Qué signo se usa para cerrar una exclamación?",
                opciones: ["¿", ".", "!", ","],
                respuestaCorrecta: 2,
                explicacion: "El signo '!' se usa para cerrar exclamaciones."
            },
            {
                pregunta: "¿Qué palabra es un sustantivo?",
                opciones: ["Correr", "Rápido", "Niño", "Alto"],
                respuestaCorrecta: 2,
                explicacion: "'Niño' es un sustantivo porque es un nombre de persona."
            },
            {
                pregunta: "¿Cuál es un verbo?",
                opciones: ["Casa", "Perro", "Saltar", "Bonita"],
                respuestaCorrecta: 2,
                explicacion: "'Saltar' es un verbo porque indica una acción."
            },
            {
                pregunta: "¿Qué palabra es un adjetivo?",
                opciones: ["Mesa", "Comer", "Grande", "Caminar"],
                respuestaCorrecta: 2,
                explicacion: "'Grande' es un adjetivo porque describe algo."
            },
            {
                pregunta: "¿Para qué sirve un punto final?",
                opciones: [
                "Para separar ideas",
                "Para hacer una pausa",
                "Para terminar una oración",
                "Para preguntar"
                ],
                respuestaCorrecta: 2,
                explicacion: "El punto final se usa para cerrar una oración."
            },
            {
                pregunta: "¿Cuál es el sujeto en la oración: 'El gato duerme en la silla'?",
                opciones: ["Duerme", "Silla", "Gato", "El"],
                respuestaCorrecta: 2,
                explicacion: "El sujeto es 'gato', que realiza la acción."
            },
            {
                pregunta: "¿Qué es una sílaba?",
                opciones: [
                "Un tipo de palabra",
                "Una letra especial",
                "Un sonido o grupo de sonidos que se pronuncian juntos",
                "Una oración larga"
                ],
                respuestaCorrecta: 2,
                explicacion: "Una sílaba es una unidad de pronunciación."
            },
            {
                pregunta: "¿Qué palabra está mal escrita?",
                opciones: ["Zapato", "Silla", "Lunes", "Bolbora"],
                respuestaCorrecta: 3,
                explicacion: "'Bolbora' no existe, la forma correcta es 'bóveda' o similar."
            },
            {
                pregunta: "¿Qué tipo de texto es una receta de cocina?",
                opciones: ["Narrativo", "Descriptivo", "Instructivo", "Informativo"],
                respuestaCorrecta: 2,
                explicacion: "Una receta indica pasos, por eso es un texto instructivo."
            },
            {
                pregunta: "¿Qué se necesita para escribir un cuento?",
                opciones: [
                "Personajes, lugar y acciones",
                "Solo dibujos",
                "Nombres de países",
                "Palabras difíciles"
                ],
                respuestaCorrecta: 0,
                explicacion: "Un cuento necesita personajes, espacio y una historia."
            },
            {
                pregunta: "¿Qué tipo de palabra es 'rápidamente'?",
                opciones: ["Verbo", "Sustantivo", "Adjetivo", "Adverbio"],
                respuestaCorrecta: 3,
                explicacion: "'Rápidamente' es un adverbio, indica cómo se hace algo."
            },
            {
                pregunta: "¿Qué signo se usa al iniciar una pregunta?",
                opciones: ["¡", "¿", ".", ","],
                respuestaCorrecta: 1,
                explicacion: "El signo '¿' inicia una pregunta en español."
            },
            {
                pregunta: "¿Qué se hace antes de escribir un texto?",
                opciones: [
                "Dibujar",
                "Leer otro texto",
                "Planificar lo que se quiere decir",
                "Ver televisión"
                ],
                respuestaCorrecta: 2,
                explicacion: "Antes de escribir, se debe planificar el contenido."
            },
            {
                pregunta: "¿Cuál es un ejemplo de una palabra polisílaba?",
                opciones: ["Sol", "Mar", "Avión", "Mariposa"],
                respuestaCorrecta: 3,
                explicacion: "'Mariposa' tiene más de una sílaba, es polisílaba."
            },
            {
                pregunta: "¿Qué palabra tiene diptongo?",
                opciones: ["País", "Ciudad", "Sol", "Árbol"],
                respuestaCorrecta: 1,
                explicacion: "'Ciudad' tiene diptongo (ciu)."
            },
            {
                pregunta: "¿Qué es una fábula?",
                opciones: [
                "Una noticia",
                "Un cuento de terror",
                "Una historia con animales que da una enseñanza",
                "Una leyenda antigua"
                ],
                respuestaCorrecta: 2,
                explicacion: "La fábula es una narración con moraleja."
            },
            {
                pregunta: "¿Cuál es un texto informativo?",
                opciones: ["Poema", "Cuento", "Noticia", "Diálogo"],
                respuestaCorrecta: 2,
                explicacion: "Una noticia informa sobre un hecho."
            },
            {
                pregunta: "¿Qué palabra tiene tilde?",
                opciones: ["Camino", "Árbol", "Casa", "Niña"],
                respuestaCorrecta: 1,
                explicacion: "'Árbol' tiene tilde por ser palabra grave terminada en consonante no n/s."
            },
            {
                pregunta: "¿Cuál es la función de una descripción?",
                opciones: [
                "Decir qué pasa",
                "Decir dónde ocurrió",
                "Explicar cómo es algo",
                "Ordenar acciones"
                ],
                respuestaCorrecta: 2,
                explicacion: "Una descripción explica cómo es algo o alguien."
            },
            {
                pregunta: "¿Qué es un diálogo?",
                opciones: [
                "Un poema sin rima",
                "Una lista de palabras",
                "Conversación entre dos o más personas",
                "Una carta personal"
                ],
                respuestaCorrecta: 2,
                explicacion: "El diálogo es una conversación escrita o hablada."
            },
            {
                pregunta: "¿Qué elemento no puede faltar en una noticia?",
                opciones: ["Título", "Nombre del autor", "Moraleja", "Personajes"],
                respuestaCorrecta: 0,
                explicacion: "Toda noticia debe tener un título."
            },
            {
                pregunta: "¿Qué tipo de texto es un poema?",
                opciones: ["Instructivo", "Narrativo", "Lírico", "Informativo"],
                respuestaCorrecta: 2,
                explicacion: "El poema pertenece al tipo de texto lírico."
            },
            {
                pregunta: "¿Qué palabra lleva tilde?",
                opciones: ["Tambor", "Papá", "Sol", "Flor"],
                respuestaCorrecta: 1,
                explicacion: "'Papá' es una palabra aguda terminada en vocal, lleva tilde."
            },
            {
                pregunta: "¿Qué es una rima?",
                opciones: [
                "Una letra repetida",
                "Una oración larga",
                "Palabras que suenan parecido al final",
                "Un refrán"
                ],
                respuestaCorrecta: 2,
                explicacion: "La rima ocurre cuando dos palabras tienen sonidos finales similares."
            },
            {
                pregunta: "¿Qué tipo de texto es un aviso publicitario?",
                opciones: ["Literario", "Informativo", "Funcional", "Persuasivo"],
                respuestaCorrecta: 3,
                explicacion: "Busca convencer o motivar, por eso es persuasivo."
            },
            {
                pregunta: "¿Qué signo final lleva esta oración: '¡Qué divertido estuvo el juego!'?",
                opciones: ["¿", ".", "!", ","],
                respuestaCorrecta: 2,
                explicacion: "Es una exclamación, se cierra con '!'"
            }
        ],
        'Ciencia y Tecnología': [
            {
                pregunta: "¿Cuántos huesos tiene el cuerpo humano de un adulto?",
                opciones: ["150", "206", "300", "180"],
                respuestaCorrecta: 1,
                explicacion: "Un adulto tiene 206 huesos. Los bebés nacen con más huesos, pero algunos se unen al crecer."
            },
            {
                pregunta: "¿Qué necesitan las plantas para hacer la fotosíntesis?",
                opciones: ["Agua y tierra", "Luz solar, agua y aire", "Solo agua", "Solo luz solar"],
                respuestaCorrecta: 1,
                explicacion: "Las plantas necesitan luz solar, agua y dióxido de carbono del aire para hacer su comida."
            },
            {
                pregunta: "¿Cuál es el planeta más grande del sistema solar?",
                opciones: ["Saturno", "Tierra", "Júpiter", "Marte"],
                respuestaCorrecta: 2,
                explicacion: "Júpiter es el planeta más grande. Es tan grande que podrían caber más de 1,000 Tierras dentro de él."
            },
            {
                pregunta: "¿Qué animal es conocido por cambiar de color?",
                opciones: ["Camaleón", "Perro", "Gato", "Caballo"],
                respuestaCorrecta: 0,
                explicacion: "Los camaleones pueden cambiar de color para comunicarse y camuflarse con su entorno."
            },
            {
                pregunta: "¿Cuántos días tarda la Tierra en dar una vuelta completa al Sol?",
                opciones: ["300 días", "365 días", "400 días", "200 días"],
                respuestaCorrecta: 1,
                explicacion: "La Tierra tarda 365 días (un año) en completar una órbita alrededor del Sol."
            },
            {
                pregunta: "¿Qué sentido usamos para escuchar?",
                opciones: ["Vista", "Tacto", "Oído", "Olfato"],
                respuestaCorrecta: 2,
                explicacion: "Usamos el sentido del oído para escuchar sonidos. Los oídos están en nuestra cabeza."
            },
            {
                pregunta: "¿De qué color es la sangre?",
                opciones: ["Azul", "Verde", "Roja", "Amarilla"],
                respuestaCorrecta: 2,
                explicacion: "La sangre es de color rojo porque contiene glóbulos rojos que llevan oxígeno por el cuerpo."
            },
            {
                pregunta: "¿Qué máquina simple nos ayuda a subir cosas pesadas?",
                opciones: ["Palanca", "Rueda", "Tornillo", "Todas las anteriores"],
                respuestaCorrecta: 3,
                explicacion: "La palanca, la rueda y el tornillo son máquinas simples que nos ayudan a mover cosas pesadas más fácilmente."
            },
            {
                pregunta: "¿Cuál es el estado del agua cuando está muy fría?",
                opciones: ["Líquido", "Gas", "Sólido", "Plasma"],
                respuestaCorrecta: 2,
                explicacion: "Cuando el agua está muy fría se convierte en hielo, que es su estado sólido."
            },
            {
                pregunta: "¿Qué órgano bombea la sangre en nuestro cuerpo?",
                opciones: ["Pulmones", "Corazón", "Estómago", "Cerebro"],
                respuestaCorrecta: 1,
                explicacion: "El corazón es como una bomba que envía sangre a todo nuestro cuerpo."
            },
            {
                pregunta: "¿Cuántas patas tiene una araña?",
                opciones: ["6", "8", "10", "4"],
                respuestaCorrecta: 1,
                explicacion: "Las arañas tienen 8 patas. Esto las hace diferentes de los insectos, que tienen 6 patas."
            },
            {
                pregunta: "¿Qué gas respiramos del aire?",
                opciones: ["Dióxido de carbono", "Hidrógeno", "Oxígeno", "Nitrógeno"],
                respuestaCorrecta: 2,
                explicacion: "Respiramos oxígeno del aire. Nuestros pulmones toman el oxígeno que necesitamos para vivir."
            },
            {
                pregunta: "¿Cómo se llama el satélite natural de la Tierra?",
                opciones: ["Sol", "Marte", "Luna", "Venus"],
                respuestaCorrecta: 2,
                explicacion: "La Luna es el satélite natural de la Tierra. Gira alrededor de nuestro planeta."
            },
            {
                pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
                opciones: ["Hojas", "Flores", "Raíces", "Tallo"],
                respuestaCorrecta: 2,
                explicacion: "Las raíces están bajo la tierra y absorben agua y nutrientes del suelo para la planta."
            },
            {
                pregunta: "¿Cuál es el metal más común que se usa para hacer monedas?",
                opciones: ["Oro", "Plata", "Cobre", "Hierro"],
                respuestaCorrecta: 2,
                explicacion: "El cobre es muy usado para hacer monedas porque no se oxida fácilmente y es resistente."
            },
            {
                pregunta: "¿Qué aparato nos permite ver cosas muy pequeñas?",
                opciones: ["Telescopio", "Microscopio", "Lupa", "Binoculares"],
                respuestaCorrecta: 1,
                explicacion: "El microscopio hace que las cosas muy pequeñas se vean grandes para poder estudiarlas."
            },
            {
                pregunta: "¿A qué temperatura se congela el agua?",
                opciones: ["0 grados", "10 grados", "20 grados", "100 grados"],
                respuestaCorrecta: 0,
                explicacion: "El agua se congela y se convierte en hielo cuando la temperatura llega a 0 grados Celsius."
            },
            {
                pregunta: "¿Cuál es el animal más grande del mundo?",
                opciones: ["Elefante", "Tiburón", "Ballena azul", "Jirafa"],
                respuestaCorrecta: 2,
                explicacion: "La ballena azul es el animal más grande que existe en la Tierra, incluso más grande que los dinosaurios."
            },
            {
                pregunta: "¿Qué forma tiene nuestro planeta Tierra?",
                opciones: ["Cuadrada", "Plana", "Redonda", "Triangular"],
                respuestaCorrecta: 2,
                explicacion: "La Tierra tiene forma redonda, como una pelota, aunque no es perfectamente esférica."
            },
            {
                pregunta: "¿Cuántos dientes tiene un adulto?",
                opciones: ["20", "32", "28", "24"],
                respuestaCorrecta: 1,
                explicacion: "Un adulto tiene 32 dientes: 16 en la parte de arriba y 16 en la parte de abajo."
            },
            {
                pregunta: "¿Qué animal pone huevos y también da leche?",
                opciones: ["Gallina", "Vaca", "Ornitorrinco", "Pez"],
                respuestaCorrecta: 2,
                explicacion: "El ornitorrinco es un animal muy especial que pone huevos como las aves, pero da leche como los mamíferos."
            },
            {
                pregunta: "¿Cuál es la fuente de energía más importante para la Tierra?",
                opciones: ["Viento", "Agua", "Sol", "Fuego"],
                respuestaCorrecta: 2,
                explicacion: "El Sol nos da luz y calor. Sin el Sol, no habría vida en la Tierra."
            },
            {
                pregunta: "¿Qué órgano nos ayuda a pensar?",
                opciones: ["Corazón", "Cerebro", "Pulmones", "Estómago"],
                respuestaCorrecta: 1,
                explicacion: "El cerebro está en nuestra cabeza y nos ayuda a pensar, recordar y controlar nuestro cuerpo."
            },
            {
                pregunta: "¿Cuántas alas tiene una mariposa?",
                opciones: ["2", "4", "6", "8"],
                respuestaCorrecta: 1,
                explicacion: "Las mariposas tienen 4 alas: dos alas grandes arriba y dos alas más pequeñas abajo."
            },
            {
                pregunta: "¿Qué tipo de animal es la ballena?",
                opciones: ["Pez", "Reptil", "Mamífero", "Ave"],
                respuestaCorrecta: 2,
                explicacion: "Aunque vive en el agua, la ballena es un mamífero porque respira aire y alimenta a sus bebés con leche."
            },
            {
                pregunta: "¿Cómo se llama la capa de gases que rodea la Tierra?",
                opciones: ["Océano", "Atmósfera", "Superficie", "Núcleo"],
                respuestaCorrecta: 1,
                explicacion: "La atmósfera es la capa de aire que rodea la Tierra y contiene el oxígeno que respiramos."
            },
            {
                pregunta: "¿Qué parte del ojo nos permite ver los colores?",
                opciones: ["Pupila", "Iris", "Retina", "Párpado"],
                respuestaCorrecta: 2,
                explicacion: "La retina está en el fondo del ojo y tiene células especiales que detectan la luz y los colores."
            },
            {
                pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
                opciones: ["Brazo", "Fémur", "Costilla", "Columna"],
                respuestaCorrecta: 1,
                explicacion: "El fémur es el hueso de la pierna que va desde la cadera hasta la rodilla. Es el más largo del cuerpo."
            },
            {
                pregunta: "¿Qué instrumento mide la temperatura?",
                opciones: ["Regla", "Balanza", "Termómetro", "Reloj"],
                respuestaCorrecta: 2,
                explicacion: "El termómetro nos dice qué tan caliente o frío está algo, como cuando tenemos fiebre."
            },
            {
                pregunta: "¿De dónde obtienen energía los paneles solares?",
                opciones: ["Viento", "Agua", "Sol", "Tierra"],
                respuestaCorrecta: 2,
                explicacion: "Los paneles solares convierten la luz del Sol en electricidad que podemos usar en nuestras casas."
            }
        ], 
        'Personal Social': [
        {
            pregunta: "¿Qué rama del poder del Estado se encarga de hacer las leyes?",
            opciones: ["Ejecutivo", "Judicial", "Legislativo", "Municipal"],
            respuestaCorrecta: 2,
            explicacion: "El Poder Legislativo se encarga de crear leyes."
        },
        {
            pregunta: "¿Cuál es la capital del departamento de Arequipa?",
            opciones: ["Cusco", "Arequipa", "Puno", "Tacna"],
            respuestaCorrecta: 1,
            explicacion: "La capital del departamento de Arequipa es Arequipa."
        },
        {
            pregunta: "¿Qué función cumple el alcalde en una municipalidad?",
            opciones: ["Juzgar delitos", "Hacer leyes", "Gobernar la ciudad", "Representar al país"],
            respuestaCorrecta: 2,
            explicacion: "El alcalde es la autoridad que gobierna la ciudad o distrito."
        },
        {
            pregunta: "¿Qué cultura construyó Machu Picchu?",
            opciones: ["Nazca", "Wari", "Inca", "Moche"],
            respuestaCorrecta: 2,
            explicacion: "Los incas construyeron Machu Picchu."
        },
        {
            pregunta: "¿Qué son los derechos del niño?",
            opciones: ["Reglas escolares", "Beneficios solo para adultos", "Normas que protegen a los niños", "Obligaciones laborales"],
            respuestaCorrecta: 2,
            explicacion: "Los derechos del niño protegen su bienestar y desarrollo."
        },
        {
            pregunta: "¿Qué continente está al sur de Europa?",
            opciones: ["Asia", "América", "África", "Oceanía"],
            respuestaCorrecta: 2,
            explicacion: "África está al sur de Europa."
        },
        {
            pregunta: "¿Qué es una comunidad?",
            opciones: ["Un país", "Una ciudad", "Un grupo de personas que viven en un mismo lugar", "Una familia"],
            respuestaCorrecta: 2,
            explicacion: "Una comunidad es un grupo de personas que comparten un espacio y normas."
        },
        {
            pregunta: "¿Qué representa la bandera nacional del Perú?",
            opciones: ["El poder militar", "La historia de los incas", "La independencia y el amor por la patria", "La monarquía española"],
            respuestaCorrecta: 2,
            explicacion: "Nuestra bandera simboliza independencia y amor por la patria."
        },
        {
            pregunta: "¿Qué región natural tiene la mayor biodiversidad del Perú?",
            opciones: ["Sierra", "Costa", "Selva", "Altiplano"],
            respuestaCorrecta: 2,
            explicacion: "La selva peruana tiene la mayor biodiversidad."
        },
        {
            pregunta: "¿Cuál es la capital del Perú?",
            opciones: ["Arequipa", "Lima", "Cusco", "Trujillo"],
            respuestaCorrecta: 1,
            explicacion: "Lima es la capital del Perú."
        },
        // 20 preguntas más a continuación...
        {
            pregunta: "¿Qué es una autoridad?",
            opciones: ["Persona que da órdenes sin motivo", "Persona que se encarga de cuidar y organizar una comunidad", "Alguien que no trabaja", "Un ciudadano cualquiera"],
            respuestaCorrecta: 1,
            explicacion: "La autoridad es quien dirige y organiza una comunidad."
        },
        {
            pregunta: "¿Quién fue Túpac Amaru II?",
            opciones: ["Un virrey", "Un sacerdote", "Un líder indígena que luchó contra los abusos coloniales", "Un español"],
            respuestaCorrecta: 2,
            explicacion: "Túpac Amaru II lideró una rebelión indígena en el siglo XVIII."
        },
        {
            pregunta: "¿Qué son las normas de convivencia?",
            opciones: ["Reglas que ayudan a vivir en armonía", "Obligaciones que solo aplican en el colegio", "Leyes para castigar", "Reglas de un juego"],
            respuestaCorrecta: 0,
            explicacion: "Son reglas que permiten una buena convivencia entre personas."
        },
        {
            pregunta: "¿Qué es la democracia?",
            opciones: ["El poder de un rey", "Un sistema donde todos opinan y deciden", "Un sistema de castigos", "Una dictadura"],
            respuestaCorrecta: 1,
            explicacion: "La democracia es un sistema donde el pueblo participa en las decisiones."
        },
        {
            pregunta: "¿Qué es un derecho?",
            opciones: ["Una orden", "Una obligación", "Algo que puedo exigir y disfrutar", "Una ley impuesta"],
            respuestaCorrecta: 2,
            explicacion: "Un derecho es algo que me corresponde por ser persona."
        },
        {
            pregunta: "¿Qué idioma se habla mayoritariamente en el Perú?",
            opciones: ["Quechua", "Aymara", "Español", "Inglés"],
            respuestaCorrecta: 2,
            explicacion: "El idioma más hablado en Perú es el español."
        },
        {
            pregunta: "¿Por qué es importante respetar las costumbres de otros?",
            opciones: ["Porque son graciosas", "Para evitar peleas", "Porque todos tienen derecho a conservar su cultura", "Porque son extrañas"],
            respuestaCorrecta: 2,
            explicacion: "Respetar otras culturas es parte de una convivencia sana."
        },
        {
            pregunta: "¿Qué hacen las municipalidades?",
            opciones: ["Hacen leyes nacionales", "Organizan la ciudad, recogen basura y mejoran servicios", "Manejan las escuelas", "Protegen las fronteras"],
            respuestaCorrecta: 1,
            explicacion: "Las municipalidades se encargan del buen funcionamiento de la ciudad."
        },
        {
            pregunta: "¿Qué valores ayudan a vivir en paz?",
            opciones: ["Solidaridad y respeto", "Egoísmo y odio", "Mentiras y burlas", "Violencia y miedo"],
            respuestaCorrecta: 0,
            explicacion: "El respeto y la solidaridad fortalecen la convivencia pacífica."
        },
        {
            pregunta: "¿Qué es la identidad cultural?",
            opciones: ["Rechazo a lo extranjero", "Olvidar las raíces", "Costumbres, tradiciones y valores de una comunidad", "Solo la vestimenta"],
            respuestaCorrecta: 2,
            explicacion: "La identidad cultural incluye todo lo que caracteriza a una comunidad."
        }
        ], 
        'Arte y Cultura': [
            {   
                pregunta: "¿Qué danza afroperuana representa la resistencia cultural de los esclavos traídos al Perú?",
                opciones: ["Marinera", "Festejo", "Huayno", "Santiago"],
                respuestaCorrecta: 1,
                explicacion: "El festejo es una danza afroperuana que representa la cultura de los esclavos africanos en la costa del Perú."
            },
            {
                pregunta: "¿Qué representa la danza de los Caporales?",
                opciones: ["Un baile de los incas", "La autoridad del capataz en las haciendas", "Una fiesta de la selva", "Un baile ceremonial del altiplano"],
                respuestaCorrecta: 1,
                explicacion: "El Caporal representa al capataz que vigilaba a los esclavos, por eso su vestimenta y actitud fuerte."
            },
            {
                pregunta: "¿En qué departamento se originó la danza de los Caporales?",
                opciones: ["Cusco", "La Paz", "Puno", "Arequipa"],
                respuestaCorrecta: 1,
                explicacion: "La danza de los Caporales tiene origen en Bolivia, específicamente en La Paz."
            },
            {
                pregunta: "¿Cuál es una danza representativa de la cultura negra en el Perú?",
                opciones: ["Valicha", "Diablada", "Son de los diablos", "Shapis"],
                respuestaCorrecta: 2,
                explicacion: "El Son de los Diablos es una danza afroperuana con máscaras y pasos teatrales."
            },
            {
                pregunta: "¿Qué elementos se usan en el teatro escolar para representar personajes?",
                opciones: ["Cartulina y crayones", "Máscaras, vestuario y escenografía", "Tizas y borrador", "Solo un guion"],
                respuestaCorrecta: 1,
                explicacion: "El teatro usa máscaras, vestuario y escenografía para dar vida a los personajes."
            },
            {
                pregunta: "¿Cuál es el objetivo principal del teatro en la escuela?",
                opciones: ["Aprender matemáticas", "Practicar educación física", "Desarrollar expresión artística y corporal", "Cantar himnos"],
                respuestaCorrecta: 2,
                explicacion: "El teatro ayuda a expresar emociones, desarrollar el lenguaje y fortalecer la expresión corporal."
            },
            {
                pregunta: "¿Cuál de estos colores expresa energía y entusiasmo en una obra artística?",
                opciones: ["Azul", "Gris", "Rojo", "Negro"],
                respuestaCorrecta: 2,
                explicacion: "El color rojo transmite fuerza, energía y pasión."
            },
            {
                pregunta: "¿Qué tipo de danza es considerada un Patrimonio Cultural de la Nación en Perú?",
                opciones: ["La marinera", "El reggaetón", "La zamba", "La danza de las tijeras"],
                respuestaCorrecta: 3,
                explicacion: "La danza de las tijeras es reconocida como Patrimonio Cultural Inmaterial de la Nación y de la Humanidad."
            },
            {
                pregunta: "¿Qué instrumentos son comunes en las danzas afroperuanas?",
                opciones: ["Charango y quena", "Violín y piano", "Cajón y cajita", "Flauta dulce y arpa"],
                respuestaCorrecta: 2,
                explicacion: "El cajón y la cajita son instrumentos tradicionales afroperuanos."
            },
            {
                pregunta: "¿Qué baile peruano es conocido por su pañuelo blanco?",
                opciones: ["Sikuri", "Tondero", "Marinera", "Caporales"],
                respuestaCorrecta: 2,
                explicacion: "La marinera se baila con un pañuelo blanco y representa el cortejo amoroso."
            },
            {
                pregunta: "¿Cuál es un tipo de danza típica del pueblo afrodescendiente en Perú?",
                opciones: ["Marinera norteña", "Zamacueca", "Danza de los Pallas", "Negritos"],
                respuestaCorrecta: 3,
                explicacion: "La danza de los Negritos es una danza navideña con raíces afroperuanas."
            },
            {
                pregunta: "¿Qué caracteriza la danza de Caporales?",
                opciones: ["Pasos suaves y lentos", "Zapateo fuerte, trajes brillantes y acrobacias", "Giros con velos", "Movimientos solo con los brazos"],
                respuestaCorrecta: 1,
                explicacion: "El Caporal incluye saltos, zapateos intensos y trajes vistosos."
            },
            {
                pregunta: "¿Qué es el teatro escolar?",
                opciones: ["Una obra de televisión", "Una competencia deportiva", "Una representación escénica hecha por estudiantes", "Una danza tradicional"],
                respuestaCorrecta: 2,
                explicacion: "El teatro escolar permite a los estudiantes interpretar obras con personajes y escenografía."
            },
            {
                pregunta: "¿Qué colores suelen representar la alegría?",
                opciones: ["Negro y gris", "Rojo y morado", "Amarillo y naranja", "Verde y marrón"],
                respuestaCorrecta: 2,
                explicacion: "El amarillo y el naranja son colores cálidos que transmiten alegría y energía."
            },
            {
                pregunta: "¿Qué es un telón en el teatro?",
                opciones: ["Una comida típica", "El piso del escenario", "La cortina que se abre y cierra al empezar o terminar una obra", "Un instrumento musical"],
                respuestaCorrecta: 2,
                explicacion: "El telón marca el inicio y fin de una obra teatral."
            },
            {
                pregunta: "¿Qué expresión se usa para iniciar una obra teatral?",
                opciones: ["¡Arriba!", "¡A escena!", "¡Música maestro!", "¡Apaguen la luz!"],
                respuestaCorrecta: 1,
                explicacion: "¡A escena! es la expresión que da inicio a la presentación teatral."
            },
            {
                pregunta: "¿Qué danza afroperuana es muy enérgica y rápida?",
                opciones: ["Festejo", "Marinera", "Saya", "Carnavalito"],
                respuestaCorrecta: 0,
                explicacion: "El festejo se caracteriza por su ritmo rápido y sus movimientos alegres."
            },
            {
                pregunta: "¿Cuál de estos instrumentos se utiliza en los Caporales?",
                opciones: ["Cajón", "Trompeta", "Charango", "Zampoña"],
                respuestaCorrecta: 1,
                explicacion: "Las bandas de Caporales usan trompetas para marcar el ritmo en los desfiles."
            },
            {
                pregunta: "¿Qué representan las danzas negritudes o negroide en Perú?",
                opciones: ["La tradición andina", "La herencia española", "La cultura africana traída por los esclavos", "La cultura asiática"],
                respuestaCorrecta: 2,
                explicacion: "Estas danzas reflejan la identidad cultural africana del Perú costero."
            },
            {
                pregunta: "¿Qué personaje aparece a veces en la danza de los Caporales con un látigo?",
                opciones: ["El ángel", "El diablo", "El capataz", "El abuelo"],
                respuestaCorrecta: 2,
                explicacion: "El capataz aparece como figura dominante con látigo en la danza."
            },
            {
                pregunta: "¿Qué baile representa el cortejo entre un hombre y una mujer con movimientos delicados?",
                opciones: ["Festejo", "Saya", "Caporales", "Marinera"],
                respuestaCorrecta: 3,
                explicacion: "La marinera muestra el galanteo amoroso entre los bailarines con elegancia."
            }
        ],
    },
    5:{
        'Inglés': [
        {
            pregunta: "¿Cómo se dice 'gato' en inglés?",
            opciones: ["Dog", "Cat", "Bird", "Fish"],
            respuestaCorrecta: 1,
            explicacion: "Cat significa gato en inglés."
            },
            {
            pregunta: "¿Cuál es el plural de 'book'?",
            opciones: ["Book", "Books", "Bookes", "Bookies"],
            respuestaCorrecta: 1,
            explicacion: "El plural de book es books. Se agrega 's' al final."
            },
            {
            pregunta: "¿Cómo se pregunta '¿Cuántos años tienes?' en inglés?",
            opciones: ["How old are you?", "What is your name?", "Where are you?", "How are you?"],
            respuestaCorrecta: 0,
            explicacion: "How old are you? significa ¿Cuántos años tienes?"
            },
            {
            pregunta: "¿Cuál es el color 'azul' en inglés?",
            opciones: ["Red", "Green", "Blue", "Yellow"],
            respuestaCorrecta: 2,
            explicacion: "Blue significa azul en inglés."
            },
            {
            pregunta: "¿Cómo se dice 'mi mamá' en inglés?",
            opciones: ["My father", "My mother", "My sister", "My brother"],
            respuestaCorrecta: 1,
            explicacion: "My mother significa mi mamá en inglés."
            },
            {
            pregunta: "¿Qué significa 'apple' en español?",
            opciones: ["Naranja", "Plátano", "Manzana", "Uva"],
            respuestaCorrecta: 2,
            explicacion: "Apple significa manzana en español."
            },
            {
            pregunta: "¿Cuál es la forma correcta de 'I am'?",
            opciones: ["I is", "I are", "I am", "I be"],
            respuestaCorrecta: 2,
            explicacion: "I am es la forma correcta. Significa 'yo soy' o 'yo estoy'."
            },
            {
            pregunta: "¿Cómo se dice el número '7' en inglés?",
            opciones: ["Six", "Seven", "Eight", "Nine"],
            respuestaCorrecta: 1,
            explicacion: "Seven significa siete en inglés."
            },
            {
            pregunta: "¿Qué día de la semana es 'Monday'?",
            opciones: ["Domingo", "Lunes", "Martes", "Miércoles"],
            respuestaCorrecta: 1,
            explicacion: "Monday significa lunes en español."
            },
            {
            pregunta: "¿Cómo se dice 'grande' en inglés?",
            opciones: ["Small", "Big", "Tall", "Short"],
            respuestaCorrecta: 1,
            explicacion: "Big significa grande en inglés."
            },
            {
            pregunta: "¿Cuál es el artículo correcto para 'elephant'?",
            opciones: ["A elephant", "An elephant", "The elephants", "Elephant"],
            respuestaCorrecta: 1,
            explicacion: "Se usa 'an' antes de palabras que empiezan con vocal: an elephant."
            },
            {
            pregunta: "¿Qué significa 'water' en español?",
            opciones: ["Leche", "Jugo", "Agua", "Café"],
            respuestaCorrecta: 2,
            explicacion: "Water significa agua en español."
            },
            {
            pregunta: "¿Cómo se dice 'escuela' en inglés?",
            opciones: ["House", "School", "Park", "Store"],
            respuestaCorrecta: 1,
            explicacion: "School significa escuela en inglés."
            },
            {
            pregunta: "¿Cuál es la forma negativa de 'I like apples'?",
            opciones: ["I no like apples", "I don't like apples", "I not like apples", "I doesn't like apples"],
            respuestaCorrecta: 1,
            explicacion: "La forma negativa es 'I don't like apples' (No me gustan las manzanas)."
            },
            {
            pregunta: "¿Qué significa 'happy' en español?",
            opciones: ["Triste", "Enojado", "Feliz", "Cansado"],
            respuestaCorrecta: 2,
            explicacion: "Happy significa feliz en español."
            },
            {
            pregunta: "¿Cómo se pregunta '¿Cómo estás?' en inglés?",
            opciones: ["How are you?", "What are you?", "Where are you?", "Who are you?"],
            respuestaCorrecta: 0,
            explicacion: "How are you? significa ¿Cómo estás?"
            },
            {
            pregunta: "¿Cuál es el plural de 'child'?",
            opciones: ["Childs", "Children", "Childes", "Child"],
            respuestaCorrecta: 1,
            explicacion: "El plural irregular de child es children."
            },
            {
            pregunta: "¿Qué significa 'beautiful' en español?",
            opciones: ["Feo", "Hermoso", "Pequeño", "Rápido"],
            respuestaCorrecta: 1,
            explicacion: "Beautiful significa hermoso o bonito en español."
            },
            {
            pregunta: "¿Cómo se dice 'perro' en inglés?",
            opciones: ["Cat", "Dog", "Bird", "Mouse"],
            respuestaCorrecta: 1,
            explicacion: "Dog significa perro en inglés."
            },
            {
            pregunta: "¿Cuál es la respuesta correcta a 'What's your name?'",
            opciones: ["I'm fine", "I'm 10 years old", "My name is Ana", "I live in Lima"],
            respuestaCorrecta: 2,
            explicacion: "What's your name? pregunta tu nombre, se responde 'My name is...'."
            },
            {
            pregunta: "¿Qué significa 'teacher' en español?",
            opciones: ["Estudiante", "Maestro", "Director", "Padre"],
            respuestaCorrecta: 1,
            explicacion: "Teacher significa maestro o profesor en español."
            },
            {
            pregunta: "¿Cómo se dice 'rojo' en inglés?",
            opciones: ["Blue", "Green", "Red", "Black"],
            respuestaCorrecta: 2,
            explicacion: "Red significa rojo en inglés."
            },
            {
            pregunta: "¿Cuál es la forma correcta de 'She have a cat'?",
            opciones: ["She have a cat", "She has a cat", "She are a cat", "She is a cat"],
            respuestaCorrecta: 1,
            explicacion: "Con he/she/it se usa 'has': She has a cat."
            },
            {
            pregunta: "¿Qué día es 'Sunday' en español?",
            opciones: ["Sábado", "Domingo", "Lunes", "Viernes"],
            respuestaCorrecta: 1,
            explicacion: "Sunday significa domingo en español."
            },
            {
            pregunta: "¿Cómo se dice 'comer' en inglés?",
            opciones: ["Drink", "Eat", "Sleep", "Run"],
            respuestaCorrecta: 1,
            explicacion: "Eat significa comer en inglés."
            },
            {
            pregunta: "¿Qué significa 'house' en español?",
            opciones: ["Escuela", "Casa", "Parque", "Tienda"],
            respuestaCorrecta: 1,
            explicacion: "House significa casa en español."
            },
            {
            pregunta: "¿Cuál es el número 'ten' en español?",
            opciones: ["Nueve", "Diez", "Once", "Ocho"],
            respuestaCorrecta: 1,
            explicacion: "Ten significa diez en español."
            },
            {
            pregunta: "¿Cómo se dice 'buenas noches' en inglés?",
            opciones: ["Good morning", "Good afternoon", "Good night", "Good evening"],
            respuestaCorrecta: 2,
            explicacion: "Good night significa buenas noches en inglés."
            },
            {
            pregunta: "¿Qué significa 'run' en español?",
            opciones: ["Caminar", "Saltar", "Correr", "Nadar"],
            respuestaCorrecta: 2,
            explicacion: "Run significa correr en español."
            },
            {
            pregunta: "¿Cuál es la forma correcta para preguntar la edad?",
            opciones: ["How years are you?", "What age are you?", "How old are you?", "How many you are?"],
            respuestaCorrecta: 2,
            explicacion: "How old are you? es la forma correcta de preguntar la edad."
            }
        ],
        'Matemática': [
            {
                pregunta: "Si una caja tiene 24 lápices y se compran 5 cajas, ¿cuántos lápices hay en total?",
                opciones: ["120", "100", "96", "110"],
                respuestaCorrecta: 0,
                explicacion: "24 × 5 = 120 lápices en total."
            },
            {
                pregunta: "Un terreno rectangular mide 25 m de largo y 12 m de ancho. ¿Cuál es su área?",
                opciones: ["300 m²", "210 m²", "350 m²", "240 m²"],
                respuestaCorrecta: 0,
                explicacion: "Área = largo × ancho = 25 × 12 = 300 m²."
            },
            {
                pregunta: "¿Cuál es el número primo más cercano a 100?",
                opciones: ["97", "99", "101", "103"],
                respuestaCorrecta: 2,
                explicacion: "101 es el número primo más cercano a 100."
            },
            {
                pregunta: "Una persona recorre 3 km cada día durante una semana. ¿Cuántos kilómetros recorre en total?",
                opciones: ["21 km", "18 km", "24 km", "30 km"],
                respuestaCorrecta: 0,
                explicacion: "3 km × 7 días = 21 km recorridos."
            },
            {
                pregunta: "¿Cuál es el valor posicional del número 7 en 7,482?",
                opciones: ["Unidades", "Centenas", "Mil", "Decenas"],
                respuestaCorrecta: 2,
                explicacion: "El 7 está en la posición de mil (7000)."
            },
            {
                pregunta: "¿Cuántos segundos hay en 1 hora?",
                opciones: ["3,600", "1,200", "60", "600"],
                respuestaCorrecta: 0,
                explicacion: "1 hora = 60 min × 60 seg = 3,600 segundos."
            },
            {
                pregunta: "Si tengo S/.50 y gasto S/.18.50, ¿cuánto me queda?",
                opciones: ["S/.31.50", "S/.32.50", "S/.30.00", "S/.29.50"],
                respuestaCorrecta: 0,
                explicacion: "50 - 18.50 = S/.31.50."
            },
            {
                pregunta: "¿Cuánto es 1/2 + 3/4?",
                opciones: ["1 1/4", "1", "1/4", "2"],
                respuestaCorrecta: 0,
                explicacion: "1/2 = 2/4, 2/4 + 3/4 = 5/4 = 1 1/4."
            },
            {
                pregunta: "Convierte 2.5 kg a gramos.",
                opciones: ["250 g", "2,500 g", "25 g", "250,000 g"],
                respuestaCorrecta: 1,
                explicacion: "1 kg = 1,000 g → 2.5 kg = 2,500 g."
            },
            {
                pregunta: "¿Qué número falta en la secuencia: 2, 4, 8, __, 32?",
                opciones: ["12", "14", "16", "20"],
                respuestaCorrecta: 2,
                explicacion: "La secuencia duplica cada vez: 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16."
            },
            {
                pregunta: "Resuelve: (3 × 5) + (4 × 2)",
                opciones: ["15", "23", "22", "19"],
                respuestaCorrecta: 2,
                explicacion: "15 + 8 = 23."
            },
            {
                pregunta: "Si un litro de leche cuesta S/.3.80, ¿cuánto costarán 4 litros?",
                opciones: ["S/.15.20", "S/.14.80", "S/.12.40", "S/.16.00"],
                respuestaCorrecta: 0,
                explicacion: "3.80 × 4 = 15.20 soles."
            },
            {
                pregunta: "¿Cuál es el perímetro de un cuadrado de lado 9 cm?",
                opciones: ["36 cm", "18 cm", "27 cm", "45 cm"],
                respuestaCorrecta: 0,
                explicacion: "Perímetro = 4 × lado = 4 × 9 = 36 cm."
            },
            {
                pregunta: "Resuelve: 3/5 de 100",
                opciones: ["40", "50", "60", "70"],
                respuestaCorrecta: 2,
                explicacion: "100 × 3/5 = 60."
            },
            {
                pregunta: "Si a un número se le suma 15 y da 45, ¿cuál es el número?",
                opciones: ["30", "35", "25", "20"],
                respuestaCorrecta: 0,
                explicacion: "x + 15 = 45 → x = 30."
            },
            {
                pregunta: "Un autobús recorre 90 km en 2 horas. ¿Cuál es su velocidad media?",
                opciones: ["45 km/h", "30 km/h", "60 km/h", "90 km/h"],
                respuestaCorrecta: 0,
                explicacion: "Velocidad = distancia / tiempo = 90 / 2 = 45 km/h."
            },
            {
                pregunta: "Resuelve: (6 + 2) × (10 - 3)",
                opciones: ["56", "64", "48", "42"],
                respuestaCorrecta: 3,
                explicacion: "(6 + 2) = 8, (10 - 3) = 7, 8 × 7 = 56."
            },
            {
                pregunta: "¿Cuál es el número que multiplicado por 8 da 96?",
                opciones: ["10", "12", "11", "9"],
                respuestaCorrecta: 1,
                explicacion: "8 × 12 = 96."
            },
            {
                pregunta: "¿Cuántos lados tiene un octágono?",
                opciones: ["6", "7", "8", "9"],
                respuestaCorrecta: 2,
                explicacion: "Un octágono tiene 8 lados."
            },
            {
                pregunta: "Convierte 2,500 ml a litros.",
                opciones: ["2.5 L", "25 L", "0.25 L", "250 L"],
                respuestaCorrecta: 0,
                explicacion: "1,000 ml = 1 L → 2,500 ml = 2.5 L."
            },
            {
                pregunta: "Resuelve: 100 ÷ (5 × 2)",
                opciones: ["10", "20", "5", "15"],
                respuestaCorrecta: 0,
                explicacion: "5 × 2 = 10 → 100 ÷ 10 = 10."
            },
            {
                pregunta: "Encuentra el valor de x: x/4 = 12",
                opciones: ["36", "48", "44", "24"],
                respuestaCorrecta: 1,
                explicacion: "x = 12 × 4 = 48."
            },
            {
                pregunta: "¿Qué número es el doble de 37?",
                opciones: ["72", "74", "76", "80"],
                respuestaCorrecta: 1,
                explicacion: "37 × 2 = 74."
            },
            {
                pregunta: "¿Qué figura tiene 6 caras, 12 aristas y 8 vértices?",
                opciones: ["Cilindro", "Esfera", "Cubo", "Prisma rectangular"],
                respuestaCorrecta: 3,
                explicacion: "El prisma rectangular tiene esas características."
            },
            {
                pregunta: "Si tengo 3 billetes de S/.20 y 2 monedas de S/.5, ¿cuánto dinero tengo?",
                opciones: ["S/.70", "S/.65", "S/.60", "S/.55"],
                respuestaCorrecta: 0,
                explicacion: "3×20 + 2×5 = 60 + 10 = S/.70."
            },
            {
                pregunta: "¿Cuánto es 15% de 200?",
                opciones: ["25", "30", "20", "15"],
                respuestaCorrecta: 1,
                explicacion: "15% × 200 = 0.15 × 200 = 30."
            },
            {
                pregunta: "¿Cuál es la media de los siguientes números: 10, 20, 30, 40, 50?",
                opciones: ["25", "30", "35", "40"],
                respuestaCorrecta: 1,
                explicacion: "(10+20+30+40+50)/5 = 150/5 = 30."
            },
            {
                pregunta: "¿Cuántos minutos hay en 2 horas y media?",
                opciones: ["120", "90", "150", "180"],
                respuestaCorrecta: 2,
                explicacion: "2.5 horas = 150 minutos."
            },
            {
                pregunta: "El triple de un número es 81. ¿Cuál es el número?",
                opciones: ["27", "21", "24", "30"],
                respuestaCorrecta: 0,
                explicacion: "81 ÷ 3 = 27."
            },
            {
                pregunta: "Una piscina se llena con 80 litros por hora. ¿Cuántos litros se habrán llenado en 6 horas?",
                opciones: ["480", "500", "420", "450"],
                respuestaCorrecta: 0,
                explicacion: "80 × 6 = 480 litros."
            }
        ],
        'Comunicación': [
            {
                pregunta: "¿Cuál es el propósito de un texto instructivo?",
                opciones: ["Contar una historia", "Dar una opinión", "Dar instrucciones", "Describir un lugar"],
                respuestaCorrecta: 2,
                explicacion: "Un texto instructivo explica los pasos a seguir para hacer algo."
            },
            {
                pregunta: "¿Qué tipo de texto es una fábula?",
                opciones: ["Narrativo", "Expositivo", "Argumentativo", "Descriptivo"],
                respuestaCorrecta: 0,
                explicacion: "La fábula es un texto narrativo que deja una enseñanza."
            },
            {
                pregunta: "¿Qué es una moraleja?",
                opciones: ["Una frase divertida", "Una crítica", "Una enseñanza", "Un poema"],
                respuestaCorrecta: 2,
                explicacion: "La moraleja es la enseñanza final que deja una fábula."
            },
            {
                pregunta: "¿Cuál es el significado de la palabra 'sinónimo'?",
                opciones: ["Palabra con significado opuesto", "Palabra con igual significado", "Palabra inventada", "Palabra extranjera"],
                respuestaCorrecta: 1,
                explicacion: "Un sinónimo es una palabra con significado similar a otra."
            },
            {
                pregunta: "¿Qué es un resumen?",
                opciones: ["Una opinión", "Una narración", "Una idea general", "Una síntesis de lo más importante"],
                respuestaCorrecta: 3,
                explicacion: "Un resumen reúne las ideas principales de un texto."
            },
            {
                pregunta: "¿Qué es una oración compuesta?",
                opciones: ["Una oración con una sola idea", "Una oración con dos o más ideas", "Una oración interrogativa", "Una oración exclamativa"],
                respuestaCorrecta: 1,
                explicacion: "Las oraciones compuestas contienen más de una idea principal."
            },
            {
                pregunta: "¿Cuál es el sujeto en la oración: 'El perro duerme tranquilo'?",
                opciones: ["duerme", "tranquilo", "El perro", "la oración"],
                respuestaCorrecta: 2,
                explicacion: "El sujeto es quien realiza la acción, en este caso 'el perro'."
            },
            {
                pregunta: "¿Qué es un texto descriptivo?",
                opciones: ["Un texto que da órdenes", "Un texto que argumenta", "Un texto que informa", "Un texto que detalla cómo es algo"],
                respuestaCorrecta: 3,
                explicacion: "El texto descriptivo muestra características de personas, lugares o cosas."
            },
            {
                pregunta: "¿Qué signos se usan para una pregunta?",
                opciones: ["¡!", "()", "¿?", "{}"],
                respuestaCorrecta: 2,
                explicacion: "Los signos de interrogación se usan para formular preguntas."
            },
            {
                pregunta: "¿Cuál es la función de un adjetivo?",
                opciones: ["Nombrar una acción", "Acompañar al verbo", "Describir al sustantivo", "Reemplazar al sujeto"],
                respuestaCorrecta: 2,
                explicacion: "El adjetivo califica o describe a un sustantivo."
            },
            {
                pregunta: "¿Qué es un sustantivo abstracto?",
                opciones: ["Un objeto físico", "Una persona", "Un lugar", "Una idea o sentimiento"],
                respuestaCorrecta: 3,
                explicacion: "Los sustantivos abstractos nombran ideas, emociones o cualidades."
            },
            {
                pregunta: "¿Cuál de las siguientes palabras es un antónimo de 'alegría'?",
                opciones: ["Tristeza", "Felicidad", "Diversión", "Risa"],
                respuestaCorrecta: 0,
                explicacion: "'Tristeza' es lo opuesto a 'alegría'."
            },
            {
                pregunta: "¿Qué son las palabras homófonas?",
                opciones: ["Palabras que suenan igual y se escriben igual", "Palabras que suenan igual pero se escriben distinto", "Palabras diferentes con igual escritura", "Palabras extranjeras"],
                respuestaCorrecta: 1,
                explicacion: "Palabras que suenan igual pero se escriben distinto y tienen diferente significado."
            },
            {
                pregunta: "¿Qué es una biografía?",
                opciones: ["Una historia inventada", "Un texto de opinión", "Un resumen", "Un texto sobre la vida de una persona"],
                respuestaCorrecta: 3,
                explicacion: "La biografía narra la vida de alguien real."
            },
            {
                pregunta: "¿Cuál es el verbo en la oración: 'María escribe una carta'?",
                opciones: ["María", "una", "escribe", "carta"],
                respuestaCorrecta: 2,
                explicacion: "El verbo indica la acción que se realiza."
            },
            {
                pregunta: "¿Qué elemento no puede faltar en una narración?",
                opciones: ["Un chiste", "Un título", "Un personaje", "Un resumen"],
                respuestaCorrecta: 2,
                explicacion: "Toda narración necesita personajes."
            },
            {
                pregunta: "¿Cuál de estas palabras es un adverbio?",
                opciones: ["Corrió", "Grande", "Alegre", "Rápidamente"],
                respuestaCorrecta: 3,
                explicacion: "'Rápidamente' indica cómo se hace la acción."
            },
            {
                pregunta: "¿Qué es un texto argumentativo?",
                opciones: ["Un texto que narra", "Un texto que da razones para convencer", "Un texto de instrucciones", "Un texto sin estructura"],
                respuestaCorrecta: 1,
                explicacion: "El texto argumentativo busca convencer con razones."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'valiente'?",
                opciones: ["Temeroso", "Fuerte", "Rápido", "Feliz"],
                respuestaCorrecta: 0,
                explicacion: "El opuesto de valiente es temeroso."
            },
            {
                pregunta: "¿Qué tipo de texto es un cuento?",
                opciones: ["Argumentativo", "Narrativo", "Expositivo", "Publicitario"],
                respuestaCorrecta: 1,
                explicacion: "El cuento es un texto narrativo con personajes y trama."
            },
            {
                pregunta: "¿Qué signo se usa para exclamaciones?",
                opciones: ["¿?", "()", "¡!", "--"],
                respuestaCorrecta: 2,
                explicacion: "Se usan los signos de exclamación."
            },
            {
                pregunta: "¿Qué palabra es un pronombre?",
                opciones: ["Pedro", "Rápido", "Ellos", "Casa"],
                respuestaCorrecta: 2,
                explicacion: "Los pronombres reemplazan al sustantivo, como 'ellos'."
            },
            {
                pregunta: "¿Qué indica el tiempo verbal en una oración?",
                opciones: ["El lugar", "El número de palabras", "Cuándo ocurre la acción", "El tipo de sujeto"],
                respuestaCorrecta: 2,
                explicacion: "El tiempo verbal nos dice si la acción es presente, pasada o futura."
            },
            {
                pregunta: "¿Cuál es el plural de 'pez'?",
                opciones: ["Peces", "Peze", "Pezes", "Pez"],
                respuestaCorrecta: 0,
                explicacion: "La forma plural correcta es 'peces'."
            },
            {
                pregunta: "¿Qué se necesita para comprender un texto leído?",
                opciones: ["Leer muy rápido", "Repetir palabras", "Identificar ideas principales", "Escribir frases"],
                respuestaCorrecta: 2,
                explicacion: "Comprender un texto implica entender sus ideas centrales."
            },
            {
                pregunta: "¿Cuál es la finalidad de un texto publicitario?",
                opciones: ["Informar", "Divertir", "Enseñar", "Convencer o vender"],
                respuestaCorrecta: 3,
                explicacion: "El texto publicitario busca persuadir al lector."
            },
            {
                pregunta: "¿Qué tipo de texto es un poema?",
                opciones: ["Expositivo", "Narrativo", "Lírico", "Instructivo"],
                respuestaCorrecta: 2,
                explicacion: "El poema es un texto lírico que expresa sentimientos."
            },
            {
                pregunta: "¿Qué representa el punto y seguido?",
                opciones: ["Final del texto", "Separación de oraciones dentro del mismo párrafo", "Inicio de párrafo", "Enumeración"],
                respuestaCorrecta: 1,
                explicacion: "Se usa para separar ideas dentro del mismo párrafo."
            },
            {
                pregunta: "¿Qué es una metáfora?",
                opciones: ["Una comparación directa", "Una rima", "Un resumen", "Un sustantivo"],
                respuestaCorrecta: 0,
                explicacion: "La metáfora compara dos cosas sin usar 'como'."
            },
            {
                pregunta: "¿Qué parte de la oración responde a '¿Qué hace el sujeto?'",
                opciones: ["Predicado", "Adjetivo", "Pronombre", "Núcleo del sujeto"],
                respuestaCorrecta: 0,
                explicacion: "El predicado indica la acción del sujeto."
            }
        ],
        'Ciencia y Tecnología': [
            {
                pregunta: "¿Qué instrumento se usa para medir la temperatura?",
                opciones: ["Termómetro", "Regla", "Barómetro", "Balanza"],
                respuestaCorrecta: 0,
                explicacion: "El termómetro mide la temperatura de un cuerpo o ambiente."
            },
            {
                pregunta: "¿Qué es un ser vivo?",
                opciones: ["Un organismo que crece, se reproduce y muere", "Una roca", "El agua", "El fuego"],
                respuestaCorrecta: 0,
                explicacion: "Los seres vivos nacen, crecen, se reproducen y mueren."
            },
            {
                pregunta: "¿Qué planeta tiene anillos visibles desde la Tierra?",
                opciones: ["Saturno", "Júpiter", "Venus", "Marte"],
                respuestaCorrecta: 0,
                explicacion: "Saturno es conocido por sus anillos formados por hielo y polvo."
            },
            {
                pregunta: "¿Qué es una mezcla?",
                opciones: ["Una combinación de dos o más sustancias", "Una sustancia pura", "Un elemento químico", "Un metal"],
                respuestaCorrecta: 0,
                explicacion: "Las mezclas están formadas por varios componentes unidos sin reacción química."
            },
            {
                pregunta: "¿Qué órgano filtra la sangre en el cuerpo humano?",
                opciones: ["Riñón", "Corazón", "Pulmón", "Hígado"],
                respuestaCorrecta: 0,
                explicacion: "Los riñones eliminan desechos filtrando la sangre."
            },
            {
                pregunta: "¿Qué parte de la planta absorbe el agua del suelo?",
                opciones: ["Raíz", "Tallo", "Hoja", "Flor"],
                respuestaCorrecta: 0,
                explicacion: "Las raíces absorben el agua y los minerales del suelo."
            },
            {
                pregunta: "¿Qué tipo de energía produce una central hidroeléctrica?",
                opciones: ["Energía eléctrica", "Energía química", "Energía térmica", "Energía nuclear"],
                respuestaCorrecta: 0,
                explicacion: "La energía hidroeléctrica convierte el movimiento del agua en electricidad."
            },
            {
                pregunta: "¿Qué tipo de animal es la ballena?",
                opciones: ["Mamífero", "Reptil", "Pez", "Anfibio"],
                respuestaCorrecta: 0,
                explicacion: "Aunque vive en el agua, la ballena es un mamífero porque respira aire y amamanta."
            },
            {
                pregunta: "¿Qué órgano se encarga de bombear sangre en el cuerpo?",
                opciones: ["Corazón", "Pulmón", "Estómago", "Cerebro"],
                respuestaCorrecta: 0,
                explicacion: "El corazón bombea sangre a través de todo el cuerpo."
            },
            {
                pregunta: "¿Cómo se llama el proceso por el que el agua pasa de gas a líquido?",
                opciones: ["Condensación", "Evaporación", "Sublimación", "Fusión"],
                respuestaCorrecta: 0,
                explicacion: "La condensación es el paso de gas (vapor) a estado líquido."
            },
            {
                pregunta: "¿Qué es la materia?",
                opciones: ["Todo lo que tiene masa y ocupa espacio", "Solo el aire", "Solo el agua", "Una idea"],
                respuestaCorrecta: 0,
                explicacion: "Todo lo que podemos ver o tocar es materia."
            },
            {
                pregunta: "¿Qué es una hipótesis en ciencia?",
                opciones: ["Una suposición que se puede comprobar", "Un experimento", "Un resultado", "Un dato"],
                respuestaCorrecta: 0,
                explicacion: "La hipótesis es una idea que se intenta comprobar con un experimento."
            },
            {
                pregunta: "¿Qué parte del cuerpo controla todos los movimientos?",
                opciones: ["El cerebro", "Los pulmones", "El estómago", "El hígado"],
                respuestaCorrecta: 0,
                explicacion: "El cerebro envía señales para controlar el cuerpo."
            },
            {
                pregunta: "¿Qué animales ponen huevos?",
                opciones: ["Ovíparos", "Vivíparos", "Herbívoros", "Mamíferos"],
                respuestaCorrecta: 0,
                explicacion: "Los ovíparos son los que nacen de huevos, como aves y reptiles."
            },
            {
                pregunta: "¿Qué significa biodegradable?",
                opciones: ["Que se descompone de forma natural", "Que se quema fácilmente", "Que es muy fuerte", "Que es tóxico"],
                respuestaCorrecta: 0,
                explicacion: "Los materiales biodegradables se descomponen con el tiempo sin contaminar."
            },
            {
                pregunta: "¿Qué efecto produce la gravedad?",
                opciones: ["Atrae los objetos hacia el centro de la Tierra", "Empuja los objetos hacia arriba", "Hace que floten", "Cambia el color de los cuerpos"],
                respuestaCorrecta: 0,
                explicacion: "La gravedad es la fuerza que atrae todo hacia el suelo."
            },
            {
                pregunta: "¿Qué es el ADN?",
                opciones: ["El material que contiene la información genética", "Una enfermedad", "Una vitamina", "Un metal"],
                respuestaCorrecta: 0,
                explicacion: "El ADN contiene las instrucciones para el desarrollo de todos los seres vivos."
            },
            {
                pregunta: "¿Qué fenómeno permite que veamos el arcoíris?",
                opciones: ["La refracción de la luz", "La condensación", "La gravedad", "El sonido"],
                respuestaCorrecta: 0,
                explicacion: "La luz del sol se refracta en las gotas de lluvia formando el arcoíris."
            },
            {
                pregunta: "¿Qué aparato sirve para observar objetos muy pequeños?",
                opciones: ["Microscopio", "Telescopio", "Binoculares", "Cámara"],
                respuestaCorrecta: 0,
                explicacion: "El microscopio amplía objetos que no se pueden ver a simple vista."
            },
            {
                pregunta: "¿Qué gas exhalan los humanos al respirar?",
                opciones: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"],
                respuestaCorrecta: 0,
                explicacion: "Al exhalar, eliminamos dióxido de carbono, un gas de desecho."
            },
            {
                pregunta: "¿Qué es el reciclaje?",
                opciones: ["Reutilizar materiales para crear nuevos productos", "Tirar basura", "Quemar residuos", "Lavar objetos"],
                respuestaCorrecta: 0,
                explicacion: "Reciclar ayuda a reducir la contaminación y el uso de recursos naturales."
            }
        ], 
        'Personal Social': [
            {
                pregunta: "¿Cuál es la capital del Perú?",
                opciones: ["Arequipa", "Cusco", "Lima", "Trujillo"],
                respuestaCorrecta: 2,
                explicacion: "Lima es la capital y la ciudad más grande del Perú."
            },
            {
                pregunta: "¿En qué continente se encuentra el Perú?",
                opciones: ["Asia", "Europa", "América del Sur", "África"],
                respuestaCorrecta: 2,
                explicacion: "El Perú está ubicado en América del Sur, en la costa occidental."
            },
            {
                pregunta: "¿Cómo se llamaba la gran civilización que construyó Machu Picchu?",
                opciones: ["Aztecas", "Mayas", "Incas", "Mochicas"],
                respuestaCorrecta: 2,
                explicacion: "Los Incas construyeron Machu Picchu y tuvieron un gran imperio en los Andes."
            },
            {
                pregunta: "¿Cuál es el río más largo del mundo?",
                opciones: ["Río Nilo", "Río Amazonas", "Río Yangtsé", "Río Mississippi"],
                respuestaCorrecta: 1,
                explicacion: "El río Amazonas es el más largo del mundo y pasa por varios países sudamericanos."
            },
            {
                pregunta: "¿Quién fue el primer presidente del Perú?",
                opciones: ["Simón Bolívar", "José de San Martín", "José de la Riva-Agüero", "Ramón Castilla"],
                respuestaCorrecta: 2,
                explicacion: "José de la Riva-Agüero fue el primer presidente del Perú en 1823."
            },
            {
                pregunta: "¿Cuántos departamentos tiene el Perú?",
                opciones: ["23", "24", "25", "26"],
                respuestaCorrecta: 1,
                explicacion: "El Perú tiene 24 departamentos más la Provincia Constitucional del Callao."
            },
            {
                pregunta: "¿En qué fecha se celebra la Independencia del Perú?",
                opciones: ["27 de julio", "28 de julio", "29 de julio", "30 de julio"],
                respuestaCorrecta: 1,
                explicacion: "La Independencia del Perú se celebra el 28 de julio, proclamada por San Martín en 1821."
            },
            {
                pregunta: "¿Cuál es el océano que baña las costas del Perú?",
                opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
                respuestaCorrecta: 2,
                explicacion: "El Océano Pacífico baña toda la costa occidental de Sudamérica, incluyendo Perú."
            },
            {
                pregunta: "¿Cómo se llama la cordillera que atraviesa el Perú?",
                opciones: ["Cordillera de los Andes", "Cordillera del Himalaya", "Cordillera de los Alpes", "Cordillera de las Rocosas"],
                respuestaCorrecta: 0,
                explicacion: "La Cordillera de los Andes es la cadena montañosa más larga del mundo y atraviesa el Perú."
            },
            {
                pregunta: "¿Cuáles son las tres regiones naturales del Perú?",
                opciones: ["Costa, Sierra y Selva", "Norte, Centro y Sur", "Este, Oeste y Centro", "Andes, Amazonía y Desierto"],
                respuestaCorrecta: 0,
                explicacion: "Las tres regiones naturales del Perú son Costa, Sierra y Selva."
            },
            {
                pregunta: "¿Quién descubrió América?",
                opciones: ["Vasco da Gama", "Cristóbal Colón", "Fernando de Magallanes", "Américo Vespucio"],
                respuestaCorrecta: 1,
                explicacion: "Cristóbal Colón llegó a América el 12 de octubre de 1492."
            },
            {
                pregunta: "¿Cuál es la moneda oficial del Perú?",
                opciones: ["Peso", "Dólar", "Sol", "Bolívar"],
                respuestaCorrecta: 2,
                explicacion: "El Sol es la moneda oficial del Perú desde 1991."
            },
            {
                pregunta: "¿En qué región del Perú se encuentra el Lago Titicaca?",
                opciones: ["Costa", "Sierra", "Selva", "Todas las anteriores"],
                respuestaCorrecta: 1,
                explicacion: "El Lago Titicaca está en la Sierra, en la frontera entre Perú y Bolivia."
            },
            {
                pregunta: "¿Cuál fue la capital del Imperio Incaico?",
                opciones: ["Lima", "Arequipa", "Cusco", "Trujillo"],
                respuestaCorrecta: 2,
                explicacion: "Cusco fue la capital del Imperio Incaico y se le conocía como el 'ombligo del mundo'."
            },
            {
                pregunta: "¿Cuántos países limitan con el Perú?",
                opciones: ["3", "4", "5", "6"],
                respuestaCorrecta: 2,
                explicacion: "Perú limita con 5 países: Ecuador, Colombia, Brasil, Bolivia y Chile."
            },
            {
                pregunta: "¿Cuál es el plato típico más conocido del Perú?",
                opciones: ["Tacos", "Paella", "Ceviche", "Sushi"],
                respuestaCorrecta: 2,
                explicacion: "El ceviche es el plato bandera del Perú, hecho con pescado crudo marinado en limón."
            },
            {
                pregunta: "¿Qué significa ser un buen ciudadano?",
                opciones: ["Solo pagar impuestos", "Respetar las leyes y ayudar a la comunidad", "Tener mucho dinero", "Vivir solo"],
                respuestaCorrecta: 1,
                explicacion: "Un buen ciudadano respeta las leyes, participa en la comunidad y ayuda a otros."
            },
            {
                pregunta: "¿Cuál es el derecho más importante de los niños?",
                opciones: ["Derecho a jugar", "Derecho a la vida", "Derecho a tener juguetes", "Derecho a ver televisión"],
                respuestaCorrecta: 1,
                explicacion: "El derecho a la vida es fundamental, de él se derivan todos los demás derechos."
            },
            {
                pregunta: "¿Qué institución protege los derechos de los niños en el Perú?",
                opciones: ["DEMUNA", "Policía", "Bomberos", "Hospital"],
                respuestaCorrecta: 0,
                explicacion: "La DEMUNA (Defensoría Municipal del Niño y del Adolescente) protege los derechos infantiles."
            },
            {
                pregunta: "¿Cuál es el símbolo patrio que representa al Perú en el mundo?",
                opciones: ["La bandera", "El himno", "El escudo", "Todos los anteriores"],
                respuestaCorrecta: 3,
                explicacion: "La bandera, el himno nacional y el escudo son los tres símbolos patrios del Perú."
            },
            {
                pregunta: "¿Qué documento necesitas para viajar a otro país?",
                opciones: ["DNI", "Pasaporte", "Carnet del colegio", "Recibo de luz"],
                respuestaCorrecta: 1,
                explicacion: "El pasaporte es el documento oficial que permite viajar a otros países."
            },
            {
                pregunta: "¿Cuál es la forma de gobierno del Perú?",
                opciones: ["Monarquía", "República", "Imperio", "Dictadura"],
                respuestaCorrecta: 1,
                explicacion: "El Perú es una República democrática con división de poderes."
            },
            {
                pregunta: "¿Cada cuántos años se eligen nuevas autoridades en el Perú?",
                opciones: ["3 años", "4 años", "5 años", "6 años"],
                respuestaCorrecta: 2,
                explicacion: "En el Perú, las elecciones presidenciales y congresales se realizan cada 5 años."
            },
            {
                pregunta: "¿Cuál es la principal actividad económica de la Costa peruana?",
                opciones: ["Ganadería", "Pesca", "Minería", "Turismo"],
                respuestaCorrecta: 1,
                explicacion: "La pesca es una de las principales actividades económicas de la costa peruana."
            },
            {
                pregunta: "¿Qué celebramos el 9 de diciembre en el Perú?",
                opciones: ["Día de la Bandera", "Batalla de Ayacucho", "Día de la Independencia", "Día del Trabajo"],
                respuestaCorrecta: 1,
                explicacion: "El 9 de diciembre se conmemora la Batalla de Ayacucho, que selló la independencia americana."
            },
            {
                pregunta: "¿Cuál es el animal representativo de los Andes peruanos?",
                opciones: ["Jaguar", "Cóndor", "Delfín rosado", "Oso hormiguero"],
                respuestaCorrecta: 1,
                explicacion: "El cóndor andino es el ave nacional del Perú y símbolo de los Andes."
            },
            {
                pregunta: "¿Qué significa la palabra 'democracia'?",
                opciones: ["Gobierno del pueblo", "Gobierno de los ricos", "Gobierno militar", "Gobierno de uno solo"],
                respuestaCorrecta: 0,
                explicacion: "Democracia significa 'gobierno del pueblo', donde todos pueden participar."
            },
            {
                pregunta: "¿Cuál es la principal característica del clima costeño?",
                opciones: ["Mucha lluvia", "Muy frío", "Seco y templado", "Nieve todo el año"],
                respuestaCorrecta: 2,
                explicacion: "El clima de la costa peruana es seco y templado, con pocas lluvias."
            },
            {
                pregunta: "¿Qué pueblo ancestral construyó las Líneas de Nazca?",
                opciones: ["Incas", "Chavín", "Nazca", "Chimú"],
                respuestaCorrecta: 2,
                explicacion: "La cultura Nazca construyó las famosas Líneas de Nazca hace más de 1,500 años."
            },
            {
                pregunta: "¿Cuál es el deber más importante que tenemos en el colegio?",
                opciones: ["Jugar en el recreo", "Estudiar y aprender", "Hablar con amigos", "Comer lonchera"],
                respuestaCorrecta: 1,
                explicacion: "Nuestro principal deber en el colegio es estudiar, aprender y formarnos como personas."
            },
            {
                pregunta: "¿Qué cultura precolombina construyó grandes pirámides en México?",
                opciones: ["Maya", "Inca", "Nazca", "Chavín"],
                respuestaCorrecta: 0,
                explicacion: "Los mayas construyeron grandes pirámides como la de Chichén Itzá en México."
            },
            {
                pregunta: "¿Cuál es el país donde se originaron los Juegos Olímpicos?",
                opciones: ["Grecia", "Italia", "China", "Egipto"],
                respuestaCorrecta: 0,
                explicacion: "Los Juegos Olímpicos se originaron en la antigua Grecia."
            },
            {
                pregunta: "¿Qué mar separa Europa de África?",
                opciones: ["Mar Mediterráneo", "Mar Rojo", "Mar Caribe", "Mar Negro"],
                respuestaCorrecta: 0,
                explicacion: "El mar Mediterráneo separa Europa del norte de África."
            },
            {
                pregunta: "¿Qué instrumento se usaba en el antiguo Perú para registrar información?",
                opciones: ["Quipu", "Papiro", "Jeroglífico", "Ábaco"],
                respuestaCorrecta: 0,
                explicacion: "El quipu era un sistema de cuerdas y nudos usado por los incas para registrar datos."
            },
            {
                pregunta: "¿Qué país es famoso por su muralla milenaria?",
                opciones: ["China", "India", "Francia", "Perú"],
                respuestaCorrecta: 0,
                explicacion: "China es famosa por su Gran Muralla, construida hace siglos para defenderse."
            },
            {
                pregunta: "¿Cuál es el nombre del dios principal de los incas?",
                opciones: ["Inti", "Viracocha", "Pachamama", "Illapa"],
                respuestaCorrecta: 0,
                explicacion: "Inti era el dios del Sol, considerado el más importante en la cultura inca."
            },
            {
                pregunta: "¿Qué civilización es conocida por sus filósofos como Platón y Sócrates?",
                opciones: ["Griega", "Romana", "Egipcia", "China"],
                respuestaCorrecta: 0,
                explicacion: "La civilización griega fue cuna de importantes filósofos como Platón y Sócrates."
            },
            {
                pregunta: "¿Qué cultura americana es conocida por sus cabezas colosales?",
                opciones: ["Olmeca", "Inca", "Azteca", "Chimú"],
                respuestaCorrecta: 0,
                explicacion: "Los olmecas son conocidos por sus enormes esculturas de cabezas talladas en piedra."
            },
            {
                pregunta: "¿Cuál es el continente con más países?",
                opciones: ["África", "Asia", "Europa", "América"],
                respuestaCorrecta: 0,
                explicacion: "África es el continente con más países reconocidos internacionalmente."
            },
            {
                pregunta: "¿Qué es el patrimonio cultural?",
                opciones: ["Bienes materiales o inmateriales con valor histórico", "Comida típica", "Lenguaje regional", "Religión local"],
                respuestaCorrecta: 0,
                explicacion: "El patrimonio cultural incluye monumentos, costumbres y tradiciones valiosas de una sociedad."
            },
            {
                pregunta: "¿Dónde se encuentran las pirámides de Giza?",
                opciones: ["Egipto", "México", "Irak", "India"],
                respuestaCorrecta: 0,
                explicacion: "Las pirámides de Giza se encuentran en Egipto, cerca de El Cairo."
            },
            {
                pregunta: "¿Qué cultura vivió en la región andina antes de los incas?",
                opciones: ["Chavín", "Romana", "Maya", "China"],
                respuestaCorrecta: 0,
                explicacion: "La cultura Chavín habitó la región andina antes del surgimiento del imperio inca."
            },
            {
                pregunta: "¿Qué continente está completamente en el hemisferio sur?",
                opciones: ["Oceanía", "Europa", "Asia", "América"],
                respuestaCorrecta: 0,
                explicacion: "Oceanía se encuentra casi completamente en el hemisferio sur."
            },
            {
                pregunta: "¿Qué es una tradición?",
                opciones: ["Costumbre heredada de generación en generación", "Una ley escrita", "Una regla escolar", "Una moda pasajera"],
                respuestaCorrecta: 0,
                explicacion: "Una tradición es una costumbre cultural transmitida con el tiempo."
            },
            {
                pregunta: "¿Qué civilización construyó templos como el Partenón?",
                opciones: ["Griega", "Romana", "Egipcia", "Azteca"],
                respuestaCorrecta: 0,
                explicacion: "El Partenón es un famoso templo de la antigua Grecia."
            },
            {
                pregunta: "¿Qué cultura desarrolló el calendario solar más preciso del mundo antiguo?",
                opciones: ["Maya", "Inca", "China", "Egipcia"],
                respuestaCorrecta: 0,
                explicacion: "Los mayas tenían un calendario solar muy preciso, usado en la agricultura y religión."
            },
            {
                pregunta: "¿Qué cultura usó el sistema de castas?",
                opciones: ["India antigua", "China", "Grecia", "Roma"],
                respuestaCorrecta: 0,
                explicacion: "La India antigua usó un sistema de castas para dividir a la sociedad."
            },
            {
                pregunta: "¿Cuál es el continente más grande del mundo?",
                opciones: ["Asia", "África", "América", "Europa"],
                respuestaCorrecta: 0,
                explicacion: "Asia es el continente más extenso del planeta."
            },
            {
                pregunta: "¿Qué cultura es famosa por su arquitectura de columnas?",
                opciones: ["Griega", "Egipcia", "Inca", "China"],
                respuestaCorrecta: 0,
                explicacion: "La arquitectura griega se caracteriza por el uso de columnas."
            },
            {
                pregunta: "¿Cuál es el desierto más grande del mundo?",
                opciones: ["Sahara", "Atacama", "Kalahari", "Gobi"],
                respuestaCorrecta: 0,
                explicacion: "El desierto del Sahara es el más extenso del mundo."
            },
            {
                pregunta: "¿Qué es una cultura milenaria?",
                opciones: ["Cultura con miles de años de historia", "Cultura nueva", "Cultura de un siglo", "Cultura de una ciudad"],
                respuestaCorrecta: 0,
                explicacion: "Las culturas milenarias tienen una larga tradición que se remonta a miles de años."
            },
            {
                pregunta: "¿Cuál es la capital cultural de Francia?",
                opciones: ["París", "Marsella", "Lyon", "Toulouse"],
                respuestaCorrecta: 0,
                explicacion: "París es considerada la capital cultural y artística de Francia."
            },
            {
                pregunta: "¿Qué país es famoso por el carnaval de Río de Janeiro?",
                opciones: ["Brasil", "Argentina", "Colombia", "Chile"],
                respuestaCorrecta: 0,
                explicacion: "El carnaval de Río es una festividad cultural emblemática de Brasil."
            },
            {
                pregunta: "¿Qué cultura usaba zigurats?",
                opciones: ["Mesopotámica", "Egipcia", "Griega", "Romana"],
                respuestaCorrecta: 0,
                explicacion: "Las culturas mesopotámicas construían zigurats como templos religiosos."
            },
            {
                pregunta: "¿Qué país es cuna del flamenco?",
                opciones: ["España", "Italia", "México", "Portugal"],
                respuestaCorrecta: 0,
                explicacion: "El flamenco es una expresión cultural originaria del sur de España."
            },
            {
                pregunta: "¿Cuál es el monumento más famoso de la India?",
                opciones: ["Taj Mahal", "Muralla", "Coliseo", "Templo Dorado"],
                respuestaCorrecta: 0,
                explicacion: "El Taj Mahal es un mausoleo considerado una joya arquitectónica india."
            },
            {
                pregunta: "¿Qué cultura precolombina vivió en la selva peruana?",
                opciones: ["Chachapoyas", "Nazca", "Moche", "Wari"],
                respuestaCorrecta: 0,
                explicacion: "Los Chachapoyas vivieron en la ceja de selva del Perú y construyeron Kuélap."
            },
            {
                pregunta: "¿Qué significa diversidad cultural?",
                opciones: ["Variedad de culturas en un mismo lugar", "Misma cultura", "Idioma único", "Raza común"],
                respuestaCorrecta: 0,
                explicacion: "La diversidad cultural es la existencia de múltiples culturas en una sociedad."
            },
            {
                pregunta: "¿Qué civilización dominó gran parte de Europa durante siglos?",
                opciones: ["Romana", "Inca", "Chavín", "Nazca"],
                respuestaCorrecta: 0,
                explicacion: "El Imperio Romano se extendió por gran parte de Europa."
            },
            {
                pregunta: "¿Dónde se encuentran las ruinas de Machu Picchu?",
                opciones: ["Cusco", "Lima", "Arequipa", "La Paz"],
                respuestaCorrecta: 0,
                explicacion: "Machu Picchu está ubicada en Cusco, Perú."
            },
            {
                pregunta: "¿Qué civilización antigua desarrolló la democracia?",
                opciones: ["Griega", "Romana", "Egipcia", "Persa"],
                respuestaCorrecta: 0,
                explicacion: "La democracia fue desarrollada en la antigua Grecia, especialmente en Atenas."
            },
            {
                pregunta: "¿Qué es la UNESCO?",
                opciones: ["Organización que protege el patrimonio cultural", "Una universidad", "Un partido político", "Un libro"],
                respuestaCorrecta: 0,
                explicacion: "La UNESCO protege sitios culturales y naturales en el mundo."
            },
            {
                pregunta: "¿Qué son los valores culturales?",
                opciones: ["Principios que guían a una sociedad", "Normas escritas", "Tradiciones culinarias", "Leyes internacionales"],
                respuestaCorrecta: 0,
                explicacion: "Los valores culturales son ideas compartidas que orientan el comportamiento social."
            },
            {
                pregunta: "¿Qué cultura construyó templos escalonados en Perú?",
                opciones: ["Moche", "Inca", "Chavín", "Paracas"],
                respuestaCorrecta: 0,
                explicacion: "Los Moche construyeron templos escalonados como Huaca del Sol y la Luna."
            },
            {
                pregunta: "¿Qué cultura era experta en tejidos y momificación?",
                opciones: ["Paracas", "Nazca", "Wari", "Moche"],
                respuestaCorrecta: 0,
                explicacion: "Los Paracas destacaron por sus tejidos complejos y técnicas de momificación."
            }
        ], 
        'Arte y Cultura': [
                {
                    pregunta: "¿Qué es el arte dramático?",
                    opciones: ["Un estilo de música", "Una técnica de pintura", "La representación de historias mediante actuación", "Un tipo de danza tradicional"],
                    respuestaCorrecta: 2,
                    explicacion: "El arte dramático es una forma de arte en la que se representan historias mediante actuaciones teatrales."
                },
                {
                    pregunta: "¿Qué es un telón en el teatro?",
                    opciones: ["Un tipo de maquillaje", "La tela que cubre el escenario", "Un personaje teatral", "Una técnica de canto"],
                    respuestaCorrecta: 1,
                    explicacion: "El telón es la gran tela que cubre y descubre el escenario antes y después de la función."
                },
                {
                    pregunta: "¿Qué representa la danza de los Caporales?",
                    opciones: ["El poder del conquistador español", "La lucha afroperuana", "La figura del capataz de la hacienda", "La vida andina campesina"],
                    respuestaCorrecta: 2,
                    explicacion: "La danza de los Caporales representa al capataz que vigilaba a los esclavos africanos en las haciendas coloniales."
                },
                {
                    pregunta: "¿Cuál de los siguientes es un instrumento musical de viento?",
                    opciones: ["Cajón", "Quena", "Charango", "Bombo"],
                    respuestaCorrecta: 1,
                    explicacion: "La quena es un instrumento de viento tradicional andino."
                },
                {
                    pregunta: "¿Qué colores forman el círculo cromático primario?",
                    opciones: ["Rojo, azul, amarillo", "Verde, naranja, violeta", "Blanco, negro, gris", "Celeste, marrón, rosado"],
                    respuestaCorrecta: 0,
                    explicacion: "Los colores primarios del círculo cromático son rojo, azul y amarillo."
                },
                {
                    pregunta: "¿Qué caracteriza a una obra de teatro?",
                    opciones: ["Solo música y baile", "Improvisación total", "Actuación, guión y escenografía", "Uso exclusivo de marionetas"],
                    respuestaCorrecta: 2,
                    explicacion: "Una obra de teatro se caracteriza por la actuación de actores, un guión y escenografía que ambienta la historia."
                },
                {
                    pregunta: "¿Qué es el claroscuro en la pintura?",
                    opciones: ["Técnica de pintura con colores cálidos", "Juego de luces y sombras", "Uso de pinturas digitales", "Mezcla de texturas"],
                    respuestaCorrecta: 1,
                    explicacion: "El claroscuro es una técnica artística que juega con las luces y sombras para dar profundidad a la obra."
                },
                {
                    pregunta: "¿Cuál es la capital cultural del Perú por su tradición artística?",
                    opciones: ["Lima", "Arequipa", "Ayacucho", "Cusco"],
                    respuestaCorrecta: 2,
                    explicacion: "Ayacucho es conocida por su gran tradición artística en retablos, música y festividades."
                },
                {
                    pregunta: "¿Qué danza afroperuana representa la herencia africana en el Perú?",
                    opciones: ["El caporal", "La marinera", "El festejo", "El huayno"],
                    respuestaCorrecta: 2,
                    explicacion: "El festejo es una danza afroperuana que celebra la herencia africana con mucho ritmo y alegría."
                },
                {
                    pregunta: "¿Qué técnica de dibujo utiliza solo líneas?",
                    opciones: ["Puntillismo", "Sombreado", "Lineal", "Acuarela"],
                    respuestaCorrecta: 2,
                    explicacion: "La técnica lineal se basa en el uso de líneas para formar las figuras sin relleno ni color."
                },
                {
                    pregunta: "¿Qué representa la danza de las Tijeras?",
                    opciones: ["El poder militar", "El enfrentamiento de habilidades y resistencia", "La fe religiosa", "La caza de animales"],
                    respuestaCorrecta: 1,
                    explicacion: "La danza de las Tijeras representa un duelo de habilidades físicas, resistencia y simbolismo cultural andino."
                },
                {
                    pregunta: "¿Qué tipo de ritmo tiene el caporal?",
                    opciones: ["Lento y melancólico", "Acelerado y vigoroso", "Uniforme y constante", "Suelto y libre"],
                    respuestaCorrecta: 1,
                    explicacion: "El caporal se caracteriza por su ritmo acelerado y pasos fuertes y vigorosos."
                },
                {
                    pregunta: "¿Qué color se asocia con la paz?",
                    opciones: ["Rojo", "Negro", "Blanco", "Amarillo"],
                    respuestaCorrecta: 2,
                    explicacion: "El blanco se asocia tradicionalmente con la paz y la pureza."
                },
                {
                    pregunta: "¿Qué instrumento musical acompaña muchas danzas afroperuanas?",
                    opciones: ["Guitarra", "Cajón", "Zampoña", "Trompeta"],
                    respuestaCorrecta: 1,
                    explicacion: "El cajón es un instrumento esencial en muchas danzas afroperuanas como el festejo."
                },
                {
                    pregunta: "¿Qué es un mural?",
                    opciones: ["Una danza de la selva", "Un tipo de teatro", "Una pintura hecha sobre una pared", "Un instrumento musical tradicional"],
                    respuestaCorrecta: 2,
                    explicacion: "Un mural es una pintura de gran tamaño hecha directamente sobre una pared o muro."
                },
                {
                    pregunta: "¿Qué danza representa la alegría del pueblo negro en la costa peruana?",
                    opciones: ["El huayno", "El carnaval arequipeño", "El festejo", "La diablada"],
                    respuestaCorrecta: 2,
                    explicacion: "El festejo es una danza alegre que celebra la herencia afroperuana."
                },
                {
                    pregunta: "¿Qué representa la diablada puneña?",
                    opciones: ["La guerra inca", "El triunfo del bien sobre el mal", "La caza de llamas", "La llegada del virrey"],
                    respuestaCorrecta: 1,
                    explicacion: "La diablada simboliza la lucha entre el bien (arcángeles) y el mal (diablos)."
                },
                {
                    pregunta: "¿Qué es una zarzuela?",
                    opciones: ["Una danza selvática", "Una técnica de pintura", "Un género teatral con canto y diálogo", "Un instrumento tradicional"],
                    respuestaCorrecta: 2,
                    explicacion: "La zarzuela es un género teatral que mezcla actuación con partes cantadas."
                },
                {
                    pregunta: "¿Qué famoso cuadro pintó Leonardo da Vinci?",
                    opciones: ["La Noche Estrellada", "La Última Cena", "El Grito", "Guernica"],
                    respuestaCorrecta: 1,
                    explicacion: "Leonardo da Vinci pintó 'La Última Cena', una de sus obras más reconocidas."
                },
                {
                    pregunta: "¿Qué material se usa en esculturas tradicionales de Ayacucho?",
                    opciones: ["Plomo", "Yeso", "Piedra de Huamanga", "Bronce"],
                    respuestaCorrecta: 2,
                    explicacion: "La piedra de Huamanga es muy usada en esculturas religiosas y artísticas ayacuchanas."
                },
                {
                    pregunta: "¿Qué ritmo musical tiene origen en Bolivia y se baila también en Perú?",
                    opciones: ["Huaylas", "Festejo", "Saya", "Marinera"],
                    respuestaCorrecta: 2,
                    explicacion: "La saya es un ritmo boliviano afroandino que también se baila en zonas del sur del Perú."
                },
                {
                    pregunta: "¿Qué representa la vestimenta en el Caporal?",
                    opciones: ["Riqueza y nobleza", "Dominio y fuerza", "Libertad y justicia", "Fe religiosa"],
                    respuestaCorrecta: 1,
                    explicacion: "La vestimenta del caporal simboliza fuerza, dominio y autoridad sobre los esclavos."
                },
                {
                    pregunta: "¿Qué danza peruana es considerada Patrimonio Cultural de la Nación?",
                    opciones: ["Festejo", "Caporal", "Marinera", "Tondero"],
                    respuestaCorrecta: 2,
                    explicacion: "La Marinera es reconocida como Patrimonio Cultural por su elegancia y tradición."
                },
                {
                    pregunta: "¿Cuál es una obra reconocida de Picasso?",
                    opciones: ["El Grito", "Guernica", "La Gioconda", "La Última Cena"],
                    respuestaCorrecta: 1,
                    explicacion: "Guernica es una obra de Pablo Picasso que representa los horrores de la guerra."
                },
                {
                    pregunta: "¿Cuál es la diferencia entre color cálido y frío?",
                    opciones: ["Cálido es más oscuro", "Frío solo se usa en acuarelas", "Cálidos generan energía, fríos tranquilidad", "No existe diferencia"],
                    respuestaCorrecta: 2,
                    explicacion: "Los colores cálidos (rojo, naranja) transmiten energía; los fríos (azul, verde) dan calma."
                },
                {
                    pregunta: "¿Qué danza representa a los esclavos africanos en Perú?",
                    opciones: ["Festejo", "Tondero", "Huayno", "Carnaval de Arequipa"],
                    respuestaCorrecta: 0,
                    explicacion: "El festejo celebra la cultura afrodescendiente en el Perú."
                },
                {
                    pregunta: "¿Qué material es típico en el arte cerámico mochica?",
                    opciones: ["Madera", "Metal", "Barro cocido", "Hueso"],
                    respuestaCorrecta: 2,
                    explicacion: "Los mochicas usaban barro cocido para hacer sus cerámicas expresivas y detalladas."
                },
                {
                    pregunta: "¿Qué instrumento usa el danzante de tijeras?",
                    opciones: ["Castañuelas", "Tijeras metálicas", "Cajón", "Guitarra"],
                    respuestaCorrecta: 1,
                    explicacion: "El danzante de tijeras usa dos láminas metálicas que produce sonidos mientras baila."
                },
                {
                    pregunta: "¿Qué técnica artística utiliza pinceles y pigmentos disueltos en agua?",
                    opciones: ["Carboncillo", "Témpera", "Óleo", "Acuarela"],
                    respuestaCorrecta: 3,
                    explicacion: "La acuarela es una técnica que usa pigmentos en agua, ideal para lograr transparencias."
                },
                {
                    pregunta: "¿Qué danza representa la alegría de los carnavales en Cajamarca?",
                    opciones: ["Carnaval cajamarquino", "Diablada", "Huaylas", "Caporal"],
                    respuestaCorrecta: 0,
                    explicacion: "El carnaval cajamarquino es una danza llena de colores y diversión en la región de Cajamarca."
                }
        ],
    },
    6:{
        'Inglés': [
            {
            pregunta: "¿Cuál es el pasado simple de 'go'?",
            opciones: ["Goed", "Went", "Gone", "Going"],
            respuestaCorrecta: 1,
            explicacion: "El pasado simple de 'go' es 'went'. Es un verbo irregular."
            },
            {
            pregunta: "¿Cómo se forma el presente continuo de 'play'?",
            opciones: ["I play", "I played", "I am playing", "I will play"],
            respuestaCorrecta: 2,
            explicacion: "El presente continuo se forma con 'am/is/are + verbo + ing': I am playing."
            },
            {
            pregunta: "¿Cuál es la forma comparativa de 'big'?",
            opciones: ["More big", "Bigger", "Biggest", "Biger"],
            respuestaCorrecta: 1,
            explicacion: "La forma comparativa de 'big' es 'bigger' (más grande)."
            },
            {
            pregunta: "¿Qué significa 'What did you do yesterday?' en español?",
            opciones: ["¿Qué haces hoy?", "¿Qué hiciste ayer?", "¿Qué harás mañana?", "¿Qué estás haciendo?"],
            respuestaCorrecta: 1,
            explicacion: "'What did you do yesterday?' significa '¿Qué hiciste ayer?'"
            },
            {
            pregunta: "¿Cuál es la forma correcta de 'There is' en plural?",
            opciones: ["There is", "There are", "There was", "There were"],
            respuestaCorrecta: 1,
            explicacion: "Para plural se usa 'There are': There are many books."
            },
            {
            pregunta: "¿Cómo se dice 'Yo estaba estudiando' en inglés?",
            opciones: ["I study", "I studied", "I was studying", "I am studying"],
            respuestaCorrecta: 2,
            explicacion: "'I was studying' es el pasado continuo que significa 'yo estaba estudiando'."
            },
            {
            pregunta: "¿Cuál es la pregunta correcta para 'She lives in Mexico'?",
            opciones: ["Where does she live?", "Where do she live?", "Where she lives?", "Where is she live?"],
            respuestaCorrecta: 0,
            explicacion: "Para preguntar con he/she/it se usa 'does': Where does she live?"
            },
            {
            pregunta: "¿Qué significa 'I have been to Paris' en español?",
            opciones: ["Voy a París", "Fui a París", "He estado en París", "Estaré en París"],
            respuestaCorrecta: 2,
            explicacion: "'I have been to Paris' es presente perfecto y significa 'He estado en París'."
            },
            {
            pregunta: "¿Cuál es la forma superlativa de 'good'?",
            opciones: ["Gooder", "More good", "Best", "Better"],
            respuestaCorrecta: 2,
            explicacion: "El superlativo irregular de 'good' es 'best' (el mejor)."
            },
            {
            pregunta: "¿Cómo se expresa una habilidad en presente?",
            opciones: ["I could swim", "I can swim", "I will swim", "I swam"],
            respuestaCorrecta: 1,
            explicacion: "'Can' expresa habilidad en presente: I can swim (puedo/sé nadar)."
            },
            {
            pregunta: "¿Cuál es la forma correcta del futuro con 'will'?",
            opciones: ["I will to go", "I will go", "I will going", "I going will"],
            respuestaCorrecta: 1,
            explicacion: "El futuro con 'will' se forma: will + verbo base: I will go."
            },
            {
            pregunta: "¿Qué significa 'How long have you lived here?' en español?",
            opciones: ["¿Cuánto mides?", "¿Cuánto tiempo has vivido aquí?", "¿Cuándo llegaste?", "¿Por qué vives aquí?"],
            respuestaCorrecta: 1,
            explicacion: "'How long have you lived here?' significa '¿Cuánto tiempo has vivido aquí?'"
            },
            {
            pregunta: "¿Cuál es la forma negativa de 'He can speak English'?",
            opciones: ["He doesn't can speak", "He can't speak English", "He not can speak", "He no can speak"],
            respuestaCorrecta: 1,
            explicacion: "La forma negativa de 'can' es 'can't' o 'cannot': He can't speak English."
            },
            {
            pregunta: "¿Cómo se forma una pregunta en pasado simple con verbos regulares?",
            opciones: ["Did + you + verbo base", "Do + you + verbo", "You + verbo + ed", "Are + you + verbo"],
            respuestaCorrecta: 0,
            explicacion: "Las preguntas en pasado simple usan 'did': Did you play soccer?"
            },
            {
            pregunta: "¿Qué significa 'I would like some tea' en español?",
            opciones: ["Me gusta el té", "Quiero té", "Me gustaría un poco de té", "Tomo té"],
            respuestaCorrecta: 2,
            explicacion: "'I would like' es una forma educada de pedir: 'Me gustaría un poco de té'."
            },
            {
            pregunta: "¿Cuál es la diferencia entre 'much' y 'many'?",
            opciones: ["No hay diferencia", "Much para contables, many para incontables", "Many para contables, much para incontables", "Much es plural"],
            respuestaCorrecta: 2,
            explicacion: "'Many' se usa con sustantivos contables, 'much' con incontables."
            },
            {
            pregunta: "¿Cómo se dice 'Ella solía jugar tenis' en inglés?",
            opciones: ["She plays tennis", "She played tennis", "She used to play tennis", "She is playing tennis"],
            respuestaCorrecta: 2,
            explicacion: "'Used to' expresa hábitos del pasado: She used to play tennis."
            },
            {
            pregunta: "¿Cuál es la forma correcta de reportar 'I am tired'?",
            opciones: ["He said he is tired", "He said he was tired", "He said I am tired", "He says he tired"],
            respuestaCorrecta: 1,
            explicacion: "En reported speech, 'am/is' cambia a 'was': He said he was tired."
            },
            {
            pregunta: "¿Qué significa 'If I were rich, I would travel' en español?",
            opciones: ["Soy rico y viajo", "Cuando sea rico, viajaré", "Si fuera rico, viajaría", "Era rico y viajaba"],
            respuestaCorrecta: 2,
            explicacion: "Es un condicional irreal: 'Si fuera rico, viajaría'."
            },
            {
            pregunta: "¿Cuál es la forma pasiva de 'They built the house'?",
            opciones: ["The house built them", "The house was built", "They were built", "The house is built"],
            respuestaCorrecta: 1,
            explicacion: "La voz pasiva en pasado: 'The house was built' (La casa fue construida)."
            },
            {
            pregunta: "¿Cómo se expresa una obligación fuerte?",
            opciones: ["You can do it", "You should do it", "You must do it", "You could do it"],
            respuestaCorrecta: 2,
            explicacion: "'Must' expresa obligación fuerte: You must do it (debes hacerlo)."
            },
            {
            pregunta: "¿Qué significa 'I wish I could fly' en español?",
            opciones: ["Puedo volar", "Voy a volar", "Ojalá pudiera volar", "Me gusta volar"],
            respuestaCorrecta: 2,
            explicacion: "'I wish' + pasado expresa deseos irreales: 'Ojalá pudiera volar'."
            },
            {
            pregunta: "¿Cuál es la forma correcta del presente perfecto continuo?",
            opciones: ["I am studying", "I have studied", "I have been studying", "I was studying"],
            respuestaCorrecta: 2,
            explicacion: "Presente perfecto continuo: have/has + been + verbo + ing."
            },
            {
            pregunta: "¿Cómo se forma una tag question para 'You are coming'?",
            opciones: ["You are coming, are you?", "You are coming, aren't you?", "You are coming, don't you?", "You are coming, do you?"],
            respuestaCorrecta: 1,
            explicacion: "Tag question: positivo + negativo: You are coming, aren't you?"
            },
            {
            pregunta: "¿Qué significa 'He had already left when I arrived' en español?",
            opciones: ["Se fue cuando llegué", "Se había ido cuando llegué", "Se va cuando llego", "Se irá cuando llegue"],
            respuestaCorrecta: 1,
            explicacion: "Past perfect indica una acción anterior a otra en el pasado."
            },
            {
            pregunta: "¿Cuál es la diferencia entre 'few' y 'a few'?",
            opciones: ["No hay diferencia", "Few es positivo, a few negativo", "A few es positivo, few negativo", "Few es para incontables"],
            respuestaCorrecta: 2,
            explicacion: "'A few' es positivo (algunos), 'few' es negativo (pocos/casi ninguno)."
            },
            {
            pregunta: "¿Cómo se expresa probabilidad en presente?",
            opciones: ["He can be at home", "He must be at home", "He will be at home", "He should be at home"],
            respuestaCorrecta: 1,
            explicacion: "'Must' expresa probabilidad fuerte: He must be at home (debe estar en casa)."
            },
            {
            pregunta: "¿Cuál es la forma correcta de 'Neither do I'?",
            opciones: ["I don't either", "Neither do I", "So do I", "Ambas A y B"],
            respuestaCorrecta: 3,
            explicacion: "Ambas formas son correctas para expresar acuerdo negativo."
            },
            {
            pregunta: "¿Qué significa 'I'd rather stay home' en español?",
            opciones: ["Debo quedarme en casa", "Prefiero quedarme en casa", "Quiero quedarme en casa", "Voy a quedarme en casa"],
            respuestaCorrecta: 1,
            explicacion: "'I'd rather' (I would rather) significa 'prefiero'."
            },
            {
            pregunta: "¿Cuál es la forma correcta del segundo condicional?",
            opciones: ["If I will have money, I buy a car", "If I have money, I will buy a car", "If I had money, I would buy a car", "If I would have money, I bought a car"],
            respuestaCorrecta: 2,
            explicacion: "Segundo condicional: If + pasado simple, would + verbo base."
            }
        ],
        'Matemática': [
            {
                pregunta: "Resuelve: (125 × 8) ÷ 5",
                opciones: ["180", "200", "220", "240"],
                respuestaCorrecta: 1,
                explicacion: "125 × 8 = 1000; 1000 ÷ 5 = 200"
            },
            {
                pregunta: "Un terreno rectangular mide 28 m de largo y 15 m de ancho. ¿Cuál es su área?",
                opciones: ["420 m²", "400 m²", "380 m²", "450 m²"],
                respuestaCorrecta: 0,
                explicacion: "Área = 28 × 15 = 420 m²"
            },
            {
                pregunta: "Encuentra el MCM de 6, 8 y 12",
                opciones: ["24", "48", "36", "12"],
                respuestaCorrecta: 0,
                explicacion: "Mínimo común múltiplo de 6, 8 y 12 es 24"
            },
            {
                pregunta: "Resuelve: 3/4 + 2/3",
                opciones: ["17/12", "5/7", "19/12", "13/12"],
                respuestaCorrecta: 2,
                explicacion: "MCM = 12 → 9/12 + 8/12 = 17/12"
            },
            {
                pregunta: "Una botella tiene 1.25 litros y se llena 8 veces. ¿Cuántos litros en total?",
                opciones: ["10", "9.5", "10.5", "11"],
                respuestaCorrecta: 2,
                explicacion: "1.25 × 8 = 10.0 litros"
            },
            {
                pregunta: "Convierte 3.6 km a metros.",
                opciones: ["3600 m", "360 m", "36,000 m", "3,600,000 m"],
                respuestaCorrecta: 0,
                explicacion: "1 km = 1000 m → 3.6 km = 3600 m"
            },
            {
                pregunta: "¿Cuál es el perímetro de un triángulo con lados 12 cm, 9 cm y 10 cm?",
                opciones: ["30 cm", "31 cm", "29 cm", "28 cm"],
                respuestaCorrecta: 0,
                explicacion: "12 + 9 + 10 = 31 cm"
            },
            {
                pregunta: "Encuentra el número que falta: 2, 5, 10, 17, ___",
                opciones: ["26", "24", "22", "20"],
                respuestaCorrecta: 1,
                explicacion: "La secuencia suma 3, 5, 7... siguiente: +9 → 17 + 9 = 26"
            },
            {
                pregunta: "¿Cuánto es el 25% de 240?",
                opciones: ["60", "80", "70", "90"],
                respuestaCorrecta: 0,
                explicacion: "25% de 240 = 240 × 0.25 = 60"
            },
            {
                pregunta: "Resuelve: 0.75 × 12",
                opciones: ["9", "10", "8.5", "7.5"],
                respuestaCorrecta: 0,
                explicacion: "0.75 × 12 = 9"
            },
            {
                pregunta: "Convierte 3/5 a porcentaje",
                opciones: ["60%", "55%", "75%", "65%"],
                respuestaCorrecta: 0,
                explicacion: "3 ÷ 5 = 0.6 → 0.6 × 100 = 60%"
            },
            {
                pregunta: "¿Qué número elevado al cuadrado da 121?",
                opciones: ["9", "10", "11", "12"],
                respuestaCorrecta: 2,
                explicacion: "11² = 121"
            },
            {
                pregunta: "Un paquete cuesta S/ 18.50. ¿Cuánto pagaré por 3 paquetes?",
                opciones: ["S/ 55.50", "S/ 54.00", "S/ 56.50", "S/ 53.50"],
                respuestaCorrecta: 0,
                explicacion: "18.50 × 3 = S/ 55.50"
            },
            {
                pregunta: "¿Cuál es el promedio de 28, 34 y 38?",
                opciones: ["33", "35", "30", "32"],
                respuestaCorrecta: 0,
                explicacion: "(28 + 34 + 38) / 3 = 100 / 3 = 33.33 ≈ 33"
            },
            {
                pregunta: "¿Cuántas diagonales tiene un hexágono?",
                opciones: ["9", "12", "15", "6"],
                respuestaCorrecta: 0,
                explicacion: "n(n - 3)/2 → 6(3)/2 = 9 diagonales"
            },
            {
                pregunta: "¿Cuál es el cubo de 3?",
                opciones: ["6", "9", "27", "18"],
                respuestaCorrecta: 2,
                explicacion: "3 × 3 × 3 = 27"
            },
            {
                pregunta: "Resuelve: (5 + 3)²",
                opciones: ["64", "49", "81", "100"],
                respuestaCorrecta: 0,
                explicacion: "(5 + 3)² = 8² = 64"
            },
            {
                pregunta: "Encuentra el máximo común divisor de 36 y 60",
                opciones: ["6", "12", "18", "24"],
                respuestaCorrecta: 1,
                explicacion: "Los divisores comunes más altos son: 12"
            },
            {
                pregunta: "Un recipiente contiene 4.25 litros. Si se reparte en botellas de 0.5 litros, ¿cuántas botellas se llenan?",
                opciones: ["8", "9", "10", "11"],
                respuestaCorrecta: 1,
                explicacion: "4.25 ÷ 0.5 = 8.5 → 9 botellas"
            },
            {
                pregunta: "¿Cuánto es 1/3 de 1/2?",
                opciones: ["1/6", "2/5", "3/5", "2/3"],
                respuestaCorrecta: 0,
                explicacion: "1/3 × 1/2 = 1/6"
            },
            {
                pregunta: "Calcula: 35% de 200",
                opciones: ["60", "65", "70", "75"],
                respuestaCorrecta: 2,
                explicacion: "200 × 0.35 = 70"
            },
            {
                pregunta: "Convierte 1.75 horas a minutos.",
                opciones: ["115 min", "105 min", "90 min", "100 min"],
                respuestaCorrecta: 1,
                explicacion: "1 h = 60 min → 1.75 × 60 = 105 min"
            },
            {
                pregunta: "¿Qué número sigue? 1, 4, 9, 16, ___",
                opciones: ["25", "22", "30", "21"],
                respuestaCorrecta: 0,
                explicacion: "Son cuadrados: 1², 2², 3²... siguiente: 5² = 25"
            },
            {
                pregunta: "Si x = 5, ¿cuánto vale 3x + 4?",
                opciones: ["15", "19", "17", "20"],
                respuestaCorrecta: 1,
                explicacion: "3×5 + 4 = 15 + 4 = 19"
            },
            {
                pregunta: "¿Qué representa el eje vertical en un gráfico de barras?",
                opciones: ["Categorías", "Frecuencias", "Tiempo", "Colores"],
                respuestaCorrecta: 1,
                explicacion: "El eje vertical representa cantidades (frecuencias)"
            },
            {
                pregunta: "Si una camisa cuesta S/ 54 y hay 15% de descuento, ¿cuánto se paga?",
                opciones: ["S/ 45.90", "S/ 48.00", "S/ 46.80", "S/ 44.50"],
                respuestaCorrecta: 2,
                explicacion: "15% de 54 = 8.10 → 54 - 8.10 = 45.90"
            },
            {
                pregunta: "Convierte 7/8 a decimal",
                opciones: ["0.875", "0.78", "0.87", "0.85"],
                respuestaCorrecta: 0,
                explicacion: "7 ÷ 8 = 0.875"
            },
            {
                pregunta: "¿Qué número falta? 2, 6, 12, 20, ___",
                opciones: ["30", "28", "26", "24"],
                respuestaCorrecta: 0,
                explicacion: "Se suman: +4, +6, +8... siguiente +10 → 20+10 = 30"
            },
            {
                pregunta: "¿Qué propiedad se usa en: 4 + (3 + 2) = (4 + 3) + 2?",
                opciones: ["Conmutativa", "Distributiva", "Asociativa", "Identidad"],
                respuestaCorrecta: 2,
                explicacion: "Se agrupan de forma distinta: propiedad asociativa"
            },
            {
                pregunta: "Resuelve: 2.4 × 1.5",
                opciones: ["3.6", "3.2", "3.8", "3.9"],
                respuestaCorrecta: 0,
                explicacion: "2.4 × 1.5 = 3.6"
            },
            {
                pregunta: "¿Cuál es el mínimo común múltiplo (m.c.m) de 12 y 18?",
                opciones: ["36", "72", "24", "12"],
                respuestaCorrecta: 0,
                explicacion: "El m.c.m de 12 y 18 es 36."
            },
            {
                pregunta: "Resuelve: (3/4) + (2/8)",
                opciones: ["1", "7/8", "5/8", "6/8"],
                respuestaCorrecta: 1,
                explicacion: "3/4 + 2/8 = 6/8 + 2/8 = 7/8."
            },
            {
                pregunta: "Si un rectángulo mide 12 cm de largo y 5 cm de ancho, ¿cuál es su perímetro?",
                opciones: ["34 cm", "30 cm", "32 cm", "36 cm"],
                respuestaCorrecta: 2,
                explicacion: "P = 2(12 + 5) = 2(17) = 34 cm."
            },
            {
                pregunta: "Convierte 0,75 a fracción simplificada.",
                opciones: ["3/4", "7/10", "1/2", "2/3"],
                respuestaCorrecta: 0,
                explicacion: "0,75 equivale a 3/4."
            },
            {
                pregunta: "Resuelve: (25 × 3) - (15 ÷ 3)",
                opciones: ["69", "75", "72", "60"],
                respuestaCorrecta: 0,
                explicacion: "75 - 5 = 70."
            },
            {
                pregunta: "¿Cuál es la raíz cuadrada de 144?",
                opciones: ["11", "12", "14", "13"],
                respuestaCorrecta: 1,
                explicacion: "12 × 12 = 144."
            },
            {
                pregunta: "Resuelve: 2³ × 5",
                opciones: ["30", "40", "20", "45"],
                respuestaCorrecta: 2,
                explicacion: "2³ = 8 y 8 × 5 = 40."
            },
            {
                pregunta: "¿Qué fracción representa 40%?",
                opciones: ["2/5", "1/2", "4/5", "1/4"],
                respuestaCorrecta: 0,
                explicacion: "40% = 40/100 = 2/5."
            },
            {
                pregunta: "Resuelve: 3/5 de 100",
                opciones: ["50", "55", "60", "65"],
                respuestaCorrecta: 2,
                explicacion: "100 × 3/5 = 60."
            },
            {
                pregunta: "Si un ángulo mide 130°, ¿cuánto le falta para ser un ángulo llano?",
                opciones: ["40°", "50°", "30°", "60°"],
                respuestaCorrecta: 1,
                explicacion: "180° - 130° = 50°."
            },
            {
                pregunta: "¿Cuál es el área de un triángulo de base 10 cm y altura 8 cm?",
                opciones: ["80 cm²", "40 cm²", "60 cm²", "90 cm²"],
                respuestaCorrecta: 1,
                explicacion: "Área = (base × altura) / 2 = (10 × 8) / 2 = 40 cm²."
            },
            {
                pregunta: "¿Qué número sigue en la secuencia: 2, 6, 12, 20, ___?",
                opciones: ["30", "28", "24", "26"],
                respuestaCorrecta: 1,
                explicacion: "Suma: +4, +6, +8... sigue +10 → 20 + 10 = 30."
            },
            {
                pregunta: "Calcula: 0,5 × 0,2",
                opciones: ["0,01", "0,1", "0,2", "0,05"],
                respuestaCorrecta: 1,
                explicacion: "0,5 × 0,2 = 0,10."
            },
            {
                pregunta: "Un producto cuesta S/ 120 y tiene un 25% de descuento. ¿Cuánto se paga?",
                opciones: ["S/ 90", "S/ 100", "S/ 95", "S/ 85"],
                respuestaCorrecta: 0,
                explicacion: "120 × 0.25 = 30; 120 - 30 = 90."
            },
            {
                pregunta: "¿Cuántos segundos hay en 2 horas?",
                opciones: ["7200", "3600", "1800", "5400"],
                respuestaCorrecta: 0,
                explicacion: "2 × 60 × 60 = 7200."
            },
            {
                pregunta: "¿Cuál es el volumen de un cubo de 5 cm de lado?",
                opciones: ["125 cm³", "100 cm³", "150 cm³", "75 cm³"],
                respuestaCorrecta: 0,
                explicacion: "V = lado³ = 5³ = 125 cm³."
            },
            {
                pregunta: "¿Cuál es el múltiplo común más pequeño entre 6 y 8?",
                opciones: ["24", "48", "18", "36"],
                respuestaCorrecta: 0,
                explicacion: "6: 6,12,18,24... 8: 8,16,24..."
            },
            {
                pregunta: "Redondea 8473 al millar más cercano.",
                opciones: ["8000", "8500", "8400", "9000"],
                respuestaCorrecta: 1,
                explicacion: "8473 se redondea a 8500 al millar más cercano."
            },
            {
                pregunta: "¿Qué número tiene 3 decenas de mil, 4 centenas y 5 unidades?",
                opciones: ["30405", "30045", "30450", "34005"],
                respuestaCorrecta: 0,
                explicacion: "30 000 + 400 + 5 = 30405."
            },
            {
                pregunta: "¿Qué representa 3/8 en porcentaje?",
                opciones: ["37,5%", "42%", "25%", "50%"],
                respuestaCorrecta: 0,
                explicacion: "3 ÷ 8 = 0.375 = 37.5%."
            },
            {
                pregunta: "Resuelve: 2/3 × 9",
                opciones: ["5", "6", "3", "7"],
                respuestaCorrecta: 1,
                explicacion: "2/3 de 9 = 6."
            },
            {
                pregunta: "¿Cuánto es el triple de 75 dividido entre 5?",
                opciones: ["45", "30", "50", "60"],
                respuestaCorrecta: 0,
                explicacion: "(75 × 3) ÷ 5 = 225 ÷ 5 = 45."
            },
            {
                pregunta: "¿Cuál es el número primo más cercano a 100?",
                opciones: ["97", "101", "99", "95"],
                respuestaCorrecta: 0,
                explicacion: "El número primo más cercano a 100 es 97."
            },
            {
                pregunta: "Convierte 3,5 km a metros.",
                opciones: ["3500 m", "3000 m", "1500 m", "3050 m"],
                respuestaCorrecta: 0,
                explicacion: "1 km = 1000 m → 3,5 km = 3500 m."
            },
            {
                pregunta: "¿Qué número completa la proporción? 4:8 = 5:x",
            opciones: ["10", "12", "8", "9"],
                respuestaCorrecta: 0,
                explicacion: "4:8 = 5:10."
            },
            {
                pregunta: "Si compras 3 lápices a S/ 2.40, ¿cuánto cuesta cada uno?",
                opciones: ["S/ 0.80", "S/ 0.75", "S/ 0.85", "S/ 0.70"],
                respuestaCorrecta: 0,
                explicacion: "2.40 ÷ 3 = 0.80."
            },
            {
                pregunta: "Resuelve: (7 + 5) × (6 - 2)",
                opciones: ["36", "48", "52", "30"],
                respuestaCorrecta: 0,
                explicacion: "(12) × (4) = 48."
            },
            {
                pregunta: "¿Cuál es el residuo de dividir 37 entre 5?",
                opciones: ["2", "1", "3", "0"],
                respuestaCorrecta: 2,
                explicacion: "37 ÷ 5 = 7 y sobra 2."
            },
            {
                pregunta: "¿Cuál es el número que al multiplicarse por sí mismo da 225?",
                opciones: ["15", "20", "25", "18"],
                respuestaCorrecta: 0,
                explicacion: "15 × 15 = 225."
            },
            {
                pregunta: "Calcula: (120 ÷ 3) + (25 × 2)",
                opciones: ["90", "80", "85", "95"],
                respuestaCorrecta: 2,
                explicacion: "40 + 50 = 90."
            }
        ],
        'Comunicación': [
            {
                pregunta: "¿Qué es un antónimo?",
                opciones: ["Palabra con significado opuesto", "Palabra similar", "Nombre propio", "Palabra extranjera"],
                respuestaCorrecta: 0,
                explicacion: "'Feliz' y 'triste' son antónimos porque significan lo contrario."
            },
            {
                pregunta: "¿Cuál de estos textos es narrativo?",
                opciones: ["Cuento", "Noticia", "Carta formal", "Receta"],
                respuestaCorrecta: 0,
                explicacion: "El cuento es un texto narrativo que relata una historia con personajes y trama."
            },
            {
                pregunta: "¿Qué es una opinión?",
                opciones: ["Un juicio personal", "Un hecho comprobado", "Una descripción objetiva", "Una definición científica"],
                respuestaCorrecta: 0,
                explicacion: "Una opinión expresa lo que una persona piensa o siente."
            },
            {
                pregunta: "¿Qué indica el tiempo verbal?",
                opciones: ["El momento en que ocurre la acción", "La persona que habla", "El número de palabras", "El tipo de oración"],
                respuestaCorrecta: 0,
                explicacion: "El tiempo verbal muestra si la acción es presente, pasado o futuro."
            },
            {
                pregunta: "¿Qué es un texto instructivo?",
                opciones: ["Un texto que da pasos para realizar algo", "Un poema", "Una noticia", "Una leyenda"],
                respuestaCorrecta: 0,
                explicacion: "Los textos instructivos explican cómo hacer algo, como una receta o manual."
            },
            {
                pregunta: "¿Cuál de estos conectores indica causa?",
                opciones: ["Porque", "Pero", "Aunque", "Sin embargo"],
                respuestaCorrecta: 0,
                explicacion: "El conector 'porque' explica la causa de algo."
            },
            {
                pregunta: "¿Cuál es una característica de la leyenda?",
                opciones: ["Combina hechos reales con elementos fantásticos", "Tiene solo datos científicos", "Es una carta", "Es solo una opinión"],
                respuestaCorrecta: 0,
                explicacion: "Las leyendas mezclan realidad con ficción, como en la leyenda del tunche."
            },
            {
                pregunta: "¿Qué parte de la oración indica quién realiza la acción?",
                opciones: ["Sujeto", "Verbo", "Predicado", "Artículo"],
                respuestaCorrecta: 0,
                explicacion: "El sujeto es la parte de la oración que realiza la acción del verbo."
            },
            {
                pregunta: "¿Qué es un diálogo?",
                opciones: ["Intercambio de palabras entre dos o más personas", "Un monólogo", "Un resumen", "Una descripción"],
                respuestaCorrecta: 0,
                explicacion: "El diálogo ocurre cuando dos personajes conversan."
            },
            {
                pregunta: "¿Cuál es la función del verbo en una oración?",
                opciones: ["Indicar una acción o estado", "Nombrar objetos", "Describir colores", "Mostrar cantidades"],
                respuestaCorrecta: 0,
                explicacion: "El verbo es la palabra que indica lo que hace el sujeto."
            },
            {
                pregunta: "¿Qué es un resumen?",
                opciones: ["Una versión corta de un texto con lo más importante", "Un poema rimado", "Una explicación larga", "Un listado de palabras"],
                respuestaCorrecta: 0,
                explicacion: "El resumen recoge las ideas principales de un texto en pocas palabras."
            },
            {
                pregunta: "¿Cuál es la diferencia entre narrador protagonista y omnisciente?",
                opciones: ["El protagonista cuenta su historia; el omnisciente conoce todo", "Ambos son iguales", "El omnisciente no existe", "Ninguno narra"],
                respuestaCorrecta: 0,
                explicacion: "El protagonista narra en primera persona; el omnisciente narra en tercera y lo sabe todo."
            },
            {
                pregunta: "¿Qué texto tiene como objetivo convencer al lector?",
                opciones: ["Argumentativo", "Narrativo", "Descriptivo", "Instructivo"],
                respuestaCorrecta: 0,
                explicacion: "El texto argumentativo presenta ideas y razones para convencer al lector."
            },
            {
                pregunta: "¿Qué es una carta formal?",
                opciones: ["Un texto para comunicarse con autoridades o instituciones", "Una carta entre amigos", "Una poesía", "Una noticia breve"],
                respuestaCorrecta: 0,
                explicacion: "Una carta formal tiene un lenguaje serio y se usa en situaciones oficiales."
            },
            {
                pregunta: "¿Qué es la coherencia en un texto?",
                opciones: ["Que las ideas estén relacionadas entre sí", "Usar solo palabras largas", "Tener muchas páginas", "Rimar cada oración"],
                respuestaCorrecta: 0,
                explicacion: "Un texto coherente tiene ideas que se conectan lógicamente."
            },
            {
                pregunta: "¿Qué texto es descriptivo?",
                opciones: ["El que describe personas, objetos o lugares", "El que explica fórmulas", "El que da órdenes", "El que narra aventuras"],
                respuestaCorrecta: 0,
                explicacion: "El texto descriptivo presenta cómo es algo usando detalles."
            },
            {
                pregunta: "¿Cuál es una característica de la entrevista?",
                opciones: ["Tiene preguntas y respuestas", "Es un cuento", "Es una receta", "Es una fábula"],
                respuestaCorrecta: 0,
                explicacion: "En la entrevista hay un entrevistador que hace preguntas y un entrevistado que responde."
            },
            {
                pregunta: "¿Qué elemento no debe faltar en una noticia?",
                opciones: ["Hecho real, lugar y fecha", "Un dibujo", "Una rima", "Un personaje fantástico"],
                respuestaCorrecta: 0,
                explicacion: "La noticia debe informar sobre qué ocurrió, cuándo y dónde."
            },
            {
                pregunta: "¿Qué es un acróstico?",
                opciones: ["Un poema en el que las letras iniciales forman una palabra", "Un cuento", "Una definición", "Un texto científico"],
                respuestaCorrecta: 0,
                explicacion: "El acróstico es un poema especial en que las letras iniciales forman una palabra clave."
            },
            {
                pregunta: "¿Qué es un modismo?",
                opciones: ["Expresión propia de una región", "Palabra extranjera", "Palabra inventada", "Nombre de una persona"],
                respuestaCorrecta: 0,
                explicacion: "Un modismo es una expresión típica como 'tirar la toalla'."
            }
        ],
        'Ciencia y Tecnología': [
            {
                pregunta: "¿Qué función cumple el sistema nervioso central?",
                opciones: ["Coordina las funciones del cuerpo", "Filtra la sangre", "Almacena alimentos", "Produce hormonas digestivas"],
                respuestaCorrecta: 0,
                explicacion: "El sistema nervioso central controla y coordina las funciones del cuerpo."
            },
            {
                pregunta: "¿Qué tipo de energía se obtiene del movimiento del viento?",
                opciones: ["Energía eólica", "Energía térmica", "Energía geotérmica", "Energía nuclear"],
                respuestaCorrecta: 0,
                explicacion: "La energía eólica se genera a partir del viento mediante aerogeneradores."
            },
            {
                pregunta: "¿Qué es un ecosistema?",
                opciones: ["Un conjunto de seres vivos y su entorno", "Una célula vegetal", "Un planeta lejano", "Una montaña sin vida"],
                respuestaCorrecta: 0,
                explicacion: "Un ecosistema está formado por organismos vivos y los elementos no vivos con los que interactúan."
            },
            {
                pregunta: "¿Cuál es la función de los glóbulos blancos?",
                opciones: ["Defender el cuerpo de enfermedades", "Transportar oxígeno", "Ayudar a la digestión", "Regular la temperatura"],
                respuestaCorrecta: 0,
                explicacion: "Los glóbulos blancos protegen al cuerpo de virus y bacterias."
            },
            {
                pregunta: "¿Qué nombre recibe el paso del estado sólido al líquido?",
                opciones: ["Fusión", "Evaporación", "Condensación", "Solidificación"],
                respuestaCorrecta: 0,
                explicacion: "La fusión es el proceso en el que un sólido se convierte en líquido al calentarse."
            },
            {
                pregunta: "¿Qué es la célula?",
                opciones: ["La unidad básica de los seres vivos", "Una partícula del aire", "Una glándula digestiva", "Un órgano reproductivo"],
                respuestaCorrecta: 0,
                explicacion: "La célula es la unidad mínima de vida en todos los seres vivos."
            },
            {
                pregunta: "¿Cuál de estas es una tecnología de información?",
                opciones: ["Computadora", "Termómetro", "Regla", "Lupa"],
                respuestaCorrecta: 0,
                explicacion: "La computadora se usa para procesar y transmitir información."
            },
            {
                pregunta: "¿Qué planeta tiene un sistema de anillos visibles?",
                opciones: ["Saturno", "Marte", "Venus", "Mercurio"],
                respuestaCorrecta: 0,
                explicacion: "Saturno es conocido por su espectacular sistema de anillos."
            },
            {
                pregunta: "¿Qué es un circuito eléctrico?",
                opciones: ["Un camino cerrado por donde circula la corriente", "Un satélite en órbita", "Un tubo con agua", "Una brújula antigua"],
                respuestaCorrecta: 0,
                explicacion: "Un circuito eléctrico permite el paso de corriente entre componentes conectados."
            },
            {
                pregunta: "¿Qué es la biodiversidad?",
                opciones: ["La variedad de especies vivas en un lugar", "El cambio del clima", "El uso de energía eléctrica", "La extinción de animales"],
                respuestaCorrecta: 0,
                explicacion: "La biodiversidad se refiere a la variedad de vida en un ecosistema o en el planeta."
            },
            {
                pregunta: "¿Qué instrumento se utiliza para observar células?",
                opciones: ["Microscopio", "Termómetro", "Compás", "Telescopio"],
                respuestaCorrecta: 0,
                explicacion: "El microscopio permite observar objetos diminutos como las células."
            },
            {
                pregunta: "¿Qué función tiene el sistema digestivo?",
                opciones: ["Transformar alimentos en nutrientes", "Controlar los músculos", "Transportar sangre", "Generar oxígeno"],
                respuestaCorrecta: 0,
                explicacion: "El sistema digestivo descompone los alimentos para que el cuerpo aproveche los nutrientes."
            },
            {
                pregunta: "¿Qué gas exhalamos al respirar?",
                opciones: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Helio"],
                respuestaCorrecta: 0,
                explicacion: "Exhalamos dióxido de carbono como resultado de la respiración celular."
            },
            {
                pregunta: "¿Qué cuerpo celeste es el centro del sistema solar?",
                opciones: ["El Sol", "La Tierra", "La Luna", "Marte"],
                respuestaCorrecta: 0,
                explicacion: "El Sol es el centro del sistema solar y fuente principal de energía."
            },
            {
                pregunta: "¿Cuál es una fuente de energía renovable?",
                opciones: ["Energía solar", "Carbón", "Gas natural", "Petróleo"],
                respuestaCorrecta: 0,
                explicacion: "La energía solar es limpia y se renueva constantemente."
            },
            {
                pregunta: "¿Qué parte de la planta absorbe agua y minerales?",
                opciones: ["Raíz", "Tallo", "Hoja", "Flor"],
                respuestaCorrecta: 0,
                explicacion: "Las raíces absorben agua y nutrientes del suelo."
            },
            {
                pregunta: "¿Qué tipo de articulación permite mover el brazo en círculo?",
                opciones: ["Enartrosis", "Bisagra", "Deslizante", "Fija"],
                respuestaCorrecta: 0,
                explicacion: "La enartrosis permite el movimiento circular como en el hombro."
            },
            {
                pregunta: "¿Qué es la capa de ozono?",
                opciones: ["Una capa que protege de rayos UV", "Una nube tóxica", "Un tipo de gas venenoso", "Una parte del núcleo terrestre"],
                respuestaCorrecta: 0,
                explicacion: "La capa de ozono filtra los rayos ultravioleta del sol."
            },
            {
                pregunta: "¿Cuál es la principal causa del calentamiento global?",
                opciones: ["Gases de efecto invernadero", "El ciclo lunar", "Erupciones volcánicas", "Movimientos tectónicos"],
                respuestaCorrecta: 0,
                explicacion: "Los gases contaminantes atrapan el calor en la atmósfera y elevan la temperatura global."
            },
            {
                pregunta: "¿Qué órgano filtra la sangre en el cuerpo humano?",
                opciones: ["Riñón", "Estómago", "Hígado", "Pulmón"],
                respuestaCorrecta: 0,
                explicacion: "Los riñones filtran y eliminan desechos de la sangre."
            },
            {
                pregunta: "¿Qué es una hipótesis en un experimento?",
                opciones: ["Una suposición que se prueba", "Una ley científica", "Un resultado exacto", "Un fenómeno natural"],
                respuestaCorrecta: 0,
                explicacion: "La hipótesis es una posible explicación que se verifica con pruebas."
            },
            {
                pregunta: "¿Cuál es el satélite natural de la Tierra?",
                opciones: ["La Luna", "El Sol", "Venus", "Júpiter"],
                respuestaCorrecta: 0,
                explicacion: "La Luna gira alrededor de la Tierra y es su satélite natural."
            },
            {
                pregunta: "¿Qué fuerza hace que los objetos caigan?",
                opciones: ["Gravedad", "Magnetismo", "Electricidad", "Fricción"],
                respuestaCorrecta: 0,
                explicacion: "La gravedad atrae los objetos hacia el centro de la Tierra."
            },
            {
                pregunta: "¿Qué aparato mide la temperatura?",
                opciones: ["Termómetro", "Telescopio", "Barómetro", "Microscopio"],
                respuestaCorrecta: 0,
                explicacion: "El termómetro mide el calor o la temperatura de un objeto o ambiente."
            },
            {
                pregunta: "¿Qué nombre recibe el cambio de líquido a gas?",
                opciones: ["Evaporación", "Fusión", "Condensación", "Sublimación"],
                respuestaCorrecta: 0,
                explicacion: "La evaporación transforma el agua en vapor."
            },
            {
                pregunta: "¿Qué animal es un invertebrado?",
                opciones: ["Pulpo", "Caballo", "Perro", "Gato"],
                respuestaCorrecta: 0,
                explicacion: "El pulpo no tiene columna vertebral, es un invertebrado."
            },
            {
                pregunta: "¿Qué función cumplen los pulmones?",
                opciones: ["Intercambio de gases", "Filtrar sangre", "Crear energía", "Procesar alimentos"],
                respuestaCorrecta: 0,
                explicacion: "Los pulmones toman oxígeno y eliminan dióxido de carbono."
            },
            {
                pregunta: "¿Qué nombre recibe el movimiento de rotación de la Tierra?",
                opciones: ["Giro sobre su eje", "Traslación", "Revolución", "Gravitación"],
                respuestaCorrecta: 0,
                explicacion: "La rotación es el giro de la Tierra sobre su eje y dura 24 horas."
            },
            {
                pregunta: "¿Qué aparato convierte energía solar en eléctrica?",
                opciones: ["Panel solar", "Turbina de viento", "Motor", "Foco"],
                respuestaCorrecta: 0,
                explicacion: "Los paneles solares transforman luz solar en electricidad."
            },
            {
                pregunta: "¿Qué nombre recibe el estado en el que una sustancia pasa de gas a líquido?",
                opciones: ["Condensación", "Evaporación", "Fusión", "Sublimación"],
                respuestaCorrecta: 0,
                explicacion: "La condensación ocurre cuando el gas se enfría y se convierte en líquido."
            },
            {
                pregunta: "¿Qué parte del cuerpo humano se encarga de bombear sangre?",
                opciones: ["Corazón", "Pulmones", "Hígado", "Estómago"],
                respuestaCorrecta: 0,
                explicacion: "El corazón bombea sangre a todo el cuerpo para llevar oxígeno y nutrientes."
            }
        ], 
        'Personal Social': [
            {
                pregunta: "¿Qué imperio fue conocido por sus conquistas y por haber extendido el cristianismo por Europa?",
                opciones: ["Imperio Romano", "Imperio Otomano", "Imperio Persa", "Imperio Mongol"],
                respuestaCorrecta: 0,
                explicacion: "El Imperio Romano se destacó por sus conquistas militares y por difundir el cristianismo en Europa."
            },
            {
                pregunta: "¿Qué era el feudalismo?",
                opciones: ["Un sistema económico basado en el comercio", "Un sistema social y político de la Edad Media", "Una forma de gobierno democrático", "Una religión medieval"],
                respuestaCorrecta: 1,
                explicacion: "El feudalismo fue un sistema en el que los señores feudales controlaban tierras y protegían a los campesinos a cambio de trabajo."
            },
            {
                pregunta: "¿Qué cultura europea impulsó el Renacimiento en los siglos XV y XVI?",
                opciones: ["La cultura griega", "La cultura egipcia", "La cultura italiana", "La cultura germánica"],
                respuestaCorrecta: 2,
                explicacion: "El Renacimiento comenzó en Italia e impulsó el arte, la ciencia y el pensamiento humanista."
            },
            {
                pregunta: "¿Qué país lideró la conquista de gran parte de América en el siglo XVI?",
                opciones: ["Portugal", "España", "Francia", "Inglaterra"],
                respuestaCorrecta: 1,
                explicacion: "España fue el principal imperio colonizador en América tras la llegada de Colón en 1492."
            },
            {
                pregunta: "¿Qué fueron las Cruzadas?",
                opciones: ["Guerras religiosas entre cristianos y musulmanes", "Leyes de la Edad Media", "Intercambios comerciales", "Conquistas de los mongoles"],
                respuestaCorrecta: 0,
                explicacion: "Las Cruzadas fueron expediciones cristianas para recuperar Tierra Santa de los musulmanes."
            },
            {
                pregunta: "¿Cuál fue la causa de la caída del Imperio Romano de Occidente?",
                opciones: ["La peste negra", "Las invasiones bárbaras", "La conquista española", "El cristianismo"],
                respuestaCorrecta: 1,
                explicacion: "Las invasiones de pueblos bárbaros como los visigodos causaron la caída del Imperio en 476 d.C."
            },
            {
                pregunta: "¿Qué fueron las colonias?",
                opciones: ["Ciudades griegas", "Territorios conquistados y dominados por un país extranjero", "Religiones antiguas", "Rutas comerciales"],
                respuestaCorrecta: 1,
                explicacion: "Las colonias eran territorios dominados por potencias como España, Inglaterra o Francia."
            },
            {
                pregunta: "¿Qué reyes apoyaron los viajes de Cristóbal Colón?",
                opciones: ["Luis XVI y María Antonieta", "Carlos I y Juana la Loca", "Fernando e Isabel", "Napoleón y Josefina"],
                respuestaCorrecta: 2,
                explicacion: "Los Reyes Católicos de España, Fernando e Isabel, financiaron a Colón en 1492."
            },
            {
                pregunta: "¿Qué importancia tuvo la Revolución Francesa en 1789?",
                opciones: ["Fortaleció la monarquía", "Inició la democracia moderna", "Apoyó el feudalismo", "Creó nuevos imperios"],
                respuestaCorrecta: 1,
                explicacion: "La Revolución Francesa dio paso a ideas de igualdad, libertad y derechos ciudadanos."
            },
            {
                pregunta: "¿Quién fue Simón Bolívar?",
                opciones: ["Un rey español", "Un libertador de América del Sur", "Un emperador romano", "Un sacerdote maya"],
                respuestaCorrecta: 1,
                explicacion: "Bolívar luchó por la independencia de varios países de Sudamérica del dominio español."
            },
            {
                pregunta: "¿Qué cultura fue conocida por su escritura jeroglífica y sus pirámides?",
                opciones: ["Los griegos", "Los romanos", "Los egipcios", "Los chinos"],
                respuestaCorrecta: 2,
                explicacion: "Los egipcios desarrollaron los jeroglíficos y construyeron pirámides como tumbas reales."
            },
            {
                pregunta: "¿Qué era un señor feudal?",
                opciones: ["Un campesino sin tierras", "Un sacerdote", "Un noble que controlaba tierras y siervos", "Un comerciante de la Edad Media"],
                respuestaCorrecta: 2,
                explicacion: "Los señores feudales eran dueños de tierras y tenían siervos a su cargo en la Edad Media."
            },
            {
                pregunta: "¿Quién fue Napoleón Bonaparte?",
                opciones: ["Un emperador francés", "Un líder vikingo", "Un rey de Inglaterra", "Un explorador portugués"],
                respuestaCorrecta: 0,
                explicacion: "Napoleón fue un militar francés que se convirtió en emperador y conquistó gran parte de Europa."
            },
            {
                pregunta: "¿Qué fue la Ilustración?",
                opciones: ["Una época de guerras", "Un movimiento de ideas sobre la razón, ciencia y libertad", "Una religión antigua", "Una colonia inglesa"],
                respuestaCorrecta: 1,
                explicacion: "La Ilustración fue un movimiento intelectual que defendía la razón y el conocimiento científico."
            },
            {
                pregunta: "¿Qué significó el descubrimiento de América en 1492?",
                opciones: ["El inicio de la Edad Media", "El fin del Imperio Inca", "El contacto entre Europa y América", "La colonización de Asia"],
                respuestaCorrecta: 2,
                explicacion: "El descubrimiento de América permitió el encuentro de dos mundos: Europa y América."
            },
            {
                pregunta: "¿Quién lideró la conquista del Imperio Azteca?",
                opciones: ["Francisco Pizarro", "Cristóbal Colón", "Hernán Cortés", "Marco Polo"],
                respuestaCorrecta: 2,
                explicacion: "Hernán Cortés conquistó el Imperio Azteca con ayuda de pueblos indígenas aliados."
            },
            {
                pregunta: "¿Qué civilización dominó gran parte del norte de África y el Mediterráneo?",
                opciones: ["Los incas", "Los romanos", "Los sumerios", "Los griegos"],
                respuestaCorrecta: 1,
                explicacion: "El Imperio Romano controló vastos territorios del norte de África y Europa."
            },
            {
                pregunta: "¿Qué fue la peste negra?",
                opciones: ["Una guerra europea", "Una epidemia que mató a millones en la Edad Media", "Un invento de los árabes", "Una batalla en Egipto"],
                respuestaCorrecta: 1,
                explicacion: "La peste negra fue una pandemia que mató a millones en Europa durante el siglo XIV."
            },
            {
                pregunta: "¿Qué imperio europeo colonizó el Perú en el siglo XVI?",
                opciones: ["Portugal", "Francia", "España", "Inglaterra"],
                respuestaCorrecta: 2,
                explicacion: "España conquistó el Imperio Inca y colonizó el territorio peruano en 1532."
            },
            {
                pregunta: "¿Qué sistema usaron los incas para gobernar sus territorios?",
                opciones: ["Feudalismo", "Democracia", "Centralismo con caminos y chasquis", "Reinos independientes"],
                respuestaCorrecta: 2,
                explicacion: "El Imperio Inca usaba caminos, quipus y chasquis para controlar su extenso territorio."
            },
            {
                pregunta: "¿Qué estudia la historia universal?",
                opciones: ["Solo los hechos de América", "Eventos pasados de todo el mundo", "Solo culturas peruanas", "Inventos modernos"],
                respuestaCorrecta: 1,
                explicacion: "La historia universal estudia eventos importantes ocurridos en diferentes continentes y épocas."
            },
            {
                pregunta: "¿Por qué los españoles tenían ventaja en la conquista del Perú?",
                opciones: ["Tenían armas modernas y aliados indígenas", "Hablaban quechua", "Respetaban las culturas locales", "Eran más numerosos"],
                respuestaCorrecta: 0,
                explicacion: "Los españoles usaban armas de fuego y aprovecharon conflictos internos entre los incas."
            },
            {
                pregunta: "¿Qué evento marcó el inicio de la Edad Moderna?",
                opciones: ["La Revolución Francesa", "La caída del Imperio Romano", "El descubrimiento de América", "La fundación de Roma"],
                respuestaCorrecta: 2,
                explicacion: "El descubrimiento de América en 1492 marca el inicio de la Edad Moderna."
            },
            {
                pregunta: "¿Qué grupo invadió Europa durante las Cruzadas?",
                opciones: ["Los romanos", "Los musulmanes", "Los vikingos", "Los mongoles"],
                respuestaCorrecta: 1,
                explicacion: "Durante las Cruzadas, los europeos buscaron recuperar Jerusalén de manos de los musulmanes."
            },
            {
                pregunta: "¿Qué civilización construyó Machu Picchu?",
                opciones: ["Los mayas", "Los incas", "Los aztecas", "Los egipcios"],
                respuestaCorrecta: 1,
                explicacion: "Machu Picchu fue construida por los incas en el siglo XV."
            },
            {
                pregunta: "¿Qué fue la Edad Media?",
                opciones: ["Una época entre la Prehistoria y la Edad Antigua", "Un periodo de guerras y castillos entre los siglos V y XV", "Una etapa de paz en Europa", "Un imperio del pasado"],
                respuestaCorrecta: 1,
                explicacion: "La Edad Media fue un periodo entre la caída del Imperio Romano y el Renacimiento."
            },
            {
                pregunta: "¿Qué sistema político dominaba en Europa durante la Edad Media?",
                opciones: ["Monarquía parlamentaria", "Democracia", "Feudalismo", "Socialismo"],
                respuestaCorrecta: 2,
                explicacion: "El feudalismo organizaba la sociedad en señores, vasallos y siervos."
            },
            {
                pregunta: "¿Cuál fue la causa principal de la conquista del Tahuantinsuyo?",
                opciones: ["El avance tecnológico de los incas", "La alianza con los españoles", "La guerra civil entre Huáscar y Atahualpa", "La ayuda de los mayas"],
                respuestaCorrecta: 2,
                explicacion: "La guerra civil debilitó al Imperio Inca y facilitó la conquista española."
            },
            {
                pregunta: "¿Qué imperio fue dirigido por Gengis Kan?",
                opciones: ["Imperio Romano", "Imperio Mongol", "Imperio Bizantino", "Imperio Egipcio"],
                respuestaCorrecta: 1,
                explicacion: "Gengis Kan fue el gran líder del Imperio Mongol, uno de los más extensos de la historia."
            },
            {
                pregunta: "¿Cuál fue uno de los efectos del colonialismo europeo en América?",
                opciones: ["El crecimiento de las culturas indígenas", "El respeto por las lenguas originarias", "La desaparición de muchas culturas nativas", "La independencia inmediata de los países"],
                respuestaCorrecta: 2,
                explicacion: "El colonialismo provocó la destrucción de muchas culturas indígenas en América."
            }
        ],
        'Arte y Cultura': [
            {
    pregunta: "¿Qué representa el color azul en la teoría del color?",
    opciones: ["Tristeza y calma", "Pasión y fuerza", "Envidia y miedo", "Alegría y energía"],
    respuestaCorrecta: 0,
    explicacion: "El color azul suele asociarse con la calma, la tranquilidad y la tristeza en el arte."
},
{
    pregunta: "¿Qué danza afroperuana se caracteriza por el uso del cajón y movimientos sensuales?",
    opciones: ["Marinera", "Festejo", "Valicha", "Caporal"],
    respuestaCorrecta: 1,
    explicacion: "El festejo es una danza afroperuana alegre, con mucho ritmo y uso del cajón peruano."
},
{
    pregunta: "¿Qué artista pintó la obra 'La noche estrellada'?",
    opciones: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
    respuestaCorrecta: 2,
    explicacion: "'La noche estrellada' es una de las obras más famosas de Van Gogh, pintada en 1889."
},
{
    pregunta: "¿Cuál es un instrumento musical de viento originario de los Andes?",
    opciones: ["Charango", "Cajón", "Quena", "Zampoña"],
    respuestaCorrecta: 2,
    explicacion: "La quena es un instrumento andino hecho de caña o hueso que se toca soplando por un extremo."
},
{
    pregunta: "¿Qué tipo de teatro combina música, diálogo y danza?",
    opciones: ["Teatro de títeres", "Teatro musical", "Teatro de sombras", "Teatro clásico"],
    respuestaCorrecta: 1,
    explicacion: "El teatro musical mezcla actuación con canciones y coreografías."
},
{
    pregunta: "¿Qué tipo de pintura usa solo blanco y negro?",
    opciones: ["Óleo", "Acuarela", "Monocromía", "Pastel"],
    respuestaCorrecta: 2,
    explicacion: "La monocromía se refiere a obras hechas con un solo color o tonos del mismo."
},
{
    pregunta: "¿Qué ritmo musical originario de Brasil es muy popular en carnavales?",
    opciones: ["Tango", "Cueca", "Samba", "Cumbia"],
    respuestaCorrecta: 2,
    explicacion: "La samba es una danza tradicional brasileña, llena de energía y colores."
},
{
    pregunta: "¿Qué danza boliviana es muy conocida y se baila con trajes brillantes y máscaras?",
    opciones: ["Saya", "Diablada", "Tobas", "Caporales"],
    respuestaCorrecta: 1,
    explicacion: "La diablada es una danza tradicional de Oruro con trajes llamativos y temática religiosa."
},
{
    pregunta: "¿Qué danza peruana se baila con pañuelos y es un símbolo de coquetería?",
    opciones: ["Huayno", "Marinera", "Tondero", "Festejo"],
    respuestaCorrecta: 1,
    explicacion: "La marinera es considerada la danza nacional del Perú, representando el cortejo entre una pareja."
},
{
    pregunta: "¿Qué obra es considerada el primer dibujo humano en la historia?",
    opciones: ["Mona Lisa", "Guernica", "El hombre de Vitruvio", "Pinturas rupestres"],
    respuestaCorrecta: 3,
    explicacion: "Las pinturas rupestres hechas en cuevas como las de Altamira muestran dibujos de hace miles de años."
},
{
    pregunta: "¿Qué se necesita para realizar una obra de teatro?",
    opciones: ["Solo bailarines", "Música clásica", "Actores, escenografía y guion", "Instrumentos musicales"],
    respuestaCorrecta: 2,
    explicacion: "Una obra de teatro necesita guion, actores, vestuario y escenografía."
},
{
    pregunta: "¿Qué es una sinfonía?",
    opciones: ["Una escultura abstracta", "Una obra musical larga y compleja", "Un paso de baile", "Una técnica de pintura"],
    respuestaCorrecta: 1,
    explicacion: "Una sinfonía es una obra musical compleja compuesta por varios movimientos, generalmente para orquesta."
},
{
    pregunta: "¿Qué instrumento se usa mucho en el huayno?",
    opciones: ["Arpa", "Guitarra eléctrica", "Violín", "Saxofón"],
    respuestaCorrecta: 2,
    explicacion: "El violín da el ritmo y melodía al huayno, una danza popular andina."
},
{
    pregunta: "¿Qué color se forma al mezclar rojo y azul?",
    opciones: ["Anaranjado", "Verde", "Morado", "Rosado"],
    respuestaCorrecta: 2,
    explicacion: "Rojo + azul da como resultado el color morado (violeta)."
},
{
    pregunta: "¿Qué estilo artístico se caracteriza por líneas rectas y tecnología?",
    opciones: ["Cubismo", "Renacimiento", "Arte digital", "Futurismo"],
    respuestaCorrecta: 3,
    explicacion: "El futurismo muestra movimiento, máquinas y velocidad, con líneas modernas."
},
{
    pregunta: "¿Qué se celebra en los carnavales peruanos con música y danza?",
    opciones: ["Pascua", "La cosecha", "La fertilidad y alegría", "El Día del maestro"],
    respuestaCorrecta: 2,
    explicacion: "Los carnavales celebran la alegría, la abundancia y la unión del pueblo."
},
{
    pregunta: "¿Qué instrumento peruano tiene forma de guitarra pequeña?",
    opciones: ["Zampoña", "Charango", "Caja", "Cajón"],
    respuestaCorrecta: 1,
    explicacion: "El charango es típico del altiplano, hecho a veces de caparazón de armadillo."
},
{
    pregunta: "¿Qué es un mural?",
    opciones: ["Un instrumento musical", "Una obra de teatro", "Una pintura grande en una pared", "Un baile en grupo"],
    respuestaCorrecta: 2,
    explicacion: "Los murales son pinturas que se hacen sobre muros o paredes, generalmente públicas."
},
{
    pregunta: "¿Qué colores son primarios?",
    opciones: ["Rojo, azul, amarillo", "Naranja, verde, violeta", "Rojo, verde, negro", "Azul, blanco, negro"],
    respuestaCorrecta: 0,
    explicacion: "Los colores primarios no se pueden formar mezclando otros colores: rojo, azul y amarillo."
},
{
    pregunta: "¿Quién fue un pintor importante del Renacimiento?",
    opciones: ["Miguel Ángel", "Van Gogh", "Frida Kahlo", "Salvador Dalí"],
    respuestaCorrecta: 0,
    explicacion: "Miguel Ángel fue escultor y pintor del Renacimiento, autor de la Capilla Sixtina."
},
{
    pregunta: "¿Qué tipo de baile es el caporal?",
    opciones: ["Afroperuano", "Selvático", "Altiplánico", "Costeño"],
    respuestaCorrecta: 2,
    explicacion: "El caporal es una danza del altiplano boliviano y peruano, con vestimenta pesada y vigorosa."
},
        ],
    },
            // Similar para grados 3-6 con preguntas cada vez más complejas
             };