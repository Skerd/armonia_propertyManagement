import {buildEditZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {InspectionSchemaDef} from "./inspection.schema-def";
import {requireFieldWhenTruthy} from "../../../../../../core/helpers/zodBuilder";

export function editInspectionFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {},) {
    const base = buildEditZodSchema(InspectionSchemaDef, languageCode, form, permissions, readPermissions);
    return requireFieldWhenTruthy(
        "followUpRequired",
        "followUpInspection",
        form?.["followUpInspectionLabel"] ?? "followUpInspection",
        languageCode,
    )(base);
}
