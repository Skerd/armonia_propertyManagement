import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (title). */
export const CONSTRUCTION_UPDATE_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description). */
export const CONSTRUCTION_UPDATE_LONG_TEXT_MAX = 5000;

export const ConstructionUpdateSchemaDef = {
    project:          { type: "objectId",     required: true  },
    edifice:          { type: "objectId",     required: false },
    milestone:        { type: "objectId",     required: false },
    scheduleTask:     { type: "objectId",     required: false },
    title:            { type: "string",       required: true,  min: 1, max: CONSTRUCTION_UPDATE_SHORT_TEXT_MAX },
    description:      { type: "string",       required: false, max: CONSTRUCTION_UPDATE_LONG_TEXT_MAX },
    progressPercent:  { type: "number",       required: true,  min: 0, max: 100 },
    updateDate:       { type: "date",         required: true  },
    photos:           { type: "mediaIdArray", required: false },
} as const;

export type CreateConstructionUpdateFormType = InferCreateForm<typeof ConstructionUpdateSchemaDef>;
export type EditConstructionUpdateFormType   = InferEditForm<typeof ConstructionUpdateSchemaDef>;
