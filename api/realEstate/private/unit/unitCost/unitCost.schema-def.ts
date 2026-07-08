import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";

// Validators for this entity are NOT generated from this SchemaDef because:
//  - enum fields (verificationStatus/paymentStatus) need mustBeZod, not notEmptyZod
//  - plain string fields (notes/tag/etc.) use z.string() to allow "", not notEmptyZod
//  - scope refs (unit/floor/edifice/project) need z.preprocess wrappers
//  - expenditureItems has deeply custom coercion, enums, and media array logic
//  - the create schema ends with a cross-field .refine() scope check
// This SchemaDef exists for: (a) TypeScript type inference on the simple fields,
// (b) validateSchemaDefAgainstMongoose startup alignment check.
export const UnitCostSchemaDef = {
    purchasePerson:              { type: "objectId", required: true  },
    purchaseDate:                { type: "date",     required: true  },
    paymentDate:                 { type: "date",     required: false },
    currency:                    { type: "objectId", required: true  },
    unit:                        { type: "objectId", required: false },
    floor:                       { type: "objectId", required: false },
    edifice:                     { type: "objectId", required: false },
    project:                     { type: "objectId", required: false },
    relatedModificationRequest:  { type: "objectId", required: false },
    notes:                       { type: "string",   required: false },
    tag:                         { type: "string",   required: false },
    invoiceNumber:               { type: "string",   required: false },
    vendorName:                  { type: "string",   required: false },
    // required in Mongoose but have defaults; present here so validateSchemaDefAgainstMongoose passes
    verificationStatus:          { type: "string",   required: false },
    paymentStatus:               { type: "string",   required: false },
    // budget fields — budgetedAmount stored as Decimal128 in Mongoose (added to excludePaths)
    budgetCurrency:              { type: "objectId", required: false },
    budgetedAmount:              { type: "number",   required: false },
} as const;

type ExpenditureItemType = {
    title: string;
    category: string;
    amount: number;
    unit: string;
    pricePerUnit: number;
    media?: string[];
};

export type CreateUnitCostFormType = InferCreateForm<typeof UnitCostSchemaDef> & {
    invoiceMedia?: string | string[];
    expenditureItemMedia?: string | string[];
    expenditureItemMediaRowIndex?: number[];
    expenditureItems: ExpenditureItemType[];
};

export type EditUnitCostFormType = InferEditForm<typeof UnitCostSchemaDef> & {
    invoiceMedia?: string | string[];
    expenditureItemMedia?: string | string[];
    expenditureItemMediaRowIndex?: string | number[];
    expenditureItems?: ExpenditureItemType[] | string;
};
