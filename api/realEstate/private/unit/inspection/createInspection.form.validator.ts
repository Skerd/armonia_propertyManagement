import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {InspectionSchemaDef} from "./inspection.schema-def";
import {requireFieldWhenTruthy} from "../../../../../../core/helpers/zodBuilder";

export function generateZodCreateInspectionFormSchema(languageCode: string, form: any = null) {
    const base = buildCreateZodSchema(InspectionSchemaDef, languageCode, form);
    return requireFieldWhenTruthy(
        "followUpRequired",
        "followUpInspection",
        form?.["followUpInspectionLabel"] ?? "followUpInspection",
        languageCode,
    )(base);
}
