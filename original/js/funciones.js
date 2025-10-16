document.addEventListener('DOMContentLoaded', () => {
        iniciarAudioLobby();
});

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
        // Aquí abrimos el flujo: dificultad -> video -> quiz
        div.onclick = () => abrirFlujoMateria(mat.nombre);
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
function seleccionarMateria(materia, dificultadForzada = null) {
    materiaSeleccionada = materia;
    if (!bancoPreguntas || !bancoPreguntas[gradoSeleccionado] || !bancoPreguntas[gradoSeleccionado][materia]) {
        mostrarModal('Sin preguntas', 'No hay preguntas disponibles para este curso en este grado.');
        return;
    }
    const todasPreguntas = bancoPreguntas[gradoSeleccionado][materia];
    if (!Array.isArray(todasPreguntas) || todasPreguntas.length === 0) {
        mostrarModal('Sin preguntas', 'No hay preguntas válidas en el banco para esta materia.');
        return;
    }

    // Determinar dificultad efectiva: prioridad -> argumento, jugador guardado, window, localStorage
    let dif = dificultadForzada || null;
    if (!dif) {
        if (jugadores[nickname] && jugadores[nickname].dificultadPorGrado && jugadores[nickname].dificultadPorGrado[gradoSeleccionado] && jugadores[nickname].dificultadPorGrado[gradoSeleccionado][materia]) {
            dif = jugadores[nickname].dificultadPorGrado[gradoSeleccionado][materia];
        } else if (window.dificultadSeleccionada) {
            dif = window.dificultadSeleccionada;
        } else if (localStorage.getItem('dificultad')) {
            dif = localStorage.getItem('dificultad');
        }
    }

    // Filtrar por dificultad si aplica (campo 'dificultad' o 'nivel' en cada pregunta)
    let preguntasFiltradas = todasPreguntas;
    if (dif) {
        const difLower = dif.toString().toLowerCase();
        preguntasFiltradas = todasPreguntas.filter(q => {
            const qdif = (q.dificultad || q.nivel || '').toString().toLowerCase();
            return qdif === difLower;
        });
        if (preguntasFiltradas.length === 0) {
            // Mostrar aviso y fallback a todas las preguntas
            mostrarModal('Sin preguntas para ese nivel', 'No se encontraron preguntas para la dificultad seleccionada. Se usarán todas las preguntas.');
            preguntasFiltradas = todasPreguntas;
        }
    }

    // Si ya completó, no dejar repetir
    if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][materia] && jugadores[nickname].cursos[gradoSeleccionado][materia].completado) {
        mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro.');
        return;
    }

    // restablecer puntaje previo
    puntajeCursoPrevio = 0;
    if (jugadores[nickname] && jugadores[nickname].cursos && jugadores[nickname].cursos[gradoSeleccionado] && jugadores[nickname].cursos[gradoSeleccionado][materia]) {
        puntajeCursoPrevio = jugadores[nickname].cursos[gradoSeleccionado][materia].puntaje || 0;
        jugadores[nickname].total = (jugadores[nickname].total || 0) - puntajeCursoPrevio;
        jugadores[nickname].cursos[gradoSeleccionado][materia].puntaje = 0;
        guardarJugadores();
    }

    preguntas = seleccionarPreguntasAleatorias(preguntasFiltradas, Math.min(10, preguntasFiltradas.length));
    preguntaActual = 0;
    puntuacion = 0;
    reproducirAudioResolve(materia);

    // UI: animaciones y cambio de pantallas
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

// Helper: actualiza la barra de progreso (0..100)
function actualizarBarraProgreso() {
    const barra = document.getElementById('barra-progreso');
    if (!barra || !Array.isArray(preguntas) || preguntas.length === 0) return;
    // Mostrar progreso de preguntas respondidas (preguntaActual respondida => (preguntaActual+1)/total)
    // Durante la visualización de pregunta usamos preguntaActual como índice actual (no contada aún)
    // Si respondido === true, mostramos progreso incluyendo la pregunta actual
    const respondedCount = respondido ? Math.min(preguntaActual + 1, preguntas.length) : preguntaActual;
    const porcentaje = Math.round((respondedCount / preguntas.length) * 100);
    barra.style.width = `${porcentaje}%`;
}

