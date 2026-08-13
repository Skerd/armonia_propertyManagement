import {z} from "zod";
import {isEmailZod, isObjectIdZod, notEmptyZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
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
        name: notEmptyZod(form?.["nameLabel"] || "name", languageCode).and(stringMaxLengthZod(form?.["nameLabel"] || "name", 100, languageCode)),
        surname: notEmptyZod(form?.["surnameLabel"] || "surname", languageCode).and(stringMaxLengthZod(form?.["surnameLabel"] || "surname", 100, languageCode)),
        email: isEmailZod(form?.["emailLabel"] || "email", languageCode),
        phone: notEmptyZod(form?.["phoneLabel"] || "phone", languageCode).and(stringMaxLengthZod(form?.["phoneLabel"] || "phone", 40, languageCode)),
        message: notEmptyZod(form?.["messageLabel"] || "message", languageCode).and(stringMaxLengthZod(form?.["messageLabel"] || "message", 2000, languageCode)),
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
