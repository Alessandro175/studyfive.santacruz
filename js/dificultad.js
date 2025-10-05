// dificultad.js - Sistema de selección de dificultad y videos tutoriales

window.dificultadSeleccionada = null;
window.pendingMateria = null;

// Mapa de videos por materia
const videoTutoriales = {
    "Inglés": "https://www.youtube.com/embed/ysz5S6PUM-U",
    "Matemática": "https://www.youtube.com/embed/ysz5S6PUM-U",
    "Comunicación": "https://www.youtube.com/embed/ysz5S6PUM-U",
    "Ciencia y Tecnología": "https://www.youtube.com/embed/ysz5S6PUM-U",
    "Personal Social": "https://www.youtube.com/embed/ysz5S6PUM-U",
    "Arte y Cultura": "https://www.youtube.com/embed/ysz5S6PUM-U"
};

// Crear modal de dificultad si no existe
function crearModalDificultadSiNoExiste() {
    if (document.getElementById('modal-dificultad')) return;
    
    const modal = document.createElement('div');
    modal.id = 'modal-dificultad';
    modal.className = 'fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-50 hidden';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-6 max-w-lg w-full">
            <h3 id="modal-dificultad-titulo" class="text-xl font-bold mb-3 text-center">Selecciona dificultad</h3>
            <div id="modal-dificultad-opciones" class="flex gap-4 justify-center mb-4">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="modal-dificultad" value="facil"> Fácil
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="modal-dificultad" value="intermedio"> Intermedio
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="modal-dificultad" value="dificil"> Difícil
                </label>
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
    
    modal.querySelector('#btn-modal-dificultad-cancel').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    modal.querySelector('#btn-modal-dificultad-saltar').addEventListener('click', () => {
        confirmarDificultadModal(true);
    });
    modal.querySelector('#btn-modal-dificultad-confirm').addEventListener('click', () => {
        confirmarDificultadModal(false);
    });
}

// Abrir flujo: dificultad -> video -> quiz
function abrirFlujoMateria(materia) {
    window.pendingMateria = materia;
    crearModalDificultadSiNoExiste();
    
    const modal = document.getElementById('modal-dificultad');
    if (!modal) return;
    
    // Pre-seleccionar dificultad guardada
    const radios = modal.querySelectorAll('input[name="modal-dificultad"]');
    radios.forEach(r => r.checked = false);
    
    let difGuardada = getDificultadGuardada(gradoSeleccionado, materia) ||
                      window.dificultadSeleccionada ||
                      localStorage.getItem('dificultad');
    
    if (difGuardada) {
        const radio = modal.querySelector(`input[name="modal-dificultad"][value="${difGuardada}"]`);
        if (radio) radio.checked = true;
    }
    
    // Título contextual
    const titulo = modal.querySelector('#modal-dificultad-titulo');
    if (titulo) titulo.textContent = `Selecciona dificultad — ${materia}`;
    
    modal.classList.remove('hidden');
}

// Confirmar dificultad y pasar al juego (cuando viene de competencia)
function confirmarDificultadModal(usarTodas = false) {
    const modal = document.getElementById('modal-dificultad');
    if (!modal) return;
    
    let seleccion = null;
    if (!usarTodas) {
        seleccion = modal.querySelector('input[name="modal-dificultad"]:checked')?.value || null;
    }
    
    // Guardar dificultad seleccionada
    if (seleccion) {
        guardarDificultadMateria(gradoSeleccionado, materiaSeleccionada, seleccion);
    }
    
    window.dificultadSeleccionada = seleccion;
    modal.classList.add('hidden');
    
    // Si viene de una competencia, iniciar juego directamente
    if (competenciaSeleccionada) {
        iniciarJuegoConCompetencia(seleccion);
    } else {
        // Si no, abrir video tutorial (flujo original)
        const src = videoTutoriales[materiaSeleccionada] || null;
        mostrarVideoTutorial(materiaSeleccionada, src);
    }
}

// Mostrar video tutorial
function mostrarVideoTutorial(materia, videoSrc) {
    window.pendingMateria = materia || window.pendingMateria;
    
    let modal = document.getElementById('modal-video');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-video';
        modal.className = 'fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-60 hidden';
        modal.innerHTML = `
            <div class="bg-white rounded-xl shadow-2xl p-4 max-w-3xl w-full relative">
                <button id="modal-video-cerrar" class="absolute right-3 top-3 text-gray-600 rounded-md px-2 py-1 hover:bg-gray-100">✕</button>
                <h3 id="video-titulo" class="text-xl font-bold text-indigo-700 mb-2 text-center">Tutorial</h3>
                <div class="w-full aspect-video mb-3">
                    <div id="video-container" class="w-full h-full bg-black rounded flex items-center justify-center"></div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="text-sm text-gray-600">El video se reproducirá automáticamente. Puedes saltarlo.</div>
                    <div>
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
    
    // Limpiar y crear iframe
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
    
    // Actualizar botón de iniciar
    const btnIniciar = modal.querySelector('#btn-iniciar-desde-video');
    if (btnIniciar) {
        btnIniciar.replaceWith(btnIniciar.cloneNode(true));
        modal.querySelector('#btn-iniciar-desde-video').addEventListener('click', iniciarSeccionDesdeVideo);
    }
    
    modal.classList.remove('hidden');
}

// Iniciar sección desde video
function iniciarSeccionDesdeVideo() {
    const modal = document.getElementById('modal-video');
    if (modal) modal.classList.add('hidden');
    
    const materia = window.pendingMateria;
    const dif = window.dificultadSeleccionada || localStorage.getItem('dificultad') || null;
    
    if (typeof window.seleccionarMateria === 'function') {
        try {
            window.seleccionarMateria(materia, dif);
        } catch (e) {
            console.error('Error al iniciar materia:', e);
        }
    }
}

// Cerrar video
function cerrarVideo() {
    const modal = document.getElementById('modal-video');
    if (modal) modal.classList.add('hidden');
}

// Exponer funciones globalmente
window.abrirFlujoMateria = abrirFlujoMateria;
window.confirmarDificultadModal = confirmarDificultadModal;
window.mostrarVideoTutorial = mostrarVideoTutorial;
window.iniciarSeccionDesdeVideo = iniciarSeccionDesdeVideo;
window.cerrarVideo = cerrarVideo;