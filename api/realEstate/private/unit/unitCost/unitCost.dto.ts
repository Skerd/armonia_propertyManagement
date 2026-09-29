import type {Media} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {ConstructorSimple} from "../../../../../dto/constructor.dto";
import type {EdificeSimple} from "../../../../../dto/edifice.dto";
import type {FloorSimple} from "../../../../../dto/floor.dto";
import type {ModificationRequestSimple} from "../../../../../dto/modificationRequest.dto";
import type {ProjectSimple} from "../../../../../dto/project.dto";
import type {UnitSimple} from "../../../../../dto/unit.dto";
import type {UnitCostPaymentStatus, UnitCostVerificationStatus} from "./unitCost.constants";

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
    unit?: UnitSimple;
    floor?: FloorSimple;
    edifice?: EdificeSimple;
    project?: ProjectSimple;
    purchasePerson: SimpleBlankUser;
    purchaseDate: string;
    paymentDate?: string;
    notes?: string;
    verificationStatus: UnitCostVerificationStatus;
    paymentStatus: UnitCostPaymentStatus;
    tag?: string;
    currency?: CurrencySimple;
    invoiceNumber?: string;
    vendorName?: string;
    relatedModificationRequest?: ModificationRequestSimple & {title?: string};
    constructorRef?: ConstructorSimple;
    invoiceMedia: Media[];
    expenditureItems: UnitCostExpenditureItem[];
    /** Sum of amount × pricePerUnit over expenditureItems (server-derived). */
    documentSubtotal?: number;
    budgetedAmount?: number;
};
