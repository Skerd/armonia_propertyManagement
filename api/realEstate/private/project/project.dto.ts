import type { Media } from "../../../../../core/types";
import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {EdificeMoneyByCurrency} from "../edifice/edifice.dto";

export type ProjectEdificeCoordinate = {
    polygonCoordinates: {x: number; y: number}[];
    _id: string;
    name: string;
    floorsCoordinates?: {
        polygonCoordinates: {x: number; y: number}[];
        _id: string;
        name: string;
    }[];
};

export type ProjectStatistics = {
    totalEdifices?: number;
    totalFloors?: number;
    totalUnits?: number;
    totalArea?: number;
    totalInvestmentValue?: EdificeMoneyByCurrency[];
    totalUnitsArea?: number;
    totalUnitsNetArea?: number;
    totalUnitsSharedArea?: number;
    totalValue?: EdificeMoneyByCurrency[];
    collectedAmount?: EdificeMoneyByCurrency[];
    notCollectedAmount?: EdificeMoneyByCurrency[];
    verifiedPaidUnitCosts?: EdificeMoneyByCurrency[];
    verifiedOutstandingUnitCosts?: EdificeMoneyByCurrency[];
    totalUnitCostDocuments?: number;
    pendingVerificationUnitCosts?: EdificeMoneyByCurrency[];
    unitsByStatus?: {
        available: number;
        reserved: number;
        sold: number;
        unavailable: number;
        leased: number;
    };
}

export type ProjectSocialLink = {
    name: string;
    link: string;
    logo?: Media;
};

export type Project = DeletedData & OwnershipData & LifeCycleData & {
    _id: string,
    name: string,
    description?: string,
    saleCommissionRatePercent?: number;
    reservationCommissionRatePercent?: number;
    mainImage?: Media,
    imageGallery?: Media[],
    videoGallery?: Media[],
    mediaFiles?: Media[],
    marketingBooklet?: Media,
    magazineFile?: Media,
    magazineTitle?: string,
    magazineDescription?: string,
    socialLinks?: ProjectSocialLink[],
    featuredOnHomepage?: boolean,
    featuredSortOrder?: number,
    statistics?: ProjectStatistics,
    edificesCoordinates?: ProjectEdificeCoordinate[],
}
