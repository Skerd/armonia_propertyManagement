import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ApprovalWorkflowSchemaDef} from "./approvalWorkflow.schema-def";

export function createApprovalWorkflowFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ApprovalWorkflowSchemaDef, languageCode, form);
}
