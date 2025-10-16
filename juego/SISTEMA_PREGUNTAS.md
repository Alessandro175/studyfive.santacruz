# Sistema de Preguntas y Quiz

## 📋 Descripción General

El sistema de preguntas implementa un juego educativo completo con **5 preguntas por cada competencia**, distribuidas en **6 materias** y **6 grados**.

---

## 📊 Estructura de Datos

### Dataset Organizado

```
preguntasDB
├── Grado 1
│   ├── Inglés
│   │   ├── competencia1 (5 preguntas)
│   │   ├── competencia2 (5 preguntas)
│   │   └── competencia3 (5 preguntas)
│   ├── Matemática
│   │   ├── competencia1 (5 preguntas)
│   │   ├── competencia2 (5 preguntas)
│   │   └── competencia3 (5 preguntas)
│   ├── Comunicación
│   ├── Ciencia y Tecnología
│   ├── Personal Social
│   └── Arte y Cultura
├── Grado 2 ... Grado 6 (misma estructura)
```

**Total de preguntas en el sistema:**
- 6 grados × 6 materias × 3 competencias × 5 preguntas = **540 preguntas**

---

## 🎯 Competencias por Materia (Grado 1)

### 📚 Inglés
1. **Saludos y Presentaciones** - Aprende a saludar y presentarte en inglés
2. **Colores y Números** - Identifica colores y números del 1 al 10
3. **Animales y Familia** - Vocabulario de animales y miembros de la familia

### 🔢 Matemática
1. **Números y Conteo** - Aprende a contar del 1 al 20
2. **Sumas Básicas** - Resuelve sumas sencillas hasta el 10
3. **Formas Geométricas** - Identifica círculos, cuadrados y triángulos

### 💬 Comunicación
1. **Vocales y Consonantes** - Reconoce las vocales y algunas consonantes
2. **Lectura de Palabras** - Lee palabras simples y cortas
3. **Expresión Oral** - Expresa ideas y sentimientos

### 🔬 Ciencia y Tecnología
1. **El Cuerpo Humano** - Identifica las partes del cuerpo
2. **Los Sentidos** - Conoce los cinco sentidos
3. **Plantas y Animales** - Diferencia seres vivos de no vivos

### 🌍 Personal Social
1. **La Familia** - Identifica los miembros de la familia
2. **Mi Comunidad** - Conoce tu comunidad y sus lugares
3. **Normas de Convivencia** - Aprende normas para vivir en sociedad

### 🎨 Arte y Cultura
1. **Colores Primarios** - Identifica los colores básicos
2. **Música y Sonidos** - Reconoce sonidos y ritmos
3. **Expresión Artística** - Crea y expresa a través del arte

---

## 🎮 Flujo del Juego

### Navegación Completa

```
1. Login/Registro
   ↓
2. Selección de Grado (1° - 6°)
   ↓
3. Selección de Materia (6 materias)
   ↓
4. Modal de Competencia (muestra objetivo y descripción)
   ↓
5. Quiz (5 preguntas con 4 opciones cada una)
   ↓
6. Resultados (estadísticas y puntuación)
```

---

## 🏗️ Componentes Implementados

### 1. **Preguntas Data** (`data/preguntas.data.ts`)
- Dataset completo de 540 preguntas (SOLO GRADO 1 está implementado)
- Interfaces TypeScript para tipado fuerte
- Funciones helper para obtener preguntas

```typescript
// Ejemplo de uso
const preguntas = getPreguntasPorMateriaYCompetencia(1, 'Inglés', 'competencia1');
const info = getCompetenciaInfo(1, 'Inglés', 'competencia1');
```

### 2. **Modal Component** (`components/modal.component.ts`)
- Modal reutilizable para mostrar competencia
- Muestra: título, descripción, objetivo
- Botones: Cancelar / Comenzar

### 3. **Juego Component** (`components/juego.component.ts`)
- Muestra pregunta actual con 4 opciones (A, B, C, D)
- Barra de progreso (0-100%)
- Feedback inmediato (correcto/incorrecto)
- Puntaje en tiempo real
- Navegación: Volver / Siguiente

### 4. **Resultados Component** (`components/resultados.component.ts`)
- Estadísticas del quiz:
  - Respuestas correctas/incorrectas
  - Porcentaje de precisión
  - Puntos ganados
- Mensajes motivacionales según rendimiento
- Opciones: Volver a Materias / Jugar de Nuevo

### 5. **Game Service** (`services/game.service.ts`)
- Manejo completo del estado del juego
- 5 vistas: `seleccion-grados`, `seleccion-materias`, `modal-competencia`, `jugando`, `resultados`
- Funciones para navegación y gestión de respuestas

---

## 📝 Formato de Preguntas

Cada pregunta tiene la siguiente estructura:

