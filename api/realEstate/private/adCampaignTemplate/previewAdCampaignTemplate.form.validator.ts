import {z} from "zod";
import {isEnumZod, isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {
    AD_CAMPAIGN_BODY_MAX,
    AD_CAMPAIGN_LOCALE_VALUES,
    AD_CAMPAIGN_SUBJECT_MAX,
    AD_CAMPAIGN_TYPE_VALUES,
} from "../adCampaign/adCampaign.constants";

/**
 * Body of the live-preview endpoint behind `#EmailHtmlPreview`.
 *
 * Deliberately **not** placeholder-checked: the editor posts on every keystroke
 * (debounced), so a half-typed `{firstN` is the normal case, not an error. The
 * unknown-token check belongs on save, where it is still cheap to fix and where
 * rejecting is useful rather than merely noisy — the preview's job is to keep
 * rendering while the author types.
 */
export function previewAdCampaignTemplateFormSchema(languageCode: string, form: any = null) {
    return z.object({
        bodyHtml: stringMaxLengthZod(form?.["bodyHtmlLabel"] || "bodyHtml", AD_CAMPAIGN_BODY_MAX, languageCode)
            .optional(),
        subject: stringMaxLengthZod(form?.["subjectLabel"] || "subject", AD_CAMPAIGN_SUBJECT_MAX, languageCode)
            .optional(),
        previewText: stringMaxLengthZod(form?.["previewTextLabel"] || "previewText", AD_CAMPAIGN_SUBJECT_MAX, languageCode)
            .optional(),
        campaignType: isEnumZod(
            form?.["campaignTypeLabel"] || "campaignType",
            AD_CAMPAIGN_TYPE_VALUES,
            "adCampaignType",
            languageCode,
        ),
        locale: isEnumZod(
            form?.["localeLabel"] || "locale",
            AD_CAMPAIGN_LOCALE_VALUES,
            "adCampaignLocale",
            languageCode,
        ),
        campaignId: isObjectIdZod(form?.["campaignIdLabel"] || "campaignId", languageCode).optional(),
    });
}
