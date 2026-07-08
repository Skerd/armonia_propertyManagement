import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import {Currency} from "../../../../../core/database/types";

export type CommissionStatus = "pending" | "pending_approval" | "paid" | "voided";

export type CommissionSourceType = "sale" | "reservation";

export type CommissionUserRef = {
    _id: string;
    name?: string;
    surname?: string;
};

export type Commission = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    agent?: CommissionUserRef;
    recordedByActionUser?: CommissionUserRef;
    sourceType: CommissionSourceType;
    sourceId: string;
    basis: string;
    basisAmount: number;
    ratePercent: number;
    amount: number;
    sale?: {
        _id: string;
        name?: string;
    };
    reservation?: {
        _id: string;
        name?: string;
    };
    currency?: Currency;
    status: CommissionStatus;
    notes?: string;
    paidAt?: string;
    voidedAt?: string;
    paymentReference?: string;
    paymentReceiptMediaId?: {
        _id: string;
        url?: string;
        name?: string;
    };
    splits?: {
        agent?: CommissionUserRef;
        label?: string;
        ratePercent: number;
        amount: number;
    }[];
    unit?: {
        _id: string;
        name?: string;
        unitNumber?: string;
        unitType?: {
            _id: string;
            name?: string;
            icon?: string;
        };
    };
};
