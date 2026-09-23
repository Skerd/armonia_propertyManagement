/**
 * Shared vocabulary for ad campaigns, their templates, their per-recipient rows
 * and the marketing preferences that gate them.
 *
 * Everything here is the single source of truth for both sides of the wire:
 * maestro builds Mongoose enums from these arrays, sinfonia renders selects and
 * the placeholder palette from them, and the zod validators reject anything else.
 */

/** What a campaign is about. Also the key a recipient's opt-out is checked against. */
export const AD_CAMPAIGN_TYPE_VALUES = [
    "price_change",
    "offer",
    "new_project",
] as const;
export type AdCampaignType = (typeof AD_CAMPAIGN_TYPE_VALUES)[number];

/**
 * Locales a template can be authored in — kept identical to `EmailLocaleTag` in
 * `maestro/modules/core/utilities/emails/emailLocale.ts`. A recipient whose
 * language is anything else falls back to `en-US`.
 */
export const AD_CAMPAIGN_LOCALE_VALUES = [
    "en-US",
    "de-CH",
    "fr-FR",
    "it-IT",
    "sq-AL",
] as const;
export type AdCampaignLocale = (typeof AD_CAMPAIGN_LOCALE_VALUES)[number];

/**
 * Campaign lifecycle.
 *
 * `draft` → `materializing` (building the recipient rows) → `scheduled` or
 * `sending` → `completed`. `paused` and `cancelled` are operator actions;
 * `failed` is set only when materialization itself blew up, never for
 * individual delivery failures (those live on the recipient row).
 */
export const AD_CAMPAIGN_STATUS_VALUES = [
    "draft",
    "materializing",
    "scheduled",
    "sending",
    "paused",
    "completed",
    "cancelled",
    "failed",
] as const;
export type AdCampaignStatus = (typeof AD_CAMPAIGN_STATUS_VALUES)[number];

/** Statuses an operator may not leave a campaign sitting in. */
export const AD_CAMPAIGN_TERMINAL_STATUSES: readonly AdCampaignStatus[] = [
    "completed",
    "cancelled",
    "failed",
] as const;

/** `selected` reads the explicit recipient lists; `all` resolves the audience at send time. */
export const AD_CAMPAIGN_AUDIENCE_MODE_VALUES = ["selected", "all"] as const;
export type AdCampaignAudienceMode = (typeof AD_CAMPAIGN_AUDIENCE_MODE_VALUES)[number];

/** Whether a recipient row came from a client `User` or a `Lead`. */
export const AD_CAMPAIGN_AUDIENCE_KIND_VALUES = ["user", "lead"] as const;
export type AdCampaignAudienceKind = (typeof AD_CAMPAIGN_AUDIENCE_KIND_VALUES)[number];

/**
 * Per-recipient delivery state.
 *
 * `pending` → `queued` (claimed by a worker) → `sent` | `failed`.
 * `suppressed` means the address opted out and was deliberately kept as a row
 * rather than dropped, so a campaign's numbers stay explainable.
 */
export const AD_CAMPAIGN_RECIPIENT_STATUS_VALUES = [
    "pending",
    "queued",
    "sent",
    "failed",
    "skipped",
    "suppressed",
] as const;
export type AdCampaignRecipientStatus = (typeof AD_CAMPAIGN_RECIPIENT_STATUS_VALUES)[number];

/** Why a row will never be sent. Always set when status is `skipped` or `suppressed`. */
export const AD_CAMPAIGN_SKIP_REASON_VALUES = [
    "opted_out",
    "no_email",
    "inactive",
    "duplicate",
] as const;
export type AdCampaignSkipReason = (typeof AD_CAMPAIGN_SKIP_REASON_VALUES)[number];

/** How a marketing preference row came to hold its current values. */
export const MARKETING_PREFERENCE_SOURCE_VALUES = [
    "account_page",
    "unsubscribe_link",
    "admin",
    "import",
] as const;
export type MarketingPreferenceSource = (typeof MARKETING_PREFERENCE_SOURCE_VALUES)[number];

/**
 * The preference flag each campaign type is gated by.
 *
 * Exhaustive by construction: adding a campaign type without adding its flag is
 * a compile error, which is what keeps a new type from shipping un-gated.
 */
export const AD_CAMPAIGN_TYPE_PREFERENCE_FIELD: Record<
    AdCampaignType,
    "allowPriceChange" | "allowOffers" | "allowNewProjects"
> = {
    price_change: "allowPriceChange",
    offer: "allowOffers",
    new_project: "allowNewProjects",
};

/**
 * Tokens an author may use in a subject or body, substituted by
 * `applyPlaceholders` at send time. Anything outside this list is rejected on
 * write, so a typo surfaces in the editor rather than shipping as literal
 * `{frstName}` to a few thousand clients.
 */
export const AD_CAMPAIGN_PLACEHOLDERS = [
    "firstName",
    "lastName",
    "fullName",
    "email",
    "companyName",
    "campaignTitle",
    "projectName",
    "projectNames",
    "unitList",
    "unitNumber",
    "oldPrice",
    "newPrice",
    "priceChangePercent",
    "offerTitle",
    "offerEndsAt",
    "ctaUrl",
    "unsubscribeUrl",
    "preferencesUrl",
    "year",
] as const;
export type AdCampaignPlaceholder = (typeof AD_CAMPAIGN_PLACEHOLDERS)[number];

/** Matches `{token}` exactly as `applyPlaceholders` does — no whitespace tolerated. */
export const AD_CAMPAIGN_PLACEHOLDER_PATTERN = /\{([a-zA-Z0-9_]+)\}/g;

/**
 * Every unknown `{token}` in a string, in order of appearance and de-duplicated.
 * Used by the validators and by the panel's editor to underline bad tokens.
 */
export function findUnknownPlaceholders(text: string | null | undefined): string[] {
    if (!text) return [];
    const known = new Set<string>(AD_CAMPAIGN_PLACEHOLDERS);
    const unknown: string[] = [];
    for (const match of text.matchAll(AD_CAMPAIGN_PLACEHOLDER_PATTERN)) {
        const token = match[1];
        if (!known.has(token) && !unknown.includes(token)) unknown.push(token);
    }
    return unknown;
}

// ============ FIELD LIMITS ========================================

/** Campaign/template display names. */
export const AD_CAMPAIGN_NAME_MAX = 120;
/** Admin-facing campaign label. */
export const AD_CAMPAIGN_TITLE_MAX = 160;
/** Email subject line, and the preview/preheader text. */
export const AD_CAMPAIGN_SUBJECT_MAX = 200;
/** Authored HTML body. Generous — an email with images inlined as markup gets long. */
export const AD_CAMPAIGN_BODY_MAX = 200_000;
/** Truncation cap for a stored delivery error. */
export const AD_CAMPAIGN_ERROR_MAX = 500;

/** How many recipients one worker claims per pass. */
export const AD_CAMPAIGN_BATCH_SIZE_DEFAULT = 50;
export const AD_CAMPAIGN_BATCH_SIZE_MIN = 1;
export const AD_CAMPAIGN_BATCH_SIZE_MAX = 500;

/** Delivery attempts before a row is given up on as `failed`. */
export const AD_CAMPAIGN_MAX_ATTEMPTS = 3;
