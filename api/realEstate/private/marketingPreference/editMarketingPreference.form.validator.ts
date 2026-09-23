import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MarketingPreferenceTogglesSchemaDef} from "./marketingPreference.schema-def";

/**
 * Body for `PATCH /api/realEstate/marketingPreference/me` and for the
 * unsubscribe manage page.
 *
 * Every toggle is optional — an omitted flag keeps its stored value, so a
 * client can send just the one switch the person actually flipped. `email` is
 * intentionally not accepted: the identity comes from the session or the
 * unsubscribe token, never from the body, or anyone could rewrite anyone's
 * preferences.
 */
export function editMarketingPreferenceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(MarketingPreferenceTogglesSchemaDef, languageCode, form).extend({
        unsubscribeAll: z.boolean().optional(),
    });
}
