import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";
import {z} from "zod";

const STATUS_VALUES = ["draft", "active", "suspended", "completed", "terminated"] as const;

export function constructionContractFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        project: isObjectIdZod(form?.["projectLabel"] ?? "project", languageCode).optional(),
        edifice: isObjectIdZod(form?.["edificeLabel"] ?? "edifice", languageCode).optional(),
        status: z.enum(STATUS_VALUES).optional(),
    });
}
