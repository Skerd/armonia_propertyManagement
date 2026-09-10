/** CRM activity log action codes — labels live under `activityActions` in lead sheet language packs.
 *  User-selectable codes are listed in LEAD_ACTIVITY_ACTION_VALUES.
 *  Workflow codes are written by @actions. `status_update` remains labeled for older entries.
 */
export const LEAD_ACTIVITY_ACTION_VALUES = [
    "called",
    "emailed",
    "meeting",
    "site_visit",
    "follow_up",
    "note",
] as const;

export type LeadActivityActionValue = typeof LEAD_ACTIVITY_ACTION_VALUES[number];

export const LEAD_WORKFLOW_ACTIVITY_ACTION = {
    created:           "created",
    markedContacted:   "marked_contacted",
    qualified:         "qualified",
    markedProposal:    "marked_proposal",
    markedNegotiation: "marked_negotiation",
    markedWon:         "marked_won",
    markedLost:        "marked_lost",
    reopened:          "reopened",
} as const;
