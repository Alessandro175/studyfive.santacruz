# Sistema de Navegación de Juego con GameService

## 🎮 Resumen de la Implementación

Se ha implementado un sistema completo de navegación interna en el componente Home que permite:
- Seleccionar grados (1° a 6°)
- Ver materias por grado
- Sistema de estados para controlar las vistas

## 📁 Archivos Creados/Modificados

### 1. **GameService** (`services/game.service.ts`)
Servicio central que controla el estado del juego y la navegación entre vistas.

#### Signals del Servicio:
```typescript
vistaActual = signal<VistaJuego>('seleccion-grados')
// Posibles valores: 'seleccion-grados' | 'seleccion-materias' | 'jugando'

gradoSeleccionado = signal<number | null>(null)
// Grado actual (1-6) o null

materiaSeleccionada = signal<string | null>(null)
// Materia actual o null
```

#### Métodos Principales:
- `seleccionarGrado(grado: number)` - Selecciona un grado y cambia a vista de materias
- `volverAGrados()` - Vuelve a la selección de grados
- `seleccionarMateria(materia: string)` - Selecciona una materia y cambia a vista de juego
- `volverAMaterias()` - Vuelve a la selección de materias
- `resetear()` - Resetea todo el estado del juego
- `getMateriasDelGrado()` - Obtiene las materias del grado actual

#### Materias Disponibles:
Todas los grados tienen las mismas 6 materias:
1. **Inglés**
2. **Matemática**
3. **Comunicación**
4. **Ciencia y Tecnología**
5. **Personal Social**
6. **Arte y Cultura**

### 2. **MateriasComponent** (`components/materias.component.ts`)
Componente que muestra las materias disponibles para el grado seleccionado.

#### Características:
- ✅ Grid responsive (1 columna en móvil, 2 en tablet, 3 en desktop)
- ✅ Botón "Volver a grados" con icono SVG
- ✅ Título dinámico con el número de grado
- ✅ Cards con hover effect
- ✅ Imágenes de materias
- ✅ Puntaje por materia
- ✅ Click handler para seleccionar materia

### 3. **HomeComponent** (`pages/home/home.ts`) - Actualizado
Componente principal que controla las vistas según el estado del juego.

#### Sistema de Vistas:
El componente usa `@if` para mostrar diferentes vistas:

```typescript
@if (gameService.vistaActual() === 'seleccion-grados') {
  // Muestra grid de grados con perfil del jugador
}
@else if (gameService.vistaActual() === 'seleccion-materias') {
  // Muestra componente de materias <app-materias />
}
@else if (gameService.vistaActual() === 'jugando') {
  // Vista de juego (próximamente)
}
```

## 🔄 Flujo de Navegación

### Vista 1: Selección de Grados
```
Usuario ve:
- Título "¡Elige tu Grado!"
- Perfil del jugador (avatar, nickname, puntos, etc.)
- Grid con 6 grados (1° a 6°)
- Cada grado muestra: imagen, puntaje, medallas

Usuario hace click en un grado →
  gameService.seleccionarGrado(numero)
    - gradoSeleccionado = numero
    - vistaActual = 'seleccion-materias'
```

### Vista 2: Selección de Materias
```
Usuario ve:
- Botón "Volver a grados"
- Título "Materias de X° Grado"
- Grid con 6 materias
- Cada materia muestra: imagen, nombre, puntaje

Usuario hace click en "Volver a grados" →
  gameService.volverAGrados()
    - gradoSeleccionado = null
    - materiaSeleccionada = null
    - vistaActual = 'seleccion-grados'

Usuario hace click en una materia →
  gameService.seleccionarMateria(nombre)
    - materiaSeleccionada = nombre
    - vistaActual = 'jugando'
```

### Vista 3: Jugando (Pendiente)
```
Usuario ve:
- Vista del juego (a implementar)
- Información de grado y materia actual

Usuario hace click en "Volver a materias" →
  gameService.volverAMaterias()
    - materiaSeleccionada = null
    - vistaActual = 'seleccion-materias'
```

## 🎨 Diseño Visual

### Cards de Grados:
- Gradientes de color únicos por grado
- Hover effect (scale 105%)
- Sombras suaves
- Indicadores de medallas (6 círculos)
- Imágenes representativas

### Cards de Materias:
- Fondo blanco
- Hover effect (scale 105%)
- Imágenes de 80x80px
- Centrado de contenido
- Grid responsive

## 💾 Estado Persistente

El GameService mantiene el estado del juego en memoria:
- **gradoSeleccionado**: Qué grado eligió el usuario
- **materiaSeleccionada**: Qué materia eligió
- **vistaActual**: En qué pantalla está

Al cerrar sesión, se llama `gameService.resetear()` para limpiar todo.

## 🚀 Uso del Sistema

### En cualquier componente que necesite acceso al estado del juego:

```typescript
import { GameService } from '../services/game.service';

export class MiComponente {
  gameService = inject(GameService);

  // Leer el estado
  const grado = this.gameService.gradoSeleccionado();
  const materia = this.gameService.materiaSeleccionada();
  const vista = this.gameService.vistaActual();

  // Cambiar el estado
  this.gameService.seleccionarGrado(3);
  this.gameService.volverAGrados();
}
```

## 📱 Responsive Design

### Grados (Home):
- **Desktop**: Grid auto-fit con mínimo 200px
- **Tablet/Móvil**: Se ajusta automáticamente

### Materias:
- **Desktop (>= 1024px)**: 3 columnas
- **Tablet (>= 640px)**: 2 columnas
- **Móvil (< 640px)**: 1 columna

## 🎯 Próximos Pasos

Para implementar el juego completo:

1. **Crear componente de Juego**:
   ```typescript
   // components/juego.component.ts
   export class JuegoComponent {
     gameService = inject(GameService);
     
     grado = this.gameService.gradoSeleccionado();
     materia = this.gameService.materiaSeleccionada();
   }
   ```

2. **Agregar en HomeComponent**:
   ```typescript
   @else if (gameService.vistaActual() === 'jugando') {
     <app-juego />
   }
   ```

3. **Implementar lógica de preguntas** según grado y materia

4. **Guardar puntajes** usando UserService.updateScore()

5. **Actualizar medallas** cuando se completen materias

## ✅ Características Implementadas

- ✅ GameService con signals para estado reactivo
- ✅ Navegación entre grados y materias
- ✅ Componente de materias funcional
- ✅ Integración con UserService para perfil
- ✅ Integración con ToastService para notificaciones
- ✅ Reseteo de estado al cerrar sesión
- ✅ Diseño responsive completo
- ✅ Efectos visuales (hover, gradientes)
- ✅ Sistema de medallas por grado

## 🎮 Ejemplo de Uso Completo

```typescript
// 1. Usuario inicia sesión → Llega a /home
// 2. Ve la selección de grados
// 3. Click en "3° Grado"
//    → gameService.vistaActual() cambia a 'seleccion-materias'
//    → Se muestra <app-materias />
// 4. Ve las 6 materias del 3° grado
// 5. Click en "Matemática"
//    → gameService.vistaActual() cambia a 'jugando'
//    → Se mostraría el componente de juego
// 6. Click en "Volver a materias"
//    → Regresa a ver las materias
// 7. Click en "Volver a grados"
//    → Regresa a ver los grados
// 8. Click en "Cerrar Sesión"
//    → gameService.resetear()
//    → Vuelve a /login
```

¡El sistema está listo para que implementes la lógica del juego! 🎉
