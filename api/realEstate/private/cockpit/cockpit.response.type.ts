/**
 * cockpit — cross-project KPI cockpit with Ampel (traffic-light) status (§3.L).
 */
export type CockpitKpi = {
    key: string;
    value: number;
    unit?: string;         // e.g. "%", "count", "CHF"
    ampel: "green" | "amber" | "red";
};

export type CockpitResponse = {
    projectId?: string;
    scope: "company" | "project";
    kpis: CockpitKpi[];
    computedAt: string;
};
