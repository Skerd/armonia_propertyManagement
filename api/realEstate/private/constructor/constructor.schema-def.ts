import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const ConstructorAddressItemDef = {
    street:     { type: "string",   required: true },
    postalCode: { type: "string",   required: true },
    city:       { type: "objectId", required: true },
    state:      { type: "objectId", required: false },
    country:    { type: "objectId", required: true },
    latitude:   {type: "number",   required: true},
    longitude:  {type: "number",   required: true},
} as const;

export const ConstructorSchemaDef = {
    name:        { type: "string",        required: true  },
    vat:         { type: "string",        required: true  },
    email:       { type: "string",        required: false, format: "email" },
    phoneNumber: { type: "string",        required: false },
    description: { type: "string",        required: false },
    website:     { type: "string",        required: false },
    addresses:   { type: "embeddedArray", required: false, items: ConstructorAddressItemDef },
} as const;

export type CreateConstructorFormType = InferCreateForm<typeof ConstructorSchemaDef>;
export type EditConstructorFormType   = InferEditForm<typeof ConstructorSchemaDef>;