import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const tenderInvitationStatusValues = ["invited", "viewing", "submitted", "declined", "withdrawn"] as const;
export type TenderInvitationStatusValue = typeof tenderInvitationStatusValues[number];

// portalAccessToken is server-generated (Bauplattform token surface, §3.D) — not user-writable.
export const TenderInvitationSchemaDef = {
    tender:         {type: "objectId", required: true},
    constructorRef: {type: "objectId", required: true},
    invitedAt:      {type: "date", required: false},
    respondedAt:    {type: "date", required: false},
    notes:          {type: "string", required: false},
} as const;

export type CreateTenderInvitationFormType = InferCreateForm<typeof TenderInvitationSchemaDef>;
export type EditTenderInvitationFormType = InferEditForm<typeof TenderInvitationSchemaDef>;
