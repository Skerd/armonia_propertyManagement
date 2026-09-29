import type {CurrencySimple} from "../../core/dto/currency.dto";
import type {MediaSimple} from "../../core/dto/media.dto";
import type {UnitSimple} from "./unit.dto";

export type ReservationBlank = {
    _id: string;
    name?: string;
};

export type ReservationSimple = {
    _id: string;
    name?: string;
    unit?: UnitSimple;
};

export type ReservationDetail = {
    _id: string;
    name?: string;
    client?: {
        name: string;
        surname: string;
        username: string;
    };
    depositAmount?: string;
    depositCurrency?: CurrencySimple;
    paid?: boolean;
    isActive?: boolean;
    reservationContract?: MediaSimple[];
    additionalDocuments?: MediaSimple[];
};
