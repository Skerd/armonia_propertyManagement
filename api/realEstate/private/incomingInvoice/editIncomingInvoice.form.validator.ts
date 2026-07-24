import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {IncomingInvoiceSchemaDef} from "./incomingInvoice.schema-def";

export function editIncomingInvoiceFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(IncomingInvoiceSchemaDef, languageCode, form, permissions, readPermissions);
}
