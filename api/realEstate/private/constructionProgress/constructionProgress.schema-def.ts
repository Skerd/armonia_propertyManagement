import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    CONSTRUCTION_PHASE_VALUES,
    CONSTRUCTION_PROGRESS_LONG_TEXT_MAX,
    CONSTRUCTION_PROGRESS_SHORT_TEXT_MAX,
} from "./constructionProgress.constants";

export const ConstructionProgressSchemaDef = {
    project:                { type: "objectId",     required: true  },
    edifice:                { type: "objectId",     required: false },
    phase:                  { type: "enum",         required: true,  options: CONSTRUCTION_PHASE_VALUES },
    progressPercent:        { type: "number",       required: true,  min: 0, max: 100 },
    updateDate:             { type: "date",         required: true  },
    title:                  { type: "string",       required: true,  min: 1, max: CONSTRUCTION_PROGRESS_SHORT_TEXT_MAX },
    description:            { type: "string",       required: false, max: CONSTRUCTION_PROGRESS_LONG_TEXT_MAX },
    expectedCompletionDate: { type: "date",         required: false },
    photos:                 { type: "mediaIdArray", required: false },
    notifyClients:          { type: "boolean",      required: false },
} as const;

export type CreateConstructionProgressFormType = InferCreateForm<typeof ConstructionProgressSchemaDef>;
export type EditConstructionProgressFormType   = InferEditForm<typeof ConstructionProgressSchemaDef>;
