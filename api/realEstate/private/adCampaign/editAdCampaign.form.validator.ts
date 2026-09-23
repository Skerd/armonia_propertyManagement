import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AdCampaignSchemaDef} from "./adCampaign.schema-def";
import {withPlaceholderCheck} from "./adCampaignPlaceholders.refine";

/** Fields an author may write `{tokens}` into. */
const TOKEN_FIELDS = ["subjectOverride", "bodyHtmlOverride"] as const;

export function editAdCampaignFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, any> = {},
    readPermissions: Record<string, any> = {},
) {
    return withPlaceholderCheck(
        buildEditZodSchema(AdCampaignSchemaDef, languageCode, form, permissions, readPermissions),
        TOKEN_FIELDS,
        languageCode,
        form,
    );
}
