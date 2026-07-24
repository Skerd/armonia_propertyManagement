import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const safetyIncidentStatusValues = ["reported", "investigating", "closed"] as const;
export type SafetyIncidentStatusValue = typeof safetyIncidentStatusValues[number];

export const SafetyIncidentSchemaDef = {
    project:            {type: "objectId", required: true},
    edifice:            {type: "objectId", required: false},
    title:              {type: "string", required: true},
    severity:           {type: "enum", required: true, options: ["low","medium","high","critical"]},
    location:           {type: "string", required: false},
    incidentDate:       {type: "date", required: true},
    personsInvolved:    {type: "string", required: false},
    description:        {type: "string", required: true},
    correctiveActions:  {type: "string", required: false},
    reportedBy:         {type: "objectId", required: false},
    notes:              {type: "string", required: false},
    media:              {type: "mediaIdArray", required: false},
} as const;

export type CreateSafetyIncidentFormType = InferCreateForm<typeof SafetyIncidentSchemaDef>;
export type EditSafetyIncidentFormType = InferEditForm<typeof SafetyIncidentSchemaDef>;
