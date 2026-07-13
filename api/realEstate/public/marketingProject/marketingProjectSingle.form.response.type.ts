export type MarketingUnitStatus = "available" | "reserved" | "sold";

export type MarketingUnitListItem = {
    _id: string;
    name: string;
    status: MarketingUnitStatus;
};

export type MarketingFloorListItem = {
    _id: string;
    name: string;
    units?: MarketingUnitListItem[];
};

export type MarketingEdificeListItem = {
    _id: string;
    name: string;
    floors?: MarketingFloorListItem[];
};

export type MarketingProjectSingleItem = {
    _id: string;
    name: string;
    slug?: string;
    location?: string;
    mainImage?: string;
    imageGallery?: string[];
    minSharePrice?: number;
    projectedYieldPercent?: number;
    ownershipType?: "full" | "co-ownership" | "tokenization";
    status?: string;
    description?: string;
    amenities?: string[];
    latitude?: number;
    longitude?: number;
    floorPlans?: {label: string; url: string}[];
    edifices?: MarketingEdificeListItem[];
};

export type MarketingProjectSingleFormResponseType = {
    project: MarketingProjectSingleItem;
};
