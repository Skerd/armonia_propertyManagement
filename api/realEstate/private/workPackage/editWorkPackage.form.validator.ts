import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WorkPackageSchemaDef} from "./workPackage.schema-def";

export function editWorkPackageFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(WorkPackageSchemaDef, languageCode, form, permissions, readPermissions);
}
