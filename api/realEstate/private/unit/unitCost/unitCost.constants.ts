/** Expenditure line categories (fixed select). */
export const EXPENDITURE_CATEGORY_VALUES = [
    "materials_general",
    "finishes_flooring",
    "finishes_paint_wallcovering",
    "plumbing_sanitary",
    "electrical_lighting",
    "hvac",
    "fixtures_hardware",
    "appliances",
    "windows_doors",
    "structural_masonry",
    "professional_services",
    "permits_fees_taxes",
] as const;

export type ExpenditureCategory = (typeof EXPENDITURE_CATEGORY_VALUES)[number];

/** Quantity units of measure (fixed select). */
export const MEASURE_UNIT_VALUES = [
    "piece",
    "pair",
    "set",
    "box",
    "pack",
    "pallet",
    "roll",
    "sheet",
    "bundle",
    "kg",
    "g",
    "t",
    "lb",
    "l",
    "ml",
    "gal",
    "m",
    "cm",
    "mm",
    "m2",
    "m3",
    "linear_m",
    "hour",
    "day",
] as const;

export type MeasureUnit = (typeof MEASURE_UNIT_VALUES)[number];

export const UNIT_COST_VERIFICATION_STATUS_VALUES = [
    "pending_verification",
    "verified",
    "rejected",
    "needs_revision",
] as const;

export type UnitCostVerificationStatus = (typeof UNIT_COST_VERIFICATION_STATUS_VALUES)[number];

export const UNIT_COST_PAYMENT_STATUS_VALUES = [
    "unpaid",
    "partially_paid",
    "paid",
    "waived",
    "disputed",
] as const;

export type UnitCostPaymentStatus = (typeof UNIT_COST_PAYMENT_STATUS_VALUES)[number];

/** Max expenditure lines per unit cost document (validators + UI). */
export const MAX_EXPENDITURE_ITEMS = 100;

/** Max evidence files attached to a single expenditure line. */
export const MAX_MEDIA_FILES_PER_EXPENDITURE_LINE = 10;

/** Max total line-evidence uploads per create/PATCH (all lines combined). */
export const MAX_TOTAL_EXPENDITURE_LINE_MEDIA_UPLOADS = MAX_EXPENDITURE_ITEMS * MAX_MEDIA_FILES_PER_EXPENDITURE_LINE;
