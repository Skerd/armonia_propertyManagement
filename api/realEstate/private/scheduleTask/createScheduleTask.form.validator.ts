import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ScheduleTaskSchemaDef} from "./scheduleTask.schema-def";

export function createScheduleTaskFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ScheduleTaskSchemaDef, languageCode, form);
}
