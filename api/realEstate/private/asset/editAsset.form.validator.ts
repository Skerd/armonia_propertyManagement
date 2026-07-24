import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AssetSchemaDef} from "./asset.schema-def";

export function editAssetFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(AssetSchemaDef, languageCode, form, permissions, readPermissions);
}
