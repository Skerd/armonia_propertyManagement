import {z} from "zod";

/** Empty body — reservations list is scoped entirely from the authenticated buyer. */
export function clientPortalReservationsFormSchema(languageCode: string, form: any = null) {
    return z.object({});
}
