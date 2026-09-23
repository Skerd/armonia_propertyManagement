import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {MARKETING_PREFERENCE_SOURCE_VALUES} from "../adCampaign/adCampaign.constants";

/**
 * One row per `{company, email}` — deliberately keyed on the address rather
 * than on a user id, because the audience includes `Lead`s that have no account
 * and because an unsubscribe link carries no identity beyond an email.
 *
 * Absence of a row means all three types are allowed (opt-out model).
 */
export const MarketingPreferenceSchemaDef = {
    email:             { type: "string",  required: true,  format: "email" },
    user:              { type: "objectId", required: false },
    lead:              { type: "objectId", required: false },
    allowPriceChange:  { type: "boolean", required: false },
    allowOffers:       { type: "boolean", required: false },
    allowNewProjects:  { type: "boolean", required: false },
    source:            { type: "enum",    required: false, options: MARKETING_PREFERENCE_SOURCE_VALUES },
} as const;

export type CreateMarketingPreferenceFormType = InferCreateForm<typeof MarketingPreferenceSchemaDef>;
export type EditMarketingPreferenceFormType   = InferEditForm<typeof MarketingPreferenceSchemaDef>;

/**
 * The three toggles as the account page and the unsubscribe page exchange them.
 * No `_id` and no `email`: the owning identity comes from the session or the
 * unsubscribe token, never from the request body.
 */
export const MarketingPreferenceTogglesSchemaDef = {
    allowPriceChange: { type: "boolean", required: false },
    allowOffers:      { type: "boolean", required: false },
    allowNewProjects: { type: "boolean", required: false },
} as const;
