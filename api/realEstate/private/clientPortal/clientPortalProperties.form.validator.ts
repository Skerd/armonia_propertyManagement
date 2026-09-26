import {z} from "zod";

/** Empty body — properties list is scoped entirely from the authenticated buyer. */
export function clientPortalPropertiesFormSchema(languageCode: string, form: any = null) {
    return z.object({});
}
