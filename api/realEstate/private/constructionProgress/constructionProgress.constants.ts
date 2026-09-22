/** Construction phases in build order — the index is used to detect an advance. */
export const CONSTRUCTION_PHASE_VALUES = [
    "planning_permits",
    "site_preparation",
    "foundations",
    "structure",
    "envelope",
    "mep",
    "interior_finishes",
    "exterior_works",
    "completed",
] as const;
export type ConstructionPhase = (typeof CONSTRUCTION_PHASE_VALUES)[number];

export function constructionPhaseIndex(phase: string | null | undefined): number {
    return phase ? CONSTRUCTION_PHASE_VALUES.indexOf(phase as ConstructionPhase) : -1;
}

/** Short single-line labels (title). */
export const CONSTRUCTION_PROGRESS_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description). */
export const CONSTRUCTION_PROGRESS_LONG_TEXT_MAX = 5000;
