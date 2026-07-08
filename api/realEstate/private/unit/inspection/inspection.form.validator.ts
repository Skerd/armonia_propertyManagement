import {z} from "zod";
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function inspectionFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {});
}
