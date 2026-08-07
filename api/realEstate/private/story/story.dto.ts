import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Story = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {
        _id: string;
        name: string;
    };
    edifice?: {
        _id: string;
        name: string;
    };
    unit?: {
        _id: string;
        name: string;
        unitNumber?: string;
    };
    title: string;
    content: string;
    excerpt?: string;
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    published?: boolean;
    publishedAt?: string;
    sortOrder?: number;
};
