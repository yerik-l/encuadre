export type ConceptId =
  | 'exposureTriangle'
  | 'cameraModes'
  | 'sceneModes'
  | 'meteringModes'
  | 'exposureCompensation'
  | 'depthOfField'
  | 'focusModes'
  | 'stabilization'
  | 'longExposure'
  | 'whiteBalance'
  | 'colorTheory'
  | 'flash'
  | 'lightModifiers'
  | 'goldenBlueHour'
  | 'compositionExtra'
  | 'rawVsJpeg'
  | 'histogram'
  | 'doubleExposure'
  | 'styles';

/**
 * Todo el contenido de Conceptos cae en una de dos formas: "sections" (una
 * explicación por encabezado, para ideas que se explican mejor en párrafos)
 * o "items" (una lista de nombres con su descripción, para catálogos como
 * presets de balance de blancos o estilos fotográficos). Con solo dos formas
 * alcanza para los 19 temas, así que dos pantallas genéricas bastan en vez
 * de una por tema.
 */
export type ConceptShape = 'sections' | 'items';

export interface ConceptSection {
  heading: string;
  body: string;
}

export interface SectionsConceptContent {
  intro: string;
  sections: ConceptSection[];
  tip?: string;
}

export interface ConceptItem {
  name: string;
  description: string;
  extra?: string;
  /**
   * Nota breve de qué letra usa cada marca para este mismo modo (ej. "N/S: A · C: Av").
   * Se usa solo la inicial de cada marca a propósito — sin nombres completos ni logos.
   */
  brandNote?: string;
}

export interface ItemsConceptContent {
  intro: string;
  itemsLabel?: string;
  items: ConceptItem[];
  tip?: string;
  note?: string;
}

export const CONCEPTS: { id: ConceptId; shape: ConceptShape }[] = [
  // Fundamentos de exposición y cámara
  { id: 'exposureTriangle', shape: 'sections' },
  { id: 'cameraModes', shape: 'items' },
  { id: 'sceneModes', shape: 'items' },
  { id: 'meteringModes', shape: 'sections' },
  { id: 'exposureCompensation', shape: 'sections' },
  { id: 'depthOfField', shape: 'sections' },
  { id: 'focusModes', shape: 'sections' },
  { id: 'stabilization', shape: 'sections' },
  { id: 'longExposure', shape: 'sections' },
  // Luz y color
  { id: 'whiteBalance', shape: 'items' },
  { id: 'colorTheory', shape: 'sections' },
  { id: 'flash', shape: 'sections' },
  { id: 'lightModifiers', shape: 'items' },
  { id: 'goldenBlueHour', shape: 'sections' },
  // Composición y archivo
  { id: 'compositionExtra', shape: 'sections' },
  { id: 'rawVsJpeg', shape: 'items' },
  { id: 'histogram', shape: 'sections' },
  // Cierre
  { id: 'doubleExposure', shape: 'sections' },
  { id: 'styles', shape: 'items' },
];
