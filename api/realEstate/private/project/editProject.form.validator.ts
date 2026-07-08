import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProjectSchemaDef} from "./project.schema-def";

export function editProjectFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ProjectSchemaDef, languageCode, form, permissions, readPermissions);
}
