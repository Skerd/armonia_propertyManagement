import {isBooleanZod} from "../../../../../core/helpers/zodBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";

export function generateFloorsAndUnitsFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend({
        oldPdf: isBooleanZod(form?.["oldPdfLabel"] || "oldPdf", languageCode).optional().default(false),
    });
}