// Mostrar pregunta con animación
function mostrarPregunta() {
    const contPregunta = document.getElementById('pregunta-texto');
    const contOpciones = document.getElementById('opciones-container');
    const feedbackContainer = document.getElementById('feedback-container');

    // resetear estado de respuesta para la nueva pregunta
    respondido = false;

    // remover botón "Siguiente" anterior si existe
    const nextPrev = document.getElementById('btn-siguiente-pregunta');
    if (nextPrev && nextPrev.parentNode) nextPrev.parentNode.removeChild(nextPrev);

    if (!preguntas || !Array.isArray(preguntas) || typeof preguntaActual === 'undefined' || !preguntas[preguntaActual]) {
        //console.warn('[funciones.js] mostrarPregunta: preguntas no inicializadas o preguntaActual inválida.');
        mostrarModal('Error', 'No se pudo cargar la pregunta. Por favor vuelve a la pantalla de materias.');
        document.getElementById('juego').classList.add('hidden');
        document.getElementById('seleccion-materia').classList.remove('hidden');
        return;
    }
    const q = preguntas[preguntaActual];
    if (!q || !Array.isArray(q.opciones)) {
        //console.warn('[funciones.js] pregunta inválida en mostrarPregunta:', q);
        mostrarModal('Pregunta inválida', 'La pregunta actual tiene formato incorrecto. Se usará la siguiente.');
        siguientePregunta();
        return;
    }

    contPregunta.textContent = q.pregunta || 'Pregunta sin texto';
    contOpciones.innerHTML = '';
    q.opciones.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opcion-btn respuesta bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200';
        btn.textContent = opt;
        btn.setAttribute('data-op-index', i);
        btn.onclick = () => seleccionarRespuesta(i);
        contOpciones.appendChild(btn);
    });

    if (feedbackContainer) {
        feedbackContainer.classList.add('hidden');
        // limpiar contenido de feedback (texto, imagen) si aplica
        const ft = document.getElementById('feedback-texto');
        if (ft) ft.textContent = '';
        const fi = document.getElementById('feedback-imagen');
        if (fi) fi.src = '';
    }

    // actualizar barra de progreso al mostrar pregunta (muestra las respondidas hasta ahora)
    actualizarBarraProgreso();
}

function seleccionarRespuesta(index) {
    if (respondido) return;
    respondido = true;

    const pregunta = preguntas[preguntaActual];
    if (!pregunta) {
        //console.warn('[funciones.js] seleccionarRespuesta: pregunta inválida.');
        return;
    }

    const opciones = Array.from(document.querySelectorAll('#opciones-container .opcion-btn'));
    if (!opciones || opciones.length === 0) {
        //console.warn('[funciones.js] seleccionarRespuesta: no se encontraron opciones en el DOM.');
        return;
    }

    const botonSeleccionado = opciones[index];
    const indiceCorrecto = (typeof pregunta.respuestaCorrecta !== 'undefined') ? Number(pregunta.respuestaCorrecta) : 0;
    if (!botonSeleccionado) {
        //console.warn('[funciones.js] seleccionarRespuesta: índice de opción fuera de rango.', index);
        return;
    }

    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTexto = document.getElementById('feedback-texto');
    const feedbackImagen = document.getElementById('feedback-imagen');

    opciones.forEach(o => {
        o.classList.remove('correcta', 'incorrecta', 'seleccionada');
        // deshabilitar botones para evitar más clicks
        o.disabled = true;
    });

    botonSeleccionado.classList.add('seleccionada');

    if (index === indiceCorrecto) {
        botonSeleccionado.classList.add('correcta');
        if (feedbackTexto) feedbackTexto.textContent = "¡Correcto! " + (pregunta.explicacion || '');
        if (feedbackImagen) feedbackImagen.src = "img/10280401.jpg";
        puntuacion += 10;
        mostrarPantallaFelicitacionesRespuesta();
    } else {
        botonSeleccionado.classList.add('incorrecta');
        if (opciones[indiceCorrecto]) opciones[indiceCorrecto].classList.add('correcta');
        if (feedbackTexto) feedbackTexto.textContent = "Incorrecto. " + (pregunta.explicacion || '');
        if (feedbackImagen) feedbackImagen.src = "img/10280401.jpg";
        mostrarPantallaErrorRespuesta();
    }

    const puntuacionElement = document.getElementById('puntuacion');
    if (puntuacionElement) {
        puntuacionElement.textContent = `${puntuacion} pts`;
        puntuacionElement.classList.add('puntuacion-anim');
        setTimeout(() => puntuacionElement.classList.remove('puntuacion-anim'), 1000);
    }

    if (feedbackContainer) feedbackContainer.classList.remove('hidden');

    // actualizar barra de progreso incluyendo la pregunta respondida
    actualizarBarraProgreso();

    // Crear botón "Siguiente pregunta" (visible solo después de responder)
    let btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    if (!btnSiguiente) {
        btnSiguiente = document.createElement('button');
        btnSiguiente.id = 'btn-siguiente-pregunta';
        btnSiguiente.className = 'mt-4 px-4 py-2 bg-indigo-600 text-white rounded hidden';
        btnSiguiente.textContent = (preguntaActual < preguntas.length - 1) ? 'Siguiente pregunta' : 'Ver resultados';
        // insertar después del contenedor de opciones
        const contOpciones = document.getElementById('opciones-container');
        if (contOpciones && contOpciones.parentNode) contOpciones.parentNode.appendChild(btnSiguiente);
        else document.getElementById('juego').appendChild(btnSiguiente);
    } else {
        btnSiguiente.textContent = (preguntaActual < preguntas.length - 1) ? 'Siguiente pregunta' : 'Ver resultados';
        btnSiguiente.style.display = '';
    }

    btnSiguiente.onclick = () => {
        // permitir nuevas respuestas en la siguiente pregunta
        respondido = false;
        // habilitar botones para la próxima pregunta (se limpiarán en mostrarPregunta)
        opciones.forEach(o => o.disabled = false);
        siguientePregunta();
        // remover el botón para evitar duplicados (se recreará en la siguiente respuesta)
        const b = document.getElementById('btn-siguiente-pregunta');
        if (b && b.parentNode) b.parentNode.removeChild(b);
    };
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
    const barra = document.getElementById('barra-progreso');
    if (barra) barra.style.width = '100%';
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
            ? "¡Curso completado al 100%! 🎉"
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
    // Crear el overlay con el check
    const overlay = document.createElement("div");
    overlay.id = "felicitacion-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.background = "rgba(243, 243, 243, 0.3)";
    overlay.style.zIndex = "9998";
    
    const check = document.createElement("div");
    check.innerHTML = "✔"; // Ícono de check
    check.style.fontSize = "120px";
    check.style.color = "#46d44bff"; // Verde bonito
    check.style.textShadow = "2px 2px 8px rgba(0,0,0,0.5)";
    
    overlay.appendChild(check);
    document.body.appendChild(overlay);

    // Confeti
    setTimeout(() => {
        if (window.confetti) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 },
                        zIndex: 9999
                    });
                }, i * 400);
            }
        }
    }, 800);

    // Eliminar el overlay después de 2.5 segundos
    setTimeout(() => {
        overlay.remove();
    }, 2500);
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
                    //console.log("retornando a selección de materias porque el curso ya está completado2");
                    renderMaterias();
                    // Mostrar selección de materias y ocultar otras pantallas
                    document.getElementById('resultados').classList.add('hidden');
                    document.getElementById('juego').classList.add('hidden');
                    document.getElementById('inicio').classList.add('hidden');
                    document.getElementById('seleccion-materia').classList.remove('hidden');
                    //console.log("retornando a selección de materias porque el curso ya está completado");
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
        "Arte y Cultura": "art.mp3"
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

