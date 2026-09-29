import {Media, PolygonCoordinates} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {ConstructorSimple} from "../../../../dto/constructor.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitTypeSimple} from "../../../../dto/unitType.dto";
import type {EffectivePriceVisibility, PriceVisibility} from "../priceVisibility.constants";

export type EdificeFloorCoordinate = {
    polygonCoordinates: PolygonCoordinates[];
    _id: string;
    name: string;
};

export type EdificeMoneyByCurrency = {
    currency?: CurrencySimple;
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

export type EdificeProject = ProjectSimple & {
    mainImage?: Media;
};

export type Edifice = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    address: {
        street: string;
        postalCode: string;
        country?: CountrySimple;
        state?: StateSimple;
        city?: CitySimple;
        latitude: number;
        longitude: number;
    };
    distanceFromCityCenter: number;
    totalArea: number;
    greenArea: number;
    investmentValue: number;
    investmentCurrency?: CurrencySimple;
    pricePerMeterSquared?: number;
    verandaPricePerMeterSquared?: number;
    saleCurrency?: CurrencySimple;
    numberOfFloors?: number;
    numberOfParkingSpaces?: number;
    numberOfGarages?: number;
    numberOfFloorsAboveGround?: number;
    numberOfFloorsUnderGround?: number;
    commercialFacilities?: string[];
    neighborhoodFacilities?: string[];
    constructors?: ConstructorSimple[];
    propertyTypes?: UnitTypeSimple[];
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    mediaFiles?: Media[];
    marketingBooklet?: Media;
    project: EdificeProject;
    statistics?: EdificeStatistics;
    floorsCoordinates?: EdificeFloorCoordinate[];
    polygonCoordinates?: PolygonCoordinates[];
    constructionStartDate?: Date;
    expectedCompletionDate?: Date;
    actualCompletionDate?: Date;
    buildingPermitNumber?: string;
    energyClass?: string;
    priceVisibility?: PriceVisibility;
    /** Resolved public price visibility (single-record reads only). */
    effectivePriceVisibility?: EffectivePriceVisibility;
};
