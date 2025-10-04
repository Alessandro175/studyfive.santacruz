// ui.js - Gestión de interfaz de usuario y transiciones entre pantallas

const PANTALLAS = {
    BIENVENIDA: 'pantalla-bienvenida',
    INICIO: 'inicio',
    SELECCION_MATERIA: 'seleccion-materia',
    JUEGO: 'juego',
    RESULTADOS: 'resultados'
};

// Función principal para cambiar de pantalla con animación
function cambiarPantalla(pantallaDestino) {
    const todasPantallas = Object.values(PANTALLAS);
    const pantallaActual = todasPantallas.find(id => {
        const el = document.getElementById(id);
        return el && !el.classList.contains('hidden');
    });

    // Si ya estamos en la pantalla destino, no hacer nada
    if (pantallaActual === pantallaDestino) return;

    // Animar salida de pantalla actual
    if (pantallaActual) {
        const elementoActual = document.getElementById(pantallaActual);
        elementoActual.classList.add('fade-out');
        
        setTimeout(() => {
            elementoActual.classList.add('hidden');
            elementoActual.classList.remove('fade-out');
        }, 300);
    }

    // Animar entrada de nueva pantalla
    setTimeout(() => {
        const elementoDestino = document.getElementById(pantallaDestino);
        elementoDestino.classList.remove('hidden');
        elementoDestino.classList.add('fade-in');
        
        setTimeout(() => {
            elementoDestino.classList.remove('fade-in');
        }, 300);
    }, pantallaActual ? 300 : 0);
}

// Mostrar pantalla de bienvenida
function mostrarPantallaBienvenida() {
    cambiarPantalla(PANTALLAS.BIENVENIDA);
    renderRanking();
}

// Mostrar pantalla de inicio (grados)
function mostrarPantallaInicio() {
    cambiarPantalla(PANTALLAS.INICIO);
    renderGrados();
    renderPerfilJugador();
}

// Mostrar pantalla de selección de materia
function mostrarPantallaSeleccionMateria(grado) {
    cambiarPantalla(PANTALLAS.SELECCION_MATERIA);
    document.getElementById('titulo-grado').textContent = `Materias de ${grado}° Grado`;
    renderMaterias();
}

// Mostrar pantalla de juego
function mostrarPantallaJuego() {
    cambiarPantalla(PANTALLAS.JUEGO);
}

// Mostrar pantalla de resultados
function mostrarPantallaResultados() {
    cambiarPantalla(PANTALLAS.RESULTADOS);
}

// Navegación: Volver a grados
function volverAGrados() {
    volverAudioLobby();
    mostrarPantallaInicio();
}

// Navegación: Volver a materias
function volverAMaterias() {
    volverAudioLobby();
    mostrarPantallaSeleccionMateria(gradoSeleccionado);
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

// Pantalla de felicitaciones con confeti
function mostrarPantallaFelicitaciones() {
    setTimeout(() => {
        mostrarModal('¡Felicidades!', '¡Completaste el curso al 100%! 🎉');
        
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
}

// Animación de respuesta correcta
function mostrarPantallaFelicitacionesRespuesta() {
    const overlay = document.createElement("div");
    overlay.id = "felicitacion-overlay";
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(243, 243, 243, 0.3);
        z-index: 9998;
    `;
    
    const check = document.createElement("div");
    check.innerHTML = "✔";
    check.style.cssText = `
        font-size: 120px;
        color: #46d44bff;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
    `;
    
    overlay.appendChild(check);
    document.body.appendChild(overlay);

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

    setTimeout(() => {
        overlay.remove();
    }, 2500);
}

// Animación de respuesta incorrecta
function mostrarPantallaErrorRespuesta() {
    let errorIcon = document.getElementById("icono-error-respuesta");
    if (!errorIcon) {
        errorIcon = document.createElement("div");
        errorIcon.id = "icono-error-respuesta";
        errorIcon.innerHTML = "❌";
        document.body.appendChild(errorIcon);
    }

    errorIcon.classList.add("visible", "sacudida-error");

    setTimeout(() => {
        errorIcon.classList.remove("sacudida-error", "visible");
    }, 1500);
}

// Exponer funciones globalmente
window.mostrarPantallaBienvenida = mostrarPantallaBienvenida;
window.mostrarPantallaInicio = mostrarPantallaInicio;
window.mostrarPantallaSeleccionMateria = mostrarPantallaSeleccionMateria;
window.mostrarPantallaJuego = mostrarPantallaJuego;
window.mostrarPantallaResultados = mostrarPantallaResultados;
window.volverAGrados = volverAGrados;
window.volverAMaterias = volverAMaterias;
window.mostrarModal = mostrarModal;
window.ocultarModal = ocultarModal;
window.mostrarPantallaFelicitaciones = mostrarPantallaFelicitaciones;
window.mostrarPantallaFelicitacionesRespuesta = mostrarPantallaFelicitacionesRespuesta;
window.mostrarPantallaErrorRespuesta = mostrarPantallaErrorRespuesta;