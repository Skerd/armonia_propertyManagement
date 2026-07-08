import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";

export const inspectionValidTypes = [
    "initial",
    "follow_up",
    "final",
    "routine",
    "complaint",
    "pre_sale",
    "post_sale",
] as const;

export const inspectionValidStatuses = [
    "scheduled",
    "in_progress",
    "completed",
    "cancelled",
    "rescheduled",
] as const;

export const findingSeverityValues = ["low", "medium", "high", "critical"] as const;

const FindingItemDef = {
    notes:      {type: "string",        required: true},
    media:      {type: "mediaIdArray",  required: false},
    severity:   {type: "enum",         required: false, options: findingSeverityValues},
    resolvedAt: {type: "date",         required: false},
    resolvedBy: {type: "objectId",     required: false},
} as const;

const FindingsCategoriesDef = {
    structuralIssues:  {type: "embeddedArray", required: false, items: FindingItemDef},
    electricalIssues:  {type: "embeddedArray", required: false, items: FindingItemDef},
    plumbingIssues:    {type: "embeddedArray", required: false, items: FindingItemDef},
    hvacIssues:        {type: "embeddedArray", required: false, items: FindingItemDef},
    safetyConcerns:    {type: "embeddedArray", required: false, items: FindingItemDef},
    cosmeticIssues:    {type: "embeddedArray", required: false, items: FindingItemDef},
    otherObservations: {type: "embeddedArray", required: false, items: FindingItemDef},
} as const;

export const InspectionSchemaDef = {
    unit:               {type: "objectId",    required: true},
    inspectedBy:        {type: "objectId",    required: true},
    inspectionDate:     {type: "date",        required: true},
    scheduledDate:      {type: "date",        required: false},
    nextInspectionDate: {type: "date",        required: false},
    type:               {type: "enum",        required: true,  options: inspectionValidTypes},
    status:             {type: "enum",        required: false, options: inspectionValidStatuses},
    notes:              {type: "string",      required: false},
    cancellationReason: {type: "string",      required: false},
    rating:             {type: "number",      required: false, min: 1, max: 10},
    media:              {type: "mediaIdArray", required: false},
    followUpInspection:       {type: "objectId",    required: false},
    followUpRequired:         {type: "boolean",     required: false},
    findings:                 {type: "embedded",    required: false, items: FindingsCategoriesDef, jsonPreprocess: true},
    clientSignatureMediaId:   {type: "objectId",    required: false},
    clientSignedAt:           {type: "date",        required: false},
} as const;

export type CreateInspectionFormType = InferCreateForm<typeof InspectionSchemaDef>;
export type EditInspectionFormType   = InferEditForm<typeof InspectionSchemaDef>;
