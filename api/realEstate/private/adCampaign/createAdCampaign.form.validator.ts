import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AdCampaignSchemaDef} from "./adCampaign.schema-def";
import {withContentFieldsCheck} from "./adCampaignContent.refine";
import {withPlaceholderCheck} from "./adCampaignPlaceholders.refine";

/** Fields an author may write `{tokens}` into. */
const TOKEN_FIELDS = ["subjectOverride", "bodyHtmlOverride"] as const;

export function createAdCampaignFormSchema(languageCode: string, form: any = null) {
    return withContentFieldsCheck(
        withPlaceholderCheck(
            buildCreateZodSchema(AdCampaignSchemaDef, languageCode, form),
            TOKEN_FIELDS,
            languageCode,
            form,
        ),
        languageCode,
        form,
    );
}
