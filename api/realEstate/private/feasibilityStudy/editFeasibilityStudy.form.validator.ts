import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FeasibilityStudySchemaDef} from "./feasibilityStudy.schema-def";

export function editFeasibilityStudyFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(FeasibilityStudySchemaDef, languageCode, form, permissions, readPermissions);
}
