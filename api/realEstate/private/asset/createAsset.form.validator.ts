import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AssetSchemaDef} from "./asset.schema-def";

export function createAssetFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AssetSchemaDef, languageCode, form);
}