// --- NUEVAS FUNCIONES DE DIFICULTAD Y TUTORIAL ---

(function () {
    'use strict';

    // Helpers
    const _get = id => document.getElementById(id);
    const _qsa = sel => Array.from(document.querySelectorAll(sel));
    const log = (...args) => console.info('[funciones.js]', ...args);
    const warn = (...args) => console.warn('[funciones.js]', ...args);

    // ===== Helpers mínimos globales que faltaban =====
    // Defínelos en window solo si no existen (no sobrescribimos)
    if (typeof window._get === 'undefined') {
        window._get = function (id) {
            if (!id) return null;
            if (typeof id === 'string' && id.startsWith('#')) id = id.slice(1);
            return document.getElementById(id) || null;
        };
    }
    if (typeof window._qsa === 'undefined') {
        window._qsa = function (selector) {
            try { return Array.from(document.querySelectorAll(selector)); }
            catch (e) { return []; }
        };
    }
    if (typeof window.log === 'undefined') {
        //window.log = function (...args) { };//console.log('[funciones.js]', ...args); };
    }
    if (typeof window.warn === 'undefined') {
        //window.warn = function (...args) { console.warn('[funciones.js]', ...args); };
    }

    // Estado global
    window.dificultadSeleccionada = window.dificultadSeleccionada || null;
    window.pendingMateria = window.pendingMateria || null;

    // Actualiza texto visible de la dificultad
    function actualizarTextoDificultad() {
        const el = _get('dificultad-actual');
        if (!el) return;
        el.textContent = window.dificultadSeleccionada ? 'Seleccionada: ' + window.dificultadSeleccionada : 'Usando todas las dificultades';
    }

    // Configuración de dificultad
    function setDificultad(valor) {
        window.dificultadSeleccionada = valor;
        actualizarTextoDificultad();
        log('dificultad seleccionada ->', valor);
    }

    function confirmarDificultad() {
        const cont = _get('dificultad-seccion');
        if (cont) cont.classList.add('hidden');
        if (window.dificultadSeleccionada) localStorage.setItem('dificultad', window.dificultadSeleccionada);
        actualizarTextoDificultad();
        log('Dificultad confirmada:', window.dificultadSeleccionada);
    }

    function resetDificultad() {
        window.dificultadSeleccionada = null;
        localStorage.removeItem('dificultad');
        actualizarTextoDificultad();
        _qsa('#dificultad-seccion input[name="dificultad"]').forEach(i => i.checked = false);
        log('Dificultad reseteada (usar todas).');
    }

    // Mostrar la sección de dificultad (quita la clase hidden)
    function mostrarDificultadSeleccion() {
        const cont = _get('dificultad-seccion');
        if (!cont) {
            warn('No se encontró #dificultad-seccion en el DOM');
            return;
        }
        cont.classList.remove('hidden');
        actualizarTextoDificultad();
        //log('Sección de dificultad desplegada.');
    }

    // Modal / vídeo
    function mostrarVideoTutorial(materia, videoSrc) {
        window.pendingMateria = materia || null;
        // obtener o crear modal (estructura simple que contiene un iframe)
        let modal = _get('modal-video');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-video';
            modal.className = 'fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-60 hidden';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-4 max-w-3xl w-full relative">
                    <button id="modal-video-cerrar" class="absolute right-3 top-3 text-gray-600 rounded-md px-2 py-1 hover:bg-gray-100">✕</button>
                    <h3 id="video-titulo" class="text-xl font-bold text-indigo-700 mb-2 text-center">Tutorial</h3>
                    <div class="w-full aspect-video mb-3">
                        <div id="video-container" class="w-full h-full bg-black rounded flex items-center justify-center"></div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-sm text-gray-600">El video se reproducirá automáticamente (silenciado). Puedes saltarlo.</div>
                        <div>
                            <button id="btn-saltar-video" class="px-4 py-2 rounded bg-gray-200 mr-2 hidden">Saltar video</button>
                            <button id="btn-iniciar-desde-video" class="btn-jugar px-4 py-2 rounded bg-indigo-500 text-white">Saltar video</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('#modal-video-cerrar').addEventListener('click', cerrarVideo);
        }

        const titulo = modal.querySelector('#video-titulo');
        const container = modal.querySelector('#video-container');
        if (titulo) titulo.textContent = materia ? `${materia} — Tutorial` : 'Tutorial';

        // limpiar contenedor y crear iframe YouTube (autoplay mute)
        container.innerHTML = '';
        if (videoSrc) {
            let src = videoSrc;
            if (src.includes('watch?v=')) src = src.replace('watch?v=', 'embed/');
            if (!src.includes('?')) src += '?autoplay=1&mute=1';
            else src += '&autoplay=1&mute=1';
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = src;
            iframe.allow = 'autoplay; encrypted-media';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        } else {
            container.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">No hay tutorial disponible.</div>';
        }

        // listeners para botones del modal (asegurar no adjuntar múltiples veces)
        const btnSaltar = modal.querySelector('#btn-saltar-video');
        const btnIniciar = modal.querySelector('#btn-iniciar-desde-video');
        if (btnSaltar) {
            btnSaltar.replaceWith(btnSaltar.cloneNode(true));
            modal.querySelector('#btn-saltar-video').addEventListener('click', saltarVideo);
        }
        if (btnIniciar) {
            btnIniciar.replaceWith(btnIniciar.cloneNode(true));
            modal.querySelector('#btn-iniciar-desde-video').addEventListener('click', iniciarSeccionDesdeVideo);
        }

        modal.classList.remove('hidden');
        modal.style.zIndex = 9999;
        log('Modal video mostrado (iframe) para materia:', materia, 'src:', videoSrc);
    }

    function iniciarSeccionDesdeVideo() {
        // cerrar modal (no hay <video> que pausar; solo ocultar iframe)
        const modal = _get('modal-video');
        if (modal) modal.classList.add('hidden');

        const materia = window.pendingMateria;
        // recuperar dificultad preferida
        const dif = window.dificultadSeleccionada || localStorage.getItem('dificultad') || null;

        // Llamada segura a seleccionarMateria si existe
        if (typeof window.seleccionarMateria === 'function') {
            try {
                // Intentar con firma (materia, dificultad) y si falla, con (materia)
                window.seleccionarMateria(materia, dif);
                log('Se llamó seleccionarMateria con dificultad:', dif);
            } catch (e) {
                try {
                    window.seleccionarMateria(materia);
                    log('Se llamó seleccionarMateria sin dificultad (falló la versión con dif).');
                } catch (e2) {
                    warn('Error al llamar seleccionarMateria:', e2);
                }
            }
        } else {
            warn('Función seleccionarMateria no definida; asegúrate que preguntas.js exporte/declare seleccionarMateria en window.');
        }
    }

    function saltarVideo() {
        iniciarSeccionDesdeVideo();
    }

    function cerrarVideo() {
        const modal = _get('modal-video');
        if (modal) modal.classList.add('hidden');
    }

    // Observador: cuando #seleccion-materia pasa de hidden -> visible, mostramos la sección de dificultad
    function instalarObservadorSeleccionMateria() {
        const cont = _get('seleccion-materia');
        if (!cont) {
            warn('No se encontró #seleccion-materia para observar.');
            return;
        }
        const obs = new MutationObserver(muts => {
            muts.forEach(m => {
                if (m.attributeName === 'class') {
                    const isHidden = cont.classList.contains('hidden');
                    if (!isHidden) {
                        // Si título de grado está presente, despliegue dificultad
                        const titulo = (_get('titulo-grado') || {}).textContent || '';
                        if (titulo.trim().length > 0) {
                            mostrarDificultadSeleccion();
                        } else {
                            // Si no hay título aún, mostrar igualmente para no bloquear flujo
                            mostrarDificultadSeleccion();
                        }
                    }
                }
            });
        });
        obs.observe(cont, { attributes: true, attributeFilter: ['class'] });
        //log('Observador instalado en #seleccion-materia.');
    }

    // Inicialización en DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        //log('funciones.js cargado y listo.');

        // Asegurar texto de dificultad inicial
        actualizarTextoDificultad();

        // Asignar listeners a botones del modal si no usan onclick inline
        // (en tu index.html ya hay onclick inline; esto es un fallback)
        _qsa('[data-video-src]').forEach(el => {
            el.addEventListener('click', e => {
                const materia = el.dataset.materia || el.getAttribute('data-materia') || el.textContent.trim();
                const src = el.dataset.videoSrc;
                mostrarVideoTutorial(materia, src);
            });
        });

        instalarObservadorSeleccionMateria();
    });

    // Exponer funciones al scope global para onclick inline
    Object.assign(window, {
        setDificultad,
        confirmarDificultad,
        resetDificultad,
        mostrarDificultadSeleccion,
        mostrarVideoTutorial,
        iniciarSeccionDesdeVideo,
        saltarVideo,
        cerrarVideo
    });

    // Seguridad: capturar errores no manejados y mostrar en consola
    window.addEventListener('error', (e) => {
        warn('Error global detectado:', e.message, 'en', e.filename + ':' + e.lineno);
    });

})();

