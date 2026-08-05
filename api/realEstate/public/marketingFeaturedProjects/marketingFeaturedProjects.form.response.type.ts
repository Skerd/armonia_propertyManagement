export type MarketingFeaturedProjectItem = {
    _id: string;
    name: string;
    slug?: string;
    location?: string;
    city?: string;
    mainImage?: string;
    propertyTypes?: Array<"apartment" | "studio" | "penthouse" | "commercial" | "villa">;
};

export type MarketingFeaturedProjectsFormResponseType = {
    projects: MarketingFeaturedProjectItem[];
    total: number;
};
