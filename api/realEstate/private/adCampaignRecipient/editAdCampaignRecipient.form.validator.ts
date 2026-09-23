import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AdCampaignRecipientSchemaDef} from "./adCampaignRecipient.schema-def";

/**
 * Exists only because `createCrudRouter` requires an edit schema.
 *
 * Every field is `SYSTEM_WRITE`, so `buildEditZodSchema` receives no write
 * permissions and degrades every field to `z.any().optional()` — the resulting
 * update is always empty. Delivery records stay tamper-proof, which is what
 * makes them usable as a consent audit trail.
 */
export function editAdCampaignRecipientFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(AdCampaignRecipientSchemaDef, languageCode, form, permissions, readPermissions);
}