/* ====== Añadido: normalización de dificultad de preguntas y flujo por materia (dificultad -> video -> quiz) ====== */
(function () {
    'use strict';

    // Asegura que bancoPreguntas exista (definido en preguntas.js)
    function normalizarDificultadesEnBanco() {
        if (typeof bancoPreguntas !== 'object') return;
        Object.keys(bancoPreguntas).forEach(grado => {
            const materias = bancoPreguntas[grado];
            Object.keys(materias).forEach(materia => {
                const arr = materias[materia];
                if (!Array.isArray(arr)) return;
                arr.forEach((q, idx) => {
                    if (!q) return;
                    // si ya tiene propiedad 'dificultad' ó 'nivel' la respetamos
                    if (q.dificultad || q.nivel) {
                        if (!q.dificultad && q.nivel) q.dificultad = q.nivel;
                        return;
                    }
                    // heurística: primeros 10 = facil, 10..19 = intermedio, resto dificil
                    if (idx < 10) q.dificultad = 'facil';
                    else if (idx < 20) q.dificultad = 'intermedio';
                    else q.dificultad = 'dificil';
                });
            });
        });
        //console.info('[funciones.js] bancoPreguntas normalizado con campo "dificultad" cuando faltaba.');
    }

    // Mapa de videos por materia (temporal: usa links YouTube)
    const videoTutoriales = {
        "Inglés": "https://www.youtube.com/embed/ysz5S6PUM-U", // ejemplo (reemplaza)
        "Matemática": "https://www.youtube.com/embed/ysz5S6PUM-U",
        "Comunicación": "https://www.youtube.com/embed/ysz5S6PUM-U",
        "Ciencia y Tecnología": "https://www.youtube.com/embed/ysz5S6PUM-U",
        "Personal Social": "https://www.youtube.com/embed/ysz5S6PUM-U",
        "Arte y Cultura": "https://www.youtube.com/embed/ysz5S6PUM-U"
    };

    // Crea modal de dificultad si no existe
    function crearModalDificultadSiNoExiste() {
        if (document.getElementById('modal-dificultad')) return;
        const modal = document.createElement('div');
        modal.id = 'modal-dificultad';
        modal.className = 'fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-50 hidden';
        modal.innerHTML = `
            <div class="bg-white rounded-xl p-6 max-w-lg w-full">
                <h3 id="modal-dificultad-titulo" class="text-xl font-bold mb-3 text-center">Selecciona dificultad</h3>
                <div id="modal-dificultad-opciones" class="flex gap-4 justify-center mb-4">
                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="modal-dificultad" value="facil"> Fácil</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="modal-dificultad" value="intermedio"> Intermedio</label>
                    <label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="modal-dificultad" value="dificil"> Difícil</label>
                </div>
                <div class="flex justify-between">
                    <button id="btn-modal-dificultad-saltar" class="px-4 py-2 rounded border">Usar todas</button>
                    <div>
                        <button id="btn-modal-dificultad-cancel" class="px-4 py-2 rounded mr-2">Cancelar</button>
                        <button id="btn-modal-dificultad-confirm" class="px-4 py-2 rounded bg-indigo-600 text-white">Confirmar</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('#btn-modal-dificultad-cancel').addEventListener('click', () => modal.classList.add('hidden'));
        modal.querySelector('#btn-modal-dificultad-saltar').addEventListener('click', () => confirmarDificultadModal(true));
        modal.querySelector('#btn-modal-dificultad-confirm').addEventListener('click', () => confirmarDificultadModal(false));
    }

    // Abre el modal de dificultad para la materia actual
    function abrirFlujoMateria(materia) {
        window.pendingMateria = materia;
        crearModalDificultadSiNoExiste();
        const modal = document.getElementById('modal-dificultad');
        if (!modal) return console.warn('modal-dificultad no encontrado.');
        // pre-seleccionar si existe guardado
        const radios = modal.querySelectorAll('input[name="modal-dificultad"]');
        radios.forEach(r => r.checked = false);
        let difGuardada = null;
        if (nickname && jugadores[nickname] && jugadores[nickname].dificultadPorGrado && jugadores[nickname].dificultadPorGrado[gradoSeleccionado] && jugadores[nickname].dificultadPorGrado[gradoSeleccionado][materia]) {
            difGuardada = jugadores[nickname].dificultadPorGrado[gradoSeleccionado][materia];
        } else if (window.dificultadSeleccionada) {
            difGuardada = window.dificultadSeleccionada;
        } else if (localStorage.getItem('dificultad')) {
            difGuardada = localStorage.getItem('dificultad');
        }
        if (difGuardada) {
            const radio = modal.querySelector(`input[name="modal-dificultad"][value="${difGuardada}"]`);
            if (radio) radio.checked = true;
        }
        // título contextual
        const titulo = modal.querySelector('#modal-dificultad-titulo');
        if (titulo) titulo.textContent = `Selecciona dificultad — ${materia}`;
        modal.classList.remove('hidden');
    }

    // Confirmar dificultad desde modal (usarTodas=true => no guardar dificultad)
    function confirmarDificultadModal(usarTodas = false) {
        const modal = document.getElementById('modal-dificultad');
        if (!modal) return;
        let seleccion = null;
        if (!usarTodas) seleccion = modal.querySelector('input[name="modal-dificultad"]:checked')?.value || null;
        const materia = window.pendingMateria;
        if (nickname) {
            if (!jugadores[nickname]) jugadores[nickname] = { total: 0, cursos: {}, dificultadPorGrado: {} };
            if (!jugadores[nickname].dificultadPorGrado) jugadores[nickname].dificultadPorGrado = {};
            if (!jugadores[nickname].dificultadPorGrado[gradoSeleccionado]) jugadores[nickname].dificultadPorGrado[gradoSeleccionado] = {};
            jugadores[nickname].dificultadPorGrado[gradoSeleccionado][materia] = seleccion; // puede ser null
            guardarJugadores();
        } else {
            if (seleccion) localStorage.setItem('dificultad', seleccion);
        }
        modal.classList.add('hidden');
        window.dificultadSeleccionada = seleccion;
        // abrir video tutorial (usa embed de YouTube temporal)
        const src = videoTutoriales[materia] || null;
        abrirModalVideoPorMateria(materia, src);
    }

    // Crea/abre modal video. usa iframe YouTube embed para autoplay (mute)
    function abrirModalVideoPorMateria(materia, embedUrl) {
        // asegurar markup modal-video existente
        let modal = document.getElementById('modal-video');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-video';
            modal.className = 'fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-60 hidden';
            modal.innerHTML = `
                <div class="bg-white rounded-xl shadow-2xl p-4 max-w-3xl w-full relative">
                    <button id="cerrar-video-dinamico" class="absolute right-3 top-3 text-gray-600 rounded-md px-2 py-1 hover:bg-gray-100">✕</button>
                    <h3 id="video-titulo" class="text-xl font-bold text-indigo-700 mb-2 text-center">Tutorial</h3>
                    <!-- el container y footer se crearán dentro del modal para evitar colisiones de ID -->
                    <div id="modal-video-body"></div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('#cerrar-video-dinamico').addEventListener('click', cerrarVideo);
        }

        // Obtener (o crear) un contenedor interno único dentro del modal para evitar colisiones globales
        let body = modal.querySelector('#modal-video-body');
        if (!body) {
            body = document.createElement('div');
            body.id = 'modal-video-body';
            modal.querySelector('div')?.appendChild(body);
        }

        // Asegurar container y footer dentro del modal (si están ausentes, crearlos)
        let container = modal.querySelector('#video-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'video-container';
            container.className = 'w-full aspect-video mb-3';
            body.appendChild(container);
        }
        let footer = modal.querySelector('#video-footer');
        if (!footer) {
            footer = document.createElement('div');
            footer.id = 'video-footer';
            footer.className = 'flex justify-between items-center';
            body.appendChild(footer);
        }

        // Limpiar de forma segura
        container.innerHTML = '';
        footer.innerHTML = '';
        const titulo = modal.querySelector('#video-titulo');
        if (titulo) titulo.textContent = `${materia} — Tutorial`;

        // Si proporcionaron embedUrl (YouTube embed), creamos iframe con autoplay muted
        if (embedUrl) {
            let src = embedUrl;
            if (src.includes('watch?v=')) src = src.replace('watch?v=', 'embed/');
            if (!src.includes('?')) src += '?autoplay=1&mute=1';
            else src += '&autoplay=1&mute=1';
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = src;
            iframe.allow = 'autoplay; encrypted-media';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        } else {
            container.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">No hay tutorial disponible.</div>';
        }

        footer.innerHTML = `<div class="text-sm text-gray-600">El video se reproducirá automáticamente (silenciado). Puedes saltarlo.</div>
            <div>
                <button id="btn-saltar-video" class="px-4 py-2 rounded bg-gray-200 mr-2 hidden">Saltar video</button>
                <button id="btn-iniciar-desde-video" class="btn-jugar px-4 py-2 rounded bg-indigo-500 text-white">Saltar video</button>
            </div>`;

        footer.querySelector('#btn-saltar-video').addEventListener('click', saltarVideo);
        footer.querySelector('#btn-iniciar-desde-video').addEventListener('click', iniciarSeccionDesdeVideo);

        modal.classList.remove('hidden');
    }

    // iniciar sección después del video: cierra modal y llama seleccionarMateria con dificultad guardada
    function iniciarSeccionDesdeVideo() {
        // cerrar modal (no hay <video> que pausar; solo ocultar iframe)
        const modal = _get('modal-video');
        if (modal) modal.classList.add('hidden');

        const materia = window.pendingMateria;
        // recuperar dificultad preferida
        const dif = window.dificultadSeleccionada || localStorage.getItem('dificultad') || null;

        // Llamada segura a seleccionarMateria si existe
        if (typeof window.seleccionarMateria === 'function') {
            try {
                // Intentar con firma (materia, dificultad) y si falla, con (materia)
                window.seleccionarMateria(materia, dif);
                log('Se llamó seleccionarMateria con dificultad:', dif);
            } catch (e) {
                try {
                    window.seleccionarMateria(materia);
                    //log('Se llamó seleccionarMateria sin dificultad (falló la versión con dif).');
                } catch (e2) {
                   // warn('Error al llamar seleccionarMateria:', e2);
                }
            }
        } else {
            //warn('Función seleccionarMateria no definida; asegúrate que preguntas.js exporte/declare seleccionarMateria en window.');
        }
    }

    function saltarVideo() {
        iniciarSeccionDesdeVideo();
    }

    function cerrarVideo() {
        const modal = _get('modal-video');
        if (modal) modal.classList.add('hidden');
    }

    // Inicialización en DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        try { normalizarDificultadesEnBanco(); } catch (e) { console.warn('Error normalizando dificultades:', e); }
    });

    // Exponer funciones globales (para onclick inline)
    Object.assign(window, {
        abrirFlujoMateria,
        confirmarDificultadModal,
        iniciarSeccionDesdeVideo,
        saltarVideo,
        cerrarVideo
    });

})();

