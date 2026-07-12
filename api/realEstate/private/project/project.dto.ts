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
    /** Sum of edifice building footprint (`edifice.totalArea`), not unit areas. */
    totalArea?: number;
    totalInvestmentValue?: EdificeMoneyByCurrency[];
    /** Listing aggregates rolled up from edifice statistics (same semantics as edifice sheet). */
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
    statistics?: ProjectStatistics,
    edificesCoordinates?: ProjectEdificeCoordinate[],
}
