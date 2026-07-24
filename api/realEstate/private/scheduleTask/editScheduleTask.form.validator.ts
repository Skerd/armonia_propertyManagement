import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ScheduleTaskSchemaDef} from "./scheduleTask.schema-def";

export function editScheduleTaskFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ScheduleTaskSchemaDef, languageCode, form, permissions, readPermissions);
}
