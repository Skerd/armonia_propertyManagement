import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VariationOrderSchemaDef} from "./variationOrder.schema-def";

export function editVariationOrderFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(VariationOrderSchemaDef, languageCode, form, permissions, readPermissions);
}
