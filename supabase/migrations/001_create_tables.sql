-- =====================================================
-- Migración: Crear tablas usuarios y competencias
-- =====================================================

-- =====================================================
-- TABLA: usuarios
-- =====================================================
CREATE TABLE IF NOT EXISTS usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nickname VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    genero VARCHAR(10) NOT NULL,
    avatar_name VARCHAR(50) NOT NULL,
    puntuacion INTEGER NOT NULL DEFAULT 0,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ultima_actualizacion TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para usuarios
CREATE INDEX idx_usuarios_nickname ON usuarios(nickname);
CREATE INDEX idx_usuarios_puntuacion ON usuarios(puntuacion DESC);
CREATE INDEX idx_usuarios_fecha_creacion ON usuarios(fecha_creacion DESC);

-- Función para actualizar ultima_actualizacion automáticamente
CREATE OR REPLACE FUNCTION update_ultima_actualizacion()
RETURNS TRIGGER AS $$
BEGIN
    NEW.ultima_actualizacion = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para usuarios
CREATE TRIGGER trigger_update_ultima_actualizacion
    BEFORE UPDATE ON usuarios
    FOR EACH ROW
    EXECUTE FUNCTION update_ultima_actualizacion();

-- =====================================================
-- TABLA: competencias
-- =====================================================
CREATE TABLE IF NOT EXISTS competencias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    grado SMALLINT NOT NULL CHECK (grado >= 1 AND grado <= 6),
    materia VARCHAR(50) NOT NULL,
    competencia_id VARCHAR(50) NOT NULL,
    puntaje INTEGER NOT NULL CHECK (puntaje >= 0),
    total_preguntas INTEGER NOT NULL CHECK (total_preguntas > 0),
    porcentaje SMALLINT NOT NULL CHECK (porcentaje >= 0 AND porcentaje <= 100),
    intentos INTEGER NOT NULL DEFAULT 1,
    mejor_puntaje INTEGER NOT NULL CHECK (mejor_puntaje >= 0),
    fecha_primer_intento TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_ultimo_intento TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraint único: un usuario solo puede tener un registro por competencia
    UNIQUE(user_id, grado, materia, competencia_id),
    
    -- Constraints lógicos
    CHECK (puntaje <= total_preguntas),
    CHECK (mejor_puntaje <= total_preguntas)
);

-- Índices para competencias
CREATE INDEX idx_competencias_user_id ON competencias(user_id);
CREATE INDEX idx_competencias_user_grado ON competencias(user_id, grado);
CREATE INDEX idx_competencias_user_grado_materia ON competencias(user_id, grado, materia);
CREATE INDEX idx_competencias_fecha_ultimo ON competencias(fecha_ultimo_intento DESC);
CREATE INDEX idx_competencias_mejor_puntaje ON competencias(mejor_puntaje DESC);
CREATE INDEX idx_competencias_materia ON competencias(materia);

-- Trigger para actualizar fecha_ultimo_intento
CREATE TRIGGER trigger_update_fecha_ultimo_intento
    BEFORE UPDATE ON competencias
    FOR EACH ROW
    EXECUTE FUNCTION update_ultima_actualizacion();

-- =====================================================
-- FUNCIONES
-- =====================================================

-- Función para calcular puntaje total de un usuario
CREATE OR REPLACE FUNCTION calcular_puntaje_total(usuario_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT COALESCE(SUM(mejor_puntaje * 10), 0)
        FROM competencias
        WHERE user_id = usuario_id
    );
END;
$$ LANGUAGE plpgsql;

-- Función para insertar o actualizar competencia (upsert)
CREATE OR REPLACE FUNCTION upsert_competencia(
    p_user_id UUID,
    p_grado SMALLINT,
    p_materia VARCHAR(50),
    p_competencia_id VARCHAR(50),
    p_puntaje INTEGER,
    p_total_preguntas INTEGER
)
RETURNS competencias AS $$
DECLARE
    v_porcentaje SMALLINT;
    v_competencia competencias;
    v_nuevo_mejor_puntaje INTEGER;
