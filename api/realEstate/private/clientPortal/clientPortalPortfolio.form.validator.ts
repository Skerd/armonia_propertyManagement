import {z} from "zod";

/** Empty body — portfolio is scoped entirely from the authenticated buyer. */
export function clientPortalPortfolioFormSchema(languageCode: string, form: any = null) {
    return z.object({});
}
