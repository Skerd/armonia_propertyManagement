import type {MarketingPropertyTypeId} from "../marketingProjectsCatalog/marketingProjectsCatalog.shared.types";

export type MarketingPolygonCoordinate = {x: number; y: number};

export type MarketingPolygonItem = {
    _id: string;
    name: string;
    polygonCoordinates: MarketingPolygonCoordinate[];
};

export type MarketingUnitCatalogStatus = "available" | "reserved" | "sold";

export type MarketingUnitCatalogListItem = {
    _id: string;
    name: string;
    status: MarketingUnitCatalogStatus;
    areaSqm?: number;
    bedrooms?: number;
    bathrooms?: number;
    price?: number;
    mainImage?: string;
    propertyType?: MarketingPropertyTypeId;
    floorLabel?: string;
    edificeId?: string;
    floorId?: string;
};

export type MarketingFloorCatalogListItem = {
    _id: string;
    name: string;
    mainImage?: string;
    levelNumber?: string | number;
    unitsCoordinates?: MarketingPolygonItem[];
    units?: MarketingUnitCatalogListItem[];
};

export type MarketingEdificeCatalogListItem = {
    _id: string;
    name: string;
    mainImage?: string;
    location?: string;
    street?: string;
    city?: string;
    postalCode?: string;
    totalAreaSqm?: number;
    greenAreaSqm?: number;
    floorCount?: number;
    floorsAboveGround?: number;
    floorsUnderGround?: number;
    parkingSpaces?: number;
    garages?: number;
    distanceFromCityCenterM?: number;
    investedAmount?: number;
    investedCurrency?: string;
    pricePerSqm?: number;
    verandaPricePerSqm?: number;
    saleCurrency?: string;
    energyClass?: string;
    expectedCompletionYear?: number;
    constructionStartYear?: number;
    commercialFacilities?: string[];
    neighborhoodFacilities?: string[];
    constructors?: string[];
    unitCount?: number;
    availableUnitCount?: number;
    floorsCoordinates?: MarketingPolygonItem[];
    floors?: MarketingFloorCatalogListItem[];
};

export type MarketingProjectCatalogSingleItem = {
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
    description?: string;
    amenities?: string[];
    latitude?: number;
    longitude?: number;
    floorPlans?: {label: string; url: string}[];
    edificesCoordinates?: MarketingPolygonItem[];
    edifices?: MarketingEdificeCatalogListItem[];
};

export type MarketingProjectCatalogSingleFormResponseType = {
    project: MarketingProjectCatalogSingleItem;
};
