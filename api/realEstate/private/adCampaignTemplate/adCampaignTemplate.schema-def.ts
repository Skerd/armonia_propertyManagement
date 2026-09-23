import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    AD_CAMPAIGN_BODY_MAX,
    AD_CAMPAIGN_LOCALE_VALUES,
    AD_CAMPAIGN_NAME_MAX,
    AD_CAMPAIGN_SUBJECT_MAX,
    AD_CAMPAIGN_TYPE_VALUES,
} from "../adCampaign/adCampaign.constants";

/**
 * A reusable, per-company email template.
 *
 * `name` + `campaignType` + `locale` is the natural key: the locale siblings of
 * one template all share a name, and the sender picks the row matching the
 * recipient's language, falling back to `en-US`.
 */
export const AdCampaignTemplateSchemaDef = {
    name:         { type: "string",  required: true,  min: 1, max: AD_CAMPAIGN_NAME_MAX },
    campaignType: { type: "enum",    required: true,  options: AD_CAMPAIGN_TYPE_VALUES },
    locale:       { type: "enum",    required: true,  options: AD_CAMPAIGN_LOCALE_VALUES },
    subject:      { type: "string",  required: true,  min: 1, max: AD_CAMPAIGN_SUBJECT_MAX },
    previewText:  { type: "string",  required: false, max: AD_CAMPAIGN_SUBJECT_MAX },
    bodyHtml:     { type: "string",  required: true,  min: 1, max: AD_CAMPAIGN_BODY_MAX },
    isDefault:    { type: "boolean", required: false },
    active:       { type: "boolean", required: false },
} as const;

export type CreateAdCampaignTemplateFormType = InferCreateForm<typeof AdCampaignTemplateSchemaDef>;
export type EditAdCampaignTemplateFormType   = InferEditForm<typeof AdCampaignTemplateSchemaDef>;
