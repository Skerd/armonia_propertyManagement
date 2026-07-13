export type MarketingProjectListItem = {
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
};

export type MarketingProjectsFormResponseType = {
    projects: MarketingProjectListItem[];
    total: number;
};
