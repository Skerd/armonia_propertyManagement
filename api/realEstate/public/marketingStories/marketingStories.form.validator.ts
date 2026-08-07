import {z} from "zod";

export function marketingStoriesFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        projectId: z.string().optional(),
        edificeId: z.string().optional(),
        unitId: z.string().optional(),
        storyTypeId: z.string().optional(),
        limit: z.number().int().min(1).max(50).optional(),
    });
}
