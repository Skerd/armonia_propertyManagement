import {z} from 'zod';
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function modificationRequestFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        id: isObjectIdZod(form?.["idLabel"] || "id", languageCode).optional(),
        unit: isObjectIdZod(form?.["unitLabel"] || "unit", languageCode).optional(),
        project: isObjectIdZod(form?.["projectLabel"] || "project", languageCode).optional(),
        edifice: isObjectIdZod(form?.["edificeLabel"] || "edifice", languageCode).optional(),
        floor: isObjectIdZod(form?.["floorLabel"] || "floor", languageCode).optional(),
    });
}
