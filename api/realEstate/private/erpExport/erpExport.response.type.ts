import type {ERP_EXPORT_DATASET_VALUES, ERP_EXPORT_FORMAT_VALUES} from "./erpExport.constants";

export type ErpExportFormat = (typeof ERP_EXPORT_FORMAT_VALUES)[number];
export type ErpExportDataset = (typeof ERP_EXPORT_DATASET_VALUES)[number];

export type ErpExportRequest = {
    datasets: ErpExportDataset[];
    format?: ErpExportFormat;
    dateFrom?: string;
    dateTo?: string;
    projectId?: string;
};

export type ErpSaleRow = {
    id: string;
    name: string;
    unitName: string;
    buyerName?: string;
    saleDate: string;
    salePrice: number;
    currency: string;
    status: string;
};

export type ErpCommissionRow = {
    id: string;
    name: string;
    agentName?: string;
    saleId: string;
    saleName?: string;
    amount: number;
    currency: string;
    status: string;
};

export type ErpPaymentPlanRow = {
    id: string;
    name: string;
    saleName?: string;
    installmentNumber: number;
    dueDate: string;
    amount: number;
    currency: string;
    status: string;
    paidAt?: string;
};

export type ErpRentalPaymentRow = {
    id: string;
    name: string;
    leaseName?: string;
    unitName?: string;
    dueDate: string;
    amount: number;
    paidAmount?: number;
    currency: string;
    status: string;
};

export type ErpUnitCostRow = {
    id: string;
    name: string;
    unitName?: string;
    projectName?: string;
    purchaseDate: string;
    totalAmount: number;
    currency: string;
    verificationStatus: string;
    paymentStatus: string;
};

export type ErpBoqItemRow = {
    id: string;
    name: string;
    title: string;
    projectName?: string;
    budgetName?: string;
    wbsCode?: string;
    trade?: string;
    plannedQty?: number;
    plannedRate?: number;
    plannedAmount?: number;
    actualAmount?: number;
    variance?: number;
    currency: string;
    status: string;
};

export type ErpCostCommitmentRow = {
    id: string;
    name: string;
    title: string;
    projectName?: string;
    constructorName?: string;
    committedAmount: number;
    retentionPercent?: number;
    issuedAt?: string;
    currency: string;
    status: string;
};

export type ErpProgressClaimRow = {
    id: string;
    name: string;
    title: string;
    projectName?: string;
    contractName?: string;
    claimPeriodStart?: string;
    claimPeriodEnd?: string;
    amount: number;
    certifiedAmount?: number;
    currency: string;
    status: string;
};

export type ErpPermitRow = {
    id: string;
    name: string;
    title: string;
    projectName?: string;
    edificeName?: string;
    permitType: string;
    authority?: string;
    referenceNumber?: string;
    submittedAt?: string;
    approvedAt?: string;
    expiresAt?: string;
    status: string;
};

export type ErpExportResponse = {
    exportedAt: string;
    dateFrom?: string;
    dateTo?: string;
    sales?: ErpSaleRow[];
    commissions?: ErpCommissionRow[];
    paymentPlanInstallments?: ErpPaymentPlanRow[];
    rentalPayments?: ErpRentalPaymentRow[];
    unitCosts?: ErpUnitCostRow[];
    boqItems?: ErpBoqItemRow[];
    costCommitments?: ErpCostCommitmentRow[];
    progressClaims?: ErpProgressClaimRow[];
    permits?: ErpPermitRow[];
};
