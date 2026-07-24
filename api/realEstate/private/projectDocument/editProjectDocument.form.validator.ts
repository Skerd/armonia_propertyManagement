import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProjectDocumentSchemaDef} from "./projectDocument.schema-def";

export function editProjectDocumentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ProjectDocumentSchemaDef, languageCode, form, permissions, readPermissions);
}
