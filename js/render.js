// render.js - Funciones para renderizar componentes de la UI

// Renderizar ranking en pantalla de bienvenida
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

// Renderizar grados con progreso
function renderGrados() {
    const grados = [1, 2, 3, 4, 5, 6];
    const container = document.getElementById('grados-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    grados.forEach(grado => {
        let completados = 0, total = 6; // 6 materias
        let puntaje = 0;
        let completado = false;
        
        if (jugadores[nickname]?.cursos?.[grado]) {
            const cursos = jugadores[nickname].cursos[grado];
            completados = Object.values(cursos).filter(c => c.completado).length;
            puntaje = Object.values(cursos).reduce((a, c) => a + (c.puntaje || 0), 0);
            completado = completados === total;
        }
        
        const imagenes = {
            1: '962df116-9af8-4ad1-9ba5-66ecad70fa1b',
            2: 'afc24e6d-7d73-4dea-a615-d8b69ad1083f',
            3: '17d0e301-4c56-48c2-a3a8-025ed219838c',
            4: '05b7e295-0c80-4bff-8eab-cfefe1df46ad',
            5: '0e0de5b8-070c-41c1-8d90-52b1b380cf19',
            6: '48ba77dc-adfb-45a5-b518-b0574ab1c696'
        };
        
        const div = document.createElement('div');
        div.className = `card grado-${grado} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative ${completado ? 'bg-green-100 border-2 border-green-400' : 'bg-white'}`;
        div.onclick = () => seleccionarGrado(grado);
        div.innerHTML = `
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/${imagenes[grado]}.png" class="mx-auto mb-4 materia-icon">
            <h2 class="text-2xl font-bold mb-2">${grado}° Grado</h2>
            <p class="text-gray-700 mb-2">Puntaje: <span class="font-bold">${puntaje}</span></p>
            <div class="flex justify-center gap-2 mb-2">${[...Array(total)].map((_, i) => `<span class="w-3 h-3 rounded-full ${i < completados ? 'bg-green-400' : 'bg-gray-300'} inline-block"></span>`).join('')}</div>
            ${completado ? '<span class="absolute top-2 right-2 bg-green-400 text-white px-2 py-1 rounded text-xs animate__animated animate__bounceIn">¡Completado!</span>' : ''}
        `;
        container.appendChild(div);
    });
}

// Renderizar materias con progreso
function renderMaterias() {
    const materias = [
        { nombre: 'Inglés', icon: '7344f9e9-92b0-4866-83ec-e516c26697d5' },
        { nombre: 'Matemática', icon: '44310e98-8556-42b5-bd9e-948d44db06f6' },
        { nombre: 'Comunicación', icon: '780030d2-ad72-4a0c-8056-f8adedc058e0' },
        { nombre: 'Ciencia y Tecnología', icon: '8654c946-2772-4be6-b915-8a6ca2b1cd6f' },
        { nombre: 'Personal Social', icon: '46cdf4a7-6748-4e93-98df-73d1bda51860' },
        { nombre: 'Arte y Cultura', icon: '0e0de5b8-070c-41c1-8d90-52b1b380cf19' }
    ];
    
    const grid = document.querySelector('#seleccion-materia .grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    materias.forEach(mat => {
        const progreso = getProgresoCurso(gradoSeleccionado, mat.nombre);
        const estado = progreso.completado ? 'bg-green-100 border-2 border-green-400' : 'bg-white';
        
        const div = document.createElement('div');
        div.className = `card ${estado} rounded-xl p-6 cursor-pointer transition-all hover:scale-105 relative`;
        div.onclick = () => abrirFlujoMateria(mat.nombre);
        div.innerHTML = `
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/${mat.icon}.png" class="mx-auto mb-4 materia-icon">
            <h3 class="text-xl font-bold mb-2 text-center">${mat.nombre}</h3>
            <p class="text-gray-700 text-center mb-2">Puntaje: <span class="font-bold">${progreso.puntaje}</span></p>
            ${progreso.completado ? '<span class="absolute top-2 right-2 bg-green-400 text-white px-2 py-1 rounded text-xs animate__animated animate__bounceIn">¡Completado!</span>' : ''}
        `;
        grid.appendChild(div);
    });
}

