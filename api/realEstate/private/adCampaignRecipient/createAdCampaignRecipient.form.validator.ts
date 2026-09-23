import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AdCampaignRecipientSchemaDef} from "./adCampaignRecipient.schema-def";

/**
 * Exists only because `createCrudRouter` requires a create schema.
 *
 * No client is meant to reach it: every field on the recipient schema is
 * `SYSTEM_WRITE`, so the permission layer strips the whole payload before this
 * ever matters. Rows are written by the materializer through the model directly.
 */
export function createAdCampaignRecipientFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AdCampaignRecipientSchemaDef, languageCode, form);
}
