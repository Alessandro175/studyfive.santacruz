// init.js - Inicialización de la aplicación y event listeners

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar audio de lobby
    iniciarAudioLobby();
    
    // Cargar datos de jugadores
    cargarJugadores();
    
    // Sanitizar banco de preguntas
    try {
        sanitizarBancoPreguntas();
    } catch (e) {
        console.error('Error sanitizando banco de preguntas:', e);
    }
    
    // Mostrar pantalla de bienvenida
    mostrarPantallaBienvenida();
    
    // Inicializar listeners de avatar
    inicializarAvatarListeners();
    cargarAvatarGuardado();
    
    // Configurar formulario de nickname
    configurarFormularioNickname();
    
    // Configurar modal de mensaje
    const btnCerrarModal = document.getElementById('modal-cerrar');
    if (btnCerrarModal) {
        btnCerrarModal.onclick = ocultarModal;
    }
    
    // Renderizar perfil inicial
    renderPerfilJugador();
});

// Configurar formulario de registro/login
function configurarFormularioNickname() {
    const form = document.getElementById('form-nickname');
    if (!form) return;
    
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const inputNick = document.getElementById('input-nickname');
        const nick = inputNick.value.trim();
        
        if (!nick) {
            mostrarModal('Error', 'Por favor ingresa un nickname válido.');
            return;
        }
        
        // Asignar nickname global
        window.nickname = nick;
        nickname = nick;
        
        // Leer datos del avatar
        const genero = document.querySelector('input[name="genero"]:checked')?.value || '';
        const skin = document.getElementById('avatar-skin')?.value || '#fcd7b6';
        const hair = document.getElementById('avatar-hair')?.value || '#3e2723';
        const face = document.getElementById('avatar-face')?.value || 'normal';
        
        avatarJugador = { genero, skin, hair, face };
        
        // Crear o actualizar jugador
        crearActualizarJugador(nick, avatarJugador);
        
        // Ir a pantalla de inicio
        mostrarPantallaInicio();
        renderPerfilJugador();
    };
}

// Exponer variables globales necesarias
window.nickname = nickname;