import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Bauleitung 2D-plan markup (§3.K). status server-managed via actions.
export const planMarkupStatusValues = ["open", "in_progress", "done", "void"] as const;
export type PlanMarkupStatusValue = typeof planMarkupStatusValues[number];

export const planMarkupMarkerTypeValues = ["defect", "decision", "order", "pendency", "info"] as const;
export type PlanMarkupMarkerTypeValue = typeof planMarkupMarkerTypeValues[number];

// geometry normalized to 0..1 over the plan page.
export const PlanMarkupSchemaDef = {
    planDocument:       {type: "objectId", required: true},
    project:            {type: "objectId", required: false},
    page:               {type: "number", required: false},
    layer:              {type: "string", required: false},
    markerType:         {type: "enum", required: true, options: planMarkupMarkerTypeValues},
    geometryX:          {type: "number", required: false},
    geometryY:          {type: "number", required: false},
    geometryW:          {type: "number", required: false},
    geometryH:          {type: "number", required: false},
    title:              {type: "string", required: true},
    description:        {type: "string", required: false},
    assignee:           {type: "objectId", required: false},
    linkedSnag:         {type: "objectId", required: false},
    linkedRfi:          {type: "objectId", required: false},
    linkedScheduleTask: {type: "objectId", required: false},
    createdOnSite:      {type: "boolean", required: false},
    notes:              {type: "string", required: false},
    media:              {type: "mediaIdArray", required: false},
} as const;

export type CreatePlanMarkupFormType = InferCreateForm<typeof PlanMarkupSchemaDef>;
export type EditPlanMarkupFormType = InferEditForm<typeof PlanMarkupSchemaDef>;
