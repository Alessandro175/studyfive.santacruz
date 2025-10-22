/**
 * Configuración centralizada de avatares
 * Este archivo maneja todos los avatares disponibles en el sistema
 */

export type AvatarName = 'cuto' | 'dolpi' | 'llami' | 'loderi' | 'peli' | 'pengu' | 'zoro' | 'jaguari' | 'arpi' | 'camin' | 'capy' | 'flash' | 'gantes';

export interface Avatar {
    name: AvatarName;
    displayName: string;
    description?: string;
}

/**
 * Lista completa de avatares disponibles
 */
export const AVATARS_DISPONIBLES: Avatar[] = [
    {
        name: 'cuto',
        displayName: 'Cuto',
        description: 'Un mono travieso',
    },
    {
        name: 'dolpi',
        displayName: 'Dolpi',
        description: 'Un delfín juguetón',
    },
    {
        name: 'llami',
        displayName: 'Llami',
        description: 'Una llama simpática',
    },
    {
        name: 'loderi',
        displayName: 'Loderi',
        description: 'Una nutria curiosa',
    },
    {
        name: 'peli',
        displayName: 'Peli',
        description: 'Una pelícana aventurera',
    },
    {
        name: 'pengu',
        displayName: 'Pengu',
        description: 'Un pingüino amigable',
    },
    {
        name: 'zoro',
        displayName: 'Zoro',
        description: 'Un zorro valiente',
    },
    {
        name: 'jaguari',
        displayName: 'Jaguari',
        description: 'Un jaguar ágil',
    },
    {
        name: 'arpi',
        displayName: 'Arpi',
        description: 'Un águila majestuosa',
    },
    {
        name: 'camin',
        displayName: 'Camin',
        description: 'Un caiman maestro del karate',
    },
    {
        name: 'capy',
        displayName: 'Capy',
        description: 'Un capibara relajado',
    },
    {
        name: 'flash',
        displayName: 'Flash',
        description: 'Un oso perezoso veloz',
    },
    {
        name: 'gantes',
        displayName: 'Gantes',
        description: 'Un tigrillo curioso',
    },
];

/**
 * Obtiene la ruta de la imagen del avatar
 */
export function getAvatarPath(avatarName: AvatarName): string {
    return `img/avatars/${avatarName}-avatar.png`;
}

export function getCharacterPath(avatarName: AvatarName): string {
    return `img/avatars/${avatarName}-character.png`;
}

/**
 * Obtiene los nombres de todos los avatares disponibles
 */
export function getAvatarNames(): AvatarName[] {
    return AVATARS_DISPONIBLES.map((avatar) => avatar.name);
}

/**
 * Obtiene la información completa de un avatar por su nombre
 */
export function getAvatarByName(name: AvatarName): Avatar | undefined {
    return AVATARS_DISPONIBLES.find((avatar) => avatar.name === name);
}

/**
 * Avatar por defecto
 */
export const DEFAULT_AVATAR: AvatarName = 'cuto';
