import type {ClientPortalCurrencyAmount} from "./clientPortalOverview.form.response.type";

export type ClientPortalConstructionProgressItem = {
    _id: string;
    projectName: string;
    edificeName?: string;
    phase: string;
    progressPercent: number;
    title: string;
    updateDate: string;
};

export type ClientPortalPortfolioFormResponseType = {
    portfolioValue: ClientPortalCurrencyAmount[];
    totalAreaSqm: number;
    activeReservations: number;
    constructionProgress: ClientPortalConstructionProgressItem[];
};
