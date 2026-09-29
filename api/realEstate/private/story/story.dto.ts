import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {EdificeSimple} from "../../../../dto/edifice.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {StoryTypeSimple} from "../../../../dto/storyType.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type Story = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: ProjectSimple;
    storyType?: StoryTypeSimple;
    edifice?: EdificeSimple;
    unit?: UnitSimple;
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
