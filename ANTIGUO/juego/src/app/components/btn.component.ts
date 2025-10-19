import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: '[btn]',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'buttonClasses()',
        '[attr.disabled]': 'disabled() ? true : null',
    },
    styles: `
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            position: relative;
            font-family: inherit;
            text-decoration: none;
            user-select: none;
            border-radius: 0.5rem;
            border: none;
            background-color: var(--btn-bg-color);
            color: var(--btn-text-color);
            outline: none;
            transition: all 0.2s ease;

            &:hover:not(:disabled) {
                background-color: var(--btn-bg-hover);
                transform: translateY(-2px);
            }

            &:active:not(:disabled) {
                transform: translateY(0);
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                pointer-events: none;
            }

            &:focus-visible {
                outline: 2px solid var(--btn-bg-color);
                outline-offset: 2px;
            }
        }

        :host(.btn-primary) {
            --btn-bg-color: var(--primary);
            --btn-bg-hover: var(--primary-dark);
            --btn-text-color: var(--text-on-primary);
        }

        :host(.btn-secondary) {
            --btn-bg-color: var(--secondary);
            --btn-bg-hover: var(--secondary-dark);
            --btn-text-color: var(--text-on-secondary);
        }

        :host(.btn-success) {
            --btn-bg-color: var(--success);
            --btn-bg-hover: var(--success-dark);
            --btn-text-color: var(--text-on-success);
        }

        :host(.btn-danger) {
            --btn-bg-color: var(--error);
            --btn-bg-hover: var(--error-dark);
            --btn-text-color: var(--text-on-error);
        }

        :host(.btn-warning) {
            --btn-bg-color: var(--warning);
            --btn-bg-hover: var(--warning-dark);
            --btn-text-color: var(--text-on-warning);
        }

        :host(.btn-info) {
            --btn-bg-color: var(--info);
            --btn-bg-hover: var(--info-dark);
            --btn-text-color: var(--text-on-info);
        }
    `,
})
export class BtnComponent {
    color = input<'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'>('primary');
    disabled = input<boolean>(false);

    buttonClasses = computed(() => {
        const classes = ['btn'];
        classes.push(`btn-${this.color()}`);

        return classes.join(' ');
    });
}
