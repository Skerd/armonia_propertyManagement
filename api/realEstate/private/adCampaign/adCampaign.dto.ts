import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {
    AdCampaignAudienceMode,
    AdCampaignStatus,
    AdCampaignType,
} from "./adCampaign.constants";

/** Minimal shape the `refAllowlist` projections expose for a referenced entity. */
export type AdCampaignRefSummary = {
    _id: string;
    name?: string;
};

export type AdCampaignRecipientSummary = {
    _id: string;
    name?: string;
    surname?: string;
    username?: string;
};

export type AdCampaignLeadSummary = {
    _id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
};

/**
 * Progress counters. Incremented during a drain and recomputed authoritatively
 * from the recipient rows when a campaign completes, so a crash mid-drain
 * cannot leave them permanently skewed.
 */
export type AdCampaignStats = {
    total: number;
    pending: number;
    sent: number;
    failed: number;
    skipped: number;
};

export type AdCampaign = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    /** Auto-assigned `CMP-YYYYMMDD-XXXX`. */
    name?: string;
    title: string;
    campaignType: AdCampaignType;
    status: AdCampaignStatus;

    template?: AdCampaignRefSummary;
    subjectOverride?: string;
    bodyHtmlOverride?: string;

    audienceMode: AdCampaignAudienceMode;
    recipients?: AdCampaignRecipientSummary[];
    leadRecipients?: AdCampaignLeadSummary[];
    includeClientUsers?: boolean;
    includeLeads?: boolean;

    projects?: AdCampaignRefSummary[];
    units?: AdCampaignRefSummary[];

    scheduledAt?: string;
    startedAt?: string;
    completedAt?: string;

    batchSize?: number;
    fromName?: string;
    replyTo?: string;

    stats?: AdCampaignStats;
    /** Set only when materialization failed — delivery failures live on the recipient row. */
    lastError?: string;
};
