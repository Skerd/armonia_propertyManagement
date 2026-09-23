import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {withPlaceholderCheck} from "../adCampaign/adCampaignPlaceholders.refine";
import {AdCampaignTemplateSchemaDef} from "./adCampaignTemplate.schema-def";

/** Fields an author may write `{tokens}` into. */
const TOKEN_FIELDS = ["subject", "previewText", "bodyHtml"] as const;

export function editAdCampaignTemplateFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return withPlaceholderCheck(
        buildEditZodSchema(AdCampaignTemplateSchemaDef, languageCode, form, permissions, readPermissions),
        TOKEN_FIELDS,
        languageCode,
        form,
    );
}
