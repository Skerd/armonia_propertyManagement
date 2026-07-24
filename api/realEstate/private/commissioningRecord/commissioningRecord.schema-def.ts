import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const commissioningRecordStatusValues = ["pending", "passed", "failed"] as const;
export type CommissioningRecordStatusValue = typeof commissioningRecordStatusValues[number];

export const CommissioningRecordSchemaDef = {
    project:           {type: "objectId", required: true},
    edifice:           {type: "objectId", required: false},
    unit:              {type: "objectId", required: false},
    handoverPackage:   {type: "objectId", required: false},
    title:             {type: "string", required: true},
    systemName:        {type: "string", required: false},
    testDate:          {type: "date", required: false},
    resultNotes:       {type: "string", required: false},
    inspectedBy:       {type: "objectId", required: false},
    notes:             {type: "string", required: false},
    media:             {type: "mediaIdArray", required: false},
} as const;

export type CreateCommissioningRecordFormType = InferCreateForm<typeof CommissioningRecordSchemaDef>;
export type EditCommissioningRecordFormType = InferEditForm<typeof CommissioningRecordSchemaDef>;
