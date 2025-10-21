import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'back-button',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ label() }}
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
                padding: 0;
                background: transparent;
                border: none;
                color: #4f46e5;
                font-weight: 600;
                cursor: pointer;
                transition: color 0.2s ease;
                font-size: 1rem;
            }

            :host:hover {
                color: #4338ca;
            }

            .back-icon {
                width: 1.5rem;
                height: 1.5rem;
            }

            @media (max-width: 640px) {
                :host {
                    font-size: 0.875rem;
                }

                .back-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
        `,
    ],
})
export class BackButtonComponent {
    label = input<string>('Volver');
}
