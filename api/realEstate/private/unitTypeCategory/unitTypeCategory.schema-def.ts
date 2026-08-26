import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (name). */
export const UNIT_TYPE_CATEGORY_NAME_MAX = 128;

export const UnitTypeCategorySchemaDef = {
    name: {type: "string", required: true, min: 1, max: UNIT_TYPE_CATEGORY_NAME_MAX},
} as const;

export type CreateUnitTypeCategoryFormType = InferCreateForm<typeof UnitTypeCategorySchemaDef>;
export type EditUnitTypeCategoryFormType = InferEditForm<typeof UnitTypeCategorySchemaDef>;
