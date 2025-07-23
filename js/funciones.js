document.addEventListener('DOMContentLoaded', () => {
        iniciarAudioLobby();
});

// Seleccionar preguntas aleatorias (debe estar definida globalmente)
function seleccionarPreguntasAleatorias(preguntasOriginales, cantidad = 10) {
    const preguntas = [...preguntasOriginales];
    const seleccionadas = [];
    while(seleccionadas.length < cantidad && preguntas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
        seleccionadas.push(preguntas.splice(indiceAleatorio, 1)[0]);
    }
    return seleccionadas;
}
// Iniciar audio de lobby al cargar la página
    //iniciarAudioLobby();
// Variables globales
let gradoSeleccionado = 0;
let materiaSeleccionada = '';
let preguntas = [];
let preguntaActual = 0;
let puntuacion = 0;
let respondido = false;
let nickname = '';
let jugadores = {};
let puntajeCursoPrevio = 0;
let avatarJugador = {
    genero: '',
    skin: '#fcd7b6',
    hair: '#3e2723',
    face: 'normal'
};

// Utilidades de localStorage para jugadores
function cargarJugadores() {
    //iniciarAudioLobby();
    const data = localStorage.getItem('jugadores_educativo');
    if (data) {
        jugadores = JSON.parse(data);
    } else {
        jugadores = {};
    }
}
function guardarJugadores() {
    localStorage.setItem('jugadores_educativo', JSON.stringify(jugadores));
}

// Mostrar ranking en pantalla de bienvenida
function renderRanking() {
    cargarJugadores();
    const lista = document.getElementById('lista-ranking');
    if (!lista) return;
    lista.innerHTML = '';
    const ranking = Object.entries(jugadores)
        .map(([nick, data]) => ({ nick, total: data.total || 0 }))
        .sort((a, b) => b.total - a.total);
    if (ranking.length === 0) {
        lista.innerHTML = '<li class="text-gray-400 text-center">Aún no hay jugadores registrados.</li>';
        return;
    }
    ranking.forEach((jug, idx) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center py-1 px-2';
        let icon = '';
        if (idx === 0) icon = '🏆';
        else if (idx === 1) icon = '⭐';
        else if (idx === 2) icon = '🎖️';
        else icon = `<span class='text-gray-400 font-bold mr-1'>${idx + 1}.</span>`;
        li.innerHTML = `<span class="flex items-center gap-1 font-bold ${idx === 0 ? 'text-yellow-500' : ''}">${icon} ${jug.nick}</span><span>${jug.total} pts</span>`;
        lista.appendChild(li);
    });
}

// Mostrar/ocultar pantallas
function mostrarPantallaBienvenida() {
    document.getElementById('pantalla-bienvenida').classList.remove('hidden');
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('seleccion-materia').classList.add('hidden');
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('resultados').classList.add('hidden');
    renderRanking();
}
function mostrarPantallaInicio() {
    document.getElementById('pantalla-bienvenida').classList.add('hidden');
    document.getElementById('inicio').classList.remove('hidden');
    renderGrados();
    renderPerfilJugador();
}

// Modal personalizado
function mostrarModal(titulo, texto) {
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-texto').textContent = texto;
    document.getElementById('modal-mensaje').classList.remove('hidden');
}
function ocultarModal() {
    document.getElementById('modal-mensaje').classList.add('hidden');
}

