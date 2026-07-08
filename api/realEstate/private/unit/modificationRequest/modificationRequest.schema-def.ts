import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";

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
    title:              { type: "string",   required: true  },
    description:        { type: "string",   required: true  },
    constructionType:   { type: "string",   required: true  },
    specifications:     { type: "string",   required: false },
    status:             { type: "string",   required: false },
    cancellationReason: { type: "string",   required: false },
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
