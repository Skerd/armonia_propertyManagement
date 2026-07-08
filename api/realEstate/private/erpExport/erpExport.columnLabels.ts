import type {ErpExportDataset} from "./erpExport.response.type";

export const ERP_EXPORT_COLUMN_FIELDS = [
    "id",
    "name",
    "unitName",
    "buyerName",
    "saleDate",
    "salePrice",
    "currency",
    "status",
    "agentName",
    "saleId",
    "saleName",
    "amount",
    "installmentNumber",
    "dueDate",
    "paidAt",
    "leaseName",
    "paidAmount",
    "projectName",
    "purchaseDate",
    "totalAmount",
    "verificationStatus",
    "paymentStatus",
] as const;

export type ErpExportColumnField = (typeof ERP_EXPORT_COLUMN_FIELDS)[number];

const COLUMN_LABELS: Record<string, Record<ErpExportColumnField, string>> = {
    "en-US": {
        id: "ID",
        name: "Name",
        unitName: "Unit",
        buyerName: "Buyer",
        saleDate: "Sale date",
        salePrice: "Sale price",
        currency: "Currency",
        status: "Status",
        agentName: "Agent",
        saleId: "Sale ID",
        saleName: "Sale",
        amount: "Amount",
        installmentNumber: "Installment #",
        dueDate: "Due date",
        paidAt: "Paid at",
        leaseName: "Lease",
        paidAmount: "Paid amount",
        projectName: "Project",
        purchaseDate: "Purchase date",
        totalAmount: "Total amount",
        verificationStatus: "Verification",
        paymentStatus: "Payment status",
    },
    "sq-AL": {
        id: "ID",
        name: "Emri",
        unitName: "Njësia",
        buyerName: "Blerësi",
        saleDate: "Data e shitjes",
        salePrice: "Çmimi i shitjes",
        currency: "Monedha",
        status: "Statusi",
        agentName: "Agjenti",
        saleId: "ID e shitjes",
        saleName: "Shitja",
        amount: "Shuma",
        installmentNumber: "Kësti #",
        dueDate: "Data e afatit",
        paidAt: "Paguar më",
        leaseName: "Qiraja",
        paidAmount: "Shuma e paguar",
        projectName: "Projekti",
        purchaseDate: "Data e blerjes",
        totalAmount: "Shuma totale",
        verificationStatus: "Verifikimi",
        paymentStatus: "Statusi i pagesës",
    },
};

const DATASET_SECTION_LABELS: Record<string, Record<ErpExportDataset, string>> = {
    "en-US": {
        sales: "Sales",
        commissions: "Commissions",
        paymentPlans: "Payment Plan Installments",
        rentalPayments: "Rental Payments",
        unitCosts: "Unit Costs",
    },
    "sq-AL": {
        sales: "Shitjet",
        commissions: "Komisionet",
        paymentPlans: "Këstet e planit të pagesës",
        rentalPayments: "Pagesat e qirasë",
        unitCosts: "Kostot e njësive",
    },
};

const MISC_LABELS: Record<string, {exportedAt: string}> = {
    "en-US": {exportedAt: "Exported at"},
    "sq-AL": {exportedAt: "Eksportuar më"},
};

function resolveLanguage(languageCode: string): string {
    if (COLUMN_LABELS[languageCode]) return languageCode;
    const prefix = languageCode.split("-")[0];
    const match = Object.keys(COLUMN_LABELS).find((code) => code.startsWith(prefix));
    return match ?? "en-US";
}

export function getErpExportColumnLabel(field: string, languageCode: string): string {
    const lang = resolveLanguage(languageCode);
    const labels = COLUMN_LABELS[lang];
    return (labels as Record<string, string>)[field] ?? field;
}

export function getErpExportDatasetSectionLabel(dataset: ErpExportDataset, languageCode: string): string {
    const lang = resolveLanguage(languageCode);
    return DATASET_SECTION_LABELS[lang][dataset];
}

export function getErpExportExportedAtLabel(languageCode: string): string {
    const lang = resolveLanguage(languageCode);
    return MISC_LABELS[lang].exportedAt;
}
