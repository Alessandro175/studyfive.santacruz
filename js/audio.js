// audio.js - Gestión de música de fondo

let audioLobby = null;
let audioResolve = null;

// Iniciar audio de lobby
function iniciarAudioLobby() {
    if (audioLobby) return; // Evitar múltiples instancias
    
    audioLobby = new Audio('song/lobby.mp3');
    audioLobby.loop = true;
    audioLobby.volume = 0.25;
    audioLobby.play().catch(() => {}); // Por si el navegador bloquea autoplay
}

// Reproducir audio específico de materia
function reproducirAudioResolve(materia) {
    const listSong = {
        "Inglés": "ing.mp3",
        "Matemática": "mt.mp3",
        "Comunicación": "com.mp3",
        "Ciencia y Tecnología": "cyt.mp3",
        "Personal Social": "ps.mp3",
        "Arte y Cultura": "art.mp3"
    };

    // Detener el audio de lobby
    if (audioLobby) {
        audioLobby.pause();
        audioLobby.currentTime = 0;
    }

    // Obtener archivo de audio según la materia
    let archivoAudio = listSong[materia];

    // Si no se encuentra, elegir uno aleatorio
    if (!archivoAudio) {
        const valores = Object.values(listSong);
        archivoAudio = valores[Math.floor(Math.random() * valores.length)];
    }

    // Crear o actualizar audio de resolución
    if (!audioResolve) {
        audioResolve = new Audio('song/' + archivoAudio);
        audioResolve.loop = true;
        audioResolve.volume = 0.25;
    } else {
        audioResolve.pause();
        audioResolve.src = 'song/' + archivoAudio;
        audioResolve.currentTime = 0;
    }

    audioResolve.play().catch(() => {});
}

// Volver al audio de lobby
function volverAudioLobby() {
    if (audioResolve) {
        audioResolve.pause();
        audioResolve.currentTime = 0;
    }
    
    if (audioLobby) {
        audioLobby.play().catch(() => {});
    }
}

// Nueva función para detener/silenciar ambos audios
function detenerTodoAudioFondo() {
    if (audioLobby) {
        audioLobby.pause();
        audioLobby.currentTime = 0;
    }
    if (audioResolve) {
        audioResolve.pause();
        audioResolve.currentTime = 0;
    }
}


// Exponer funciones globalmente
window.iniciarAudioLobby = iniciarAudioLobby;
window.reproducirAudioResolve = reproducirAudioResolve;
window.volverAudioLobby = volverAudioLobby;
window.detenerTodoAudioFondo = detenerTodoAudioFondo; 