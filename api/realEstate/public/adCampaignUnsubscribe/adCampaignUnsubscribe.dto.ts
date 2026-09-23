import type {AdCampaignType} from "../../private/adCampaign/adCampaign.constants";
import type {MarketingPreferenceState} from "../../private/marketingPreference/marketingPreference.dto";

/**
 * What the unsubscribe landing page gets back.
 *
 * Carries the company and campaign type so the page can say *what* the person
 * was unsubscribed from without a second round trip — and without the email
 * having to encode any of it in the URL where a mail client would leak it.
 */
export type AdCampaignUnsubscribeResponse = {
    /** Tenant name, for "You will no longer hear from <company>". */
    companyName: string;
    /** The type just switched off by the one-click call, absent when the token was generic. */
    campaignType?: AdCampaignType;
    preferences: MarketingPreferenceState;
};
