/**
 * Configuración centralizada de avatares
 * Este archivo maneja todos los avatares disponibles en el sistema
 */

export type AvatarName = 'cuto' | 'dolpi' | 'llami' | 'loderi' | 'peli' | 'pengu' | 'zoro' | 'jaguari';

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
        description: 'Un adorable zorro',
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
        description: 'Un pingüino aventurero',
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
];

/**
 * Obtiene la ruta de la imagen del avatar
 */
export function getAvatarPath(avatarName: AvatarName): string {
    return `img/avatars/${avatarName}-avatar.png`;
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
