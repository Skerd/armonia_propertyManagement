import {z} from "zod";

/** Empty body — overview is scoped entirely from the authenticated buyer. */
export function clientPortalOverviewFormSchema(languageCode: string, form: any = null) {
    return z.object({});
}
