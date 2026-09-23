import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {
    AdCampaignAudienceKind,
    AdCampaignRecipientStatus,
    AdCampaignSkipReason,
    AdCampaignType,
} from "../adCampaign/adCampaign.constants";

export type AdCampaignRecipient = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    campaign: {
        _id: string;
        name?: string;
        title?: string;
    };
    campaignType: AdCampaignType;
    audienceKind: AdCampaignAudienceKind;
    user?: {_id: string; name?: string; surname?: string};
    lead?: {_id: string; firstName?: string; lastName?: string};
    email: string;
    fullName?: string;
    languageCode?: string;
    status: AdCampaignRecipientStatus;
    /** Always set when status is `skipped` or `suppressed`. */
    skipReason?: AdCampaignSkipReason;
    attempts?: number;
    sentAt?: string;
    messageId?: string;
    lastError?: string;
    /** Stamped when this recipient used the unsubscribe link in this campaign's email. */
    unsubscribedAt?: string;
};
