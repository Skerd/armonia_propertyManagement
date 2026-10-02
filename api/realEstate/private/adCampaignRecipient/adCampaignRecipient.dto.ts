import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {AdCampaignSimple} from "../../../../dto/adCampaign.dto";
import type {LeadSimple} from "../../../../dto/lead.dto";
import type {
    AdCampaignAudienceKind,
    AdCampaignRecipientStatus,
    AdCampaignSkipReason,
    AdCampaignType,
} from "../adCampaign/adCampaign.constants";

export type AdCampaignRecipient = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    campaign: AdCampaignSimple;
    campaignType: AdCampaignType;
    audienceKind: AdCampaignAudienceKind;
    user?: SimpleUser;
    lead?: LeadSimple;
    email: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    languageCode?: string;
    status: AdCampaignRecipientStatus;
    /** Always set when status is `skipped` or `suppressed`. */
    skipReason?: AdCampaignSkipReason;
    attempts?: number;
    sentAt?: Date;
    messageId?: string;
    lastError?: string;
    /** Stamped when this recipient used the unsubscribe link in this campaign's email. */
    unsubscribedAt?: Date;
};
