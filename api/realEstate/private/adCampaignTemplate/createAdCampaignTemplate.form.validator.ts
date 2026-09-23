import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {withPlaceholderCheck} from "../adCampaign/adCampaignPlaceholders.refine";
import {AdCampaignTemplateSchemaDef} from "./adCampaignTemplate.schema-def";

/** Fields an author may write `{tokens}` into. */
const TOKEN_FIELDS = ["subject", "previewText", "bodyHtml"] as const;

export function createAdCampaignTemplateFormSchema(languageCode: string, form: any = null) {
    return withPlaceholderCheck(
        buildCreateZodSchema(AdCampaignTemplateSchemaDef, languageCode, form),
        TOKEN_FIELDS,
        languageCode,
        form,
    );
}
