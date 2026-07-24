import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ApprovalRequestSchemaDef} from "./approvalRequest.schema-def";

export function editApprovalRequestFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ApprovalRequestSchemaDef, languageCode, form, permissions, readPermissions);
}
