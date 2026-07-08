import {z} from "zod";
import {isObjectIdZod, mustBeZod} from "../../../../../core/helpers/zodBuilder";
import {ERP_EXPORT_DATASET_VALUES, ERP_EXPORT_FORMAT_VALUES} from "./erpExport.constants";

export function erpExportFormSchema(languageCode: string) {
    return z.object({
        datasets: z
            .array(mustBeZod("datasets", [...ERP_EXPORT_DATASET_VALUES], languageCode))
            .min(1),
        format: mustBeZod("format", [...ERP_EXPORT_FORMAT_VALUES], languageCode).optional().default("json"),
        dateFrom: z.string().optional(),
        dateTo: z.string().optional(),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
    });
}
