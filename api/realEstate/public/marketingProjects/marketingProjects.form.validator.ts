import {z} from "zod";

export function marketingProjectsFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        tab: z.enum(["real-estate", "co-ownership", "tokenization"]).optional(),
        search: z.string().optional(),
    });
}
