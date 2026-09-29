import type { Media } from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {EdificeBlank} from "../../../../dto/edifice.dto";

export type ConstructorAddress = {
    _id: string;
    street: string;
    postalCode: string;
    city?: CitySimple;
    state?: StateSimple;
    country?: CountrySimple;
    latitude: number;
    longitude: number;
};

export type Constructor = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    description: string;
    email: string;
    phoneNumber: string;
    addresses?: ConstructorAddress[];
    logo?: Media;
    website: string;
    vat: string;
    edifices?: EdificeBlank[];
    partyType?: string;
    trades?: string;
    insuranceExpiry?: string;
    performanceScore?: number;
};
