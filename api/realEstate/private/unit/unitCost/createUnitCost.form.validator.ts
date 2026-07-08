import {z} from "zod";
import {isObjectIdZod, optionalMustBeZod, optionalParsableDateStringZod, parsableDateStringZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";
import {
    expenditureItemsFieldZod,
    expenditureLineMediaRowIndexFieldZod,
    mediaIdArrayZod,
    unitCostPaymentStatuses,
    unitCostVerificationStatuses,
} from "./unitCostForm.zod.shared";

export function unitCostFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        id: isObjectIdZod(form?.["idLabel"] || "id", languageCode).optional(),
        unitId: isObjectIdZod(form?.["unitIdLabel"] || "unitId", languageCode).optional(),
        projectId: isObjectIdZod(form?.["projectIdLabel"] || "projectId", languageCode).optional(),
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] || "edificeId", languageCode).optional(),
        floorId: isObjectIdZod(form?.["floorIdLabel"] || "floorId", languageCode).optional(),
        verificationStatus: z.string().optional(),
        paymentStatus: z.string().optional(),
        tag: z.string().optional(),
    });
}

/** Multipart create schema (use after media middleware). */
export function generateZodCreateUnitCostFormSchema(languageCode: string, form: any = null) {
    const L = (k: string) => form?.[`${k}Label`] || k;
    const emptyToUndef = (v: unknown) => (v === "" || v == null ? undefined : v);
    return z
        .object({
            unit: z.preprocess(emptyToUndef, isObjectIdZod(L("unit"), languageCode).optional()),
            project: z.preprocess(emptyToUndef, isObjectIdZod(L("project"), languageCode).optional()),
            edifice: z.preprocess(emptyToUndef, isObjectIdZod(L("edifice"), languageCode).optional()),
            floor: z.preprocess(emptyToUndef, isObjectIdZod(L("floor"), languageCode).optional()),
            purchasePerson: isObjectIdZod(L("purchasePerson"), languageCode),
            purchaseDate: parsableDateStringZod(L("purchaseDate"), languageCode),
            currency: isObjectIdZod(L("currency"), languageCode),
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
            invoiceMedia: mediaIdArrayZod(L("invoiceMedia"), languageCode).optional(),
            expenditureItems: expenditureItemsFieldZod(languageCode),
            expenditureItemMediaRowIndex: expenditureLineMediaRowIndexFieldZod(),
            budgetedAmount: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().min(0).optional()),
            budgetCurrency: z.preprocess(emptyToUndef, isObjectIdZod(L("budgetCurrency"), languageCode).optional()),
        })
        .refine((d) => !!(d.unit ?? d.floor ?? d.edifice ?? d.project), {
            message: form?.["unitCostScopeRequired"] || "At least one of project, edifice, floor, or unit is required",
            path: ["unit"],
        });
}
