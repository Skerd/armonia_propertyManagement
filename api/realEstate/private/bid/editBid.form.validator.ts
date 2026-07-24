import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BidSchemaDef} from "./bid.schema-def";

export function editBidFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(BidSchemaDef, languageCode, form, permissions, readPermissions);
}
