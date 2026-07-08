import type {Media} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import {Currency} from "../../../../../../core/database/types";

export type UnitCostExpenditureItem = {
    title: string;
    category: string;
    amount: number;
    unit: string;
    pricePerUnit: number;
    media?: Media[];
};

/** Unit cost / purchase record (DTO). */
export type UnitCost = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    unit?: {
        _id: string;
        name?: string;
        unitNumber?: string;
    };
    floor?: {
        _id: string;
        name?: string
    };
    edifice?: {
        _id: string;
        name?: string
    };
    project?: {
        _id: string;
        name?: string
    };
    purchasePerson: {
        _id: string;
        name?: string;
        surname?: string;
    };
    purchaseDate: string;
    paymentDate?: string;
    notes?: string;
    verificationStatus: string;
    paymentStatus: string;
    tag?: string;
    currency?: Currency;
    invoiceNumber?: string;
    vendorName?: string;
    relatedModificationRequest?: {
        _id: string;
        name?: string;
        title?: string
    };
    invoiceMedia: Media[];
    expenditureItems: UnitCostExpenditureItem[];
    /** Sum of amount × pricePerUnit over expenditureItems (server-derived). */
    documentSubtotal?: number;
    budgetedAmount?: number;
    budgetCurrency?: {_id: string; name?: string; symbol?: string; abbreviation?: string};
};
