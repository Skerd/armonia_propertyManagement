import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TenderInvitationSchemaDef} from "./tenderInvitation.schema-def";

export function editTenderInvitationFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(TenderInvitationSchemaDef, languageCode, form, permissions, readPermissions);
}
