import {z} from "zod";

export function marketingStorySingleFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        storyId: z.string().min(1),
    });
}
