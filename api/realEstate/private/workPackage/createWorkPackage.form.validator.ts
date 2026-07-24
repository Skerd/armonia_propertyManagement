import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WorkPackageSchemaDef} from "./workPackage.schema-def";

export function createWorkPackageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(WorkPackageSchemaDef, languageCode, form);
}
