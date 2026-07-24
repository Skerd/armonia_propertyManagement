import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CostCommitmentSchemaDef} from "./costCommitment.schema-def";

export function createCostCommitmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CostCommitmentSchemaDef, languageCode, form);
}
