// utils.js - Funciones utilitarias y sanitización

// Sanitizar y normalizar banco de preguntas
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
                
                // Normalizar opciones
                if (!Array.isArray(q.opciones) && Array.isArray(q.opcioness)) {
                    q.opciones = q.opcioness;
                    delete q.opcioness;
                }
                if (!Array.isArray(q.opciones)) q.opciones = [];
                
                // Filtrar valores undefined/nulos
                q.opciones = q.opciones.filter(o => typeof o !== 'undefined' && o !== null);
                
                // Normalizar respuestaCorrecta
                if (typeof q.respuestaCorrecta === 'undefined' && typeof q.respuesta !== 'undefined') {
                    if (typeof q.respuesta === 'number' || 
                        (!isNaN(Number(q.respuesta)) && q.respuesta.toString().trim() !== '')) {
                        q.respuestaCorrecta = Number(q.respuesta);
                    } else {
                        const idxOpt = q.opciones.indexOf(q.respuesta);
                        q.respuestaCorrecta = idxOpt >= 0 ? idxOpt : 0;
                    }
                }
                
                // Asegurar respuestaCorrecta válida
                if (typeof q.respuestaCorrecta === 'undefined' || 
                    q.respuestaCorrecta === null || 
                    isNaN(Number(q.respuestaCorrecta))) {
                    q.respuestaCorrecta = 0;
                } else {
                    q.respuestaCorrecta = Number(q.respuestaCorrecta);
                }
                
                // Explicación
                if (typeof q.explicacion === 'undefined') q.explicacion = '';
                
                // Normalizar dificultad
                if (!q.dificultad && q.nivel) {
                    q.dificultad = String(q.nivel).toLowerCase();
                }
                
                // Asignar dificultad por índice si falta
                if (!q.dificultad) {
                    if (idx < 10) q.dificultad = 'facil';
                    else if (idx < 20) q.dificultad = 'intermedio';
                    else q.dificultad = 'dificil';
                }
                
                // Asegurar opciones mínimas
                if (!Array.isArray(q.opciones) || q.opciones.length === 0) {
                    q.opciones = ['Opción A', 'Opción B', 'Opción C', 'Opción D'];
                }
            });
        });
    });
}

// Helpers para DOM
function getOrCreateEl(id, tag = 'div', parent = document.body, attrs = {}) {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement(tag);
        el.id = id;
        Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
        parent.appendChild(el);
    }
    return el;
}

function safeSetInnerHTML(id, html, tag = 'div', parent = document.body, attrs = {}) {
    const el = getOrCreateEl(id, tag, parent, attrs);
    try {
        el.innerHTML = html;
    } catch (err) {
        console.error(`Error en safeSetInnerHTML para #${id}:`, err);
    }
    return el;
}

// Exponer funciones globalmente
window.sanitizarBancoPreguntas = sanitizarBancoPreguntas;
window.getOrCreateEl = getOrCreateEl;
window.safeSetInnerHTML = safeSetInnerHTML;