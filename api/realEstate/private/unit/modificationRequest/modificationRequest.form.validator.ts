import {z} from 'zod';
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

export function modificationRequestFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        id: isObjectIdZod(form?.["idLabel"] || "id", languageCode).optional(),
        unitId: isObjectIdZod(form?.["unitIdLabel"] || "unitId", languageCode).optional(),
        projectId: isObjectIdZod(form?.["projectIdLabel"] || "projectId", languageCode).optional(),
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] || "edificeId", languageCode).optional(),
        floorId: isObjectIdZod(form?.["floorIdLabel"] || "floorId", languageCode).optional(),
    });
}


