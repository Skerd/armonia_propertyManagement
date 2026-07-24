import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MilestoneSchemaDef} from "./milestone.schema-def";

export function createMilestoneFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(MilestoneSchemaDef, languageCode, form);
}
