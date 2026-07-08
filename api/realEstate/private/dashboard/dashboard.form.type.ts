/**
 * Optional query params for dashboard stats (date range, period, drill-down, limit).
 */
export type DashboardFormType = {
    from?: string;  // ISO date string
    to?: string;    // ISO date string
    period?: 'week' | 'month';
    recentSalesLimit?: number;
    projectId?: string;
    edificeId?: string;
};
