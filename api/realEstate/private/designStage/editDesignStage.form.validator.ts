import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DesignStageSchemaDef} from "./designStage.schema-def";

export function editDesignStageFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(DesignStageSchemaDef, languageCode, form, permissions, readPermissions);
}
