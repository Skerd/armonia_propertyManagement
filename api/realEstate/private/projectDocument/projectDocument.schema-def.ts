import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const projectDocumentStatusValues     = ["draft", "for_review", "approved", "rejected", "superseded"] as const;
export const projectDocumentDisciplineValues = ["architectural", "structural", "mep", "civil", "fire", "landscape", "other"] as const;
export const projectDocumentTypeValues       = ["drawing", "specification", "calculation", "report", "as_built", "om_manual", "other"] as const;

export type ProjectDocumentStatusValue     = typeof projectDocumentStatusValues[number];
export type ProjectDocumentDisciplineValue = typeof projectDocumentDisciplineValues[number];
export type ProjectDocumentTypeValue       = typeof projectDocumentTypeValues[number];

export const ProjectDocumentSchemaDef = {
    project:        {type: "objectId", required: true},
    edifice:        {type: "objectId", required: false},
    floor:          {type: "objectId", required: false},
    unit:           {type: "objectId", required: false},
    title:          {type: "string",   required: true},
    documentNumber: {type: "string",   required: false},
    discipline:     {type: "enum",     required: true,  options: projectDocumentDisciplineValues},
    documentType:   {type: "enum",     required: true,  options: projectDocumentTypeValues},
    revision:       {type: "string",   required: false},
    revisionDate:   {type: "date",     required: false},
    description:    {type: "string",   required: false},
    notes:          {type: "string",   required: false},
    media:          {type: "mediaIdArray", required: false},
    supersedes:     {type: "objectId", required: false},
    designStage:    {type: "objectId", required: false},
    isRequiredDeliverable: {type: "boolean", required: false},
    // status:    { type: "enum", required: false, options: projectDocumentStatusValues }, // server-controlled via actions
    // isAsBuilt: { type: "boolean", required: false }, // server-controlled via markAsBuilt action
} as const;

export type CreateProjectDocumentFormType = InferCreateForm<typeof ProjectDocumentSchemaDef>;
export type EditProjectDocumentFormType = InferEditForm<typeof ProjectDocumentSchemaDef>;
