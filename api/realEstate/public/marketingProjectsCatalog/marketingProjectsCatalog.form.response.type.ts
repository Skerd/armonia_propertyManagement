import type {MarketingPropertyTypeId} from "./marketingProjectsCatalog.shared.types";

export type MarketingProjectCatalogListItem = {
    _id: string;
    name: string;
    slug?: string;
    location?: string;
    city?: string;
    mainImage?: string;
    imageGallery?: string[];
    minSharePrice?: number;
    maxSharePrice?: number;
    projectedYieldPercent?: number;
    ownershipType?: "full" | "co-ownership" | "tokenization";
    status?: string;
    unitCount?: number;
    availableUnitCount?: number;
    edificeCount?: number;
    floorCount?: number;
    propertyTypes?: MarketingPropertyTypeId[];
    bedroomRange?: {min: number; max: number};
    areaSqmRange?: {min: number; max: number};
};

export type MarketingProjectsCatalogFilterOptions = {
    cities: string[];
    propertyTypes: MarketingPropertyTypeId[];
    bedroomOptions: string[];
    priceBounds: {min: number; max: number};
    projects: {_id: string; name: string}[];
};

export type MarketingProjectsCatalogFormResponseType = {
    projects: MarketingProjectCatalogListItem[];
    total: number;
    filterOptions: MarketingProjectsCatalogFilterOptions;
};
