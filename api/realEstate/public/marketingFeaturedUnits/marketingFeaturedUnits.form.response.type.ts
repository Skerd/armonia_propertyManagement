export type MarketingFeaturedUnitItem = {
    _id: string;
    name: string;
    unitNumber?: string;
    status: "available" | "reserved" | "sold";
    areaSqm?: number;
    bedrooms?: number;
    bathrooms?: number;
    price?: number;
    mainImage?: string;
    imageGallery?: string[];
    propertyType?: "apartment" | "studio" | "penthouse" | "commercial" | "villa";
    hasSeaView?: boolean;
    hasCityView?: boolean;
    hasLakeView?: boolean;
    hasBalcony?: boolean;
    hasTerrace?: boolean;
    projectId?: string;
    projectName?: string;
    edificeId?: string;
    edificeName?: string;
    floorId?: string;
    floorLabel?: string;
};

export type MarketingFeaturedUnitsFormResponseType = {
    units: MarketingFeaturedUnitItem[];
    total: number;
};
