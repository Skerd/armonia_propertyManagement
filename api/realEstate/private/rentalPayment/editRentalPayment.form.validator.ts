import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RentalPaymentSchemaDef} from "./rentalPayment.schema-def";

export function editRentalPaymentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(RentalPaymentSchemaDef, languageCode, form, permissions, readPermissions);
}
