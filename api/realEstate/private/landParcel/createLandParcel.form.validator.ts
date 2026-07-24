import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LandParcelSchemaDef} from "./landParcel.schema-def";

export function createLandParcelFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(LandParcelSchemaDef, languageCode, form);
}
