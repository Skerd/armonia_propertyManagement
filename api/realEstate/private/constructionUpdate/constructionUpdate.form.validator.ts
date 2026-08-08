import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function constructionUpdateFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        project: isObjectIdZod(form?.["projectLabel"] ?? "project", languageCode).optional(),
        edifice: isObjectIdZod(form?.["edificeLabel"] ?? "edifice", languageCode).optional(),
    });
}
