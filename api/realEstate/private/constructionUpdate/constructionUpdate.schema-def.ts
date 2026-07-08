import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ConstructionUpdateSchemaDef = {
    project:          { type: "objectId",   required: true  },
    edifice:          { type: "objectId",   required: false },
    title:            { type: "string",     required: true  },
    description:      { type: "string",     required: false },
    progressPercent:  { type: "number",     required: true, min: 0, max: 100 },
    updateDate:       { type: "date",       required: true  },
    photos:           { type: "mediaIdArray", required: false },
} as const;

export type CreateConstructionUpdateFormType = InferCreateForm<typeof ConstructionUpdateSchemaDef>;
export type EditConstructionUpdateFormType   = InferEditForm<typeof ConstructionUpdateSchemaDef>;
