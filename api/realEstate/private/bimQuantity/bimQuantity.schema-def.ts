import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const BimQuantitySchemaDef = {
    bimModel:           {type: "objectId", required: true},
    ifcElementType:     {type: "string", required: false},
    classificationCode: {type: "string", required: false},
    quantity:           {type: "number", required: false},
    unitOfMeasure:      {type: "string", required: false},
    notes:              {type: "string", required: false},
} as const;

export type CreateBimQuantityFormType = InferCreateForm<typeof BimQuantitySchemaDef>;
export type EditBimQuantityFormType = InferEditForm<typeof BimQuantitySchemaDef>;
