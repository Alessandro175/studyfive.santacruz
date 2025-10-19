// Mapeo de keys normalizadas a nombres con formato correcto para UI
export const MATERIAS_LABELS: Record<string, string> = {
    ingles: 'Inglés',
    matematica: 'Matemática',
    comunicacion: 'Comunicación',
    ciencia_tecnologia: 'Ciencia y Tecnología',
    personal_social: 'Personal Social',
    arte_cultura: 'Arte y Cultura',
};

// Orden de las materias para la UI
export const MATERIAS_KEYS = ['ingles', 'matematica', 'comunicacion', 'ciencia_tecnologia', 'personal_social', 'arte_cultura'] as const;

export type MateriaKey = (typeof MATERIAS_KEYS)[number];

// Helper para obtener el label de una materia
export function getMateriaLabel(key: string): string {
    return MATERIAS_LABELS[key] || key;
}

// Helper para obtener la key desde el label
export function getMateriaKey(label: string): string {
    const entry = Object.entries(MATERIAS_LABELS).find(([_, value]) => value === label);
    return entry ? entry[0] : label.toLowerCase().replace(/ /g, '_');
}
