import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BidLineSchemaDef} from "./bidLine.schema-def";

export function editBidLineFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(BidLineSchemaDef, languageCode, form, permissions, readPermissions);
}
