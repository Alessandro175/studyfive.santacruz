// game.js - Lógica principal del juego y manejo de preguntas

let gradoSeleccionado = 0;
let materiaSeleccionada = '';
let preguntas = [];
let preguntaActual = 0;
let puntuacion = 0;
let respondido = false;
let puntajeCursoPrevio = 0;

// Seleccionar preguntas aleatorias
function seleccionarPreguntasAleatorias(preguntasOriginales, cantidad = 10) {
    const preguntas = [...preguntasOriginales];
    const seleccionadas = [];
    while (seleccionadas.length < cantidad && preguntas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
        seleccionadas.push(preguntas.splice(indiceAleatorio, 1)[0]);
    }
    return seleccionadas;
}

// Seleccionar grado
function seleccionarGrado(grado) {
    gradoSeleccionado = grado;
    mostrarPantallaSeleccionMateria(grado);
}

// Seleccionar materia e iniciar juego
function seleccionarMateria(materia, dificultadForzada = null) {
    materiaSeleccionada = materia;
    
    if (!bancoPreguntas?.[gradoSeleccionado]?.[materia]) {
        mostrarModal('Sin preguntas', 'No hay preguntas disponibles para este curso.');
        return;
    }
    
    const todasPreguntas = bancoPreguntas[gradoSeleccionado][materia];
    
    if (!Array.isArray(todasPreguntas) || todasPreguntas.length === 0) {
        mostrarModal('Sin preguntas', 'No hay preguntas válidas en el banco para esta materia.');
        return;
    }
    
    // Determinar dificultad
    let dif = dificultadForzada || getDificultadGuardada(gradoSeleccionado, materia) || 
              window.dificultadSeleccionada || localStorage.getItem('dificultad') || null;
    
    // Filtrar por dificultad si aplica
    let preguntasFiltradas = todasPreguntas;
    if (dif) {
        const difLower = dif.toString().toLowerCase();
        preguntasFiltradas = todasPreguntas.filter(q => {
            const qdif = (q.dificultad || q.nivel || '').toString().toLowerCase();
            return qdif === difLower;
        });
        
        if (preguntasFiltradas.length === 0) {
            mostrarModal('Sin preguntas para ese nivel', 'No se encontraron preguntas para la dificultad seleccionada. Se usarán todas las preguntas.');
            preguntasFiltradas = todasPreguntas;
        }
    }
    
    // Verificar si ya está completado
    const progreso = getProgresoCurso(gradoSeleccionado, materia);
    if (progreso.completado) {
        mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro.');
        return;
    }
    
    // Preparar juego
    puntajeCursoPrevio = progreso.puntaje;
    if (puntajeCursoPrevio > 0) {
        actualizarPuntajeJugador(-puntajeCursoPrevio);
        guardarProgresoCurso(gradoSeleccionado, materia, 0, false);
    }
    
    preguntas = seleccionarPreguntasAleatorias(preguntasFiltradas, Math.min(10, preguntasFiltradas.length));
    preguntaActual = 0;
    puntuacion = 0;
    
    reproducirAudioResolve(materia);
    mostrarPantallaJuego();
    
    document.getElementById('materia-actual').textContent = materia;
    document.getElementById('grado-actual').textContent = `${gradoSeleccionado}° Grado`;
    document.getElementById('puntuacion').textContent = `${puntuacion} pts`;
    document.getElementById('barra-progreso').style.width = '0%';
    
    mostrarPregunta();
}

// Mostrar pregunta actual
function mostrarPregunta() {
    const contPregunta = document.getElementById('pregunta-texto');
    const contOpciones = document.getElementById('opciones-container');
    const feedbackContainer = document.getElementById('feedback-container');
    
    respondido = false;
    
    // Remover botón siguiente si existe
    const btnNext = document.getElementById('btn-siguiente-pregunta');
    if (btnNext) btnNext.remove();
    
    if (!preguntas?.[preguntaActual]) {
        mostrarModal('Error', 'No se pudo cargar la pregunta.');
        volverAMaterias();
        return;
    }
    
    const q = preguntas[preguntaActual];
    
    if (!q?.opciones || !Array.isArray(q.opciones)) {
        mostrarModal('Pregunta inválida', 'La pregunta tiene formato incorrecto.');
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
        const ft = document.getElementById('feedback-texto');
        const fi = document.getElementById('feedback-imagen');
        if (ft) ft.textContent = '';
        if (fi) fi.src = '';
    }
    
    actualizarBarraProgreso();
}

