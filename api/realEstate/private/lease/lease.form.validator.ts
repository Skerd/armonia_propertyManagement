import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function leaseFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        unit: isObjectIdZod(form?.["unitLabel"] ?? "unit", languageCode).optional(),
        project: isObjectIdZod(form?.["projectLabel"] ?? "project", languageCode).optional(),
        edifice: isObjectIdZod(form?.["edificeLabel"] ?? "edifice", languageCode).optional(),
        floor: isObjectIdZod(form?.["floorLabel"] ?? "floor", languageCode).optional(),
        tenant: isObjectIdZod(form?.["tenantLabel"] ?? "tenant", languageCode).optional(),
    });
}
