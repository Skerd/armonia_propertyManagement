import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FeasibilityStudySchemaDef} from "./feasibilityStudy.schema-def";

export function createFeasibilityStudyFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(FeasibilityStudySchemaDef, languageCode, form);
}
