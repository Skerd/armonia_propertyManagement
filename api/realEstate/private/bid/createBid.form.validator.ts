import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BidSchemaDef} from "./bid.schema-def";

export function createBidFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BidSchemaDef, languageCode, form);
}
