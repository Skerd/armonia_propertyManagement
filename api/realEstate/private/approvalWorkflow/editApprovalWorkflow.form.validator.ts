import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ApprovalWorkflowSchemaDef} from "./approvalWorkflow.schema-def";

export function editApprovalWorkflowFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ApprovalWorkflowSchemaDef, languageCode, form, permissions, readPermissions);
}
