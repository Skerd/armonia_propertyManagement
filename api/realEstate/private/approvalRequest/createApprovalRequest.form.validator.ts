import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ApprovalRequestSchemaDef} from "./approvalRequest.schema-def";

export function createApprovalRequestFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ApprovalRequestSchemaDef, languageCode, form);
}
