import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SafetyIncidentSchemaDef} from "./safetyIncident.schema-def";

export function createSafetyIncidentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SafetyIncidentSchemaDef, languageCode, form);
}
