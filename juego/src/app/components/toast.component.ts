import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div 
          [ngClass]="['toast', 'toast-' + toast.type]"
          (click)="toastService.remove(toast.id)"
        >
          <div class="toast-icon">
            @switch (toast.type) {
              @case ('success') { ✓ }
              @case ('error') { ✕ }
              @case ('warning') { ⚠ }
              @case ('info') { ℹ }
            }
          </div>
          <div class="toast-message">{{ toast.message }}</div>
          <button class="toast-close" (click)="toastService.remove(toast.id)">×</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 400px;
      pointer-events: none;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      animation: slideIn 0.3s ease-out;
      cursor: pointer;
      min-width: 300px;
      backdrop-filter: blur(8px);
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .toast-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.25rem;
      font-weight: bold;
      flex-shrink: 0;
    }

    .toast-message {
      flex: 1;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .toast-close {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      transition: background-color 0.2s;
      flex-shrink: 0;
    }

    /* Success */
    .toast-success {
      background-color: rgba(var(--success-rgb), 0.95);
      color: var(--text-on-success);
      border-left: 4px solid var(--success-dark);
    }

    .toast-success .toast-close:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* Error */
    .toast-error {
      background-color: rgba(var(--error-rgb), 0.95);
      color: var(--text-on-error);
      border-left: 4px solid var(--error-dark);
    }

    .toast-error .toast-close:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* Warning */
    .toast-warning {
      background-color: rgba(var(--warning-rgb), 0.95);
      color: var(--text-on-warning);
      border-left: 4px solid var(--warning-dark);
    }

    .toast-warning .toast-close:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* Info (usando primary) */
    .toast-info {
      background-color: rgba(var(--primary-rgb), 0.95);
      color: var(--text-on-primary);
      border-left: 4px solid var(--primary-dark);
    }

    .toast-info .toast-close:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 640px) {
      .toast-container {
        top: 0.5rem;
        right: 0.5rem;
        left: 0.5rem;
        max-width: none;
      }

      .toast {
        min-width: auto;
      }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}
