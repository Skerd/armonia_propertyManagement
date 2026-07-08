export const EDIFICE_ENERGY_CLASS_VALUES = ["A+", "A", "B", "C", "D", "E", "F", "G"] as const;
export type EdificeEnergyClass = (typeof EDIFICE_ENERGY_CLASS_VALUES)[number];
