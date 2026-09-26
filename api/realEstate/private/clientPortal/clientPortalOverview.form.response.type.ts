export type ClientPortalCurrencyAmount = {
    amount: number;
    currencySymbol: string;
    currencyAbbreviation: string;
};

export type ClientPortalNextPayment = {
    kind: "down_payment" | "installment";
    dueDate: string;
    amount: number;
    remaining: number;
    currencySymbol: string;
    currencyAbbreviation: string;
    saleName?: string;
    installmentNumber?: number;
    status: string;
};

export type ClientPortalNotificationItem = {
    _id: string;
    code: string;
    description: string;
    date: string;
    readOn?: string;
};

export type ClientPortalOverviewFormResponseType = {
    propertiesOwned: number;
    activeReservations: number;
    totalAreaSqm: number;
    portfolioValue: ClientPortalCurrencyAmount[];
    nextPayments: ClientPortalNextPayment[];
    unreadNotifications: number;
    latestNotifications: ClientPortalNotificationItem[];
};
