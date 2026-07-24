import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function importNpkPositionsSpecificationFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        // Optional subset of NPK CostClassification codes to import; empty/omitted = all active NPK chapters.
        codes: z.array(z.string()).optional(),
    });
}