// Renderizar grados con progreso
function renderGrados() {
    const grados = [1,2,3,4,5,6];
    const container = document.getElementById('grados-container');
    container.innerHTML = '';
    grados.forEach(grado => {
        let completados = 0, total = 5; // 5 materias
        let puntaje = 0;
        let completado = false;
        if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[grado]) {
            const cursos = jugadores[nickname].cursos[grado];
            completados = Object.values(cursos).filter(c => c.completado).length;
            puntaje = Object.values(cursos).reduce((a, c) => a + (c.puntaje || 0), 0);
            completado = completados === total;
        }
        const div = document.createElement('div');
        div.className = `card grado-${grado} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative ${completado ? 'bg-green-100 border-2 border-green-400' : 'bg-white'}`;
        div.onclick = () => seleccionarGrado(grado);
        div.innerHTML = `
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/${grado === 1 ? '962df116-9af8-4ad1-9ba5-66ecad70fa1b' : grado === 2 ? 'afc24e6d-7d73-4dea-a615-d8b69ad1083f' : grado === 3 ? '17d0e301-4c56-48c2-a3a8-025ed219838c' : grado === 4 ? '05b7e295-0c80-4bff-8eab-cfefe1df46ad' : grado === 5 ? '0e0de5b8-070c-41c1-8d90-52b1b380cf19' : '48ba77dc-adfb-45a5-b518-b0574ab1c696'}.png" class="mx-auto mb-4 materia-icon">
            <h2 class="text-2xl font-bold mb-2">${grado}° Grado</h2>
            <p class="text-gray-700 mb-2">Puntaje: <span class="font-bold">${puntaje}</span></p>
            <div class="flex justify-center gap-2 mb-2">${[...Array(total)].map((_,i)=>`<span class="w-3 h-3 rounded-full ${i<completados?'bg-green-400':'bg-gray-300'} inline-block"></span>`).join('')}</div>
            ${completado ? '<span class="absolute top-2 right-2 bg-green-400 text-white px-2 py-1 rounded text-xs animate__animated animate__bounceIn">¡Completado!</span>' : ''}
        `;
        container.appendChild(div);
    });
}

// Registro y login de nickname
document.addEventListener('DOMContentLoaded', () => {
    cargarJugadores();
    mostrarPantallaBienvenida();
    // Cargar avatar si el nickname ya existe
    const inputNick = document.getElementById('input-nickname');
    inputNick.addEventListener('input', function() {
        const nick = inputNick.value.trim();
        if (jugadores[nick] && jugadores[nick].avatar) {
            const avatar = jugadores[nick].avatar;
            // Setear género
            if (avatar.genero) {
                const radio = document.querySelector(`input[name='genero'][value='${avatar.genero}']`);
                if (radio) radio.checked = true;
            }
            // Setear color de piel, pelo y forma
            document.getElementById('avatar-skin').value = avatar.skin || '#fcd7b6';
            document.getElementById('avatar-hair').value = avatar.hair || '#3e2723';
            document.getElementById('avatar-face').value = avatar.face || 'normal';
            // Forzar render del avatar
            document.getElementById('avatar-skin').dispatchEvent(new Event('input'));
        }
    });
    document.getElementById('form-nickname').onsubmit = function(e) {
        e.preventDefault();
        const nick = document.getElementById('input-nickname').value.trim();
        if (!nick) return;
        nickname = nick;
        // Leer avatar y género
        const genero = document.querySelector('input[name="genero"]:checked')?.value || '';
        const skin = document.getElementById('avatar-skin')?.value || '#fcd7b6';
        const hair = document.getElementById('avatar-hair')?.value || '#3e2723';
        const face = document.getElementById('avatar-face')?.value || 'normal';
        avatarJugador = { genero, skin, hair, face };
        if (!jugadores[nickname]) {
            jugadores[nickname] = { total: 0, cursos: {}, avatar: avatarJugador };
        } else {
            jugadores[nickname].avatar = avatarJugador;
        }
        guardarJugadores();
        mostrarPantallaInicio();
        renderPerfilJugador();
    };
    document.getElementById('modal-cerrar').onclick = ocultarModal;
    renderPerfilJugador();
});

