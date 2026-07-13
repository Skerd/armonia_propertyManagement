export type MarketingAvailabilityDayItem = {
    date: string;
    availableSlots: number;
    totalSlots: number;
};

export type MarketingAvailabilityFormResponseType = {
    days: MarketingAvailabilityDayItem[];
};