```typescript
{
  pregunta: "¿Cómo se dice 'Hola' en inglés?",
  opciones: ['Goodbye', 'Hello', 'Thanks', 'Please'],
  respuesta: 1  // índice de la respuesta correcta (0-3)
}
```

Cada competencia incluye:

```typescript
{
  nombre: "Saludos y Presentaciones",
  descripcion: "Aprende a saludar y presentarte en inglés",
  objetivo: "Dominar los saludos básicos y cómo presentarse",
  preguntas: [/* 5 preguntas */]
}
```

---

## 🎯 Sistema de Puntuación

- **10 puntos** por respuesta correcta
- Puntos se acumulan en el perfil del usuario
- Score se guarda en `localStorage`
- Se actualiza en tiempo real en la UI

### Cálculo de Precisión

```
Precisión = (Respuestas Correctas / Total de Preguntas) × 100%
```

### Mensajes Motivacionales

- **100%**: "¡Perfecto! ¡Eres un genio! 🎯"
- **80-99%**: "¡Excelente trabajo! Sigue así 🌟"
- **60-79%**: "¡Bien hecho! Puedes mejorar un poco más 👍"
- **40-59%**: "Sigue practicando, vas por buen camino 💪"
- **0-39%**: "No te rindas, ¡la práctica hace al maestro! 📚"

---

## 🔄 Estado del Juego

El `GameService` maneja los siguientes estados:

```typescript
vistaActual: Signal<VistaJuego>
// Valores posibles:
// - 'seleccion-grados'
// - 'seleccion-materias'
// - 'modal-competencia'
// - 'jugando'
// - 'resultados'

gradoSeleccionado: Signal<number | null>      // 1-6
materiaSeleccionada: Signal<string | null>    // nombre de la materia
competenciaSeleccionada: Signal<string | null> // competencia1/2/3
preguntaActual: Signal<number>                 // índice 0-4
respuestasUsuario: Signal<RespuestaUsuario[]>  // historial
```

---

## 🎨 Características Visuales

### Barra de Progreso
- Animada con gradiente de colores
- Actualización en tiempo real
- Porcentaje numérico visible

### Feedback Visual
- ✅ Verde para respuestas correctas
- ❌ Rojo para respuestas incorrectas
- Animaciones de entrada (fadeIn, slideUp)
- Íconos SVG animados

### Resultados
- Trofeo animado con efecto bounce
- Tarjetas estadísticas con hover effects
- Colores según rendimiento:
  - Verde: Excelente (≥80%)
  - Amarillo: Bien (60-79%)
  - Rojo: Necesita práctica (<60%)

---

## 📱 Responsive Design

Todos los componentes están optimizados para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## ⚠️ Importante

**SOLO EL GRADO 1 TIENE PREGUNTAS IMPLEMENTADAS**

Para agregar más grados, debes expandir el objeto `preguntasDB` en `preguntas.data.ts` siguiendo la misma estructura:

```typescript
export const preguntasDB: Record<number, GradoData> = {
  1: { /* Ya implementado */ },
  2: { /* Por implementar */ },
  3: { /* Por implementar */ },
  4: { /* Por implementar */ },
  5: { /* Por implementar */ },
  6: { /* Por implementar */ }
};
```

La dificultad debe aumentar progresivamente según el grado.

---

## 🚀 Próximos Pasos Sugeridos

1. ✅ **Completar dataset** - Agregar preguntas para grados 2-6
2. 📊 **Sistema de medallas** - Premiar al completar competencias
3. 🏆 **Ranking global** - Tabla de líderes
4. 💾 **Base de datos** - Migrar de localStorage a backend
5. 🎵 **Efectos de sonido** - Feedback audio
6. 📈 **Analytics** - Seguimiento de progreso por materia
7. 🎯 **Modo práctica** - Revisar preguntas incorrectas
8. 👥 **Multijugador** - Competir con otros jugadores

---

## 📄 Archivos Clave

```
juego/src/app/
├── data/
│   └── preguntas.data.ts          ← 540 preguntas (solo grado 1)
├── services/
│   ├── game.service.ts            ← Lógica del juego
│   └── user.service.ts            ← Gestión de usuarios
├── components/
│   ├── modal.component.ts         ← Modal de competencia
│   ├── juego.component.ts         ← Vista del quiz
│   ├── resultados.component.ts    ← Pantalla de resultados
│   └── materias.component.ts      ← Selección de materias
└── pages/
    └── home/
        └── home.ts                ← Integración completa
```

---

## 🎓 Conclusión

El sistema está **100% funcional** para el grado 1 con 90 preguntas distribuidas en 6 materias y 3 competencias cada una. El flujo completo funciona desde el login hasta ver los resultados finales, con persistencia de datos en localStorage.

¡El juego está listo para educar! 🎉📚
