import {isBooleanZod, isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function unitsSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(
        languageCode,
        form,
        {
            notId: isObjectIdZod(form?.["notIdLabel"] ?? "notId", languageCode).optional(),
            notConnected: isBooleanZod(form?.["notConnectedLabel"] ?? "notConnected", languageCode).optional(),
        }
    )
}
