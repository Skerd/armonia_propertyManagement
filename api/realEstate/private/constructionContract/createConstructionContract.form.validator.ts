import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionContractSchemaDef} from "./constructionContract.schema-def";

export function createConstructionContractFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ConstructionContractSchemaDef, languageCode, form);
}