// Renderiza el perfil del jugador en la pantalla de grados
function renderPerfilJugador() {
    const perfil = document.getElementById('perfil-jugador');
    if (!perfil || !jugadores[nickname]) return;
    const avatar = jugadores[nickname].avatar || avatarJugador;
    // Trofeos por grados completados
    let trofeos = 0;
    let cursosCompletados = 0;
    let totalCursos = 0;
    if (jugadores[nickname].cursos) {
        for (let grado in jugadores[nickname].cursos) {
            const materias = jugadores[nickname].cursos[grado];
            const completadas = Object.values(materias).filter(c => c.completado).length;
            cursosCompletados += completadas;
            totalCursos += Object.keys(materias).length;
            if (completadas === 5) trofeos++;
        }
    }
    // Avatar SVG
    let avatarSVG = '';
    if (avatar.genero === 'otro') {
        avatarSVG = '<text x="20" y="60" font-size="40">🦠</text>';
    } else {
        // Formas cartoon/anime básicas
        let faceShape = '';
        let hairShape = '';
        let mouth = '';
        let blush = '';
        if (avatar.face === 'gordo') {
            faceShape = '<ellipse cx="40" cy="45" rx="26" ry="30" fill="'+avatar.skin+'" stroke="#e0bfae" stroke-width="2"/>';
            hairShape = '<ellipse cx="40" cy="22" rx="24" ry="13" fill="'+avatar.hair+'"/>';
            mouth = '<ellipse cx="40" cy="62" rx="8" ry="4" fill="#e57373"/>';
            blush = '<ellipse cx="28" cy="58" rx="3" ry="1.5" fill="#fbb"/><ellipse cx="52" cy="58" rx="3" ry="1.5" fill="#fbb"/>';
        } else if (avatar.face === 'flaco') {
            faceShape = '<ellipse cx="40" cy="45" rx="16" ry="28" fill="'+avatar.skin+'" stroke="#e0bfae" stroke-width="2"/>';
            hairShape = '<ellipse cx="40" cy="18" rx="18" ry="10" fill="'+avatar.hair+'"/>';
            mouth = '<path d="M34 62 Q40 66 46 62" stroke="#e57373" stroke-width="2" fill="none"/>';
        } else if (avatar.face === 'femenino') {
            faceShape = '<ellipse cx="40" cy="45" rx="22" ry="28" fill="'+avatar.skin+'" stroke="#e0bfae" stroke-width="2"/>';
            hairShape = '<ellipse cx="40" cy="20" rx="22" ry="12" fill="'+avatar.hair+'"/>';
            mouth = '<ellipse cx="40" cy="62" rx="6" ry="3" fill="#e57373"/>';
            blush = '<ellipse cx="30" cy="58" rx="2.5" ry="1.2" fill="#fbb"/><ellipse cx="50" cy="58" rx="2.5" ry="1.2" fill="#fbb"/>';
        } else if (avatar.face === 'masculino') {
            faceShape = '<ellipse cx="40" cy="45" rx="24" ry="32" fill="'+avatar.skin+'" stroke="#e0bfae" stroke-width="2"/>';
            hairShape = '<ellipse cx="40" cy="16" rx="20" ry="10" fill="'+avatar.hair+'"/>';
            mouth = '<rect x="36" y="60" width="8" height="3" rx="1.5" fill="#b71c1c"/>';
        } else {
            // Normal/cartoon
            faceShape = '<ellipse cx="40" cy="45" rx="22" ry="30" fill="'+avatar.skin+'" stroke="#e0bfae" stroke-width="2"/>';
            hairShape = '<ellipse cx="40" cy="20" rx="22" ry="12" fill="'+avatar.hair+'"/>';
            mouth = '<ellipse cx="40" cy="62" rx="5" ry="2.5" fill="#e57373"/>';
        }
        // Ojos tipo anime/cartoon
        let eyes = '<ellipse cx="32" cy="50" rx="3.5" ry="5" fill="#222"/><ellipse cx="48" cy="50" rx="3.5" ry="5" fill="#222"/>';
        let shine = '<ellipse cx="33" cy="48" rx="1" ry="1.5" fill="#fff"/><ellipse cx="49" cy="48" rx="1" ry="1.5" fill="#fff"/>';
        avatarSVG = faceShape + hairShape + eyes + shine + mouth + blush;
    }
    perfil.innerHTML = `
        <div class="flex flex-col items-center gap-2">
            <svg width="60" height="60" viewBox="0 0 80 80">${avatarSVG}</svg>
            <span class="font-bold text-indigo-700">${nickname}</span>
            <span class="text-xs text-gray-500">${avatar.genero ? avatar.genero.charAt(0).toUpperCase() + avatar.genero.slice(1) : ''}</span>
            <span class="text-sm text-gray-700">Puntos: <span class="font-bold">${jugadores[nickname].total || 0}</span></span>
            <span class="text-sm text-gray-700">Cursos completados: <span class="font-bold">${cursosCompletados}</span></span>
            <span class="text-2xl">${'🏆'.repeat(trofeos)}</span>
        </div>
    `;
}


// Selección de grado: muestra materias y progreso
function seleccionarGrado(grado) {
    gradoSeleccionado = grado;
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('seleccion-materia').classList.remove('hidden');
    document.getElementById('titulo-grado').textContent = `Materias de ${grado}° Grado`;
    renderMaterias();
}