/* ===== Sanitizar y normalizar bancoPreguntas (corrige typos en preguntas.js) ===== */
function sanitizarBancoPreguntas() {
    if (typeof bancoPreguntas !== 'object') return;
    Object.keys(bancoPreguntas).forEach(grado => {
        const materias = bancoPreguntas[grado];
        if (!materias || typeof materias !== 'object') return;
        Object.keys(materias).forEach(materia => {
            const arr = materias[materia];
            if (!Array.isArray(arr)) return;
            arr.forEach((q, idx) => {
                if (!q || typeof q !== 'object') return;

                // opciones: aceptar 'opciones' o 'opcioness' y limpiar elementos falsy
                if (!Array.isArray(q.opciones) && Array.isArray(q.opcioness)) {
                    q.opciones = q.opcioness;
                    delete q.opcioness;
                }
                if (!Array.isArray(q.opciones)) q.opciones = [];

                // filtrar valores undefined/nulos dentro de opciones
                q.opciones = q.opciones.filter(o => typeof o !== 'undefined' && o !== null);

                // respuestaCorrecta: convertir desde varias formas ('respuestaCorrecta', 'respuesta')
                if (typeof q.respuestaCorrecta === 'undefined' && typeof q.respuesta !== 'undefined') {
                    // si 'respuesta' es número-string o number -> index directo
                    if (typeof q.respuesta === 'number' || (!isNaN(Number(q.respuesta)) && q.respuesta.toString().trim() !== '')) {
                        q.respuestaCorrecta = Number(q.respuesta);
                    } else {
                        // si es texto, buscar índice en opciones
                        const idxOpt = q.opciones.indexOf(q.respuesta);
                        q.respuestaCorrecta = idxOpt >= 0 ? idxOpt : 0;
                    }
                    // opcional: eliminar campo antiguo
                    // delete q.respuesta;
                }

                // si sigue sin respuestaCorrecta, intenta inferir 0
                if (typeof q.respuestaCorrecta === 'undefined' || q.respuestaCorrecta === null || isNaN(Number(q.respuestaCorrecta))) {
                    q.respuestaCorrecta = 0;
                } else {
                    q.respuestaCorrecta = Number(q.respuestaCorrecta);
                }

                // explicacion: garantizar string
                if (typeof q.explicacion === 'undefined') q.explicacion = '';

                // normalizar campo dificultad si existe 'nivel'
                if (!q.dificultad && q.nivel) q.dificultad = String(q.nivel).toLowerCase();

                // si no tiene dificultad la dejaremos para normalizar por índice después
                // evitar objetos rotos
                if (!Array.isArray(q.opciones) || q.opciones.length === 0) {
                    // si no hay opciones válidas, crea placeholders para evitar crashes
                    q.opciones = ['Opción A', 'Opción B', 'Opción C', 'Opción D'];
                }
            });
        });
    });
    //console.info('[funciones.js] bancoPreguntas sanitizado.');
}

