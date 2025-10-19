   // Partículas animadas para la pantalla de bienvenida y grados
    function iniciarParticulas(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let w = 0, h = 0, dpr = window.devicePixelRatio || 1;
        function resize() {
            dpr = window.devicePixelRatio || 1;
            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
            ctx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();
        function randomColor() {
            const colors = ['#6366f1','#a5b4fc','#f472b6','#fbbf24','#34d399','#60a5fa'];
            return colors[Math.floor(Math.random()*colors.length)];
        }
        function createParticle() {
            const size = Math.random()*8+4;
            return {
                x: Math.random()*w,
                y: Math.random()*h,
                vx: (Math.random()-0.5)*0.7,
                vy: Math.random()*0.7+0.2,
                size,
                color: randomColor(),
                alpha: Math.random()*0.5+0.5
            };
        }
        for(let i=0;i<40;i++) particles.push(createParticle());
        function draw() {
            ctx.clearRect(0,0,w,h);
            for(const p of particles) {
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.size,0,2*Math.PI);
                ctx.fillStyle = p.color;
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if(p.y > h+20) {
                    Object.assign(p, createParticle(), {y:-10});
                }
                if(p.x < -20 || p.x > w+20) {
                    Object.assign(p, createParticle(), {x:Math.random()*w, y:-10});
                }
            }
            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        }
        draw();
    }
    // Iniciar partículas solo cuando el canvas esté visible (pantalla activa)
    function mostrarCanvasParticulas(id, mostrar) {
        const canvas = document.getElementById(id);
        if (canvas) {
            canvas.style.display = mostrar ? 'block' : 'none';
            if (mostrar) {
                // Forzar resize para que las partículas aparezcan inmediatamente
                const evt = document.createEvent('Event');
                evt.initEvent('resize', true, true);
                window.dispatchEvent(evt);
            }
        }
    }
    // Siempre iniciar ambos, pero solo mostrar el correspondiente
    iniciarParticulas('particles-bg');
    iniciarParticulas('particles-bg-grados');
    // Mostrar partículas solo en la pantalla activa
    function actualizarParticulasPantalla() {
        const bienvenida = document.getElementById('pantalla-bienvenida');
        const inicio = document.getElementById('inicio');
        mostrarCanvasParticulas('particles-bg', !bienvenida.classList.contains('hidden'));
        mostrarCanvasParticulas('particles-bg-grados', !inicio.classList.contains('hidden'));
    }
    // Hookear cambios de pantalla
    const observer = new MutationObserver(actualizarParticulasPantalla);
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
    window.addEventListener('DOMContentLoaded', actualizarParticulasPantalla);