import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TenderInvitationSchemaDef} from "./tenderInvitation.schema-def";

export function createTenderInvitationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(TenderInvitationSchemaDef, languageCode, form);
}
