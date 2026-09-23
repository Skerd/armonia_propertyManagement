import {z} from "zod";
import {getValidationMessage} from "../../../../../core/helpers/zodBuilder";

/**
 * Forms for the login-less unsubscribe endpoints.
 *
 * The token is the only credential and the only source of identity and tenant —
 * there is deliberately no `email` or `companyId` field on any of these bodies.
 * Accepting either would let anyone unsubscribe anyone.
 */

/** A signed unsubscribe token. Length-bounded so a junk body is rejected before `jwt.verify`. */
function unsubscribeTokenZod(languageCode: string, form: any) {
    const label: string = form?.tokenLabel ?? "token";
    return z
        .string({message: getValidationMessage("string", "notString", [label], languageCode)})
        .min(1, {message: getValidationMessage("string", "notEmpty", [label], languageCode)})
        .max(4096, {message: getValidationMessage("string", "maxLength", [label, "4096"], languageCode)});
}

/** `POST ""` — one-click opt-out of the token's campaign type. */
export function adCampaignUnsubscribeFormSchema(languageCode: string, form: any = null) {
    return z.object({
        token: unsubscribeTokenZod(languageCode, form),
    });
}

/** `POST "/preferences"` — read the current state behind a token. */
export function adCampaignUnsubscribeReadFormSchema(languageCode: string, form: any = null) {
    return z.object({
        token: unsubscribeTokenZod(languageCode, form),
    });
}

/** `PATCH "/preferences"` — write the toggles from the manage page. */
export function adCampaignUnsubscribeUpdateFormSchema(languageCode: string, form: any = null) {
    return z.object({
        token: unsubscribeTokenZod(languageCode, form),
        allowPriceChange: z.boolean().optional(),
        allowOffers: z.boolean().optional(),
        allowNewProjects: z.boolean().optional(),
        unsubscribeAll: z.boolean().optional(),
    });
}
