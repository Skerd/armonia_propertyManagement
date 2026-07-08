import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function reservationFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] ?? "edificeId", languageCode).optional(),
    });
}
