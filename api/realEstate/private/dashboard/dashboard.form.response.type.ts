/**
 * Dashboard API response shape.
 */

export type RevenueByCurrency = {
    currencyId: string;
    currencyName?: string;
    currencySymbol?: string;
    value: number;
};

export type UnitsByStatus = {
    available: number;
    unavailable: number;
    reserved: number;
    sold: number;
};

export type PaymentPlansSummary = {
    byStatus: { active: number; completed: number; defaulted: number; cancelled: number };
    totalOutstanding: number;
    overdueInstallmentsCount: number;
};

export type InspectionsSummary = {
    byStatus: Record<string, number>;
    followUpRequiredCount: number;
};

export type ModificationRequestsSummary = {
    byStatus: Record<string, number>;
}

export type SalesByPaymentType = {
    cash: number;
    payment_plan: number;
};

export type DashboardSummary = {
    totalRevenue: RevenueByCurrency[];
    totalSales: number;
    totalUnits: number;
    totalProjects: number;
    totalEdifices: number;
    totalFloors: number;
    unitsByStatus: UnitsByStatus;
    activeReservations: number;
    paymentPlans: PaymentPlansSummary;
    inspections: InspectionsSummary;
    modificationRequests: ModificationRequestsSummary;
    /** Average sale price (total revenue / total sales) for the period */
    averageSalePrice: number;
    /** Sum of unit prices for available + reserved units (listing value) */
    inventoryValue: number;
    /** Sales count by payment type for the period */
    salesByPaymentType: SalesByPaymentType;
    /** Sold units / total units * 100 */
    occupancyRatePercent: number;
    /** Total number of inspections */
    totalInspections: number;
    /** Modification requests not completed/rejected/cancelled */
    openModificationRequests: number;
    /** Active reservations with expirationDate in next 7 days */
    expiringReservationsCount: number;
    /** Sum of depositAmount for active reservations */
    totalReservationDeposits: number;
    /** Payment plans with status completed */
    paymentPlansCompleted: number;
    /** Payment plans with status defaulted */
    paymentPlansDefaulted: number;
    /** Unit costs: verified and paid purchase line totals, by currency (company scope). */
    verifiedPaidUnitCosts: RevenueByCurrency[];
    verifiedOutstandingUnitCosts: RevenueByCurrency[];
    pendingVerificationUnitCosts: RevenueByCurrency[];
    /** Count of unit cost documents (non-deleted) for units in dashboard scope */
    totalUnitCostDocuments: number;
};

export type PeriodDatum = {
    month: string;  // e.g. "2024-01"
    totalRevenue?: number;
    count?: number;
};

export type RecentSaleItem = {
    _id: string;
    unit: { _id: string; name?: string; unitNumber?: string };
    finalPrice: number;
    saleDate: string;
    soldBy: { _id: string; name?: string; surname?: string; fullName?: string };
    paymentType: string;
    saleCurrency: { _id: string; name?: string };
};

export type ComparisonDatum = {
    current: number;
    previous: number;
    percentageChange: number;
};

/** Single payment alert for dashboard (overdue or due-soon installment). */
export type PaymentAlertItem = {
    unit: { _id: string; unitNumber?: string; name?: string };
    installment: { amount: number; dueDate: string };
    daysUntilDue: number;
};

export type DashboardFormResponseType = {
    summary: DashboardSummary;
    revenueByPeriod: PeriodDatum[];
    salesByPeriod: PeriodDatum[];
    recentSales: RecentSaleItem[];
    /** Overdue and due-soon installments (e.g. for Control Panel). */
    paymentAlerts?: PaymentAlertItem[];
    comparisons?: {
        revenue?: ComparisonDatum;
        sales?: ComparisonDatum;
    };
};
