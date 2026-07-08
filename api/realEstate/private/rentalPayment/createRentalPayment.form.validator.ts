import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPaymentSchemaDef} from "./rentalPayment.schema-def";

export function createRentalPaymentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalPaymentSchemaDef, languageCode, form);
}
