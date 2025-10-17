# Sistema de Gestión de Avatares

Este documento describe cómo funciona el sistema centralizado de gestión de avatares en la aplicación.

## 📁 Ubicación del Archivo

El sistema de avatares está centralizado en:

```
src/app/data/avatars.constants.ts
```

## 🎯 Ventajas de la Centralización

- ✅ Un solo lugar para agregar/modificar avatares
- ✅ Tipado fuerte con TypeScript
- ✅ Funciones de utilidad reutilizables
- ✅ Fácil mantenimiento
- ✅ Consistencia en toda la aplicación

## 📝 Estructura del Sistema

### Tipos Exportados

#### `AvatarName`

Tipo que define los nombres válidos de avatares:

```typescript
export type AvatarName = 'cuto' | 'dolpi' | 'llami' | 'loderi' | 'peli' | 'pengu' | 'zoro';
```

#### `Avatar`

Interface que define la estructura de un avatar:

```typescript
export interface Avatar {
    name: AvatarName;
    displayName: string;
    description?: string;
}
```

### Constantes Exportadas

#### `AVATARS_DISPONIBLES`

Array con todos los avatares disponibles:

```typescript
export const AVATARS_DISPONIBLES: Avatar[] = [
    { name: 'cuto', displayName: 'Cuto', description: 'Un adorable zorro' },
    // ... más avatares
];
```

#### `DEFAULT_AVATAR`

Avatar por defecto del sistema:

```typescript
export const DEFAULT_AVATAR: AvatarName = 'cuto';
```

### Funciones de Utilidad

#### `getAvatarPath(avatarName: AvatarName): string`

Obtiene la ruta de la imagen de un avatar:

```typescript
const path = getAvatarPath('cuto'); // 'img/avatars/cuto-avatar.png'
```

#### `getAvatarNames(): AvatarName[]`

Obtiene un array con todos los nombres de avatares:

```typescript
const names = getAvatarNames(); // ['cuto', 'dolpi', 'llami', ...]
```

#### `getAvatarByName(name: AvatarName): Avatar | undefined`

Obtiene la información completa de un avatar:

```typescript
const avatar = getAvatarByName('cuto');
// { name: 'cuto', displayName: 'Cuto', description: '...' }
```

## 🚀 Cómo Agregar un Nuevo Avatar

### Paso 1: Agregar la Imagen

Coloca la imagen del nuevo avatar en:

```
juego/public/img/avatars/
```

Nombre de archivo: `{nombre-avatar}-avatar.png`

Ejemplo: `tuki-avatar.png`

### Paso 2: Actualizar el Tipo

Edita `src/app/data/avatars.constants.ts` y actualiza el tipo `AvatarName`:

```typescript
export type AvatarName = 'cuto' | 'dolpi' | 'llami' | 'loderi' | 'peli' | 'pengu' | 'zoro' | 'tuki';
                                                                                              ^^^^^^^^
```

### Paso 3: Agregar al Array

Agrega el nuevo avatar al array `AVATARS_DISPONIBLES`:

```typescript
export const AVATARS_DISPONIBLES: Avatar[] = [
    // ... avatares existentes
    {
        name: 'tuki',
        displayName: 'Tuki',
        description: 'Un tucán colorido',
    },
];
```

### ¡Eso es todo!

No necesitas modificar ningún otro archivo. El sistema automáticamente:

- ✅ Mostrará el nuevo avatar en la pantalla de registro
- ✅ Permitirá seleccionarlo
- ✅ Lo guardará correctamente en la base de datos
- ✅ Lo mostrará en el perfil del usuario

## 🔍 Archivos que Usan el Sistema

Los siguientes archivos importan y usan las constantes de avatares:

1. **`src/app/models/user.model.ts`**
    - Importa `AvatarName` para tipar los usuarios

2. **`src/app/pages/registro/registro.ts`**
    - Importa `AVATARS_DISPONIBLES`, `getAvatarPath`, `DEFAULT_AVATAR`
    - Muestra la galería de avatares
    - Permite la selección

3. **`src/app/pages/home/home.ts`**
    - Importa `getAvatarPath`
    - Muestra el avatar del usuario en el perfil

## 📋 Checklist para Agregar Avatar

- [ ] Crear imagen PNG del avatar
- [ ] Nombrar archivo: `{nombre}-avatar.png`
- [ ] Colocar en `juego/public/img/avatars/`
- [ ] Actualizar tipo `AvatarName` en `avatars.constants.ts`
- [ ] Agregar objeto al array `AVATARS_DISPONIBLES`
- [ ] Ejecutar `npm run format` para formatear el código
- [ ] Ejecutar `ng build` para verificar que compila

## 🎨 Recomendaciones de Diseño

- **Formato**: PNG con transparencia
- **Tamaño recomendado**: 512x512 px o superior
- **Estilo**: Consistente con los avatares existentes
- **Optimización**: Comprimir las imágenes para web

## 🧪 Testing

Después de agregar un nuevo avatar, verifica:

1. ✅ Aparece en la galería de selección de registro
2. ✅ Se puede seleccionar correctamente
3. ✅ Se muestra en el perfil del usuario después de registrarse
4. ✅ La imagen carga sin errores 404

---

**Última actualización**: Octubre 2025
