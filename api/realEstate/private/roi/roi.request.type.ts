export type RoiRequest = {
    /** Root scope — required unless unitIds alone pin the selection. */
    projectId?: string;
    edificeIds?: string[];
    floorIds?: string[];
    unitIds?: string[];
};
