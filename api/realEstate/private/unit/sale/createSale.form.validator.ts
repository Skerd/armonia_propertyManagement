import {z} from "zod";
import {greaterThanOrEqualZod, greaterThanZod, inBetweenRangeZod, isArrayOfFilesZod, isArrayOfObjectIdsZod, isObjectIdZod, notEmptyZod, notInTheFutureZod, notInThePastZod, getValidationMessage} from "../../../../../../core/helpers/zodBuilder";

export function createCashSaleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        project: z.union([z.string(), z.literal("")]).optional(),
        edifice: z.union([z.string(), z.literal("")]).optional(),
        floor: z.union([z.string(), z.literal("")]).optional(),

        unit: isObjectIdZod(form?.["unitLabel"] || "unit", languageCode),
        soldBy: isObjectIdZod(form?.["soldByLabel"] || "soldBy", languageCode),
        buyer: isObjectIdZod(form?.["buyerLabel"] || "buyer", languageCode),
        saleDate: notInThePastZod(form?.["saleDateLabel"] || "saleDate", "UTC", languageCode),
        saleCurrency: isObjectIdZod(form?.["saleCurrencyLabel"] || "saleCurrency", languageCode),
        localDiscount: inBetweenRangeZod(form?.["localDiscountLabel"] || "localDiscount", 0, 100, languageCode).optional(),
        transactionReference: notEmptyZod(form?.["transactionReferenceLabel"] || "transactionReference", languageCode),
        notes: notEmptyZod(form?.["notesLabel"] || "notes", languageCode).optional(),

        purchaseContract: form ? isArrayOfFilesZod(form?.["purchaseContractLabel"] || "purchaseContract", languageCode, 1) : isObjectIdZod(form?.["purchaseContractLabel"] || "purchaseContract", languageCode),
        additionalDocuments: form ? isArrayOfFilesZod(form?.["additionalDocumentsLabel"] || "additionalDocuments", languageCode).optional() : isArrayOfObjectIdsZod(form?.["additionalDocumentsLabel"] || "additionalDocuments", languageCode).optional(),

        reservationExchangeRate: !!form ? greaterThanZod(form?.["reservationExchangeRateLabel"] || "reservationExchangeRate", 0, languageCode) : z.string().optional(),
        saleExchangeRate: !!form ? greaterThanZod(form?.["saleExchangeRateLabel"] || "saleExchangeRate", 0, languageCode) : z.string().optional()
    });
}

const _installmentSchema = (languageCode: string, form: any = null) =>
    z.object({
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        dueDate: notInThePastZod(form?.["dueDateLabel"] || "dueDate", "UTC", languageCode),
        amount: greaterThanZod(form?.["amountLabel"] || "amount", 0, languageCode),
        principalAmount: greaterThanOrEqualZod(form?.["principalAmountLabel"] || "principalAmount", 0, languageCode).optional(),
        interestAmount: greaterThanOrEqualZod(form?.["interestAmountLabel"] || "interestAmount", 0, languageCode).optional(),
        notes: notEmptyZod(form?.["paymentPlanNotesLabel"] ?? "paymentPlanNotesLabel", languageCode).optional(),
    });

/** Unified create schema: cash + optional payment-plan fields. `paymentType` discriminates the path in buildCreateData. */
export function createSaleFormSchema(languageCode: string, form: any = null) {
    return createCashSaleFormSchema(languageCode, form).extend({
        paymentType: z.enum(["cash", "payment_plan"]),
        downPayment: greaterThanOrEqualZod(form?.["downPaymentLabel"] || "downPayment", 0, languageCode).optional(),
        interestRate: inBetweenRangeZod(form?.["interestRateLabel"] || "interestRate", 0, 100, languageCode).optional(),
        gracePeriodDays: greaterThanOrEqualZod(form?.["gracePeriodDaysLabel"] || "gracePeriodDays", 0, languageCode).optional(),
        lateFeePercentage: inBetweenRangeZod(form?.["lateFeePercentageLabel"] || "lateFeePercentage", 0, 100, languageCode).optional(),
        downPaymentPaid: z.boolean().optional(),
        downPaymentDate: notInTheFutureZod(form?.["downPaymentDateLabel"] || "downPaymentDate", "UTC", languageCode).optional(),
        numberOfInstallments: greaterThanOrEqualZod(form?.["numberOfInstallmentsLabel"] || "numberOfInstallments", 1, languageCode).optional(),
        startDate: notInThePastZod(form?.["startDateLabel"] || "startDate", "UTC", languageCode).optional(),
        endDate: notInThePastZod(form?.["endDateLabel"] || "endDate", "UTC", languageCode).optional(),
        installments: z.preprocess(
            (value) => {
                if (typeof value !== "string") return value;
                try { return JSON.parse(value); } catch { return value; }
            },
            z.array(_installmentSchema(languageCode, form)).min(1, {
                message: getValidationMessage("array", "notCorrectArray", ["installments"], languageCode),
            }).optional(),
        ).optional(),
        paymentPlanNotes: z.string().optional(),
        buyerCompany: z.union([isObjectIdZod(form?.["buyerCompanyLabel"] || "buyerCompany", languageCode), z.literal("")]).optional(),
    });
}