// Seleccionar respuesta
function seleccionarRespuesta(index) {
    if (respondido) return;
    respondido = true;
    
    const pregunta = preguntas[preguntaActual];
    if (!pregunta) return;
    
    const opciones = Array.from(document.querySelectorAll('#opciones-container .opcion-btn'));
    if (!opciones.length) return;
    
    const botonSeleccionado = opciones[index];
    const indiceCorrecto = Number(pregunta.respuestaCorrecta) || 0;
    
    if (!botonSeleccionado) return;
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTexto = document.getElementById('feedback-texto');
    const feedbackImagen = document.getElementById('feedback-imagen');
    
    // Detectar si es dispositivo móvil
    const esMobile = window.innerWidth <= 768;
    
    opciones.forEach(o => {
        o.classList.remove('correcta', 'incorrecta', 'seleccionada');
        o.disabled = true;
    });
    
    botonSeleccionado.classList.add('seleccionada');
    
    if (index === indiceCorrecto) {
        botonSeleccionado.classList.add('correcta');
        if (feedbackTexto) feedbackTexto.textContent = "¡Correcto! " + (pregunta.explicacion || '');
        if (feedbackImagen) feedbackImagen.src = "img/10280401.jpg";
        puntuacion += 10;
        mostrarPantallaFelicitacionesRespuesta();
        
        // En móvil, ocultar todas las demás opciones
        if (esMobile) {
            opciones.forEach((o, i) => {
                if (i !== index) {
                    o.style.display = 'none';
                }
            });
        }
    } else {
        botonSeleccionado.classList.add('incorrecta');
        if (opciones[indiceCorrecto]) opciones[indiceCorrecto].classList.add('correcta');
        if (feedbackTexto) feedbackTexto.textContent = "Incorrecto. " + (pregunta.explicacion || '');
        if (feedbackImagen) feedbackImagen.src = "img/10280401.jpg";
        mostrarPantallaErrorRespuesta();
        
        // En móvil, solo mostrar la seleccionada (incorrecta) y la correcta
        if (esMobile) {
            opciones.forEach((o, i) => {
                if (i !== index && i !== indiceCorrecto) {
                    o.style.display = 'none';
                }
            });
        }
    }
    
    const puntuacionElement = document.getElementById('puntuacion');
    if (puntuacionElement) {
        puntuacionElement.textContent = `${puntuacion} pts`;
        puntuacionElement.classList.add('puntuacion-anim');
        setTimeout(() => puntuacionElement.classList.remove('puntuacion-anim'), 1000);
    }
    
    if (feedbackContainer) feedbackContainer.classList.remove('hidden');
    
    actualizarBarraProgreso();
    
    // Crear botón siguiente
    let btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    if (!btnSiguiente) {
        btnSiguiente = document.createElement('button');
        btnSiguiente.id = 'btn-siguiente-pregunta';
        btnSiguiente.className = 'mt-4 px-4 py-2 bg-indigo-600 text-white rounded';
        btnSiguiente.textContent = (preguntaActual < preguntas.length - 1) ? 'Siguiente pregunta' : 'Ver resultados';
        
        const contOpciones = document.getElementById('opciones-container');
        if (contOpciones?.parentNode) {
            contOpciones.parentNode.appendChild(btnSiguiente);
        }
    }
    
    btnSiguiente.onclick = () => {
        respondido = false;
        opciones.forEach(o => o.disabled = false);
        siguientePregunta();
        btnSiguiente.remove();
    };
}

// Siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}

// Actualizar barra de progreso
function actualizarBarraProgreso() {
    const barra = document.getElementById('barra-progreso');
    if (!barra || !Array.isArray(preguntas) || preguntas.length === 0) return;
    
    const respondedCount = respondido ? Math.min(preguntaActual + 1, preguntas.length) : preguntaActual;
    const porcentaje = Math.round((respondedCount / preguntas.length) * 100);
    barra.style.width = `${porcentaje}%`;
}

// Mostrar resultados
function mostrarResultados() {
    mostrarPantallaResultados();
    
    const barra = document.getElementById('barra-progreso');
    if (barra) barra.style.width = '100%';
    
    const puntajeMaximo = preguntas.length * 10;
    const porcentaje = Math.round((puntuacion / puntajeMaximo) * 100);
    
    document.getElementById('resultado-titulo').textContent = `Resultados de ${materiaSeleccionada}`;
    document.getElementById('resultado-puntuacion').textContent = `Puntuación: ${puntuacion} de ${puntajeMaximo} (${porcentaje}%)`;
    
    // Determinar si está completado
    let completado = false;
    if (preguntaActual >= preguntas.length && porcentaje >= 50) {
        completado = true;
    }
    
    // Guardar progreso
    guardarProgresoCurso(gradoSeleccionado, materiaSeleccionada, puntuacion, completado);
    actualizarPuntajeJugador(puntuacion);
    
    renderRanking();
    
    // Mensaje según desempeño
    if (completado) {
        document.getElementById('resultado-mensaje').textContent = porcentaje === 100
            ? "¡Curso completado al 100%! 🎉"
            : "¡Curso completado! Buen trabajo, pero hay áreas que puedes mejorar. ¡Sigue practicando!";
        mostrarPantallaFelicitaciones();
    } else if (porcentaje >= 80) {
        document.getElementById('resultado-mensaje').textContent = "¡Excelente trabajo! Has demostrado un gran conocimiento en esta materia.";
    } else if (porcentaje >= 50) {
        document.getElementById('resultado-mensaje').textContent = "¡Buen trabajo! Hay áreas que puedes mejorar. ¡Sigue practicando!";
    } else {
        document.getElementById('resultado-mensaje').textContent = "Puedes hacerlo mejor. Revisa los temas y vuelve a intentarlo.";
    }
}

// Repetir materia
function repetirMateria(forceCheckCompletado = false) {
    const progreso = getProgresoCurso(gradoSeleccionado, materiaSeleccionada);
    
    if (forceCheckCompletado && progreso.completado) {
        mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro.');
        volverAMaterias();
        return;
    }
    
    seleccionarMateria(materiaSeleccionada);
}

// Exponer funciones globalmente
window.gradoSeleccionado = gradoSeleccionado;
window.seleccionarGrado = seleccionarGrado;
window.seleccionarMateria = seleccionarMateria;
window.mostrarPregunta = mostrarPregunta;
window.seleccionarRespuesta = seleccionarRespuesta;
window.siguientePregunta = siguientePregunta;
window.mostrarResultados = mostrarResultados;
window.repetirMateria = repetirMateria;