// Llamar sanitización temprano (asegúrate que preguntas.js ya cargó antes de funciones.js en index.html)
document.addEventListener('DOMContentLoaded', () => {
    try { sanitizarBancoPreguntas(); } catch (e) { console.warn('Error sanitizando bancoPreguntas', e); }
    // ...existing DOMContentLoaded handlers continue...
});

/* ===== Helpers: creación segura de elementos y asignación de innerHTML ===== */
function getOrCreateEl(id, tag = 'div', parent = document.body, attrs = {}) {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement(tag);
        el.id = id;
        Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
        // estilo mínimo para no romper layout; puede ajustarse en CSS
        if (!el.style) el.style = {};
        parent.appendChild(el);
        //console.warn(`[funciones.js] Elemento creado dinámicamente: #${id}`);
    }
    return el;
}

function safeSetInnerHTML(id, html, tag = 'div', parent = document.body, attrs = {}) {
    const el = getOrCreateEl(id, tag, parent, attrs);
    try {
        el.innerHTML = html;
    } catch (err) {
        //console.error(`[funciones.js] safeSetInnerHTML fallo en #${id}:`, err);
    }
    return el;
}

/* ===== Crear placeholders que el código espera (evita null.innerHTML) ===== */
(function ensureExpectedContainers() {
    // ids detectados en la traza y usos comunes
    const ids = [
        'dificultad-seccion',   // contenedor de selección de dificultad
        'video-modal',          // modal que contiene el videotutorial
        'video-container',      // contenedor donde se incrusta iframe/canvas del video
        'modal-video-iframe',   // iframe para youtube (si se usa)
        'iniciar-quiz-btn'      // botón para comenzar quiz (placeholder)
    ];
    ids.forEach(id => {
        const el = getOrCreateEl(id);
        // añadir atributos mínimos para que los selects/listeners funcionen
        if (id === 'video-modal') {
            el.style.display = 'none';
            el.classList.add('modal');
        }
        if (id === 'video-container') {
            // dejar espacio para iframe
            el.innerHTML = el.innerHTML || '<!-- video will be injected here -->';
        }
    });
})();

