/** CRM activity log action codes — labels live under `activityActions` in lead sheet language packs. */
export const LEAD_ACTIVITY_ACTION_VALUES = [
    "called",
    "emailed",
    "meeting",
    "site_visit",
    "proposal_sent",
    "follow_up",
    "note",
] as const;

export type LeadActivityActionValue = typeof LEAD_ACTIVITY_ACTION_VALUES[number];
