import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const milestoneStatusValues = ["planned", "in_progress", "completed", "delayed", "cancelled"] as const;
export type MilestoneStatusValue = typeof milestoneStatusValues[number];

export const MilestoneSchemaDef = {
    project:       { type: "objectId",     required: true  },
    edifice:       { type: "objectId",     required: false },
    title:         { type: "string",       required: true  },
    description:   { type: "string",       required: false },
    plannedStart:  { type: "date",         required: false },
    plannedEnd:    { type: "date",         required: false },
    weightPercent: { type: "number",       required: false, min: 0, max: 100 },
    predecessors:  { type: "objectIdArray", required: false },
    notes:         { type: "string",       required: false },
    media:         { type: "mediaIdArray", required: false },
    // status:     server-controlled via actions (start, complete, markDelayed, cancel)
    // actualStart / actualEnd: server-controlled (stamped by start/complete actions)
} as const;

export type CreateMilestoneFormType = InferCreateForm<typeof MilestoneSchemaDef>;
export type EditMilestoneFormType = InferEditForm<typeof MilestoneSchemaDef>;
