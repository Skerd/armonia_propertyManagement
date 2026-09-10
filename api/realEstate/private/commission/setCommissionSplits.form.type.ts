export type CommissionSplitFormRow = {
    agentId: string;
    label?: string;
    ratePercent: number;
    amount: number;
};

export type SetCommissionSplitsForm = {
    _id: string;
    splits: CommissionSplitFormRow[];
};
