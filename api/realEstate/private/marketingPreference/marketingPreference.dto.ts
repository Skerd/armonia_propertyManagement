import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {LeadSimple} from "../../../../dto/lead.dto";
import type {MarketingPreferenceSource} from "../adCampaign/adCampaign.constants";

export type MarketingPreference = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    email: string;
    user?: SimpleUser;
    lead?: LeadSimple;
    allowPriceChange: boolean;
    allowOffers: boolean;
    allowNewProjects: boolean;
    unsubscribedAllAt?: Date;
    source?: MarketingPreferenceSource;
    lastChangedAt?: Date;
};

/**
 * What `/me` and the unsubscribe endpoints return.
 *
 * Flat and row-free on purpose: a caller with no stored row gets the same shape
 * with every flag `true`, so neither client has to special-case "no preferences
 * yet".
 */
export type MarketingPreferenceState = {
    email: string;
    allowPriceChange: boolean;
    allowOffers: boolean;
    allowNewProjects: boolean;
    unsubscribedAllAt?: Date;
};

/** Body for `PATCH /me` and the unsubscribe manage page. Omitted flags are left alone. */
export type MarketingPreferenceUpdateForm = {
    allowPriceChange?: boolean;
    allowOffers?: boolean;
    allowNewProjects?: boolean;
    /** Turns all three off in one call and stamps `unsubscribedAllAt`. */
    unsubscribeAll?: boolean;
};
