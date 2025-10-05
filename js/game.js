// game.js - Lógica principal del juego y manejo de preguntas

let gradoSeleccionado = 0;
let materiaSeleccionada = '';
let competenciaSeleccionada = '';
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

// Seleccionar materia (ahora lleva a competencias)
function seleccionarMateria(materia) {
    materiaSeleccionada = materia;
    mostrarPantallaSeleccionCompetencia(materia);
}

// Seleccionar competencia
function seleccionarCompetencia(competencia) {
    competenciaSeleccionada = competencia;
    
    // Mostrar modal de dificultad
    crearModalDificultadSiNoExiste();
    const modal = document.getElementById('modal-dificultad');
    if (!modal) return;
    
    // Pre-seleccionar dificultad guardada
    const radios = modal.querySelectorAll('input[name="modal-dificultad"]');
    radios.forEach(r => r.checked = false);
    
    let difGuardada = getDificultadGuardada(gradoSeleccionado, materiaSeleccionada) ||
                      window.dificultadSeleccionada ||
                      localStorage.getItem('dificultad');
    
    if (difGuardada) {
        const radio = modal.querySelector(`input[name="modal-dificultad"][value="${difGuardada}"]`);
        if (radio) radio.checked = true;
    }
    
    const titulo = modal.querySelector('#modal-dificultad-titulo');
    if (titulo) titulo.textContent = `Selecciona dificultad — ${competencia}`;
    
    modal.classList.remove('hidden');
}

// Iniciar juego con competencia y dificultad
function iniciarJuegoConCompetencia(dificultad = null) {
    if (!bancoPreguntas?.[gradoSeleccionado]?.[materiaSeleccionada]) {
        mostrarModal('Sin preguntas', 'No hay preguntas disponibles para este curso.');
        return;
    }
    
    const todasPreguntas = bancoPreguntas[gradoSeleccionado][materiaSeleccionada];
    
    if (!Array.isArray(todasPreguntas) || todasPreguntas.length === 0) {
        mostrarModal('Sin preguntas', 'No hay preguntas válidas en el banco para esta materia.');
        return;
    }
    
    // Filtrar por competencia
    let preguntasFiltradas = todasPreguntas.filter(q => q.competencia === competenciaSeleccionada);
    
    if (preguntasFiltradas.length === 0) {
        mostrarModal('Sin preguntas', 'No hay preguntas para esta competencia.');
        return;
    }
    
    // Filtrar por dificultad si se especifica
    if (dificultad) {
        const difLower = dificultad.toString().toLowerCase();
        const preguntasPorDificultad = preguntasFiltradas.filter(q => {
            const qdif = (q.dificultad || q.nivel || '').toString().toLowerCase();
            return qdif === difLower;
        });
        
        if (preguntasPorDificultad.length === 0) {
            mostrarModal('Sin preguntas para ese nivel', 'No se encontraron preguntas para la dificultad seleccionada. Se usarán todas las de la competencia.');
        } else {
            preguntasFiltradas = preguntasPorDificultad;
        }
    }
    
    // Preparar juego
    preguntas = seleccionarPreguntasAleatorias(preguntasFiltradas, Math.min(10, preguntasFiltradas.length));
    preguntaActual = 0;
    puntuacion = 0;
    
    reproducirAudioResolve(materiaSeleccionada);
    mostrarPantallaJuego();
    
    document.getElementById('materia-actual').textContent = `${materiaSeleccionada} - ${competenciaSeleccionada}`;
    document.getElementById('grado-actual').textContent = `${gradoSeleccionado}° Grado`;
    document.getElementById('puntuacion').textContent = `${puntuacion} pts`;
    document.getElementById('barra-progreso').style.width = '0%';
    
    mostrarPregunta();
}

