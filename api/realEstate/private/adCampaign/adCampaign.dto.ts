import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {AdCampaignTemplateSimple} from "../../../../dto/adCampaignTemplate.dto";
import type {LeadSimple} from "../../../../dto/lead.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";
import type {
    AdCampaignAudienceMode,
    AdCampaignStatus,
    AdCampaignType,
} from "./adCampaign.constants";

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

    template?: AdCampaignTemplateSimple;
    subjectOverride?: string;
    bodyHtmlOverride?: string;

    audienceMode: AdCampaignAudienceMode;
    recipients?: SimpleUser[];
    leadRecipients?: LeadSimple[];
    includeClientUsers?: boolean;
    includeLeads?: boolean;

    projects?: ProjectSimple[];
    units?: UnitSimple[];

    contentUnit?: UnitSimple;
    contentProject?: ProjectSimple;
    offerTitle?: string;
    offerEndsAt?: Date;
    ctaUrl?: string;

    scheduledAt?: Date;
    startedAt?: Date;
    completedAt?: Date;

    batchSize?: number;
    fromName?: string;
    replyTo?: string;

    stats?: AdCampaignStats;
    /** Set only when materialization failed — delivery failures live on the recipient row. */
    lastError?: string;
};
