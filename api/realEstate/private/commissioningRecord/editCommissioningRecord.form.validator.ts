import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CommissioningRecordSchemaDef} from "./commissioningRecord.schema-def";

export function editCommissioningRecordFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CommissioningRecordSchemaDef, languageCode, form, permissions, readPermissions);
}
