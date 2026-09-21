import type {Media, PolygonCoordinates} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import {EdificeMoneyByCurrency} from "../edifice/edifice.dto";
import type {EffectivePriceVisibility, PriceVisibility} from "../priceVisibility.constants";

export type FloorUnitCoordinate = {
    polygonCoordinates: PolygonCoordinates[];
    _id: string;
    name: string;
};

export type EffectiveRateSource = "floor" | "edifice";

export type FloorEffectivePricing = {
    pricePerMeterSquared: number | null;
    verandaPricePerMeterSquared: number | null;
    source: {pricePerMeterSquared: EffectiveRateSource; verandaPricePerMeterSquared: EffectiveRateSource};
    saleCurrency?: {_id: string; symbol?: string; name?: string};
};

export type FloorStatistics = {
    totalUnits?: number;
    totalUnitsArea?: number;
    totalUnitsNetArea?: number;
    totalUnitsSharedArea?: number;
    totalValue?: EdificeMoneyByCurrency[];
    collectedAmount?: EdificeMoneyByCurrency[];
    notCollectedAmount?: EdificeMoneyByCurrency[];
    /** Rolled up from units: verified + paid cost document line totals by currency. */
    verifiedPaidUnitCosts?: EdificeMoneyByCurrency[];
    /** Rolled up from units: verified costs still owed (unpaid / partially paid / disputed). */
    verifiedOutstandingUnitCosts?: EdificeMoneyByCurrency[];
    /** Sum of per-unit counts of unit cost documents (non-deleted). */
    totalUnitCostDocuments?: number;
    /** Costs in `pending_verification` or `needs_revision`, aggregated from units. */
    pendingVerificationUnitCosts?: EdificeMoneyByCurrency[];
    unitsByStatus?: {
        available: number;
        reserved: number;
        sold: number;
        unavailable: number;
        leased: number;
    };
};

export type Floor = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    levelNumber: number;
    totalUnits: number;
    area: number;
    isAccessible: boolean;
    hasEmergencyExit: boolean;
    description?: string;
    sharedSpaces?: string[];
    polygonCoordinates?: PolygonCoordinates[];
    mainImage: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    mediaFiles?: Media[];
    marketingBooklet?: Media;
    edifice?: {
        _id: string;
        name?: string;
    };
    project?: {
        _id: string;
        name?: string;
    };
    priceVisibility?: PriceVisibility;
    /** Resolved public price visibility (single-record reads only). */
    effectivePriceVisibility?: EffectivePriceVisibility;
    /** Floor override of the edifice sale rate; empty = follows the edifice. */
    pricePerMeterSquared?: number | null;
    verandaPricePerMeterSquared?: number | null;
    /** Rates actually applied to this floor's units (single-record reads only). */
    effectivePricing?: FloorEffectivePricing;
    statistics?: FloorStatistics;
    unitsCoordinates?: FloorUnitCoordinate[];
};
