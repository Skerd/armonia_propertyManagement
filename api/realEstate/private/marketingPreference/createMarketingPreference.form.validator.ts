import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MarketingPreferenceSchemaDef} from "./marketingPreference.schema-def";

/** Staff-side creation of a consent row, e.g. recording an opt-out taken by phone. */
export function createMarketingPreferenceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(MarketingPreferenceSchemaDef, languageCode, form);
}
