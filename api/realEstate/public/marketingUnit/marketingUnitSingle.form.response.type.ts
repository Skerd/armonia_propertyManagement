import type {MarketingPropertyTypeId} from "../marketingProjectsCatalog/marketingProjectsCatalog.shared.types";

export type MarketingUnitPriceCurrency = {
    symbol?: string;
    abbreviation?: string;
};

export type MarketingUnitPricePerSqm = {
    value: number;
    currency?: MarketingUnitPriceCurrency;
};

export type MarketingUnitOrientation = "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";

export type MarketingUnitConstructionStatus = "planned" | "under_construction" | "ready" | "delivered";

export type MarketingUnitPriceHistoryEntry = {
    price: number;
    currency?: MarketingUnitPriceCurrency;
    changedAt?: string;
    reason?: string;
};

export type MarketingUnitSingleItem = {
    _id: string;
    name: string;
    projectId: string;
    status: string;
    unitNumber?: string;
    areaSqm?: number;
    bedrooms?: number;
    bathrooms?: number;
    price?: number;
    sharePrice?: number;
    projectedYield?: number;
    mainImage?: string;
    imageGallery?: string[];
    videoGallery?: string[];
    description?: string;
    grossAreaSqm?: number;
    netAreaSqm?: number;
    sharedAreaSqm?: number;
    verandaAreaSqm?: number;
    floorLabel?: string;
    floorLevel?: string | number;
    totalFloorsInEdifice?: number;
    propertyType?: MarketingPropertyTypeId;
    floorPlanImage?: string;
    priceCurrency?: MarketingUnitPriceCurrency;
    unitTypeName?: string;
    orientation?: MarketingUnitOrientation;
    constructionStatus?: MarketingUnitConstructionStatus;
    averagePricePerSquareMeter?: MarketingUnitPricePerSqm;
    hasBalcony?: boolean;
    hasTerrace?: boolean;
    hasSeaView?: boolean;
    hasCityView?: boolean;
    hasLakeView?: boolean;
    hasElevator?: boolean;
    priceHistory?: MarketingUnitPriceHistoryEntry[];
};

export type MarketingUnitSingleFormResponseType = {
    unit: MarketingUnitSingleItem;
};
