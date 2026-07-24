import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {HandoverPackageSchemaDef} from "./handoverPackage.schema-def";

export function createHandoverPackageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(HandoverPackageSchemaDef, languageCode, form);
}
