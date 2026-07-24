import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SpecificationSchemaDef} from "./specification.schema-def";

export function editSpecificationFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SpecificationSchemaDef, languageCode, form, permissions, readPermissions);
}
