import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast.component';
import { provideIcons } from '@ng-icons/core';
import { matMusicNote, matPause } from '@ng-icons/material-icons/baseline';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToastComponent],
    viewProviders: [provideIcons({ matMusicNote, matPause })],
    template: `
        <router-outlet />
        <app-toast />
    `,
    styles: ``,
})
export class App {}