// Seleccionar materia e iniciar juego (mantener compatibilidad con código antiguo)
function seleccionarMateriaDirecta(materia, dificultadForzada = null) {
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
    
    if (!q) {
        mostrarModal('Pregunta inválida', 'La pregunta tiene formato incorrecto.');
        siguientePregunta();
        return;
    }
    
    contPregunta.textContent = q.pregunta || 'Pregunta sin texto';
    contOpciones.innerHTML = '';
    
    // Verificar si es pregunta de texto
    if (q.tipoRespuesta === 'texto') {
        mostrarPreguntaTexto(q, contOpciones);
    } else {
        // Pregunta de opción múltiple normal
        if (!Array.isArray(q.opciones)) {
            mostrarModal('Pregunta inválida', 'La pregunta no tiene opciones válidas.');
            siguientePregunta();
            return;
        }
        
        q.opciones.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'opcion-btn respuesta bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200';
            btn.textContent = opt;
            btn.setAttribute('data-op-index', i);
            btn.onclick = () => seleccionarRespuesta(i);
            contOpciones.appendChild(btn);
        });
    }
    
    if (feedbackContainer) {
        feedbackContainer.classList.add('hidden');
        const ft = document.getElementById('feedback-texto');
        const fi = document.getElementById('feedback-imagen');
        if (ft) ft.textContent = '';
        if (fi) fi.src = '';
    }
    
    actualizarBarraProgreso();
}

// Mostrar pregunta de tipo texto
function mostrarPreguntaTexto(pregunta, container) {
    const tipoVal = pregunta.tipoVal || 'mayus';
    
    // Crear contenedor para input
    const inputContainer = document.createElement('div');
    inputContainer.className = 'flex flex-col gap-4 max-w-2xl mx-auto';
    
    // Determinar tipo de input según tipoVal
    let inputType = 'text';
    let placeholder = 'Escribe tu respuesta aquí...';
    let pattern = '';
    
    if (tipoVal === 'number') {
        inputType = 'number';
        placeholder = 'Ingresa solo números...';
    } else if (tipoVal === 'numbercaracter') {
        placeholder = 'Ingresa números, letras y operadores (+, -, *, /, etc.)...';
    }
    
    inputContainer.innerHTML = `
        <div class="bg-indigo-50 p-4 rounded-lg">
            <p class="text-sm text-indigo-700 mb-2 font-semibold">💡 Instrucciones:</p>
            <p class="text-xs text-gray-600">${obtenerInstruccionTipoVal(tipoVal)}</p>
        </div>
        <input 
            type="${inputType}" 
            id="respuesta-texto-input" 
            class="border-2 border-indigo-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg text-center"
            placeholder="${placeholder}"
            ${pattern ? `pattern="${pattern}"` : ''}
            autocomplete="off"
        />
        <button 
            id="btn-validar-respuesta" 
            class="btn-jugar px-6 py-3 rounded-lg text-white font-bold bg-indigo-500 hover:bg-indigo-700 transition-all"
        >
            Validar Respuesta
        </button>
    `;
    
    container.appendChild(inputContainer);
    
    // Focus automático en el input
    setTimeout(() => {
        const input = document.getElementById('respuesta-texto-input');
        if (input) input.focus();
    }, 100);
    
    // Event listener para validar
    const btnValidar = document.getElementById('btn-validar-respuesta');
    if (btnValidar) {
        btnValidar.onclick = () => validarRespuestaTexto(pregunta);
    }
    
    // Permitir validar con Enter
    const input = document.getElementById('respuesta-texto-input');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                validarRespuestaTexto(pregunta);
            }
        });
    }
}

// Obtener instrucción según tipo de validación
function obtenerInstruccionTipoVal(tipoVal) {
    const instrucciones = {
        'mayus': 'No se distingue entre mayúsculas y minúsculas',
        'nomayus': 'Se distingue entre mayúsculas y minúsculas (exacto)',
        'nomayuscaracter': 'Se distingue entre mayúsculas, minúsculas y caracteres especiales (exacto)',
        'mayuscaracter': 'Se distingue caracteres especiales, pero no mayúsculas/minúsculas',
        'number': 'Solo se permiten números',
        'numbercaracter': 'Puedes usar números, letras y operadores matemáticos'
    };
    return instrucciones[tipoVal] || 'Escribe tu respuesta';
}

