import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ContractorInvoiceSchemaDef} from "./contractorInvoice.schema-def";

export function createContractorInvoiceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ContractorInvoiceSchemaDef, languageCode, form);
}
