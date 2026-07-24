import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CommissioningRecordSchemaDef} from "./commissioningRecord.schema-def";

export function createCommissioningRecordFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CommissioningRecordSchemaDef, languageCode, form);
}
