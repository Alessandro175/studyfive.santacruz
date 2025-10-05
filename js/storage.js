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
            dificultadPorGrado: {},
            competencias: {}
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

// Verificar si todas las competencias de un curso están completadas
function verificarCompletadoCurso(grado, materia) {
    if (!jugadores[nickname]?.competencias?.[grado]?.[materia]) {
        return false;
    }
    
    const competencias = jugadores[nickname].competencias[grado][materia];
    const competenciasKeys = Object.keys(competencias);
    
    if (competenciasKeys.length === 0) return false;
    
    // Verificar que todas las competencias estén completadas
    return competenciasKeys.every(competencia => competencias[competencia].completado);
}

// Verificar si todos los cursos de un grado están completados
function verificarCompletadoGrado(grado) {
    if (!jugadores[nickname]?.cursos?.[grado]) {
        return false;
    }
    
    const cursos = jugadores[nickname].cursos[grado];
    const materias = ['Inglés', 'Matemática', 'Comunicación', 'Ciencia y Tecnología', 'Personal Social', 'Arte y Cultura'];
    
    // Verificar que todas las materias estén completadas
    return materias.every(materia => cursos[materia]?.completado === true);
}

// Guardar progreso de competencia y verificar completado del curso
function guardarProgresoCompetencia(grado, materia, competencia, puntaje, completado) {
    if (!jugadores[nickname]) return;
    
    if (!jugadores[nickname].competencias) {
        jugadores[nickname].competencias = {};
    }
    if (!jugadores[nickname].competencias[grado]) {
        jugadores[nickname].competencias[grado] = {};
    }
    if (!jugadores[nickname].competencias[grado][materia]) {
        jugadores[nickname].competencias[grado][materia] = {};
    }
    
    // Guardar progreso de la competencia
    jugadores[nickname].competencias[grado][materia][competencia] = {
        puntaje: puntaje,
        completado: completado
    };
    
    // Verificar si todas las competencias están completadas para marcar el curso como completado
    const cursoCompletado = verificarCompletadoCurso(grado, materia);
    
    if (cursoCompletado) {
        // Marcar el curso como completado
        guardarProgresoCurso(grado, materia, calcularPuntajeTotalCurso(grado, materia), true);
        
        // Verificar si todos los cursos están completados para marcar el grado como completado
        const gradoCompletado = verificarCompletadoGrado(grado);
        
        if (gradoCompletado) {
            console.log(`🎉 ¡Grado ${grado} completado! Todas las materias terminadas.`);
            // Aquí puedes agregar alguna notificación especial o recompensa
        }
    }
    
    guardarJugadores();
}

// Calcular puntaje total de un curso sumando todas las competencias
function calcularPuntajeTotalCurso(grado, materia) {
    if (!jugadores[nickname]?.competencias?.[grado]?.[materia]) {
        return 0;
    }
    
    const competencias = jugadores[nickname].competencias[grado][materia];
    return Object.values(competencias).reduce((total, competencia) => total + (competencia.puntaje || 0), 0);
}

// Guardar progreso de curso
function guardarProgresoCurso(grado, materia, puntaje, completado) {
    if (!jugadores[nickname]) return;
    
    if (!jugadores[nickname].cursos[grado]) {
        jugadores[nickname].cursos[grado] = {};
    }
    
    const progresoAnterior = jugadores[nickname].cursos[grado][materia] || { puntaje: 0, completado: false };
    
    // Solo actualizar si es un puntaje mayor o si se marca como completado
    const nuevoPuntaje = Math.max(puntaje, progresoAnterior.puntaje || 0);
    const nuevoCompletado = completado || progresoAnterior.completado;
    
    jugadores[nickname].cursos[grado][materia] = {
        puntaje: nuevoPuntaje,
        completado: nuevoCompletado
    };
    
    guardarJugadores();
    
    // Log para debugging
    if (completado && !progresoAnterior.completado) {
        console.log(`✅ Curso completado: ${grado}° - ${materia}`);
    }
}

// Obtener progreso de curso
function getProgresoCurso(grado, materia) {
    if (!jugadores[nickname]?.cursos?.[grado]?.[materia]) {
        return { puntaje: 0, completado: false };
    }
    return jugadores[nickname].cursos[grado][materia];
}

// Obtener progreso de competencia
function getProgresoCompetencia(grado, materia, competencia) {
    if (!jugadores[nickname]?.competencias?.[grado]?.[materia]?.[competencia]) {
        return { puntaje: 0, completado: false };
    }
    return jugadores[nickname].competencias[grado][materia][competencia];
}

// Obtener todas las competencias de un curso
function getCompetenciasDeCurso(grado, materia) {
    if (!jugadores[nickname]?.competencias?.[grado]?.[materia]) {
        return {};
    }
    return jugadores[nickname].competencias[grado][materia];
}

// Verificar estado de completado de un grado
function getEstadoGrado(grado) {
    const materias = ['Inglés', 'Matemática', 'Comunicación', 'Ciencia y Tecnología', 'Personal Social', 'Arte y Cultura'];
    const cursos = jugadores[nickname]?.cursos?.[grado] || {};
    
    const completados = materias.filter(materia => cursos[materia]?.completado).length;
    const total = materias.length;
    
    return {
        completado: completados === total,
        progreso: completados,
        total: total,
        porcentaje: Math.round((completados / total) * 100)
    };
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

// Función para forzar la verificación de completado (útil para debugging)
function verificarYActualizarCompletados() {
    if (!jugadores[nickname]) return;
    
    // Verificar todos los grados y materias
    for (let grado in jugadores[nickname].competencias || {}) {
        for (let materia in jugadores[nickname].competencias[grado] || {}) {
            const cursoCompletado = verificarCompletadoCurso(parseInt(grado), materia);
            if (cursoCompletado) {
                const puntajeTotal = calcularPuntajeTotalCurso(parseInt(grado), materia);
                guardarProgresoCurso(parseInt(grado), materia, puntajeTotal, true);
            }
        }
    }
    
    guardarJugadores();
}

// Exponer al scope global
window.jugadores = jugadores;
window.nickname = nickname;
window.cargarJugadores = cargarJugadores;
window.guardarJugadores = guardarJugadores;
window.getJugadorActual = getJugadorActual;
window.crearActualizarJugador = crearActualizarJugador;
window.actualizarPuntajeJugador = actualizarPuntajeJugador;
window.guardarProgresoCurso = guardarProgresoCurso;
window.getProgresoCurso = getProgresoCurso;
window.guardarDificultadMateria = guardarDificultadMateria;
window.getDificultadGuardada = getDificultadGuardada;
window.guardarProgresoCompetencia = guardarProgresoCompetencia;
window.getProgresoCompetencia = getProgresoCompetencia;
window.verificarCompletadoCurso = verificarCompletadoCurso;
window.verificarCompletadoGrado = verificarCompletadoGrado;
window.getEstadoGrado = getEstadoGrado;
window.getCompetenciasDeCurso = getCompetenciasDeCurso;
window.verificarYActualizarCompletados = verificarYActualizarCompletados;