// Validar respuesta de texto
function validarRespuestaTexto(pregunta) {
    if (respondido) return;
    
    const input = document.getElementById('respuesta-texto-input');
    if (!input) return;
    
    const respuestaUsuario = input.value.trim();
    
    if (!respuestaUsuario) {
        mostrarModal('Respuesta vacía', 'Por favor ingresa una respuesta antes de validar.');
        return;
    }
    
    respondido = true;
    
    const respuestaCorrecta = pregunta.respuesta || '';
    const tipoVal = pregunta.tipoVal || 'mayus';
    
    const esCorrecto = compararRespuestas(respuestaUsuario, respuestaCorrecta, tipoVal);
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTexto = document.getElementById('feedback-texto');
    const feedbackImagen = document.getElementById('feedback-imagen');
    
    // Deshabilitar input y botón
    input.disabled = true;
    const btnValidar = document.getElementById('btn-validar-respuesta');
    if (btnValidar) btnValidar.disabled = true;
    
    // Aplicar estilos según resultado
    if (esCorrecto) {
        input.classList.add('border-green-400', 'bg-green-50');
        input.classList.remove('border-indigo-300');
        if (btnValidar) {
            btnValidar.classList.add('bg-green-500');
            btnValidar.classList.remove('bg-indigo-500');
        }
        
        if (feedbackTexto) feedbackTexto.textContent = "¡Correcto! " + (pregunta.explicacion || '');
        if (feedbackImagen) feedbackImagen.src = "img/10280401.jpg";
        puntuacion += 10;
        mostrarPantallaFelicitacionesRespuesta();
    } else {
        input.classList.add('border-red-400', 'bg-red-50');
        input.classList.remove('border-indigo-300');
        if (btnValidar) {
            btnValidar.classList.add('bg-red-500');
            btnValidar.classList.remove('bg-indigo-500');
        }
        
        if (feedbackTexto) {
            feedbackTexto.textContent = `Incorrecto. La respuesta correcta es: "${respuestaCorrecta}". ` + (pregunta.explicacion || '');
        }
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
        siguientePregunta();
        btnSiguiente.remove();
    };
}

// Comparar respuestas según tipo de validación
function compararRespuestas(respUsuario, respCorrecta, tipoVal) {
    switch (tipoVal) {
        case 'mayus':
            // No sensible a mayúsculas/minúsculas
            return respUsuario.toLowerCase() === respCorrecta.toLowerCase();
        
        case 'nomayus':
            // Sensible a mayúsculas/minúsculas
            return respUsuario === respCorrecta;
        
        case 'nomayuscaracter':
            // Sensible a todo (exacto)
            return respUsuario === respCorrecta;
        
        case 'mayuscaracter':
            // Sensible a caracteres pero no a mayúsculas/minúsculas
            return respUsuario.toLowerCase() === respCorrecta.toLowerCase();
        
        case 'number':
            // Solo números - comparar como números
            const numUsuario = parseFloat(respUsuario);
            const numCorrecto = parseFloat(respCorrecta);
            return !isNaN(numUsuario) && !isNaN(numCorrecto) && numUsuario === numCorrecto;
        
        case 'numbercaracter':
            // Fórmulas matemáticas - intentar evaluar si es posible
            try {
                // Intentar evaluar ambas expresiones
                const resultUsuario = evaluarExpresion(respUsuario);
                const resultCorrecto = evaluarExpresion(respCorrecta);
                
                // Si ambos son números, comparar
                if (!isNaN(resultUsuario) && !isNaN(resultCorrecto)) {
                    return Math.abs(resultUsuario - resultCorrecto) < 0.0001;
                }
                
                // Si no se pueden evaluar, comparar como texto sin mayúsculas
                return respUsuario.toLowerCase().replace(/\s/g, '') === 
                       respCorrecta.toLowerCase().replace(/\s/g, '');
            } catch (e) {
                // Si falla la evaluación, comparar como texto
                return respUsuario.toLowerCase().replace(/\s/g, '') === 
                       respCorrecta.toLowerCase().replace(/\s/g, '');
            }
        
        default:
            return respUsuario.toLowerCase() === respCorrecta.toLowerCase();
    }
}

