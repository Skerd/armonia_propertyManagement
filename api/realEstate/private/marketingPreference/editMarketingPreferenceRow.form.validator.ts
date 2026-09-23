import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MarketingPreferenceSchemaDef} from "./marketingPreference.schema-def";

/**
 * Staff-side edit of a whole consent row, by `_id`.
 *
 * Distinct from `editMarketingPreferenceFormSchema`, which is the toggles-only
 * body the person themselves sends to `/me` and to the unsubscribe page — that
 * one carries no `_id` and no `email`, because its subject comes from the
 * session or the token rather than the payload.
 */
export function editMarketingPreferenceRowFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(MarketingPreferenceSchemaDef, languageCode, form, permissions, readPermissions);
}
