export type BranchKpi = {
    companyId: string;
    companyName: string;
    totalUnits: number;
    availableUnits: number;
    soldUnits: number;
    rentedUnits: number;
    totalRevenue: number;
    totalCommissions: number;
    activeLeases: number;
    openSnags: number;
};

export type GroupDashboardResponse = {
    groupName?: string;
    isHeadquarters: boolean;
    branches: BranchKpi[];
    totals: Omit<BranchKpi, "companyId" | "companyName">;
    computedAt: string;
};
