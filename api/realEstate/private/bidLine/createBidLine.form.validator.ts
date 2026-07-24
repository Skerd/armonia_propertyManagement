import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BidLineSchemaDef} from "./bidLine.schema-def";

export function createBidLineFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BidLineSchemaDef, languageCode, form);
}
