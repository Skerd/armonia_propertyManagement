import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DesignStageSchemaDef} from "./designStage.schema-def";

export function createDesignStageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(DesignStageSchemaDef, languageCode, form);
}
