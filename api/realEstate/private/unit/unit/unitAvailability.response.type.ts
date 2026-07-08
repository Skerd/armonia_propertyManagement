export type UnitAvailabilityWindow = {
    type: "reserved" | "sold" | "unavailable";
    status: string;
    start: string;
    end?: string;
    reference?: string;
};

export type UnitAvailabilityEntry = {
    unit: {
        _id: string;
        name?: string;
        unitNumber?: number;
        status: string;
        floor?: {_id: string; name?: string};
        edifice?: {_id: string; name?: string};
        project?: {_id: string; name?: string};
    };
    windows: UnitAvailabilityWindow[];
};

export type UnitAvailabilityResponse = {
    entries: UnitAvailabilityEntry[];
    dateFrom: string;
    dateTo: string;
};
