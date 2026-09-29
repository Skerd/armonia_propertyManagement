import type {ClientRegistryStatus} from "./contractsHub.constants";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type ClientRegistryRow = {
    _id: string;
    clientId: string;
    unitId: string;
    name?: string;
    surname?: string;
    phone?: string;
    email?: string;
    project?: ProjectSimple;
    unit?: UnitSimple;
    typology?: string;
    surface?: number;
    unitValue?: number;
    currency?: CurrencySimple;
    status: ClientRegistryStatus;
    bookingDate?: string;
    contractDate?: string;
    agent?: SimpleBlankUser;
    paid?: number;
    remaining?: number;
    sourceType?: "sale" | "reservation";
    sourceId?: string;
};
