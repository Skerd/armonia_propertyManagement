import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProjectDocumentSchemaDef} from "./projectDocument.schema-def";

export function createProjectDocumentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProjectDocumentSchemaDef, languageCode, form);
}
