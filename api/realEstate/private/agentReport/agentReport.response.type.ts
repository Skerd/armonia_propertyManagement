export type AgentReportEntry = {
    agent: {_id: string; name?: string; surname?: string};
    totalSales: number;
    cashSales: number;
    paymentPlanSales: number;
    totalReservations: number;
    convertedReservations: number;
    conversionRate: number;
    totalCommissionsPaid: number;
    totalCommissionsPending: number;
    averageCommissionRate: number;
};

export type AgentReportResponseType = {
    entries: AgentReportEntry[];
    period: {from: string; to: string};
};
