import { Injectable, signal } from '@angular/core';

interface MusicTrack {
    name: string;
    path: string;
}

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    private audioElement: HTMLAudioElement | null = null;
    private isPlayingSignal = signal(false);
    private currentTrackSignal = signal<string | null>(null);

    // Música disponible
    private tracks: Map<string, MusicTrack> = new Map([['lobby', { name: 'Lobby', path: '/musica/lobby-v2.mp3' }]]);

    // Map para almacenar efectos de sonido en caché
    private soundEffects: Map<string, HTMLAudioElement> = new Map();

    // Señales públicas
    isPlaying = this.isPlayingSignal.asReadonly();
    currentTrack = this.currentTrackSignal.asReadonly();

    constructor() {
        this.initializeAudio();
        this.preloadSoundEffects();
    }

    /**
     * Inicializa el elemento de audio
     * Esto es importante para preparar el audio antes del primer play
     */
    private initializeAudio() {
        if (!this.audioElement) {
            this.audioElement = new Audio();
            this.audioElement.volume = 0.5; // Volumen por defecto 50%

            // Listeners para actualizar estado
            this.audioElement.addEventListener('play', () => {
                this.isPlayingSignal.set(true);
            });

            this.audioElement.addEventListener('pause', () => {
                this.isPlayingSignal.set(false);
                console.log('Sonido pausado');
                
            });

            this.audioElement.addEventListener('ended', () => {
                this.isPlayingSignal.set(false);
            });

            // Configurar para loop (música de lobby repetitiva)
            this.audioElement.loop = true;
        }
    }

    /**
     * Selecciona una música para reproducir
     * @param trackId - ID de la pista (ej: 'lobby')
     */
    selectMusic(trackId: string): boolean {
        const track = this.tracks.get(trackId);
        if (!track) {
            console.error(`Música no encontrada: ${trackId}`);
            return false;
        }

        if (this.audioElement) {
            this.audioElement.src = track.path;
            this.audioElement.loop = true; // Asegurar que la música se repita
            this.currentTrackSignal.set(trackId);
            return true;
        }
        return false;
    }

    /**
     * Reproduce la música actualmente seleccionada
     * Maneja las restricciones de autoplay del navegador
     */
    async play(): Promise<boolean> {
        if (!this.audioElement) {
            console.error('Audio element no está inicializado');
            return false;
        }

        try {
            // Intentar reproducir
            const playPromise = this.audioElement.play();
            if (playPromise !== undefined) {
                await playPromise;
                return true;
            }
            return true;
        } catch (error: any) {
            // Si falla por políticas de autoplay, es normal
            // El usuario puede hacer click para iniciar la música
            if (error.name === 'NotAllowedError') {
                console.warn('Autoplay bloqueado por el navegador. Se requiere interacción del usuario.');
                return false;
            }
            console.error('Error al reproducir música:', error);
            return false;
        }
    }

    /**
     * Pausa la música actualmente reproducida
     */
    pause(): void {
        if (this.audioElement) {
            this.audioElement.pause();
        }
    }

    /**
     * Alterna entre reproducción y pausa
     */
    toggle(): boolean {
        if (!this.audioElement) return false;

        if (this.isPlayingSignal()) {
            this.pause();
            return false;
        } else {
            this.play();
            return true;
        }
    }

    /**
     * Detiene la música y reinicia desde el principio
     */
    stop(): void {
        if (this.audioElement) {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
        }
    }

    /**
     * Establece el volumen (0 a 1)
     * @param volume - Volumen entre 0 y 1
     */
    setVolume(volume: number): void {
        if (this.audioElement) {
            this.audioElement.volume = Math.max(0, Math.min(1, volume));
        }
    }

    /**
     * Obtiene el volumen actual (0 a 1)
     */
    getVolume(): number {
        return this.audioElement?.volume ?? 0.5;
    }

    /**
     * Añade una nueva pista de música
     */
    addTrack(id: string, name: string, path: string): void {
        this.tracks.set(id, { name, path });
    }

    /**
     * Obtiene todas las pistas disponibles
     */
    getTracks(): MusicTrack[] {
        return Array.from(this.tracks.values());
    }

    /**
     * Precarga los efectos de sonido más comunes
     */
    private preloadSoundEffects(): void {
        const effects = [{ id: 'click', path: '/musica/efectos/pen-click.mp3' }];

        effects.forEach((effect) => {
            const audio = new Audio();
            audio.src = effect.path;
            audio.volume = 0.6; // Volumen moderado para efectos
            audio.preload = 'auto';
            this.soundEffects.set(effect.id, audio);
        });
    }

    /**
     * Reproduce un efecto de sonido
     * @param effectId - ID del efecto a reproducir
     * @param volume - Volumen opcional (0 a 1)
     */
    async playSoundEffect(effectId: string, volume?: number): Promise<boolean> {
        let audio = this.soundEffects.get(effectId);

        if (!audio) {
            console.warn(`Efecto de sonido no encontrado: ${effectId}`);
            return false;
        }

        try {
            // Clonar el audio para permitir reproducción simultánea
            const audioClone = audio.cloneNode(true) as HTMLAudioElement;

            if (volume !== undefined) {
                audioClone.volume = Math.max(0, Math.min(1, volume));
            }

            // Reproducir el efecto
            const playPromise = audioClone.play();
            if (playPromise !== undefined) {
                await playPromise;
            }

            return true;
        } catch (error: any) {
            if (error.name === 'NotAllowedError') {
                console.warn('Reproducción de efecto bloqueada por el navegador.');
                return false;
            }
            console.error('Error al reproducir efecto de sonido:', error);
            return false;
        }
    }
}
