import type {InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    AD_CAMPAIGN_AUDIENCE_KIND_VALUES,
    AD_CAMPAIGN_ERROR_MAX,
    AD_CAMPAIGN_RECIPIENT_STATUS_VALUES,
    AD_CAMPAIGN_SKIP_REASON_VALUES,
    AD_CAMPAIGN_TYPE_VALUES,
} from "../adCampaign/adCampaign.constants";

/**
 * Recipient rows are written entirely by the materializer and the sender —
 * never by a form. Every field is `SYSTEM_WRITE` on the Mongoose side and there
 * are no create/edit views.
 *
 * The def exists anyway because `validateSchemaDefAgainstMongoose` and the
 * table-config generator both read it: it is what gives the recipients list its
 * filterable, sortable columns.
 */
export const AdCampaignRecipientSchemaDef = {
    campaign:      { type: "objectId", required: true  },
    campaignType:  { type: "enum",     required: true,  options: AD_CAMPAIGN_TYPE_VALUES },
    audienceKind:  { type: "enum",     required: true,  options: AD_CAMPAIGN_AUDIENCE_KIND_VALUES },
    user:          { type: "objectId", required: false },
    lead:          { type: "objectId", required: false },
    email:         { type: "string",   required: true,  format: "email" },
    fullName:      { type: "string",   required: false, max: 200 },
    languageCode:  { type: "string",   required: false, max: 10 },
    status:        { type: "enum",     required: true,  options: AD_CAMPAIGN_RECIPIENT_STATUS_VALUES },
    skipReason:    { type: "enum",     required: false, options: AD_CAMPAIGN_SKIP_REASON_VALUES },
    attempts:      { type: "number",   required: false, min: 0 },
    sentAt:        { type: "date",     required: false },
    messageId:     { type: "string",   required: false, max: 255 },
    lastError:     { type: "string",   required: false, max: AD_CAMPAIGN_ERROR_MAX },
    unsubscribedAt:{ type: "date",     required: false },
} as const;

export type EditAdCampaignRecipientFormType = InferEditForm<typeof AdCampaignRecipientSchemaDef>;