// Renderizar perfil del jugador
function renderPerfilJugador() {
    const perfil = document.getElementById('perfil-jugador');
    if (!perfil || !jugadores[nickname]) return;
    
    const avatar = jugadores[nickname].avatar || avatarJugador;
    
    // Calcular trofeos y cursos completados
    let trofeos = 0;
    let cursosCompletados = 0;
    
    if (jugadores[nickname].cursos) {
        for (let grado in jugadores[nickname].cursos) {
            const materias = jugadores[nickname].cursos[grado];
            const completadas = Object.values(materias).filter(c => c.completado).length;
            cursosCompletados += completadas;
            if (completadas === 6) trofeos++;
        }
    }
    
    // Generar SVG del avatar
    const avatarSVG = generarAvatarSVG(avatar);
    
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

// Generar SVG del avatar
function generarAvatarSVG(avatar) {
    if (avatar.genero === 'otro') {
        return '<text x="20" y="60" font-size="40">🦠</text>';
    }
    
    let faceShape = '';
    let hairShape = '';
    let mouth = '';
    let blush = '';
    
    switch (avatar.face) {
        case 'gordo':
            faceShape = `<ellipse cx="40" cy="45" rx="26" ry="30" fill="${avatar.skin}" stroke="#e0bfae" stroke-width="2"/>`;
            hairShape = `<ellipse cx="40" cy="22" rx="24" ry="13" fill="${avatar.hair}"/>`;
            mouth = '<ellipse cx="40" cy="62" rx="8" ry="4" fill="#e57373"/>';
            blush = '<ellipse cx="28" cy="58" rx="3" ry="1.5" fill="#fbb"/><ellipse cx="52" cy="58" rx="3" ry="1.5" fill="#fbb"/>';
            break;
        case 'flaco':
            faceShape = `<ellipse cx="40" cy="45" rx="16" ry="28" fill="${avatar.skin}" stroke="#e0bfae" stroke-width="2"/>`;
            hairShape = `<ellipse cx="40" cy="18" rx="18" ry="10" fill="${avatar.hair}"/>`;
            mouth = '<path d="M34 62 Q40 66 46 62" stroke="#e57373" stroke-width="2" fill="none"/>';
            break;
        case 'femenino':
            faceShape = `<ellipse cx="40" cy="45" rx="22" ry="28" fill="${avatar.skin}" stroke="#e0bfae" stroke-width="2"/>`;
            hairShape = `<ellipse cx="40" cy="20" rx="22" ry="12" fill="${avatar.hair}"/>`;
            mouth = '<ellipse cx="40" cy="62" rx="6" ry="3" fill="#e57373"/>';
            blush = '<ellipse cx="30" cy="58" rx="2.5" ry="1.2" fill="#fbb"/><ellipse cx="50" cy="58" rx="2.5" ry="1.2" fill="#fbb"/>';
            break;
        case 'masculino':
            faceShape = `<ellipse cx="40" cy="45" rx="24" ry="32" fill="${avatar.skin}" stroke="#e0bfae" stroke-width="2"/>`;
            hairShape = `<ellipse cx="40" cy="16" rx="20" ry="10" fill="${avatar.hair}"/>`;
            mouth = '<rect x="36" y="60" width="8" height="3" rx="1.5" fill="#b71c1c"/>';
            break;
        default:
            faceShape = `<ellipse cx="40" cy="45" rx="22" ry="30" fill="${avatar.skin}" stroke="#e0bfae" stroke-width="2"/>`;
            hairShape = `<ellipse cx="40" cy="20" rx="22" ry="12" fill="${avatar.hair}"/>`;
            mouth = '<ellipse cx="40" cy="62" rx="5" ry="2.5" fill="#e57373"/>';
    }
    
    const eyes = '<ellipse cx="32" cy="50" rx="3.5" ry="5" fill="#222"/><ellipse cx="48" cy="50" rx="3.5" ry="5" fill="#222"/>';
    const shine = '<ellipse cx="33" cy="48" rx="1" ry="1.5" fill="#fff"/><ellipse cx="49" cy="48" rx="1" ry="1.5" fill="#fff"/>';
    
    return faceShape + hairShape + eyes + shine + mouth + blush;
}

// Exponer funciones globalmente
window.renderRanking = renderRanking;
window.renderGrados = renderGrados;
window.renderMaterias = renderMaterias;
window.renderPerfilJugador = renderPerfilJugador;
window.generarAvatarSVG = generarAvatarSVG;