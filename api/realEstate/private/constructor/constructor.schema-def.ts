import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const constructorPartyTypeValues = [
    "contractor",
    "architect",
    "engineer",
    "qs",
    "pm",
    "surveyor",
    "other",
] as const;
export type ConstructorPartyTypeValue = typeof constructorPartyTypeValues[number];

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
    partyType:         { type: "enum",   required: false, options: constructorPartyTypeValues },
    trades:            { type: "string", required: false },
    insuranceExpiry:   { type: "date",   required: false },
    performanceScore:  { type: "number", required: false },
} as const;

export type CreateConstructorFormType = InferCreateForm<typeof ConstructorSchemaDef>;
export type EditConstructorFormType   = InferEditForm<typeof ConstructorSchemaDef>;