// Renderizar materias con progreso y estado
function renderMaterias() {
    const materias = [
        { nombre: 'Inglés', icon: '7344f9e9-92b0-4866-83ec-e516c26697d5' },
        { nombre: 'Matemática', icon: '44310e98-8556-42b5-bd9e-948d44db06f6' },
        { nombre: 'Comunicación', icon: '780030d2-ad72-4a0c-8056-f8adedc058e0' },
        { nombre: 'Ciencia y Tecnología', icon: '8654c946-2772-4be6-b915-8a6ca2b1cd6f' },
        { nombre: 'Personal Social', icon: '46cdf4a7-6748-4e93-98df-73d1bda51860'},
        { nombre: 'Arte y Cultura', icon: '0e0de5b8-070c-41c1-8d90-52b1b380cf19'},
        { nombre: 'Fisica Cuantica', icon: '0e0de5b8-070c-41c1-8d90-52b1b380cf19'},
               ];
    const grid = document.querySelector('#seleccion-materia .grid');
    grid.innerHTML = '';
    materias.forEach(mat => {
        let estado = '';
        let puntaje = 0;
        let completado = false;
        if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][mat.nombre]) {
            const data = jugadores[nickname].cursos[gradoSeleccionado][mat.nombre];
            puntaje = data.puntaje || 0;
            completado = !!data.completado;
        }
        estado = completado ? 'bg-green-100 border-2 border-green-400' : 'bg-white';
        const div = document.createElement('div');
        div.className = `card ${estado} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative`;
        div.onclick = () => seleccionarMateria(mat.nombre);
        div.innerHTML = `
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/${mat.icon}.png" class="mx-auto mb-4 materia-icon">
            <h3 class="text-xl font-bold mb-2 text-center">${mat.nombre}</h3>
            <p class="text-gray-700 text-center mb-2">Puntaje: <span class="font-bold">${puntaje}</span></p>
            ${completado ? '<span class="absolute top-2 right-2 bg-green-400 text-white px-2 py-1 rounded text-xs animate__animated animate__bounceIn">¡Completado!</span>' : ''}
        `;
        grid.appendChild(div);
    });
}
        
// Función para volver a la pantalla de grados
function volverAGrados() {
    renderGrados();
    document.getElementById('seleccion-materia').classList.add('hidden');
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('resultados').classList.add('hidden');
    document.getElementById('inicio').classList.remove('hidden');
    volverAudioLobby(); // <-- Agrega esto aquí
}
        

// Selección de materia: validación, puntaje y animación
function seleccionarMateria(materia) {
    materiaSeleccionada = materia;
    // Validar existencia de preguntas para el grado y materia
    if (!bancoPreguntas[gradoSeleccionado] || !bancoPreguntas[gradoSeleccionado][materia] || bancoPreguntas[gradoSeleccionado][materia].length < 1) {
        mostrarModal('Sin preguntas', 'No hay preguntas disponibles para este curso en este grado.');
        return;
    }
    const todasPreguntas = bancoPreguntas[gradoSeleccionado][materia];
    // Si ya completó, no dejar repetir
    if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][materia] && jugadores[nickname].cursos[gradoSeleccionado][materia].completado) {
        mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro.');
        return;
    }
    // Si ya tenía puntaje previo, restar del total antes de reiniciar
    puntajeCursoPrevio = 0;
    if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][materia]) {
        puntajeCursoPrevio = jugadores[nickname].cursos[gradoSeleccionado][materia].puntaje || 0;
        jugadores[nickname].total = (jugadores[nickname].total || 0) - puntajeCursoPrevio;
        jugadores[nickname].cursos[gradoSeleccionado][materia].puntaje = 0;
        guardarJugadores();
    }
    preguntas = seleccionarPreguntasAleatorias(todasPreguntas, Math.min(10, todasPreguntas.length));
    preguntaActual = 0;
    puntuacion = 0;
    reproducirAudioResolve(materia); // <-- Agrega esto aquí
    // Animación de entrada al quiz
    document.getElementById('juego').classList.add('animate__animated','animate__fadeIn');
    setTimeout(()=>{
        document.getElementById('juego').classList.remove('animate__animated','animate__fadeIn');
    }, 1200);
    document.getElementById('seleccion-materia').classList.add('hidden');
    document.getElementById('juego').classList.remove('hidden');
    document.getElementById('materia-actual').textContent = materia;
    document.getElementById('grado-actual').textContent = `${gradoSeleccionado}° Grado`;
    document.getElementById('puntuacion').textContent = `${puntuacion} pts`;
    document.getElementById('barra-progreso').style.width = '0%';
    mostrarPregunta();
}
        
