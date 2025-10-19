// avatar.js - Sistema de personalización de avatares

let avatarJugador = {
    genero: '',
    skin: '#fcd7b6',
    hair: '#3e2723',
    face: 'normal'
};

// Renderizar avatar en tiempo real
function renderAvatarPreview() {
    const skinInput = document.getElementById('avatar-skin');
    const hairInput = document.getElementById('avatar-hair');
    const faceInput = document.getElementById('avatar-face');
    const svg = document.getElementById('avatar-svg');
    
    if (!skinInput || !hairInput || !faceInput || !svg) return;
    
    const skin = skinInput.value;
    const hair = hairInput.value;
    const face = faceInput.value;
    
    let faceShape = '';
    
    if (face === 'gordo') {
        faceShape = `<ellipse cx="40" cy="45" rx="26" ry="30" fill="${skin}"/>`;
    } else if (face === 'flaco') {
        faceShape = `<ellipse cx="40" cy="45" rx="18" ry="28" fill="${skin}"/>`;
    } else if (face === 'femenino') {
        faceShape = `<ellipse cx="40" cy="45" rx="22" ry="28" fill="${skin}"/>`;
    } else if (face === 'masculino') {
        faceShape = `<ellipse cx="40" cy="45" rx="24" ry="32" fill="${skin}"/>`;
    } else {
        faceShape = `<ellipse cx="40" cy="45" rx="22" ry="30" fill="${skin}"/>`;
    }
    
    // Pelo simple
    let hairShape = `<ellipse cx="40" cy="25" rx="22" ry="12" fill="${hair}"/>`;
    
    svg.innerHTML = faceShape + hairShape + 
        '<circle cx="32" cy="50" r="3" fill="#222"/>' +
        '<circle cx="48" cy="50" r="3" fill="#222"/>';
}

// Inicializar listeners de avatar
function inicializarAvatarListeners() {
    const skinInput = document.getElementById('avatar-skin');
    const hairInput = document.getElementById('avatar-hair');
    const faceInput = document.getElementById('avatar-face');
    
    if (skinInput && hairInput && faceInput) {
        skinInput.addEventListener('input', renderAvatarPreview);
        hairInput.addEventListener('input', renderAvatarPreview);
        faceInput.addEventListener('change', renderAvatarPreview);
        renderAvatarPreview();
    }
    
    // Cambiar icono de género si selecciona "otro"
    const generoRadios = document.querySelectorAll('input[name="genero"]');
    generoRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'otro') {
                const svg = document.getElementById('avatar-svg');
                if (svg) {
                    svg.innerHTML = '<text x="20" y="60" font-size="40">🦠</text>';
                }
            } else {
                renderAvatarPreview();
            }
        });
    });
}

// Cargar avatar guardado al escribir nickname
function cargarAvatarGuardado() {
    const inputNick = document.getElementById('input-nickname');
    
    if (!inputNick) return;
    
    inputNick.addEventListener('input', function() {
        const nick = inputNick.value.trim();
        
        if (jugadores[nick]?.avatar) {
            const avatar = jugadores[nick].avatar;
            
            // Setear género
            if (avatar.genero) {
                const radio = document.querySelector(`input[name='genero'][value='${avatar.genero}']`);
                if (radio) radio.checked = true;
            }
            
            // Setear colores y forma
            const skinInput = document.getElementById('avatar-skin');
            const hairInput = document.getElementById('avatar-hair');
            const faceInput = document.getElementById('avatar-face');
            
            if (skinInput) skinInput.value = avatar.skin || '#fcd7b6';
            if (hairInput) hairInput.value = avatar.hair || '#3e2723';
            if (faceInput) faceInput.value = avatar.face || 'normal';
            
            // Forzar render del avatar
            if (skinInput) skinInput.dispatchEvent(new Event('input'));
        }
    });
}

// Exponer funciones y variables globalmente
window.avatarJugador = avatarJugador;
window.renderAvatarPreview = renderAvatarPreview;
window.inicializarAvatarListeners = inicializarAvatarListeners;
window.cargarAvatarGuardado = cargarAvatarGuardado;