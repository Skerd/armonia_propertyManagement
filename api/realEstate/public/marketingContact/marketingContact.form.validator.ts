import {z} from "zod";
import {isEmailZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {leadInterestValues} from "../../private/lead/lead.schema-def";

export type MarketingContactFormType = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    interest?: string;
    projectInterest?: string;
    unitInterest?: string;
};

export function marketingContactFormSchema(languageCode: string, form: any = null) {
    return z.object({
        name: z.string().trim().min(1).max(100),
        surname: z.string().trim().min(1).max(100),
        email: isEmailZod(form?.["emailLabel"] || "email", languageCode),
        phone: z.string().trim().min(1).max(40),
        message: z.string().trim().min(1).max(2000),
        interest: z.preprocess(
            (value) => (value === "" || value == null ? undefined : value),
            z.enum(leadInterestValues).optional(),
        ),
        projectInterest: z.preprocess(
            (value) => (value === "" || value == null ? undefined : value),
            isObjectIdZod(form?.["projectInterestLabel"] || "projectInterest", languageCode).optional(),
        ),
        unitInterest: z.preprocess(
            (value) => (value === "" || value == null ? undefined : value),
            isObjectIdZod(form?.["unitInterestLabel"] || "unitInterest", languageCode).optional(),
        ),
    });
}