// Función para volver a la selección de materias
function volverAMaterias() {
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('seleccion-materia').classList.remove('hidden');
    volverAudioLobby(); // <-- Agrega esto aquí
}

// Mostrar pregunta con animación
function mostrarPregunta() {
    respondido = false;
    // Animación de entrada
    const preguntaCont = document.getElementById('pregunta-container');
    preguntaCont.classList.add('animate__animated','animate__fadeInUp');
    setTimeout(()=>{
        preguntaCont.classList.remove('animate__animated','animate__fadeInUp');
    }, 800);
    // Actualizar progreso
    const porcentaje = (preguntaActual / preguntas.length) * 100;
    document.getElementById('barra-progreso').style.width = `${porcentaje}%`;
    // Mostrar pregunta
    if (!preguntas[preguntaActual]) {
        mostrarResultados();
        return;
    }
    const pregunta = preguntas[preguntaActual];
    document.getElementById('pregunta-texto').textContent = pregunta.pregunta;
    // Mostrar opciones
    const opcionesContainer = document.getElementById('opciones-container');
    opcionesContainer.innerHTML = '';
    pregunta.opciones.forEach((opcion, index) => {
        const opcionElement = document.createElement('div');
        opcionElement.className = 'respuesta bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200';
        opcionElement.textContent = opcion;
        opcionElement.onclick = () => seleccionarRespuesta(index);
        opcionesContainer.appendChild(opcionElement);
    });
    // Ocultar feedback si está visible
    document.getElementById('feedback-container').classList.add('hidden');
}
        
// Función para seleccionar una respuesta
function seleccionarRespuesta(index) {
    if (respondido) return;
    respondido = true;
    
    const pregunta = preguntas[preguntaActual];
    const opciones = document.querySelectorAll('#opciones-container > div');
    
    // Mostrar retroalimentación
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTexto = document.getElementById('feedback-texto');
    const feedbackImagen = document.getElementById('feedback-imagen');
    
    if (index === pregunta.respuestaCorrecta) {
        // Respuesta correcta
        opciones[index].classList.add('correcta');
        feedbackTexto.textContent = "¡Correcto! " + pregunta.explicacion;
        feedbackImagen.src = "img/10280401.jpg";
        puntuacion += 10;// * gradoSeleccionado; // Más puntos para grados superiores
        mostrarPantallaFelicitacionesRespuesta();
    } else {
        // Respuesta incorrecta
        opciones[index].classList.add('incorrecta');
        opciones[pregunta.respuestaCorrecta].classList.add('correcta');
        feedbackTexto.textContent = "Incorrecto. " + pregunta.explicacion;
        feedbackImagen.src = "img/10280401.jpg";
        mostrarPantallaErrorRespuesta();
    }
    
    // Actualizar puntuación con animación
    const puntuacionElement = document.getElementById('puntuacion');
    puntuacionElement.textContent = `${puntuacion} pts`;
    puntuacionElement.classList.add('puntuacion-anim');
    setTimeout(() => {
        puntuacionElement.classList.remove('puntuacion-anim');
    }, 1000);
    
    feedbackContainer.classList.remove('hidden');
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}
        

