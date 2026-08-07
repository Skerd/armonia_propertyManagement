export type MarketingStoryTypeItem = {
    _id: string;
    name: string;
    slug?: string;
    sortOrder?: number;
};

export type MarketingMagazine = {
    title?: string;
    description?: string;
    fileUrl?: string;
};

export type MarketingStoryItem = {
    _id: string;
    title: string;
    content: string;
    excerpt?: string;
    mainImage?: string;
    imageGallery?: string[];
    videoGallery?: string[];
    publishedAt?: string;
    sortOrder?: number;
    projectId?: string;
    projectName?: string;
    edificeId?: string;
    edificeName?: string;
    unitId?: string;
    unitName?: string;
    storyTypeId?: string;
    storyTypeName?: string;
    storyTypeSlug?: string;
};

export type MarketingStoriesFormResponseType = {
    stories: MarketingStoryItem[];
    total: number;
    storyTypes?: MarketingStoryTypeItem[];
    magazine?: MarketingMagazine;
};