/* ===== Wrapper seguro para mostrar la selección de dificultad =====
   Reemplaza o usa esto dentro de la función mostrarDificultadSeleccion existente. */
function mostrarDificultadSeleccionSeguro(materia) {
    const cont = getOrCreateEl('dificultad-seccion', 'div', document.body, { role: 'region' });
    safeSetInnerHTML('dificultad-seccion', `
        <h3>Selecciona dificultad para ${materia}</h3>
        <div class="dificultad-botones">
            <button data-dificultad="facil">Fácil</button>
            <button data-dificultad="intermedio">Intermedio</button>
            <button data-dificultad="dificil">Difícil</button>
        </div>
        <div style="margin-top:8px">
            <button id="btn-confirmar-dificultad">Confirmar</button>
        </div>
    `);

    // delegación: capturar la selección y abrir modal vídeo
    cont.querySelectorAll('button[data-dificultad]').forEach(b => {
        b.addEventListener('click', (e) => {
            cont.querySelectorAll('button[data-dificultad]').forEach(x => x.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            cont.dataset.dificultadSeleccionada = e.currentTarget.dataset.dificultad;
        });
    });

    const confirmar = getOrCreateEl('btn-confirmar-dificultad', 'button', cont);
    confirmar.addEventListener('click', () => {

        const nivel = cont.dataset.dificultadSeleccionada || 'facil';
        try {
            abrirModalVideoParaSeguro(/*materia*/ materia, /*dificultad*/ nivel);
        } catch (err) {
            //console.error('[funciones.js] Error al intentar abrir modal vídeo:', err);
        }
    });
}

/* ===== Implementación mínima y segura para abrir modal vídeo =====
   Si ya existe una función abrirModalVideoPara, esta función puede reutilizarla
   o actuar como fallback para inyectar iframe y luego lanzar evento para iniciar quiz.
*/
function abrirModalVideoParaSeguro(materia, dificultad, youtubeId) {
    const modal = getOrCreateEl('video-modal', 'div', document.body, { role: 'dialog' });
    const container = getOrCreateEl('video-container', 'div', modal);
    // Si no se pasa youtubeId, usar un vídeo genérico/placeholder
    const id = youtubeId || 'dQw4w9WgXcQ';
    safeSetInnerHTML('video-container', `
        <div style="padding:8px;">
            <h4>Videotutorial: ${materia} — ${dificultad}</h4>
            <iframe id="modal-video-iframe" width="560" height="315"
                src="https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div style="margin-top:8px;">
                <button id="cerrar-video-modal">Cerrar</button>
                <button id="iniciar-quiz-btn" data-materia="${materia}" data-dificultad="${dificultad}">Iniciar quiz</button>
            </div>
        </div>
    `, 'div', modal);

    modal.style.display = 'block';
    // listeners
    getOrCreateEl('cerrar-video-modal').addEventListener('click', () => { modal.style.display = 'none'; });
    getOrCreateEl('iniciar-quiz-btn').addEventListener('click', (e) => {
        modal.style.display = 'none';
        const mat = e.currentTarget.dataset.materia;
        const dif = e.currentTarget.dataset.dificultad;
        // emitir evento para el código que efectivamente lanza el quiz
        const ev = new CustomEvent('iniciarQuiz', { detail: { materia: mat, dificultad: dif } });
        window.dispatchEvent(ev);
    });
}

/* ===== Si la app usa listeners globales para iniciar quiz, el evento 'iniciarQuiz' ya podrá ser capturado. ===== */

