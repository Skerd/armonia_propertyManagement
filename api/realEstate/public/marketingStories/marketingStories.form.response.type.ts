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
};

export type MarketingStoriesFormResponseType = {
    stories: MarketingStoryItem[];
    total: number;
};
