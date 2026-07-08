import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const UnitTypeCategorySchemaDef = {
    name: {type: "string", required: true},
} as const;

export type CreateUnitTypeCategoryFormType = InferCreateForm<typeof UnitTypeCategorySchemaDef>;
export type EditUnitTypeCategoryFormType = InferEditForm<typeof UnitTypeCategorySchemaDef>;
