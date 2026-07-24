import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SiteDiarySchemaDef} from "./siteDiary.schema-def";

export function editSiteDiaryFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SiteDiarySchemaDef, languageCode, form, permissions, readPermissions);
}
