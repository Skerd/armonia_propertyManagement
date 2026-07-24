import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {IncomingInvoiceSchemaDef} from "./incomingInvoice.schema-def";

export function createIncomingInvoiceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(IncomingInvoiceSchemaDef, languageCode, form);
}
