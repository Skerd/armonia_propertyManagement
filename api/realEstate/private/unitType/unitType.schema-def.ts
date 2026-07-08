import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const UnitTypeSchemaDef = {
    name:        { type: "string",  required: true  },
    category:    { type: "objectId", required: true  },
    group:       { type: "string",  required: false  },
    description: { type: "string",  required: false },
    icon:        { type: "string",  required: false },
    isPrivate:   { type: "boolean", required: false },
} as const;

export type CreateUnitTypeFormType = InferCreateForm<typeof UnitTypeSchemaDef>;
export type EditUnitTypeFormType   = InferEditForm<typeof UnitTypeSchemaDef>;
