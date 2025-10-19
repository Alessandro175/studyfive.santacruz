# 🗄️ Migraciones de Base de Datos - StudyFive + Supabase

## 📋 Descripción

Esta carpeta contiene **1 única migración SQL** que configura toda la base de datos en Supabase para el sistema StudyFive.

## 🗂️ Archivos de Migración

### ✅ `001_create_tables.sql` - TODO EN UNO

**Incluye**:

#### 📊 Tabla: usuarios

- `id` - UUID (auto-generado)
- `nickname` - VARCHAR(50) UNIQUE
- `password` - VARCHAR(255)
- `genero` - VARCHAR(10)
- `avatar_name` - VARCHAR(50)
- `puntuacion` - INTEGER (calculado automáticamente)
- `fecha_creacion` - TIMESTAMP
- `ultima_actualizacion` - TIMESTAMP (auto-actualizado)

**Índices**: 3 índices optimizados  
**Trigger**: Actualiza `ultima_actualizacion` automáticamente

#### 📈 Tabla: competencias (Sistema Dinámico)

- `id` - UUID
- `user_id` - UUID (FK → usuarios con CASCADE DELETE)
- `grado` - SMALLINT (1-6)
- `materia` - VARCHAR(50)
- `competencia_id` - VARCHAR(50)
- `puntaje` - INTEGER ✅ Sin límite superior (0 a infinito)
- `total_preguntas` - INTEGER ✅ Sin límite (dinámico)
- `porcentaje` - SMALLINT (0-100)
- `intentos` - INTEGER
- `mejor_puntaje` - INTEGER ✅ Sin límite superior (0 a infinito)
- `fecha_primer_intento` - TIMESTAMP
- `fecha_ultimo_intento` - TIMESTAMP

**Características**:

- ✅ **Sistema Dinámico**: Soporta cualquier cantidad de preguntas
- ✅ **Puntaje puede ser 0**: Si el jugador falla todas las preguntas
- ✅ **Sin límites arbitrarios**: Puede tener 5, 15, 100, 1000+ preguntas
- ✅ **Validación lógica**: `puntaje <= total_preguntas`

**Índices**: 6 índices optimizados  
**Constraint único**: (user_id, grado, materia, competencia_id)

#### 🔧 Funciones

1. **`calcular_puntaje_total(usuario_id)`**
    - Calcula: `SUM(mejor_puntaje × 10)`
    - Retorna el puntaje total acumulado

2. **`upsert_competencia(...)`**
    - INSERT si es primera vez
    - UPDATE si es reintento
    - Actualiza `mejor_puntaje` automáticamente
    - Recalcula `puntuacion` del usuario

3. **`obtener_competencias_usuario(user_id)`**
    - Retorna todas las competencias del usuario
    - Ordenadas por fecha

#### 📊 Vistas

1. **`vista_estadisticas_usuario`**
    - Total competencias jugadas
    - Total intentos
    - Promedio de mejor puntaje
    - Última actividad

2. **`vista_ranking_por_materia`**
    - Ranking por materia y grado
    - Puntaje total por materia
    - Competencias completadas

---

## 🚀 Instalación (Súper Simple)

### ✅ Paso 1: Abrir SQL Editor en Supabase

