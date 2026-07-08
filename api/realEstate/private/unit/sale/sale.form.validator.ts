import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function saleFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] ?? "edificeId", languageCode).optional(),
    });
}
