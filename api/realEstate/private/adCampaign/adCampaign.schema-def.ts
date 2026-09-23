import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    AD_CAMPAIGN_AUDIENCE_MODE_VALUES,
    AD_CAMPAIGN_BATCH_SIZE_MAX,
    AD_CAMPAIGN_BATCH_SIZE_MIN,
    AD_CAMPAIGN_BODY_MAX,
    AD_CAMPAIGN_SUBJECT_MAX,
    AD_CAMPAIGN_TITLE_MAX,
    AD_CAMPAIGN_TYPE_VALUES,
} from "./adCampaign.constants";

/**
 * Author-writable campaign fields.
 *
 * `name`, `status`, `stats`, `startedAt`, `completedAt` and `lastError` are
 * deliberately absent: they are machine-written (`SYSTEM_WRITE` on the Mongoose
 * schema) and are passed to `validateSchemaDefAgainstMongoose` as the ignore
 * list. An author who could PATCH `status` could skip materialization entirely.
 */
export const AdCampaignSchemaDef = {
    title:              { type: "string",       required: true,  min: 1, max: AD_CAMPAIGN_TITLE_MAX },
    campaignType:       { type: "enum",         required: true,  options: AD_CAMPAIGN_TYPE_VALUES },
    template:           { type: "objectId",     required: true  },
    subjectOverride:    { type: "string",       required: false, max: AD_CAMPAIGN_SUBJECT_MAX },
    bodyHtmlOverride:   { type: "string",       required: false, max: AD_CAMPAIGN_BODY_MAX },

    audienceMode:       { type: "enum",         required: true,  options: AD_CAMPAIGN_AUDIENCE_MODE_VALUES },
    // Required only in `selected` mode; `#FormWhenFieldValueIn` hides and clears
    // them in `all` mode, and the audience resolver ignores them there.
    recipients:         { type: "objectIdArray", required: false },
    leadRecipients:     { type: "objectIdArray", required: false },
    // Only meaningful in `all` mode.
    includeClientUsers: { type: "boolean",      required: false },
    includeLeads:       { type: "boolean",      required: false },

    // Scope filters. Empty in `all` mode means the whole tenant.
    projects:           { type: "objectIdArray", required: false },
    units:              { type: "objectIdArray", required: false },

    scheduledAt:        { type: "date",         required: false, validation: "notInThePast" },
    batchSize:          { type: "number",       required: false, min: AD_CAMPAIGN_BATCH_SIZE_MIN, max: AD_CAMPAIGN_BATCH_SIZE_MAX },
    fromName:           { type: "string",       required: false, max: 120 },
    replyTo:            { type: "string",       required: false, format: "email" },
} as const;

export type CreateAdCampaignFormType = InferCreateForm<typeof AdCampaignSchemaDef>;
export type EditAdCampaignFormType   = InferEditForm<typeof AdCampaignSchemaDef>;
