// storage.js - Gestión de almacenamiento local y datos de jugadores

let jugadores = {};
let nickname = '';

// Cargar jugadores desde localStorage
function cargarJugadores() {
    const data = localStorage.getItem('jugadores_educativo');
    if (data) {
        jugadores = JSON.parse(data);
    } else {
        jugadores = {};
    }
}

// Guardar jugadores en localStorage
function guardarJugadores() {
    localStorage.setItem('jugadores_educativo', JSON.stringify(jugadores));
}

// Obtener jugador actual
function getJugadorActual() {
    return jugadores[nickname] || null;
}

// Crear o actualizar jugador
function crearActualizarJugador(nick, avatar) {
    if (!jugadores[nick]) {
        jugadores[nick] = { 
            total: 0, 
            cursos: {}, 
            avatar: avatar,
            dificultadPorGrado: {}
        };
    } else {
        jugadores[nick].avatar = avatar;
    }
    guardarJugadores();
}

// Actualizar puntaje del jugador
function actualizarPuntajeJugador(puntos) {
    if (jugadores[nickname]) {
        jugadores[nickname].total = (jugadores[nickname].total || 0) + puntos;
        guardarJugadores();
    }
}

// Guardar progreso de curso
function guardarProgresoCurso(grado, materia, puntaje, completado) {
    if (!jugadores[nickname]) return;
    
    if (!jugadores[nickname].cursos[grado]) {
        jugadores[nickname].cursos[grado] = {};
    }
    
    jugadores[nickname].cursos[grado][materia] = {
        puntaje: puntaje,
        completado: completado
    };
    
    guardarJugadores();
}

// Obtener progreso de curso
function getProgresoCurso(grado, materia) {
    if (!jugadores[nickname]?.cursos?.[grado]?.[materia]) {
        return { puntaje: 0, completado: false };
    }
    return jugadores[nickname].cursos[grado][materia];
}

// Guardar dificultad por materia
function guardarDificultadMateria(grado, materia, dificultad) {
    if (!jugadores[nickname]) return;
    
    if (!jugadores[nickname].dificultadPorGrado) {
        jugadores[nickname].dificultadPorGrado = {};
    }
    if (!jugadores[nickname].dificultadPorGrado[grado]) {
        jugadores[nickname].dificultadPorGrado[grado] = {};
    }
    
    jugadores[nickname].dificultadPorGrado[grado][materia] = dificultad;
    guardarJugadores();
}

// Obtener dificultad guardada
function getDificultadGuardada(grado, materia) {
    return jugadores[nickname]?.dificultadPorGrado?.[grado]?.[materia] || null;
}