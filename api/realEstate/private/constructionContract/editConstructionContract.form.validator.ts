import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionContractSchemaDef} from "./constructionContract.schema-def";

export function editConstructionContractFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ConstructionContractSchemaDef, languageCode, form, permissions, readPermissions);
}
