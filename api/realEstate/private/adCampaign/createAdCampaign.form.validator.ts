import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AdCampaignSchemaDef} from "./adCampaign.schema-def";
import {withPlaceholderCheck} from "./adCampaignPlaceholders.refine";

/** Fields an author may write `{tokens}` into. */
const TOKEN_FIELDS = ["subjectOverride", "bodyHtmlOverride"] as const;

export function createAdCampaignFormSchema(languageCode: string, form: any = null) {
    return withPlaceholderCheck(
        buildCreateZodSchema(AdCampaignSchemaDef, languageCode, form),
        TOKEN_FIELDS,
        languageCode,
        form,
    );
}
