import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {HandoverPackageSchemaDef} from "./handoverPackage.schema-def";

export function editHandoverPackageFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(HandoverPackageSchemaDef, languageCode, form, permissions, readPermissions);
}
