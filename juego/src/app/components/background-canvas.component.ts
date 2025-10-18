import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

interface FloatingShape {
    x: number;
    y: number;
    rotation: number;
    rotationSpeed: number;
    vx: number;
    vy: number;
    svg: string;
    color: string;
    size: number;
    opacity: number;
}

@Component({
    selector: 'app-background-canvas',
    standalone: true,
    template: ` <canvas #canvas></canvas> `,
    styles: `
        canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    `,
})
export class BackgroundCanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;
    private animationId: number = 0;
    private shapes: FloatingShape[] = [];
    private resizeListener!: () => void;

    private svgPaths = {
        // iconos originales mejorados (más limpios)
        star: 'M12 2.5 L14.6 8.2 L20.8 9.3 C21.1 9.35 21.25 9.75 21.07 10.0 L17.2 13.8 L18.5 20.0 C18.55 20.3 18.25 20.55 17.95 20.45 L12 17.3 L6.05 20.45 C5.75 20.55 5.45 20.3 5.5 20.0 L6.8 13.8 L2.93 10.0 C2.75 9.75 2.9 9.35 3.2 9.3 L9.4 8.2 L12 2.5 Z',
        circle: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z',
        triangle: 'M12 4 L20 18 H4 Z',
        minus: 'M5 12 H19', // trazado simple: redondeado con stroke-linecap
        division: 'M5 12 H19 M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3 M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3',

        // 5 iconos nuevos con bordes/sombras más suaves o pensados para trazado con joins/caps redondeados
        square: 'M7 3 H17 a2 2 0 0 1 2 2 V19 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 V5 a2 2 0 0 1 2 -2 Z',
        heart: 'M20.8 5.6c-1.9-1.9-5-1.9-6.9 0L12 7.5l-1.9-1.9c-1.9-1.9-5-1.9-6.9 0-2 2-2 5.1 0 7l7.9 7.9c0.3 0.3 0.8 0.3 1.1 0l7.9-7.9c2-1.9 2-5 0-7z',
        hexagon: 'M21 12l-4.5 7.794H7.5L3 12l4.5-7.794h9L21 12z',
        plus: 'M12 5v14 M5 12h14', // dos subtrazas; redondear con stroke props
        chevronLeft: 'M15 18 L9 12 L15 6', // se redondea muy bien con stroke-linejoin/linecap
        diamond: 'M12 2 L18 8 L12 14 L6 8 Z',
        cross: 'M8 8 L12 12 L16 8 M16 16 L12 12 L8 16',
        lightning: 'M13 2 L11 2 L9 9 L11 9 L8 17 L10 17 L12 10 L10 10 L13 2 Z',
    };

    private colors = [
        '#FF1744', // Rojo vibrante
        '#00E676', // Verde lima intenso
        '#2196F3', // Azul brillante
        '#FF9800', // Naranja intenso
        '#9C27B0', // Púrpura intenso
        '#00E676', // Verde lima intenso

        '#00BCD4', // Cian brillante
        '#FF9800', // Naranja intenso
    ];

    ngOnInit() {
        this.resizeListener = () => this.resizeCanvas();
    }

    ngAfterViewInit() {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;

        this.resizeCanvas();
        this.initShapes();
        this.animate();

        window.addEventListener('resize', this.resizeListener);
    }

    ngOnDestroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resizeListener);
    }

    private resizeCanvas() {
        const canvas = this.canvasRef.nativeElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    private initShapes() {
        const canvas = this.canvasRef.nativeElement;
        const shapeTypes = Object.keys(this.svgPaths);
        const numShapes = 80; // Número de formas flotantes

        for (let i = 0; i < numShapes; i++) {
            const svgType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

            this.shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.04,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                svg: svgType,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                size: 30 + Math.random() * 40,
                opacity: 0.5 + Math.random() * 0.4,
            });
        }
    }

    private drawShape(shape: FloatingShape) {
        this.ctx.save();

        // Trasladar al centro de la forma
        this.ctx.translate(shape.x, shape.y);
        this.ctx.rotate(shape.rotation);

        // Escalar según el tamaño
        const scale = shape.size / 24; // 24 es el tamaño base del SVG
        this.ctx.scale(scale, scale);

        // Trasladar para centrar el dibujo
        this.ctx.translate(-12, -12);

        // Configurar estilo
        this.ctx.fillStyle = shape.color;
        this.ctx.strokeStyle = shape.color;
        this.ctx.globalAlpha = shape.opacity;
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';

        // Dibujar la forma
        const path = new Path2D(this.svgPaths[shape.svg as keyof typeof this.svgPaths]);

        // Iconos que se dibujan con stroke (líneas)
        const strokeIcons = ['minus', 'division', 'plus', 'cross', 'arrow', 'lightning', 'chevronLeft'];

        if (strokeIcons.includes(shape.svg)) {
            this.ctx.stroke(path);
        } else {
            this.ctx.fill(path);
        }

        this.ctx.restore();
    }

    private updateShape(shape: FloatingShape) {
        const canvas = this.canvasRef.nativeElement;

        // Actualizar posición
        shape.x += shape.vx;
        shape.y += shape.vy;

        // Actualizar rotación
        shape.rotation += shape.rotationSpeed;

        // Rebotar en los bordes con margen
        const margin = shape.size;

        if (shape.x < -margin) {
            shape.x = canvas.width + margin;
        } else if (shape.x > canvas.width + margin) {
            shape.x = -margin;
        }

        if (shape.y < -margin) {
            shape.y = canvas.height + margin;
        } else if (shape.y > canvas.height + margin) {
            shape.y = -margin;
        }
    }

    private animate = () => {
        const canvas = this.canvasRef.nativeElement;

        // Limpiar canvas
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar todas las formas
        for (const shape of this.shapes) {
            this.updateShape(shape);
            this.drawShape(shape);
        }

        this.animationId = requestAnimationFrame(this.animate);
    };
}
