import type {CurrencySimple} from "../../core/dto/currency.dto";
import type {FloorSimple} from "./floor.dto";
import type {UnitTypeSimple} from "./unitType.dto";

export type UnitSimple = {
    _id: string;
    name: string;
    unitNumber?: string;
    unitType?: UnitTypeSimple;
};

export type UnitWithFloor = {
    _id: string;
    name: string;
    unitNumber?: string;
    unitType?: UnitTypeSimple;
    floor?: FloorSimple;
};

export type UnitSale = {
    _id: string;
    name: string;
    unitNumber?: string;
    unitType?: UnitTypeSimple;
    floor?: FloorSimple;
    price?: number;
    priceCurrency?: CurrencySimple;
};
