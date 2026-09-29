import type {Media, PolygonCoordinates} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {EdificeSimple} from "../../../../../dto/edifice.dto";
import type {FloorSimple} from "../../../../../dto/floor.dto";
import type {InspectionSimple} from "../../../../../dto/inspection.dto";
import type {ModificationRequestSimple} from "../../../../../dto/modificationRequest.dto";
import type {ProjectSimple} from "../../../../../dto/project.dto";
import type {ReservationBlank} from "../../../../../dto/reservation.dto";
import type {SaleBlank} from "../../../../../dto/sale.dto";
import type {UnitCostSimple} from "../../../../../dto/unitCost.dto";
import type {UnitSimple} from "../../../../../dto/unit.dto";
import type {UnitTypeSimple} from "../../../../../dto/unitType.dto";
import {UnitStatus} from "./unit.constants";
import type {EffectivePriceVisibility, PriceVisibility} from "../../priceVisibility.constants";

export type UnitMoneyByCurrency = {
    currency?: CurrencySimple;
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
    unitType?: UnitTypeSimple;
    unitNumber: string;
    name: string;
    area: number;
    sharedArea: number;
    netArea: number;
    verandaArea?: number;
    price: number;
    priceCurrency?: CurrencySimple;
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
    unavailableNotes?: string;
    connectedUnits?: UnitSimple[];
    inspections: InspectionSimple[];
    modificationRequests: ModificationRequestSimple[];
    costs?: UnitCostSimple[];
    reservation?: ReservationBlank;
    sale?: SaleBlank;
    orientation?: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
    constructionStatus?: "planned" | "under_construction" | "ready" | "delivered";
    saleCommissionRatePercent?: number;
    reservationCommissionRatePercent?: number;
    priceHistory?: {
        price: number;
        currency?: CurrencySimple;
        changedAt: string;
        changedBy?: SimpleBlankUser;
        reason?: string;
    }[];

    project?: ProjectSimple;
    edifice?: EdificeSimple;
    floor?: FloorSimple;
    featuredOnHomepage?: boolean;
    featuredSortOrder?: number;
    priceVisibility?: PriceVisibility;
    /** Resolved public price visibility (single-record reads only). */
    effectivePriceVisibility?: EffectivePriceVisibility;
    statistics?: UnitStatistics;
}