1. Ir a [supabase.com/dashboard](https://supabase.com/dashboard)
2. Seleccionar tu proyecto
3. Click en **SQL Editor** (menú lateral izquierdo)

### ✅ Paso 2: Ejecutar Migración

1. Click en **"New query"**
2. Copiar **TODO** el contenido de `001_create_tables.sql`
3. Pegar en el editor
4. Click en **"Run"** (o Ctrl+Enter)
5. Esperar ~5 segundos
6. Verificar: **"Success. No rows returned"**

### ✅ Paso 3: ¡Listo!

Ya tienes:

- ✅ Tabla `usuarios` creada
- ✅ Tabla `competencias` creada
- ✅ 9 índices optimizados
- ✅ 3 funciones SQL
- ✅ 2 vistas
- ✅ 2 triggers
- ✅ Base de datos lista para usar

---

## ✅ Verificación

Ejecuta esto en SQL Editor para verificar:

```sql
-- Ver tablas
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;

-- Deberías ver:
-- competencias
-- usuarios
```

```sql
-- Ver funciones
SELECT routine_name
FROM information_schema.routines
WHERE routine_schema = 'public'
ORDER BY routine_name;

-- Deberías ver:
-- calcular_puntaje_total
-- obtener_competencias_usuario
-- update_ultima_actualizacion
-- upsert_competencia
```

```sql
-- Ver vistas
SELECT table_name
FROM information_schema.views
WHERE table_schema = 'public';

-- Deberías ver:
-- vista_estadisticas_usuario
-- vista_ranking_por_materia
```

---

## 🧪 Test Completo (Opcional)

```sql
-- 1. Crear usuario de prueba
INSERT INTO usuarios (nickname, password, genero, avatar_name)
VALUES ('test_user', 'test123', 'niño', 'avatar_boy_1')
RETURNING id, nickname, puntuacion;

-- 2. Copiar el ID retornado (ej: '123e4567-e89b-12d3-a456-426614174000')

-- 3. Guardar competencia con 15 preguntas, 12 aciertos
SELECT * FROM upsert_competencia(
    '123e4567-e89b-12d3-a456-426614174000', -- user_id (reemplazar)
    1,                                        -- grado
    'matematica',                             -- materia
    'mat1_1',                                 -- competencia_id
    12,                                       -- puntaje (12 de 15)
    15                                        -- total_preguntas
);

-- 4. Verificar puntaje actualizado (debe ser 120 = 12 * 10)
SELECT nickname, puntuacion FROM usuarios WHERE nickname = 'test_user';

-- 5. Probar con 0 aciertos (debe permitirlo)
SELECT * FROM upsert_competencia(
    '123e4567-e89b-12d3-a456-426614174000',
    1,
    'comunicacion',
    'com1_1',
    0,                                        -- puntaje 0 ✅
    15
);

-- 6. Ver todas las competencias
SELECT * FROM obtener_competencias_usuario('123e4567-e89b-12d3-a456-426614174000');

-- 7. Limpiar
DELETE FROM usuarios WHERE nickname = 'test_user';
```

---

## 📊 Estructura de Base de Datos

```
┌─────────────────────────────────────┐
│          TABLA: usuarios            │
├─────────────────────────────────────┤
│ id (PK)                             │
│ nickname (UNIQUE)                   │
│ password                            │
│ genero                              │
│ avatar_name                         │
│ puntuacion ← AUTO-CALCULADO         │
│ fecha_creacion                      │
│ ultima_actualizacion                │
└───────────┬─────────────────────────┘
            │
            │ FK (CASCADE DELETE)
            │
            ▼
┌─────────────────────────────────────┐
│        TABLA: competencias          │
├─────────────────────────────────────┤
│ id (PK)                             │
│ user_id (FK)                        │
│ grado (1-6)                         │
│ materia                             │
│ competencia_id                      │
│ puntaje (0-∞) ✅ DINÁMICO           │
│ total_preguntas (1-∞) ✅ DINÁMICO   │
│ porcentaje (0-100)                  │
│ intentos                            │
│ mejor_puntaje (0-∞) ✅ DINÁMICO     │
│ fecha_primer_intento                │
│ fecha_ultimo_intento                │
│                                     │
│ UNIQUE(user_id, grado,              │
│        materia, competencia_id)     │
└─────────────────────────────────────┘
```

---

## 🎯 Características Clave

### ✅ Sin RLS (Row Level Security)

- Acceso directo desde el cliente
- Ideal para prototipo educativo
- Más simple de configurar

### ✅ Sistema Dinámico de Preguntas

```javascript
// Soporta cualquier cantidad de preguntas
{ puntaje: 5,  total_preguntas: 5   } // ✅ 100%
{ puntaje: 12, total_preguntas: 15  } // ✅ 80%
{ puntaje: 0,  total_preguntas: 10  } // ✅ 0% (permitido)
{ puntaje: 50, total_preguntas: 100 } // ✅ 50%
```

### ✅ Validaciones Lógicas

- `puntaje >= 0` (puede ser 0 si falla todo)
- `puntaje <= total_preguntas` (no puede acertar más de lo que hay)
- `mejor_puntaje <= total_preguntas`
- `total_preguntas > 0` (debe tener al menos 1 pregunta)

### ✅ Cascada en Eliminación

Si eliminas un usuario, todas sus competencias se borran automáticamente.

---

## 🔧 Comandos Útiles

### Ver todas las competencias de un usuario

```sql
SELECT * FROM obtener_competencias_usuario('user-uuid-aqui');
```

### Calcular puntaje total

```sql
SELECT calcular_puntaje_total('user-uuid-aqui');
```

### Ver estadísticas de un usuario

```sql
SELECT * FROM vista_estadisticas_usuario
WHERE nickname = 'nombre_usuario';
```

### Ver ranking de una materia

```sql
SELECT * FROM vista_ranking_por_materia
WHERE materia = 'matematica' AND grado = 1
ORDER BY puntaje_materia DESC
LIMIT 10;
```

### Resetear todo (CUIDADO - Borra todo)

```sql
TRUNCATE TABLE usuarios CASCADE;
```

---

## ⚠️ Notas Importantes

1. **Sin RLS**: La base de datos NO tiene Row Level Security. Todo es público.
2. **Contraseñas sin encriptar**: Las contraseñas se guardan en texto plano (solo para prototipo).
3. **CASCADE DELETE**: Si borras un usuario, sus competencias también se borran.
4. **Puntaje 0 permitido**: El jugador puede fallar todas las preguntas y obtener 0 puntos.
5. **Sistema dinámico**: No hay límites en cantidad de preguntas. Puede ser 5, 15, 100, 1000, etc.

---

## ✅ Checklist de Instalación

- [ ] Abrir Supabase Dashboard
- [ ] Ir a SQL Editor
- [ ] Ejecutar `001_create_tables.sql`
- [ ] Verificar tablas creadas
- [ ] Verificar funciones creadas
- [ ] Verificar vistas creadas
- [ ] (Opcional) Ejecutar test completo
- [ ] Configurar `supabase.config.ts` en Angular

🎉 **¡Base de datos lista para usar!**

---

## 📚 Recursos

- Documentación Supabase: <https://supabase.com/docs>
- PostgreSQL Functions: <https://www.postgresql.org/docs/current/plpgsql.html>