// Mostrar resultados y guardar progreso
function mostrarResultados() {
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('resultados').classList.remove('hidden');
    const puntajeMaximo = preguntas.length * 10;// * gradoSeleccionado;
    const porcentaje = Math.round((puntuacion / puntajeMaximo) * 100);
    document.getElementById('resultado-titulo').textContent = `Resultados de ${materiaSeleccionada}`;
    document.getElementById('resultado-puntuacion').textContent = `Puntuación: ${puntuacion} de ${puntajeMaximo} (${porcentaje}%)`;
    // Considerar completado si responde todas las preguntas y obtiene al menos 50%
    let completado = false;
    if (preguntaActual >= preguntas.length - 1 && porcentaje >= 50) {
        completado = true;
    }
    // Guardar puntaje y estado
    if (!jugadores[nickname].cursos[gradoSeleccionado]) jugadores[nickname].cursos[gradoSeleccionado] = {};
    jugadores[nickname].cursos[gradoSeleccionado][materiaSeleccionada] = {
        puntaje: puntuacion,
        completado: completado
    };
    // Sumar al total
    jugadores[nickname].total = (jugadores[nickname].total || 0) + puntuacion;
    guardarJugadores();
    renderRanking();
    // Mensaje
    if (completado) {
        document.getElementById('resultado-mensaje').textContent = porcentaje === 100
            ? "¡Curso completado al 100%!"
            : "¡Curso completado! Buen trabajo, pero hay áreas que puedes mejorar. ¡Sigue practicando!";
        mostrarPantallaFelicitaciones();
    } else if (porcentaje >= 80) {
        document.getElementById('resultado-mensaje').textContent = "¡Excelente trabajo! Has demostrado un gran conocimiento en esta materia.";
    } else if (porcentaje >= 50) {
        document.getElementById('resultado-mensaje').textContent = "¡Curso completado! Buen trabajo, pero hay áreas que puedes mejorar. ¡Sigue practicando!";
    } else {
        document.getElementById('resultado-mensaje').textContent = "Puedes hacerlo mejor. Revisa los temas y vuelve a intentarlo.";
    }
}

// Pantalla de felicitaciones con confeti
function mostrarPantallaFelicitaciones() {
    setTimeout(()=>{
        // Modal de felicitaciones
        mostrarModal('¡Felicidades!', '¡Completaste el curso al 100%! 🎉');
        // Confeti
        if (window.confetti) {
            for (let i = 0; i < 3; i++) {
                setTimeout(()=>{
                    confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 },
                        zIndex: 9999
                    });
                }, i*400);
            }
        }
    }, 800);
}
function mostrarPantallaFelicitacionesRespuesta() {
    setTimeout(()=>{
        // Confeti
        if (window.confetti) {
            for (let i = 0; i < 3; i++) {
                setTimeout(()=>{
                    confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 },
                        zIndex: 9999
                    });
                }, i*400);
            }
        }
    }, 800);
}
function mostrarPantallaErrorRespuesta() {
    // Crear contenedor del icono si no existe
    let errorIcon = document.getElementById("icono-error-respuesta");
    if (!errorIcon) {
        errorIcon = document.createElement("div");
        errorIcon.id = "icono-error-respuesta";
        errorIcon.innerHTML = "❌";
        document.body.appendChild(errorIcon);
    }

    // Mostrar y activar animación
    errorIcon.classList.add("visible", "sacudida-error");

    // Eliminar la animación después de un tiempo
    setTimeout(() => {
        errorIcon.classList.remove("sacudida-error");
        errorIcon.classList.remove("visible");
    }, 1500);
}


        
        // Función para repetir la misma materia
        function repetirMateria(forceCheckCompletado = false) {
            document.getElementById('resultados').classList.add('hidden');
            // Si el curso ya está completado y se fuerza el chequeo, volver a selección de cursos
            if (forceCheckCompletado && jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][materiaSeleccionada]) {
                const datosMateria = jugadores[nickname].cursos[gradoSeleccionado][materiaSeleccionada];
                if (datosMateria.completado) {
                    mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro....');
                    console.log("retornando a selección de materias porque el curso ya está completado2");
                    renderMaterias();
                    // Mostrar selección de materias y ocultar otras pantallas
                    document.getElementById('resultados').classList.add('hidden');
                    document.getElementById('juego').classList.add('hidden');
                    document.getElementById('inicio').classList.add('hidden');
                    document.getElementById('seleccion-materia').classList.remove('hidden');
                    console.log("retornando a selección de materias porque el curso ya está completado");
                    // Asegurarse de que el título de grado esté actualizado
                    document.getElementById('titulo-grado').textContent = `Materias de ${gradoSeleccionado}° Grado`;
                    return;
                }
            }
            seleccionarMateria(materiaSeleccionada);
        }
        // Hacer la función accesible globalmente para el HTML
        window.repetirMateria = repetirMateria;

        // Avatar dinámico: listeners para inputs de avatar
        document.addEventListener('DOMContentLoaded', function() {
            const skinInput = document.getElementById('avatar-skin');
            const hairInput = document.getElementById('avatar-hair');
            const faceInput = document.getElementById('avatar-face');
            const svg = document.getElementById('avatar-svg');
            if (skinInput && hairInput && faceInput && svg) {
                function renderAvatar() {
                    const skin = skinInput.value;
                    const hair = hairInput.value;
                    const face = faceInput.value;
                    let faceShape = '';
                    if (face === 'gordo') faceShape = '<ellipse cx="40" cy="45" rx="26" ry="30" fill="'+skin+'"/>';
                    else if (face === 'flaco') faceShape = '<ellipse cx="40" cy="45" rx="18" ry="28" fill="'+skin+'"/>';
                    else if (face === 'femenino') faceShape = '<ellipse cx="40" cy="45" rx="22" ry="28" fill="'+skin+'"/>';
                    else if (face === 'masculino') faceShape = '<ellipse cx="40" cy="45" rx="24" ry="32" fill="'+skin+'"/>';
                    else faceShape = '<ellipse cx="40" cy="45" rx="22" ry="30" fill="'+skin+'"/>';
                    // Pelo simple
                    let hairShape = '<ellipse cx="40" cy="25" rx="22" ry="12" fill="'+hair+'"/>';
                    svg.innerHTML = faceShape + hairShape + '<circle cx="32" cy="50" r="3" fill="#222"/><circle cx="48" cy="50" r="3" fill="#222"/>';
                }
                skinInput.addEventListener('input', renderAvatar);
                hairInput.addEventListener('input', renderAvatar);
                faceInput.addEventListener('change', renderAvatar);
                renderAvatar();
            }
            // Cambiar icono de género si selecciona "otro"
            const generoRadios = document.querySelectorAll('input[name="genero"]');
            generoRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'otro') {
                        document.getElementById('avatar-svg').innerHTML = '<text x="20" y="60" font-size="40">🦠</text>';
                    } else {
                        if (skinInput && hairInput && faceInput) {
                            // Volver a renderizar el avatar normal
                            skinInput.dispatchEvent(new Event('input'));
                        }
                    }
                });
            });
        });

