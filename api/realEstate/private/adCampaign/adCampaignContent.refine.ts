import {z} from "zod";
import {getValidationMessage} from "../../../../../core/helpers/zodBuilder";
import type {AdCampaignType} from "./adCampaign.constants";

function isPresent(value: unknown): boolean {
    if (value == null) return false;
    if (typeof value === "string") return value.trim() !== "";
    return true;
}

function requireField(
    value: Record<string, unknown>,
    field: string,
    ctx: z.RefinementCtx,
    languageCode: string,
    form: any,
    messageType: "objectId" | "string" | "date",
): void {
    if (isPresent(value[field])) return;
    const label: string = form?.[`${field}Label`] ?? field;
    ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [field],
        message: getValidationMessage(messageType, "notEmpty", [label], languageCode),
    });
}

/**
 * Type-specific content is optional on the SchemaDef so unused types are not
 * globally mandatory. This refine is what actually requires the matching
 * fields once `campaignType` is known.
 *
 * Edit payloads that omit `campaignType` skip the check — a title-only PATCH
 * must not demand a content unit the author already stored.
 */
export function withContentFieldsCheck<T extends z.ZodTypeAny>(
    schema: T,
    languageCode: string,
    form: any = null,
) {
    return schema.superRefine((value: Record<string, unknown>, ctx) => {
        const campaignType = value.campaignType as AdCampaignType | undefined;
        if (!campaignType) return;

        if (campaignType === "price_change") {
            requireField(value, "contentUnit", ctx, languageCode, form, "objectId");
            return;
        }
        if (campaignType === "offer") {
            requireField(value, "offerTitle", ctx, languageCode, form, "string");
            requireField(value, "offerEndsAt", ctx, languageCode, form, "date");
            return;
        }
        if (campaignType === "new_project") {
            requireField(value, "contentProject", ctx, languageCode, form, "objectId");
        }
    });
}
