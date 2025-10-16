# Sistema de Usuarios y Notificaciones

Este proyecto incluye un sistema completo de gestión de usuarios con persistencia local y notificaciones toast.

## 🎯 Características Implementadas

### 1. **Modelo de Usuario** (`models/user.model.ts`)
- Interfaz `User` con todos los campos necesarios
- ID único generado con crypto nativo del navegador
- Campos: nickname, género, colores (piel/pelo), forma de cara, puntuación

### 2. **Servicio de Usuario** (`services/user.service.ts`)

#### Funcionalidades principales:
```typescript
// Crear un nuevo usuario
const user = userService.createUser({
  nickname: 'PlayerOne',
  genero: 'masculino',
  colorPiel: '#fcd7b6',
  colorPelo: '#3e2723',
  formaCara: 'normal'
});

// Actualizar puntuación (incrementar)
userService.updateScore(100); // Suma 100 puntos

// Establecer puntuación (sobrescribir)
userService.setScore(500); // Establece 500 puntos exactos

// Obtener el ranking
const ranking = userService.getRanking(); // Array ordenado por puntuación

// Verificar si un nickname es único
const isUnique = userService.isNicknameUnique('PlayerTwo');

// Cerrar sesión
userService.logout();

// Eliminar un usuario
userService.deleteUser(userId);

// Acceder al usuario actual (signal)
const currentUser = userService.currentUser();

// Acceder a todos los usuarios (signal)
const allUsers = userService.users();
```

#### Características especiales:
- ✅ Generación de UUID con `crypto.randomUUID()` nativo
- ✅ Validación de nickname único
- ✅ Persistencia automática en localStorage
- ✅ Signals de Angular para reactividad
- ✅ Gestión de sesión (usuario actual)

### 3. **Servicio de Toast** (`services/toast.service.ts`)

#### Uso:
```typescript
// Diferentes tipos de notificaciones
toastService.success('¡Operación exitosa!');
toastService.error('Algo salió mal');
toastService.warning('Ten cuidado');
toastService.info('Información importante');

// Con duración personalizada (en milisegundos)
toastService.success('Mensaje rápido', 1000);
toastService.info('Mensaje largo', 5000);

// Remover un toast específico
toastService.remove(toastId);

// Limpiar todos los toasts
toastService.clear();
```

#### Tipos de toast:
- `success` - Verde (operaciones exitosas)
- `error` - Rojo (errores)
- `warning` - Naranja (advertencias)
- `info` - Azul/Primary (información general)

### 4. **Componente Toast** (`components/toast.component.ts`)
- Componente standalone que se muestra automáticamente
- Animaciones suaves de entrada
- Auto-cierre configurable
- Responsive (se adapta a móviles)
- Posicionado en la esquina superior derecha

### 5. **Variables CSS Globales** (`styles.scss`)

Se han agregado las siguientes variables CSS:

```scss
--primary: #6366f1;
--primary-rgb: 99, 102, 241;
--primary-dark: #4f46e5;
--text-on-primary: #ffffff;

--secondary: #8b5cf6;
--secondary-rgb: 139, 92, 246;
--secondary-dark: #7c3aed;
--text-on-secondary: #ffffff;

--success: #10b981;
--success-rgb: 16, 185, 129;
--success-dark: #059669;
--text-on-success: #ffffff;

--error: #ef4444;
--error-rgb: 239, 68, 68;
--error-dark: #dc2626;
--text-on-error: #ffffff;

--warning: #f59e0b;
--warning-rgb: 245, 158, 11;
--warning-dark: #d97706;
--text-on-warning: #ffffff;
```

## 🎮 Flujo de Registro de Usuario

1. El usuario completa el formulario (nickname, género, avatar)
2. Se valida que el nickname sea único
3. Se genera un UUID único usando crypto nativo
4. Se crea el usuario con puntuación inicial de 0
5. Se guarda en localStorage
6. Se establece como usuario actual
7. Se muestra un toast de bienvenida
8. El ranking se actualiza automáticamente

## 💾 Persistencia de Datos

Todos los datos se guardan en localStorage:
- `studyfive_users` - Array de todos los usuarios
- `studyfive_current_user` - Usuario con sesión activa

## 🔐 Seguridad

- Los UUIDs se generan con `crypto.randomUUID()` del navegador
- Fallback implementado para navegadores antiguos
- Validación de datos en el cliente
- Nicknames únicos garantizados

## 📱 Responsive

El sistema es completamente responsive:
- Formulario adaptable
- Toast optimizado para móviles
- Ranking con scroll en dispositivos pequeños

## 🚀 Uso en el Juego

Para usar el sistema en tu juego:

```typescript
import { inject } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastService } from './services/toast.service';

export class GameComponent {
  private userService = inject(UserService);
  private toastService = inject(ToastService);

  onCorrectAnswer() {
    // Incrementar puntuación
    this.userService.updateScore(10);
    this.toastService.success('¡Respuesta correcta! +10 puntos');
  }

  onWrongAnswer() {
    this.toastService.error('Respuesta incorrecta. Intenta de nuevo.');
  }

  getCurrentPlayer() {
    return this.userService.currentUser();
  }

  getTopPlayers() {
    return this.userService.getRanking().slice(0, 10); // Top 10
  }
}
```

## 🎨 Personalización

### Cambiar colores del toast
Edita las variables CSS en `styles.scss`:

```scss
:root {
  --primary: #tu-color;
  --primary-dark: #tu-color-oscuro;
}
```

### Cambiar duración por defecto
En `toast.service.ts`:

```typescript
private readonly DEFAULT_DURATION = 5000; // 5 segundos
```

## ✅ Validaciones Implementadas

- Nickname no vacío
- Nickname mínimo 3 caracteres
- Nickname único en el sistema
- Género obligatorio
- Todos los campos del avatar son opcionales pero tienen valores por defecto

## 🔄 Reactividad

Todo el sistema usa Signals de Angular para máxima reactividad:
- El ranking se actualiza automáticamente cuando cambia la puntuación
- Los toasts aparecen y desaparecen de forma reactiva
- El usuario actual se sincroniza con localStorage
