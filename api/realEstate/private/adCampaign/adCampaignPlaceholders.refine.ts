import {z} from "zod";
import {getValidationMessage} from "../../../../../core/helpers/zodBuilder";
import {findUnknownPlaceholders} from "./adCampaign.constants";

/**
 * Rejects `{tokens}` outside {@link AD_CAMPAIGN_PLACEHOLDERS} on the named fields.
 *
 * `applyPlaceholders` leaves an unrecognised token in place verbatim, so without
 * this a typo ships as a literal `{frstName}` to every recipient. Catching it on
 * write is the only point at which it is still cheap to fix.
 *
 * Fields absent from the payload are skipped, so the same refinement serves both
 * the create and the (partial) edit schema.
 */
export function withPlaceholderCheck<T extends z.ZodObject<any>>(
    schema: T,
    fields: readonly string[],
    languageCode: string,
    form: any = null,
) {
    return schema.superRefine((value: Record<string, unknown>, ctx) => {
        for (const field of fields) {
            const raw = value?.[field];
            if (typeof raw !== "string" || raw === "") continue;

            const unknown = findUnknownPlaceholders(raw);
            if (unknown.length === 0) continue;

            const label: string = form?.[`${field}Label`] ?? field;
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: [field],
                message: getValidationMessage(
                    "format",
                    "unknownPlaceholder",
                    [label, unknown.map(t => `{${t}}`).join(", ")],
                    languageCode,
                ),
            });
        }
    });
}
