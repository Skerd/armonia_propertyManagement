import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LandParcelSchemaDef} from "./landParcel.schema-def";

export function editLandParcelFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(LandParcelSchemaDef, languageCode, form, permissions, readPermissions);
}
