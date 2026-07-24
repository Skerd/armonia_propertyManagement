import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ContractorInvoiceSchemaDef} from "./contractorInvoice.schema-def";

export function editContractorInvoiceFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ContractorInvoiceSchemaDef, languageCode, form, permissions, readPermissions);
}
