import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CostCommitmentSchemaDef} from "./costCommitment.schema-def";

export function editCostCommitmentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CostCommitmentSchemaDef, languageCode, form, permissions, readPermissions);
}
