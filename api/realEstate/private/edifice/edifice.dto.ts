import {Media, PolygonCoordinates} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import {Currency} from "../../../../../core/database/types";

export type EdificeFloorCoordinate = {
    polygonCoordinates: PolygonCoordinates[];
    _id: string;
    name: string;
};

export type EdificeMoneyByCurrency = {
    currency?: Currency;
    value: number;
};

export type EdificeStatistics = {
    totalFloors?: number;
    totalUnits?: number;
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
};

export type Edifice = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    address: {
        street: string;
        postalCode: string;
        country: {
            _id: string;
            name: string;
        };
        state?: {
            _id: string;
            name: string;
        };
        city: {
            _id: string;
            name: string;
        };
        latitude: number;
        longitude: number;
    };
    distanceFromCityCenter: number;
    totalArea: number;
    greenArea: number;
    investmentValue: number;
    investmentCurrency: Currency;
    pricePerMeterSquared?: number;
    verandaPricePerMeterSquared?: number;
    saleCurrency?: Currency;
    numberOfFloors?: number;
    numberOfParkingSpaces?: number;
    numberOfGarages?: number;
    numberOfFloorsAboveGround?: number;
    numberOfFloorsUnderGround?: number;
    commercialFacilities?: string[];
    neighborhoodFacilities?: string[];
    constructors?: Array<{
        _id: string;
        name: string;
    }>;
    propertyTypes?: Array<{
        _id: string;
        name?: string;
        icon?: string;
    }>;
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    mediaFiles?: Media[];
    marketingBooklet?: Media;
    project: {
        _id: string;
        name: string;
        mainImage: Media;
    };
    statistics?: EdificeStatistics;
    floorsCoordinates?: EdificeFloorCoordinate[];
    polygonCoordinates?: PolygonCoordinates[];
    constructionStartDate?: Date;
    expectedCompletionDate?: Date;
    actualCompletionDate?: Date;
    buildingPermitNumber?: string;
    energyClass?: string;
};