// --- AUDIO DE LOBBY Y RESOLUCIÓN ---

let audioLobby = null;
let audioResolve = null;

// Iniciar audio de lobby al cargar la página
function iniciarAudioLobby() {
    if (audioLobby) return; // Evitar múltiples instancias
    audioLobby = new Audio('song/lobby.mp3');
    audioLobby.loop = true;
    audioLobby.volume = 0.25; // Volumen moderado
    audioLobby.play().catch(()=>{}); // Por si el navegador bloquea autoplay
}

function reproducirAudioResolve(materia) {
    const listsong = {
        "Inglés": "ing.mp3",
        "Matemática": "mt.mp3",
        "Comunicación": "com.mp3",
        "Ciencia y Tecnología": "cyt.mp3",
        "Personal Social": "ps.mp3",
        "Arte y Cultura": "art.mp3",
        "Fisica Cuantica": "Fiscia.mp3"
    };

    // Detener el audio de lobby si está activo
    if (audioLobby) {
        audioLobby.pause();
        audioLobby.currentTime = 0;
    }

    // Obtener el nombre del archivo de audio según la materia
    let archivoAudio = listsong[materia];

    // Si no se encontró la materia, elegir un audio aleatorio de la lista
    if (!archivoAudio) {
        const valores = Object.values(listsong);
        archivoAudio = valores[Math.floor(Math.random() * valores.length)];
    }

    // Crear o actualizar el audio de resolución
    if (!audioResolve) {
        audioResolve = new Audio('song/' + archivoAudio);
        audioResolve.loop = true;
        audioResolve.volume = 0.25;
    } else {
        audioResolve.pause();
        audioResolve.src = 'song/' + archivoAudio;
        audioResolve.currentTime = 0;
    }

    // Reproducir el audio
    audioResolve.play().catch(() => {});
}


// Volver al audio de lobby (por ejemplo, al volver al menú)
function volverAudioLobby() {
    if (audioResolve) {
        audioResolve.pause();
        audioResolve.currentTime = 0;
    }
    if (audioLobby) {
        audioLobby.play().catch(()=>{});
    }
}