import type {ErpExportDataset, ErpExportFormat} from "./erpExport.response.type";

export type ErpExportFormType = {
    datasets: ErpExportDataset[];
    format?: ErpExportFormat;
    dateFrom?: string;
    dateTo?: string;
    projectId?: string;
};
