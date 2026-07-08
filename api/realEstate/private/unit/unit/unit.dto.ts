import type {Media, PolygonCoordinates} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import {UnitStatus} from "./unit.constants";
import {Currency} from "../../../../../../core/database/types";

export type UnitMoneyByCurrency = {
    currency?: Currency;
    value: number;
}

export type UnitStatistics = {
    collectedAmount?: UnitMoneyByCurrency[];
    notCollectedAmount?: UnitMoneyByCurrency[];
    averagePricePerSquareMeter?: UnitMoneyByCurrency;
    /** Sum of line totals on unit costs that are verified and fully paid, by document currency. */
    verifiedPaidUnitCosts?: UnitMoneyByCurrency[];
    /** Sum of line totals on verified costs that are not yet paid (unpaid / partially paid / disputed). */
    verifiedOutstandingUnitCosts?: UnitMoneyByCurrency[];
    /** Non-deleted unit cost documents linked to this unit. */
    unitCostDocumentCount?: number;
    /**
     * Document subtotals for costs awaiting verification (`pending_verification`, `needs_revision`),
     * by document currency.
     */
    pendingVerificationUnitCosts?: UnitMoneyByCurrency[];
};

export type Unit = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    unitType?: {
        _id: string;
        name?: string;
        icon?: string;
    };
    unitNumber: string;
    name: string;
    area: number;
    sharedArea: number;
    netArea: number;
    verandaArea?: number;
    price: number;
    priceCurrency?: Currency;
    isAvailable: boolean;
    hasBalcony: boolean;
    hasTerrace: boolean;
    hasSeaView: boolean;
    hasCityView: boolean;
    hasLakeView: boolean;
    hasElevator: boolean;
    numberOfRooms: number;
    numberOfBathrooms: number;
    description?: string;
    mainImage?: Media;
    imageGallery: Media[];
    videoGallery: Media[];
    mediaFiles?: Media[];
    marketingBooklet?: Media;
    polygonCoordinates?: PolygonCoordinates[];
    status: UnitStatus;
    connectedUnits?: {
        _id: string;
        name?: string;
        unitNumber?: string;
        unitType?: {
            _id: string;
            name?: string;
            icon?: string;
        }
    }[];
    inspections: {
        _id: string,
        name?: string
    }[],
    modificationRequests: {
        _id: string,
        name?: string
    }[],
    costs?: {
        _id: string;
        name?: string;
        purchaseDate?: string;
        verificationStatus?: string;
        paymentStatus?: string;
    }[],
    reservation?: {
        _id?: string;
        name: string;
    };
    sale?: {
        _id?: string;
        name?: string;
    };
    orientation?: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
    constructionStatus?: "planned" | "under_construction" | "ready" | "delivered";
    saleCommissionRatePercent?: number;
    reservationCommissionRatePercent?: number;
    priceHistory?: {
        price: number;
        currency?: Currency;
        changedAt: string;
        changedBy?: {
            _id: string;
            name?: string;
            surname?: string
        };
        reason?: string;
    }[];

    project?: {
        _id: string;
        name?: string;
    };
    edifice?: {
        _id: string;
        name?: string;
    };
    floor?: {
        _id: string;
        name?: string;
    };
    statistics?: UnitStatistics;
}

