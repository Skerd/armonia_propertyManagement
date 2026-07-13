import type {MarketingPropertyTypeId} from "../marketingProjectsCatalog/marketingProjectsCatalog.shared.types";

export type MarketingUnitPriceCurrency = {
    symbol?: string;
    abbreviation?: string;
};

export type MarketingUnitPricePerSqm = {
    value: number;
    currency?: MarketingUnitPriceCurrency;
};

export type MarketingUnitSingleItem = {
    _id: string;
    name: string;
    projectId: string;
    status: string;
    areaSqm?: number;
    bedrooms?: number;
    bathrooms?: number;
    price?: number;
    sharePrice?: number;
    projectedYield?: number;
    imageGallery?: string[];
    description?: string;
    grossAreaSqm?: number;
    netAreaSqm?: number;
    sharedAreaSqm?: number;
    floorLabel?: string;
    floorLevel?: string | number;
    totalFloorsInEdifice?: number;
    propertyType?: MarketingPropertyTypeId;
    floorPlanImage?: string;
    priceCurrency?: MarketingUnitPriceCurrency;
    unitTypeName?: string;
    averagePricePerSquareMeter?: MarketingUnitPricePerSqm;
    hasBalcony?: boolean;
    hasTerrace?: boolean;
    hasSeaView?: boolean;
    hasCityView?: boolean;
    hasLakeView?: boolean;
    hasElevator?: boolean;
};

export type MarketingUnitSingleFormResponseType = {
    unit: MarketingUnitSingleItem;
};