// Evaluar expresión matemática de forma segura
function evaluarExpresion(expr) {
    try {
        // Limpiar la expresión
        expr = expr.replace(/\s/g, '');
        
        // Validar que solo contenga caracteres permitidos
        if (!/^[0-9+\-*/().^√πe\s]+$/i.test(expr)) {
            return NaN;
        }
        
        // Reemplazar caracteres matemáticos
        expr = expr.replace(/√/g, 'Math.sqrt');
        expr = expr.replace(/π/gi, 'Math.PI');
        expr = expr.replace(/\^/g, '**');
        
        // Evaluar de forma segura (solo operaciones matemáticas básicas)
        return Function('"use strict"; return (' + expr + ')')();
    } catch (e) {
        return NaN;
    }
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
    
    const tituloTexto = competenciaSeleccionada 
        ? `Resultados de ${materiaSeleccionada} - ${competenciaSeleccionada}`
        : `Resultados de ${materiaSeleccionada}`;
    
    document.getElementById('resultado-titulo').textContent = tituloTexto;
    document.getElementById('resultado-puntuacion').textContent = `Puntuación: ${puntuacion} de ${puntajeMaximo} (${porcentaje}%)`;
    
    // Determinar si está completado
    let completado = false;
    if (preguntaActual >= preguntas.length && porcentaje >= 50) {
        completado = true;
    }
    
    // Guardar progreso (competencia o curso)
    if (competenciaSeleccionada) {
        guardarProgresoCompetencia(gradoSeleccionado, materiaSeleccionada, competenciaSeleccionada, puntuacion, completado);
    } else {
        guardarProgresoCurso(gradoSeleccionado, materiaSeleccionada, puntuacion, completado);
    }
    
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
    if (competenciaSeleccionada) {
        const progreso = getProgresoCompetencia(gradoSeleccionado, materiaSeleccionada, competenciaSeleccionada);
        
        if (forceCheckCompletado && progreso.completado) {
            mostrarModal('Competencia completada', '¡Ya completaste esta competencia! Puedes elegir otra.');
            volverACompetencias();
            return;
        }
        
        seleccionarCompetencia(competenciaSeleccionada);
    } else {
        const progreso = getProgresoCurso(gradoSeleccionado, materiaSeleccionada);
        
        if (forceCheckCompletado && progreso.completado) {
            mostrarModal('Curso completado', '¡Ya completaste este curso! Puedes elegir otro.');
            volverAMaterias();
            return;
        }
        
        seleccionarMateriaDirecta(materiaSeleccionada);
    }
}

// Exponer funciones globalmente
window.gradoSeleccionado = gradoSeleccionado;
window.materiaSeleccionada = materiaSeleccionada;
window.competenciaSeleccionada = competenciaSeleccionada;
window.seleccionarGrado = seleccionarGrado;
window.seleccionarMateria = seleccionarMateria;
window.seleccionarMateriaDirecta = seleccionarMateriaDirecta;
window.seleccionarCompetencia = seleccionarCompetencia;
window.iniciarJuegoConCompetencia = iniciarJuegoConCompetencia;
window.mostrarPregunta = mostrarPregunta;
window.seleccionarRespuesta = seleccionarRespuesta;
window.siguientePregunta = siguientePregunta;
window.mostrarResultados = mostrarResultados;
window.repetirMateria = repetirMateria;