BEGIN
    -- Calcular porcentaje
    v_porcentaje := ROUND((p_puntaje::NUMERIC / p_total_preguntas::NUMERIC) * 100);
    
    -- Buscar si existe el registro
    SELECT * INTO v_competencia
    FROM competencias
    WHERE user_id = p_user_id
        AND grado = p_grado
        AND materia = p_materia
        AND competencia_id = p_competencia_id;
    
    IF FOUND THEN
        -- Ya existe: actualizar
        v_nuevo_mejor_puntaje := GREATEST(v_competencia.mejor_puntaje, p_puntaje);
        
        UPDATE competencias
        SET puntaje = p_puntaje,
            total_preguntas = p_total_preguntas,
            porcentaje = v_porcentaje,
            intentos = intentos + 1,
            mejor_puntaje = v_nuevo_mejor_puntaje,
            fecha_ultimo_intento = NOW()
        WHERE user_id = p_user_id
            AND grado = p_grado
            AND materia = p_materia
            AND competencia_id = p_competencia_id
        RETURNING * INTO v_competencia;
    ELSE
        -- No existe: insertar nuevo registro
        INSERT INTO competencias (
            user_id,
            grado,
            materia,
            competencia_id,
            puntaje,
            total_preguntas,
            porcentaje,
            intentos,
            mejor_puntaje,
            fecha_primer_intento,
            fecha_ultimo_intento
        ) VALUES (
            p_user_id,
            p_grado,
            p_materia,
            p_competencia_id,
            p_puntaje,
            p_total_preguntas,
            v_porcentaje,
            1,
            p_puntaje,
            NOW(),
            NOW()
        )
        RETURNING * INTO v_competencia;
    END IF;
    
    -- Actualizar puntaje total del usuario
    UPDATE usuarios
    SET puntuacion = calcular_puntaje_total(p_user_id)
    WHERE id = p_user_id;
    
    RETURN v_competencia;
END;
$$ LANGUAGE plpgsql;

-- Función para obtener competencias de un usuario
CREATE OR REPLACE FUNCTION obtener_competencias_usuario(p_user_id UUID)
RETURNS TABLE (
    id UUID,
    user_id UUID,
    grado SMALLINT,
    materia VARCHAR(50),
    competencia_id VARCHAR(50),
    puntaje INTEGER,
    total_preguntas INTEGER,
    porcentaje SMALLINT,
    intentos INTEGER,
    mejor_puntaje INTEGER,
    fecha_primer_intento TIMESTAMP WITH TIME ZONE,
    fecha_ultimo_intento TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        c.id,
        c.user_id,
        c.grado,
        c.materia,
        c.competencia_id,
        c.puntaje,
        c.total_preguntas,
        c.porcentaje,
        c.intentos,
        c.mejor_puntaje,
        c.fecha_primer_intento,
        c.fecha_ultimo_intento
    FROM competencias c
    WHERE c.user_id = p_user_id
    ORDER BY c.fecha_ultimo_intento DESC;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- VISTAS
-- =====================================================

-- Vista de estadísticas por usuario
CREATE OR REPLACE VIEW vista_estadisticas_usuario AS
SELECT 
    u.id,
    u.nickname,
    u.puntuacion,
    COUNT(c.id) AS total_competencias,
    SUM(c.intentos) AS total_intentos,
    AVG(c.mejor_puntaje) AS promedio_mejor_puntaje,
    MAX(c.fecha_ultimo_intento) AS ultima_actividad
FROM usuarios u
LEFT JOIN competencias c ON u.id = c.user_id
GROUP BY u.id, u.nickname, u.puntuacion;

-- Vista de ranking por materia
CREATE OR REPLACE VIEW vista_ranking_por_materia AS
SELECT 
    u.id,
    u.nickname,
    c.grado,
    c.materia,
    SUM(c.mejor_puntaje * 10) AS puntaje_materia,
    COUNT(c.id) AS competencias_completadas,
    AVG(c.mejor_puntaje) AS promedio_puntaje
FROM usuarios u
INNER JOIN competencias c ON u.id = c.user_id
GROUP BY u.id, u.nickname, c.grado, c.materia;

-- =====================================================
-- COMENTARIOS
-- =====================================================

COMMENT ON TABLE usuarios IS 'Tabla de usuarios del sistema StudyFive';
COMMENT ON TABLE competencias IS 'Registro de competencias jugadas por cada usuario (sistema dinámico de preguntas)';

COMMENT ON COLUMN competencias.puntaje IS 'Puntaje del último intento (sin límite - dinámico)';
COMMENT ON COLUMN competencias.mejor_puntaje IS 'Mejor puntaje histórico (sin límite - dinámico)';
COMMENT ON COLUMN competencias.total_preguntas IS 'Total de preguntas de la competencia (dinámico)';

-- =====================================================
-- COMPLETADO
-- =====================================================
