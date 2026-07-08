export type RoiUnitBreakdown = {
    unitId: string;
    unitName: string;
    unitNumber: string;
    status: string;
    salePrice?: number;
    saleCurrencySymbol?: string;
    totalCosts: number;
    costCurrencySymbol?: string;
    netProfit?: number;
    roiPercent?: number;
    monthlyRent?: number;
    annualGrossYield?: number; // (monthlyRent * 12 / salePrice) * 100
};

export type RoiScopeType = "project" | "edifice" | "floor" | "unit";

export type RoiProjectSummary = {
    scopeType: RoiScopeType;
    scopeLabel: string;
    projectId: string;
    projectName: string;
    totalUnits: number;
    soldUnits: number;
    availableUnits: number;
    rentedUnits: number;
    totalRevenue: number;
    totalCosts: number;
    netProfit: number;
    roiPercent: number;
    averageRoiPercent: number;
    baseCurrencySymbol?: string;
};

export type RoiResponse = {
    project?: RoiProjectSummary;
    units: RoiUnitBreakdown[];
    computedAt: string;
};
