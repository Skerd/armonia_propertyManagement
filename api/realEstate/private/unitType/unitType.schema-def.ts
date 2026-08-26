import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (name, group, icon token). */
export const UNIT_TYPE_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description). */
export const UNIT_TYPE_LONG_TEXT_MAX = 5000;

export const UnitTypeSchemaDef = {
    name:        { type: "string",   required: true,  min: 1, max: UNIT_TYPE_SHORT_TEXT_MAX },
    category:    { type: "objectId", required: true  },
    group:       { type: "string",   required: false, max: UNIT_TYPE_SHORT_TEXT_MAX },
    description: { type: "string",   required: false, max: UNIT_TYPE_LONG_TEXT_MAX },
    icon:        { type: "string",   required: false, max: UNIT_TYPE_SHORT_TEXT_MAX },
    isPrivate:   { type: "boolean",  required: false },
} as const;

export type CreateUnitTypeFormType = InferCreateForm<typeof UnitTypeSchemaDef>;
export type EditUnitTypeFormType   = InferEditForm<typeof UnitTypeSchemaDef>;
