import {z} from "zod";
import {isObjectIdZod, optionalMustBeZod, optionalParsableDateStringZod} from "../../../../../../core/helpers/zodBuilder";
import {
    expenditureItemsFieldZod,
    expenditureLineMediaRowIndexFieldZod,
    mediaIdArrayZod,
    optionalMediaIdArrayZod,
    unitCostPaymentStatuses,
    unitCostVerificationStatuses,
} from "./unitCostForm.zod.shared";

/** PATCH unit cost — partial update; expenditureItems replaces entire array when provided. */
export function editUnitCostFormSchema(languageCode: string, form: any = null) {
    const L = (k: string) => form?.[`${k}Label`] || k;
    return z.object({
        _id: isObjectIdZod(L("_id"), languageCode),
        purchasePerson: isObjectIdZod(L("purchasePerson"), languageCode).optional(),
        purchaseDate: optionalParsableDateStringZod(L("purchaseDate"), languageCode),
        currency: isObjectIdZod(L("currency"), languageCode).optional(),
        verificationStatus: optionalMustBeZod(L("verificationStatus"), unitCostVerificationStatuses, languageCode),
        paymentStatus: optionalMustBeZod(L("paymentStatus"), unitCostPaymentStatuses, languageCode),
        paymentDate: optionalParsableDateStringZod(L("paymentDate"), languageCode),
        notes: z.string().optional(),
        tag: z.string().optional(),
        invoiceNumber: z.string().optional(),
        vendorName: z.string().optional(),
        relatedModificationRequest: z.preprocess(
            (v) => (v === "" ? undefined : v),
            isObjectIdZod(L("relatedModificationRequest"), languageCode).optional(),
        ),
        invoiceMedia: optionalMediaIdArrayZod(L("invoiceMedia"), languageCode),
        expenditureItems: expenditureItemsFieldZod(languageCode).optional(),
        expenditureItemMedia: mediaIdArrayZod(L("expenditureItemMedia"), languageCode).optional(),
        expenditureItemMediaRowIndex: expenditureLineMediaRowIndexFieldZod(),
        budgetedAmount: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().min(0).optional().nullable()),
        budgetCurrency: z.preprocess((v) => (v === "" ? undefined : v), isObjectIdZod(L("budgetCurrency"), languageCode).optional().nullable()),
    });
}
