import type {Media} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {ApprovalStage} from "../modificationRequest/modificationRequest.dto";

export type Sale = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    /** Unique sale code from persistence (e.g. SALE-YYYYMMDD-XXXXXXXX). */
    name?: string;
    unit: {
        _id: string;
        name?: string;
        unitNumber?: string;
        unitType?: {
            _id: string;
            name?: string;
            icon?: string;
        };
        price: number;
        priceCurrency?: {
            _id: string;
            name?: string;
            symbol?: string;
            abbreviation?: string;
        }
    };
    project?: {
        _id: string;
        name?: string;
    };
    edifice?: {
        _id: string;
        name?: string;
    };
    floor?: {
        _id: string;
        name?: string;
    };
    paymentType: string;
    paymentPlan?: {
        _id: string;
        name?: string;
    };
    reservation?: {
        _id: string;
        name?: string;
    };
    listedUnitPrice?: number;
    listedUnitCurrency?: {
        _id: string;
        name?: string;
        symbol?: string;
        abbreviation?: string;
    };
    saleExchangeRate?: number;
    reservationDepositAmount?: number;
    reservationDepositCurrency?: {
        _id: string;
        name?: string;
        symbol?: string;
        abbreviation?: string;
    };
    reservationExchangeRate?: number;
    reservationConvertedAmount?: number;
    localDiscount?: number;
    buyer?: {
        _id: string;
        name?: string;
        surname?: string;
    };
    buyerCompany?: {
        _id: string;
        name?: string;
        vat?: string;
    };
    purchaseContract?: Media;
    additionalDocuments?: Media[];
    soldBy: {
        _id: string;
        name?: string;
        surname?: string;
    };
    saleDate: string;
    finalPrice: number;
    saleCurrency: {
        _id: string;
        name?: string;
        symbol?: string;
        abbreviation?: string;
    };
    notes?: string;
    transactionReference?: string;
    saleConfirmationEmailSentAt?: string;
    approvalStatus?: string;
    saleApproval?: ApprovalStage;
    // FEAT-004 — handover tracking
    handoverDate?: string;
    handoverCertificate?: Media;
    handedOverBy?: {_id: string; name?: string; surname?: string};
    handoverNotes?: string;
    // FEAT-014 — title transfer tracking
    titleTransferDate?: string;
    deedNumber?: string;
    notaryName?: string;
    titleTransferCertificate?: Media;
};
