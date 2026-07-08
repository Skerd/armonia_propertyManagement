import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function validateUnitCostSelectForm(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        notId: isObjectIdZod(form?.["notIdLabel"] ?? "notId", languageCode).optional(),
    });
}
