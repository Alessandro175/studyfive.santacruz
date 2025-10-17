# Sistema de Competencias Zigzag

Este documento describe el nuevo sistema de visualización de competencias con diseño zigzag.

## 🎯 Objetivo

Reemplazar el modal de competencias con una vista completa que muestre todas las competencias de una materia en formato vertical zigzag, permitiendo al jugador ver su progreso y seleccionar cualquier competencia directamente.

## 📋 Cambios Realizados

### 1. Nuevo Componente: `CompetenciasComponent`

**Ubicación**: `src/app/components/competencias.component.ts`

Este componente muestra todas las competencias de una materia seleccionada en un diseño visual atractivo:

#### Características:

- ✅ **Diseño Zigzag**: Las competencias se alternan entre izquierda y derecha
- ✅ **Línea de tiempo central**: Conexión visual entre competencias
- ✅ **Información de progreso**: Muestra porcentaje, puntos y intentos
- ✅ **Estado visual**: Diferenciación clara entre completadas y pendientes
- ✅ **Responsive**: Se adapta a dispositivos móviles

#### Información Mostrada por Competencia:

- Número de la competencia
- Nombre y objetivo
- Barra de progreso (0-100%)
- Mejor puntaje (X/5)
- Número de intentos
- Badge de "Completada" cuando alcanza 100%

### 2. Actualización del `GameService`

**Cambios en el tipo `VistaJuego`**:

```typescript
// ANTES
type VistaJuego = 'seleccion-grados' | 'seleccion-materias' | 'modal-competencia' | 'jugando' | 'resultados';

// AHORA
type VistaJuego = 'seleccion-grados' | 'seleccion-materias' | 'seleccion-competencias' | 'jugando' | 'resultados';
```

**Nuevos métodos**:

- `seleccionarCompetencia(competenciaId: string)`: Selecciona y comienza una competencia directamente
- `volverACompetencias()`: Regresa a la vista de competencias

**Métodos eliminados**:

- `cerrarModal()`: Ya no es necesario
- `siguienteCompetencia()`: Simplificado el flujo

### 3. Flujo de Navegación Actualizado

```
Grados → Materias → Competencias → Jugando → Resultados
                        ↑              ↓          ↓
                        └──────────────┴──────────┘
```

#### Desde la vista de Competencias:

- Click en cualquier competencia → Inicia el quiz directamente
- Botón "Volver a materias" → Regresa a la selección de materias

#### Desde el Quiz (Jugando):

- Botón "Ver Competencias" → Vuelve a la vista de competencias

#### Desde Resultados:

- Botón "Ver Competencias" → Vuelve a la vista de competencias
- Botón "Jugar de Nuevo" → Reinicia y vuelve a competencias

### 4. Componentes Actualizados

#### `home.ts`

- Removido import de `ModalComponent`
- Agregado import de `CompetenciasComponent`
- Eliminado método `obtenerPuntajeAnterior()` (ya no se usa)
- Actualizado template para usar `<app-competencias />`

#### `juego.component.ts`

- Cambiado "Cambiar materia" por "Ver Competencias"
- Método `volverAMaterias()` → `volverACompetencias()`

#### `resultados.component.ts`

- Cambiado "Volver a Materias" por "Ver Competencias"
- Cambiado botón de "Siguiente Competencia" por "Jugar de Nuevo"
- Método `volverAMaterias()` → `volverACompetencias()`
- Removidos métodos `siguienteCompetencia()` y `textoBotonSiguiente()`

## 🎨 Diseño Visual

### Competencia Pendiente

```
┌─────────────────────────┐
│  [1]     Competencia    │
│                         │
│  Objetivo: ...          │
│                         │
│  ┌──────────────────┐   │
│  │ ¡Comienza ahora! │   │
│  └──────────────────┘   │
└─────────────────────────┘
        ●  (número)
```

### Competencia En Progreso

```
┌─────────────────────────┐
│  [2]     Competencia    │
│                         │
│  Objetivo: ...          │
│                         │
│  ████████░░░░  60%      │
│  ⭐ 3/5  👁 2 intentos   │
└─────────────────────────┘
        ●  (número)
```

### Competencia Completada

```
┌─────────────────────────┐
│ ✓ Completada  [3]       │
│     Competencia         │
│                         │
│  Objetivo: ...          │
│                         │
│  ████████████  100%     │
│  ⭐ 5/5  👁 1 intento    │
└─────────────────────────┘
        ✓  (check verde)
```

## 💡 Beneficios del Nuevo Sistema

### Para el Usuario:

1. **Visión completa**: Ve todas las competencias de la materia de un vistazo
2. **Libertad de elección**: Puede jugar cualquier competencia en cualquier momento
3. **Feedback visual claro**: Sabe exactamente cuánto ha avanzado
4. **Motivación**: Ve su progreso visualmente representado
5. **Mejor UX**: No hay modales que interrumpan el flujo

### Para el Desarrollo:

1. **Código más simple**: Menos estados que manejar (no hay modal)
2. **Mejor mantenibilidad**: Un componente dedicado para competencias
3. **Escalabilidad**: Fácil agregar más información o funcionalidades
4. **Consistencia**: Todas las vistas siguen el mismo patrón

## 📱 Responsive Design

### Desktop (> 768px)

- Competencias alternan izquierda/derecha (zigzag)
- Línea central visible
- Cards anchas y espaciadas

### Mobile (≤ 768px)

- Todas las competencias alineadas a la izquierda
- Línea a la izquierda
- Cards ocupan todo el ancho disponible
- Padding reducido para optimizar espacio

## 🔄 Flujo de Datos

```typescript
// 1. Usuario selecciona materia
MateriasComponent → gameService.seleccionarMateria(materia)
  → vistaActual = 'seleccion-competencias'

// 2. Se muestra vista de competencias
CompetenciasComponent
  → Lee competencias del grado/materia actual
  → Lee registros del usuario para cada competencia
  → Calcula progreso y estadísticas

// 3. Usuario selecciona competencia
CompetenciasComponent → gameService.seleccionarCompetencia(id)
  → Carga preguntas
  → Inicia quiz directamente
  → vistaActual = 'jugando'

// 4. Después del quiz
ResultadosComponent
  → Guarda puntuación
  → Botón "Ver Competencias" → vistaActual = 'seleccion-competencias'
```

## 🚀 Cómo Usar

### Como Usuario:

1. Selecciona un grado
2. Selecciona una materia
3. Ve todas las competencias en la vista zigzag
4. Click en cualquier competencia para jugarla
5. Después del quiz, vuelve a la vista de competencias para elegir otra

### Como Desarrollador:

```typescript
// Para agregar funcionalidad a una competencia
// Edita: src/app/components/competencias.component.ts

// Para modificar el diseño
// Edita los estilos en el mismo archivo

// Para cambiar la lógica de navegación
// Edita: src/app/services/game.service.ts
```

## ✅ Testing Checklist

- [x] Las competencias se muestran en orden zigzag
- [x] El progreso se calcula correctamente (0-100%)
- [x] Los intentos se cuentan correctamente
- [x] El mejor puntaje se muestra
- [x] Las competencias completadas muestran el badge
- [x] La navegación funciona correctamente
- [x] El diseño es responsive
- [x] Los colores y estilos son consistentes
- [x] No hay errores de compilación

---

**Última actualización**: Octubre 2025
