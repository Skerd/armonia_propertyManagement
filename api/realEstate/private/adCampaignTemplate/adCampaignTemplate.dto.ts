import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {AdCampaignLocale, AdCampaignType} from "../adCampaign/adCampaign.constants";

export type AdCampaignTemplate = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    campaignType: AdCampaignType;
    locale: AdCampaignLocale;
    subject: string;
    previewText?: string;
    /** Sanitized on write; re-sanitized on render as defence in depth. */
    bodyHtml: string;
    isDefault?: boolean;
    active?: boolean;
};

/** Request body for the live preview endpoint backing `#EmailHtmlPreview`. */
export type AdCampaignTemplatePreviewForm = {
    /** Unsaved editor content. Falls back to the stored template when omitted. */
    bodyHtml?: string;
    subject?: string;
    previewText?: string;
    campaignType: AdCampaignType;
    locale: AdCampaignLocale;
    /** Render sample values for this campaign's tokens when given. */
    campaignId?: string;
};

export type AdCampaignTemplatePreviewResponse = {
    /** The complete email document, shell included — byte-identical to what ships. */
    html: string;
    subject: string;
    /** Tokens the body used that the renderer had no value for. */
    unresolvedPlaceholders: string[];
};
