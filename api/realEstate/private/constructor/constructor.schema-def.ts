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

/** Short single-line labels (name, VAT, trades). */
export const CONSTRUCTOR_SHORT_TEXT_MAX = 128;
/** VAT / tax identifier. */
export const CONSTRUCTOR_VAT_MAX = 64;
/** Phone number. */
export const CONSTRUCTOR_PHONE_MAX = 32;
/** Website URL. */
export const CONSTRUCTOR_URL_MAX = 1024;
/** Street address line. */
export const CONSTRUCTOR_STREET_MAX = 256;
/** Postal / ZIP code. */
export const CONSTRUCTOR_POSTAL_CODE_MAX = 32;
/** Long text / textarea fields (description). */
export const CONSTRUCTOR_LONG_TEXT_MAX = 5000;

const ConstructorAddressItemDef = {
    street:     { type: "string",   required: true,  min: 1, max: CONSTRUCTOR_STREET_MAX },
    postalCode: { type: "string",   required: true,  min: 1, max: CONSTRUCTOR_POSTAL_CODE_MAX },
    city:       { type: "objectId", required: true },
    state:      { type: "objectId", required: false },
    country:    { type: "objectId", required: true },
    latitude:   { type: "number",   required: true,  min: -90,  max: 90 },
    longitude:  { type: "number",   required: true,  min: -180, max: 180 },
} as const;

export const ConstructorSchemaDef = {
    name:              { type: "string",        required: true,  min: 1, max: CONSTRUCTOR_SHORT_TEXT_MAX },
    vat:               { type: "string",        required: true,  min: 1, max: CONSTRUCTOR_VAT_MAX },
    email:             { type: "string",        required: false, format: "email" },
    phoneNumber:       { type: "string",        required: false, max: CONSTRUCTOR_PHONE_MAX },
    description:       { type: "string",        required: false, max: CONSTRUCTOR_LONG_TEXT_MAX },
    website:           { type: "string",        required: false, max: CONSTRUCTOR_URL_MAX },
    logo:              { type: "mediaId",       required: false },
    addresses:         { type: "embeddedArray", required: false, items: ConstructorAddressItemDef },
    partyType:         { type: "enum",          required: false, options: constructorPartyTypeValues },
    trades:            { type: "string",        required: false, max: CONSTRUCTOR_SHORT_TEXT_MAX },
    insuranceExpiry:   { type: "date",          required: false },
    performanceScore:  { type: "number",        required: false, min: 0, max: 100 },
} as const;

export type CreateConstructorFormType = InferCreateForm<typeof ConstructorSchemaDef>;
export type EditConstructorFormType   = InferEditForm<typeof ConstructorSchemaDef>;
