import type { Media } from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ConstructorAddress = {
    _id: string,
    street: string,
    postalCode: string,
    city: {
        _id: string,
        name: string
    },
    state: {
        _id: string,
        name: string
    },
    country: {
        _id: string,
        name: string
    },
    latitude: number,
    longitude: number
};

export type ConstructorEdifice = {
    _id: string,
    name: string,
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
    edifices?: ConstructorEdifice[];
};
