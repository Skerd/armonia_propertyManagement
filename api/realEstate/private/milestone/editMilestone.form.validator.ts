import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MilestoneSchemaDef} from "./milestone.schema-def";

export function editMilestoneFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(MilestoneSchemaDef, languageCode, form, permissions, readPermissions);
}
