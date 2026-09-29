import type {CurrencySimple} from "../../core/dto/currency.dto";
import type {UnitSimple} from "./unit.dto";

export type SaleBlank = {
    _id: string;
    name: string;
    saleCurrency?: CurrencySimple;
};

export type SaleSimple = {
    _id: string;
    name: string;
    finalPrice?: string;
    saleDate?: string;
    unit?: UnitSimple;
};
