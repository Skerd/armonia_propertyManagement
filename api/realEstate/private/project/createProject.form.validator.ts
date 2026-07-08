import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProjectSchemaDef} from "./project.schema-def";

export function createProjectFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProjectSchemaDef, languageCode, form);
}
