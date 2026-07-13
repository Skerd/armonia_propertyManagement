import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

const marketingPropertyTypeSchema = z.enum(["apartment", "studio", "penthouse", "commercial", "villa"]);
const marketingBedroomFilterSchema = z.enum(["any", "1", "2", "3", "4", "5", "6+"]);

export function marketingProjectsCatalogFormSchema(languageCode: string, form: any = null) {
    return z.object({
        search: z.string().optional(),
        tab: z.enum(["real-estate", "co-ownership", "tokenization"]).optional(),
        projectId: isObjectIdZod(form?.["projectIdLabel"] ?? "projectId", languageCode).optional(),
        city: z.string().optional(),
        propertyType: marketingPropertyTypeSchema.optional(),
        bedrooms: marketingBedroomFilterSchema.optional(),
        areaSqmMin: z.coerce.number().min(0).optional(),
        priceMin: z.coerce.number().min(0).optional(),
        priceMax: z.coerce.number().min(0).optional(),
    });
}
