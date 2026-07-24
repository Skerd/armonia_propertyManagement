import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const scheduleTaskStatusValues = ["planned", "in_progress", "completed", "delayed", "cancelled"] as const;
export type ScheduleTaskStatusValue = typeof scheduleTaskStatusValues[number];

// Terminplanung dependencies (§3.F): precedence type between tasks.
export const scheduleTaskDependencyTypeValues = ["FS", "SS", "FF", "SF"] as const;
export type ScheduleTaskDependencyTypeValue = typeof scheduleTaskDependencyTypeValues[number];

export const ScheduleTaskSchemaDef = {
    project:         { type: "objectId",     required: true  },
    edifice:         { type: "objectId",     required: false },
    milestone:       { type: "objectId",     required: false },
    title:           { type: "string",       required: true  },
    description:     { type: "string",       required: false },
    assignee:        { type: "objectId",     required: false },
    plannedStart:    { type: "date",         required: false },
    plannedEnd:      { type: "date",         required: false },
    percentComplete: { type: "number",       required: false, min: 0, max: 100 },
    predecessors:    { type: "objectIdArray", required: false },
    dependencyType:  { type: "enum",         required: false, options: scheduleTaskDependencyTypeValues },
    lagDays:         { type: "number",       required: false },
    bkpCode:         { type: "string",       required: false },
    notes:           { type: "string",       required: false },
    media:           { type: "mediaIdArray", required: false },
    // status:     server-controlled via actions (start, complete, markDelayed, cancel)
    // actualStart / actualEnd: server-controlled (stamped by start/complete actions)
} as const;

export type CreateScheduleTaskFormType = InferCreateForm<typeof ScheduleTaskSchemaDef>;
export type EditScheduleTaskFormType = InferEditForm<typeof ScheduleTaskSchemaDef>;
