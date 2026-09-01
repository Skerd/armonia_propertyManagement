import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";
import {
    EXPENDITURE_CATEGORY_VALUES,
    MAX_EXPENDITURE_ITEMS,
    MEASURE_UNIT_VALUES,
    UNIT_COST_PAYMENT_STATUS_VALUES,
    UNIT_COST_VERIFICATION_STATUS_VALUES,
} from "./unitCost.constants";

const ExpenditureItemDef = {
    title:        { type: "string",       required: true },
    category:     { type: "enum",         required: true,  options: EXPENDITURE_CATEGORY_VALUES },
    amount:       { type: "number",       required: true,  min: 0 },
    unit:         { type: "enum",         required: true,  options: MEASURE_UNIT_VALUES },
    pricePerUnit: { type: "number",       required: true,  min: 0 },
    media:        { type: "mediaIdArray", required: false },
} as const;

export const UnitCostSchemaDef = {
    purchasePerson:              { type: "objectId",      required: true  },
    purchaseDate:                { type: "date",          required: true  },
    paymentDate:                 { type: "date",          required: false },
    currency:                    { type: "objectId",      required: true  },
    unit:                        { type: "objectId",      required: false },
    floor:                       { type: "objectId",      required: false },
    edifice:                     { type: "objectId",      required: false },
    project:                     { type: "objectId",      required: false },
    relatedModificationRequest:  { type: "objectId",      required: false },
    // NOTE: named "constructorRef" (not "constructor") — Mongoose silently drops any
    // schema path literally named "constructor" because plain JS objects inherit
    // Object.prototype.constructor, which collides with Mongoose's internal path bookkeeping.
    constructorRef:              { type: "objectId",      required: false },
    boqItem:                     { type: "objectId",      required: false },
    costCommitment:              { type: "objectId",      required: false },
    notes:                       { type: "string",        required: false },
    tag:                         { type: "string",        required: false },
    invoiceNumber:               { type: "string",        required: false },
    vendorName:                  { type: "string",        required: false },
    // required in Mongoose but have defaults; present here so validateSchemaDefAgainstMongoose passes
    verificationStatus:          { type: "enum",          required: false, options: UNIT_COST_VERIFICATION_STATUS_VALUES },
    paymentStatus:               { type: "enum",          required: false, options: UNIT_COST_PAYMENT_STATUS_VALUES },
    invoiceMedia:                { type: "mediaIdArray",  required: false },
    expenditureItems:            {
        type: "embeddedArray",
        required: false,
        items: ExpenditureItemDef,
        maxItems: MAX_EXPENDITURE_ITEMS,
    },
    // budgetedAmount stored as Decimal128 in Mongoose
    budgetedAmount:              { type: "number",        required: false, min: 0 },
} as const;

export type CreateUnitCostFormType = InferCreateForm<typeof UnitCostSchemaDef>;
export type EditUnitCostFormType = InferEditForm<typeof UnitCostSchemaDef>;
