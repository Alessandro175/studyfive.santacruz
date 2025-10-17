import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  host: {
    '(click)': 'onClose()',
  },
  template: `
    <div class="modal-content" (click)="$event.stopPropagation()">
      <!-- Botón cerrar -->
      <button class="modal-close" (click)="onClose()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <!-- Contenido del modal -->
      <div class="modal-body">
        <h2 class="modal-title">{{ titulo() }}</h2>

        @if (descripcion()) {
        <p class="modal-descripcion">{{ descripcion() }}</p>
        } @if (objetivo()) {
        <div class="modal-objetivo">
          <strong>Objetivo:</strong>
          <p>{{ objetivo() }}</p>
        </div>
        } @if (puntajeAnterior() !== null && puntajeAnterior() !== undefined) {
        <div class="modal-puntaje-anterior">
          <div class="puntaje-badge">
            <span class="puntaje-label">Tu puntaje anterior:</span>
            <span class="puntaje-valor">{{ puntajeAnterior() }}/{{ totalPreguntas() }}</span>
          </div>
        </div>
        }

        <div class="modal-actions">
          <button class="btn btn-secondary" (click)="onClose()">Cancelar</button>
          <button class="btn btn-primary" (click)="onAccept()">
            {{ textoBoton() }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        padding: 1rem;
        z-index: 20;
        // animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-content {
        padding: 1rem;
        background: white;
        border-radius: 20px;
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
        margin: 0 auto;
        // animation: slideIn 0.3s ease;
      }

      @keyframes slideIn {
        from {
          transform: translateY(-50px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .modal-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s;
        color: #666;
      }

      .modal-close:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #000;
      }

      .modal-body {
        padding: 40px 30px 30px;
      }

      .modal-title {
        font-size: 28px;
        font-weight: bold;
        color: var(--color-primary);
        margin-bottom: 20px;
        text-align: center;
      }

      .modal-descripcion {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
        margin-bottom: 20px;
        text-align: center;
      }

      .modal-objetivo {
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 165, 0, 0.1));
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 30px;
        border-left: 4px solid var(--color-primary);
      }

      .modal-objetivo strong {
        display: block;
        font-size: 18px;
        color: var(--color-primary);
        margin-bottom: 10px;
      }

      .modal-objetivo p {
        font-size: 15px;
        color: #444;
        line-height: 1.5;
        margin: 0;
      }

      .modal-puntaje-anterior {
        margin: 20px 0;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      }

      .puntaje-badge {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .puntaje-label {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .puntaje-valor {
        font-size: 32px;
        font-weight: bold;
        color: white;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .modal-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
      }

      .btn {
        padding: 12px 30px;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .btn-primary {
        background: var(--primary);
        color: white;
      }

      .btn-primary:hover {
        transform: translateY(-2px);
      }

      .btn-secondary {
        background: #e0e0e0;
        color: #555;
      }

      .btn-secondary:hover {
        background: #d0d0d0;
        transform: translateY(-2px);
      }

      /* Scrollbar personalizada */
      .modal-content::-webkit-scrollbar {
        width: 8px;
      }

      .modal-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      .modal-content::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 10px;
      }

      .modal-content::-webkit-scrollbar-thumb:hover {
        background: var(--color-secondary);
      }
    `,
  ],
})
export class ModalComponent {
  // Inputs
  titulo = input.required<string>();
  descripcion = input<string>('');
  objetivo = input<string>('');
  textoBoton = input<string>('Comenzar');
  puntajeAnterior = input<number | null>(null);
  totalPreguntas = input<number>(5);

  // Outputs
  close = output<void>();
  accept = output<void>();

  onClose() {
    this.close.emit();
  }

  onAccept() {
    this.accept.emit();
  }
}
