import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";

export const MODIFICATION_REQUEST_CONSTRUCTION_TYPE_VALUES = [
    "materials",
    "room_division",
    "flooring",
    "utilities",
    "structural",
    "electrical",
    "plumbing",
    "hvac",
    "cosmetic",
    "other",
] as const;

/** Brief request title. */
export const MODIFICATION_REQUEST_TITLE_MAX = 256;
/** Line-item names (materials plan, cost breakdown). */
export const MODIFICATION_REQUEST_LINE_ITEM_MAX = 128;
/** Unit of measure (m², pcs, kg). */
export const MODIFICATION_REQUEST_UNIT_MAX = 32;
/** Long text / textarea fields (description, specifications, notes, cancellation). */
export const MODIFICATION_REQUEST_LONG_TEXT_MAX = 5000;

// The create validator (createModificationRequest.form.validator.ts) IS auto-generated via buildCreateZodSchema.
// The edit validator is NOT generated because:
//  - edit uses a permission-based `permissions` shape, not buildEditZodSchema
//  - approval stage fields (architectApproval/engineerApproval/ceoApproval/financeDetails/deliveryApproval)
//    are complex nested objects with media arrays, materialsPlan, costBreakdown — all manually built
//  - action-specific validators (approve, finance, deliver, submitRevision) are workflow-specific
// This SchemaDef also provides: validateSchemaDefAgainstMongoose startup alignment check.
export const ModificationRequestSchemaDef = {
    unit:               { type: "objectId", required: true  },
    requestedBy:        { type: "objectId", required: true  },
    title:              { type: "string",   required: true,  min: 1, max: MODIFICATION_REQUEST_TITLE_MAX },
    description:        { type: "string",   required: true,  min: 1, max: MODIFICATION_REQUEST_LONG_TEXT_MAX },
    constructionType:   { type: "enum",     required: true,  options: MODIFICATION_REQUEST_CONSTRUCTION_TYPE_VALUES },
    specifications:     { type: "string",   required: false, max: MODIFICATION_REQUEST_LONG_TEXT_MAX },
    status:             { type: "string",   required: false },
    cancellationReason: { type: "string",   required: false, max: MODIFICATION_REQUEST_LONG_TEXT_MAX },
    inspections:        { type: "objectIdArray", required: false },
} as const;

export type CreateModificationRequestFormType = InferCreateForm<typeof ModificationRequestSchemaDef>;

export type EditModificationRequestFormType = InferEditForm<typeof ModificationRequestSchemaDef> & {
    architectApproval?: { decision?: "approved" | "rejected"; notes?: string; media?: string[] };
    engineerApproval?: {
        decision?: "approved" | "rejected";
        notes?: string;
        media?: string[];
        materialsPlan?: { item: string; quantity?: number; unit?: string; notes?: string }[];
    };
    ceoApproval?: { decision?: "approved" | "rejected"; notes?: string; media?: string[] };
    financeDetails?: {
        totalCost?: number;
        currency?: string;
        notes?: string;
        estimatedCompletionDate?: string;
        costBreakdown?: { item: string; cost: number; quantity?: number; unit?: string; source?: "engineer_material" | "manual" }[];
    };
};
