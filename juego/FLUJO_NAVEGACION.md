# Sistema de Autenticación y Navegación

## 📋 Resumen

Se ha implementado un sistema completo de autenticación con gestión de usuarios, incluyendo:

- Registro de nuevos usuarios
- Login con validación de nickname
- Protección de rutas con Guards
- Gestión de sesión
- Sistema de puntuación

## 🗺️ Rutas Configuradas

### 1. `/login` - Página de Inicio de Sesión

- **Guard:** `guestGuard` (solo accesible sin sesión activa)
- **Descripción:** Permite a usuarios existentes iniciar sesión con su nickname
- **Características:**
    - Validación de nickname existente
    - Muestra ranking de jugadores
    - Enlace a registro para nuevos usuarios
    - Redirige a `/home` después del login exitoso

### 2. `/registro` - Página de Registro

- **Guard:** `guestGuard` (solo accesible sin sesión activa)
- **Descripción:** Permite crear una nueva cuenta de usuario
- **Características:**
    - Validación de nickname único
    - Selección de género
    - Personalización de avatar (colores de piel y pelo)
    - Muestra ranking de jugadores
    - Enlace a login para usuarios existentes
    - Redirige a `/home` después del registro exitoso

### 3. `/home` - Pantalla Principal del Juego

- **Guard:** `authGuard` (requiere sesión activa)
- **Descripción:** Pantalla principal del juego donde el usuario juega
- **Características:**
    - Muestra información del jugador actual
    - Avatar personalizado
    - Puntuación en tiempo real
    - Botón de cerrar sesión
    - Ranking actualizado automáticamente
    - Botones de prueba para sumar/restar puntos

### 4. `/` (Raíz)

- Redirige automáticamente a `/login`

### 5. `**` (Rutas no encontradas)

- Redirige automáticamente a `/login`

## 🛡️ Guards Implementados

### `authGuard`

Protege rutas que requieren usuario autenticado:

- Verifica si existe `currentUser` en el servicio
- Si NO hay usuario → Redirige a `/login`
- Si hay usuario → Permite el acceso

**Usado en:**

- `/home`

### `guestGuard`

Protege rutas que solo deben ser accesibles sin sesión:

- Verifica si existe `currentUser` en el servicio
- Si hay usuario → Redirige a `/home`
- Si NO hay usuario → Permite el acceso

**Usado en:**

- `/login`
- `/registro`

## 🔄 Flujo de Usuario

### Flujo de Registro (Usuario Nuevo)

```
1. Usuario accede a la app → Redirige a /login
2. Click en "Regístrate aquí" → Navega a /registro
3. Completa formulario (nickname, género, avatar)
4. Submit del formulario:
   - Valida nickname único
   - Crea usuario con UUID
   - Guarda en localStorage
   - Establece como currentUser
   - Muestra toast de bienvenida
   - Redirige automáticamente a /home
5. Usuario está en el juego (/home)
```

### Flujo de Login (Usuario Existente)

```
1. Usuario accede a /login
2. Ingresa su nickname
3. Submit del formulario:
   - Busca usuario en localStorage
   - Si existe → Establece como currentUser
   - Muestra toast de bienvenida
   - Redirige automáticamente a /home
   - Si NO existe → Muestra error y sugiere registro
4. Usuario está en el juego (/home)
```

### Flujo de Logout

```
1. Usuario en /home click en "Cerrar Sesión"
2. Limpia currentUser del servicio y localStorage
3. Muestra toast de despedida
4. Redirige automáticamente a /login
```

### Protección Automática

```
Si usuario logueado intenta acceder a /login o /registro:
→ Redirige automáticamente a /home

Si usuario NO logueado intenta acceder a /home:
→ Redirige automáticamente a /login
```

## 💾 Persistencia de Datos

### localStorage Keys:

- `studyfive_users` - Array con todos los usuarios registrados
- `studyfive_current_user` - Usuario con sesión activa

### Datos se mantienen entre sesiones:

- Los usuarios permanecen registrados
- La puntuación se guarda automáticamente
- La sesión persiste al recargar la página

## 🎮 Sistema de Puntuación

### En el componente Home:

```typescript
// Sumar puntos
userService.updateScore(10); // +10 puntos

// Restar puntos
userService.updateScore(-5); // -5 puntos

// Establecer puntuación exacta
userService.setScore(100); // Establece a 100 puntos
```

### El ranking se actualiza automáticamente:

- Usa Signals de Angular para reactividad
- Se ordena por puntuación (mayor a menor)
- Muestra posición del usuario actual
- Top 3 con medallas especiales (🏆🥈🥉)

## 🔧 Uso en Desarrollo

### Para probar el sistema:

1. **Primera vez:** Ir a `/registro`
    - Crear un usuario
    - Serás redirigido a `/home` automáticamente

2. **Cerrar sesión:** Click en "Cerrar Sesión" en `/home`

3. **Iniciar sesión:** Ir a `/login`
    - Ingresar nickname existente
    - Serás redirigido a `/home` automáticamente

4. **Crear múltiples usuarios:**
    - Cerrar sesión
    - Ir a `/registro`
    - Crear nuevo usuario con diferente nickname

5. **Ver ranking:**
    - Visible en `/login`, `/registro` y `/home`
    - Se actualiza en tiempo real al cambiar puntuaciones

## 📱 Características Implementadas

✅ Sistema de rutas con protección
✅ Guards para autenticación
✅ Validación de nickname único
✅ Persistencia en localStorage
✅ Generación de UUID con crypto nativo
✅ Sistema de puntuación reactivo
✅ Ranking en tiempo real
✅ Avatares personalizables
✅ Notificaciones toast
✅ Responsive design
✅ Navegación intuitiva

## 🚀 Próximos Pasos

Para integrar el juego real:

1. Reemplazar los botones de prueba en `/home` con tu lógica de juego
2. Usar `userService.updateScore(points)` cuando el usuario responda correctamente
3. Usar `userService.currentUser()` para acceder al jugador actual
4. El ranking se actualizará automáticamente

## 🎨 Variables Eliminadas

Se eliminó el campo `formaCara` del modelo User:

- **Antes:** `formaCara?: string` (opcional)
- **Ahora:** Eliminado completamente
- **Razón:** Simplificar el avatar a solo colores

Los avatares ahora solo tienen:

- `colorPiel`: Color de la cara
- `colorPelo`: Color del cabello
