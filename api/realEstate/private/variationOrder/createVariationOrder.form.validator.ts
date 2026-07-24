import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VariationOrderSchemaDef} from "./variationOrder.schema-def";

export function createVariationOrderFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VariationOrderSchemaDef, languageCode, form);
}
