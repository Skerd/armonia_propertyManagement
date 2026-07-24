import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function billVariationsVariationOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        // Grouped Nachträge billing: bill one or many approved VOs together (§3.I).
        variationOrderIds: z.array(z.string()).min(1),
        billingReference: z.string().optional(),
        notes: z.string().optional(),
    });
}
