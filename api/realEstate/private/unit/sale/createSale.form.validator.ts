import {z} from "zod";
import {arrayItemDateWithinFieldsZod, dateAfterFieldZod, greaterThanOrEqualZod, greaterThanZod, inBetweenRangeZod, isArrayOfFilesZod, isArrayOfObjectIdsZod, isObjectIdZod, notEmptyZod, notInTheFutureZod, parsableDateStringZod, getValidationMessage, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {SALE_LONG_TEXT_MAX, SALE_SHORT_TEXT_MAX} from "./sale.schema-def";

export function createCashSaleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        project: z.union([z.string(), z.literal("")]).optional(),
        edifice: z.union([z.string(), z.literal("")]).optional(),
        floor: z.union([z.string(), z.literal("")]).optional(),

        unit: isObjectIdZod(form?.["unitLabel"] || "unit", languageCode),
        soldBy: isObjectIdZod(form?.["soldByLabel"] || "soldBy", languageCode),
        buyer: isObjectIdZod(form?.["buyerLabel"] || "buyer", languageCode),
        saleDate: notInTheFutureZod(form?.["saleDateLabel"] || "saleDate", "UTC", languageCode),
        saleCurrency: isObjectIdZod(form?.["saleCurrencyLabel"] || "saleCurrency", languageCode),
        localDiscount: inBetweenRangeZod(form?.["localDiscountLabel"] || "localDiscount", 0, 100, languageCode).optional(),
        transactionReference: notEmptyZod(form?.["transactionReferenceLabel"] || "transactionReference", languageCode).pipe(
            stringMaxLengthZod(form?.["transactionReferenceLabel"] || "transactionReference", SALE_SHORT_TEXT_MAX, languageCode),
        ),
        notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", SALE_LONG_TEXT_MAX, languageCode).optional(),

        purchaseContract: form ? isArrayOfFilesZod(form?.["purchaseContractLabel"] || "purchaseContract", languageCode, 1) : isObjectIdZod(form?.["purchaseContractLabel"] || "purchaseContract", languageCode),
        additionalDocuments: form ? isArrayOfFilesZod(form?.["additionalDocumentsLabel"] || "additionalDocuments", languageCode).optional() : isArrayOfObjectIdsZod(form?.["additionalDocumentsLabel"] || "additionalDocuments", languageCode).optional(),

        reservationExchangeRate: !!form ? greaterThanZod(form?.["reservationExchangeRateLabel"] || "reservationExchangeRate", 0, languageCode) : z.string().optional(),
        saleExchangeRate: !!form ? greaterThanZod(form?.["saleExchangeRateLabel"] || "saleExchangeRate", 0, languageCode) : z.string().optional()
    });
}

const _installmentSchema = (languageCode: string, form: any = null) =>
    z.object({
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        dueDate: parsableDateStringZod(form?.["dueDateLabel"] || "dueDate", languageCode),
        amount: greaterThanZod(form?.["amountLabel"] || "amount", 0, languageCode),
        principalAmount: greaterThanOrEqualZod(form?.["principalAmountLabel"] || "principalAmount", 0, languageCode).optional(),
        interestAmount: greaterThanOrEqualZod(form?.["interestAmountLabel"] || "interestAmount", 0, languageCode).optional(),
        notes: stringMaxLengthZod(form?.["paymentPlanNotesLabel"] ?? "paymentPlanNotesLabel", SALE_LONG_TEXT_MAX, languageCode).optional(),
    });

/** Unified create schema: cash + optional payment-plan fields. `paymentType` discriminates the path in buildCreateData. */
export function createSaleFormSchema(languageCode: string, form: any = null) {
    const schema = createCashSaleFormSchema(languageCode, form).extend({
        paymentType: z.enum(["cash", "payment_plan"]),
        downPayment: greaterThanOrEqualZod(form?.["downPaymentLabel"] || "downPayment", 0, languageCode).optional(),
        interestRate: inBetweenRangeZod(form?.["interestRateLabel"] || "interestRate", 0, 100, languageCode).optional(),
        gracePeriodDays: greaterThanOrEqualZod(form?.["gracePeriodDaysLabel"] || "gracePeriodDays", 0, languageCode).optional(),
        lateFeePercentage: inBetweenRangeZod(form?.["lateFeePercentageLabel"] || "lateFeePercentage", 0, 100, languageCode).optional(),
        downPaymentPaid: z.boolean().optional(),
        downPaymentDate: notInTheFutureZod(form?.["downPaymentDateLabel"] || "downPaymentDate", "UTC", languageCode).optional(),
        numberOfInstallments: greaterThanOrEqualZod(form?.["numberOfInstallmentsLabel"] || "numberOfInstallments", 1, languageCode).optional(),
        startDate: parsableDateStringZod(form?.["startDateLabel"] || "startDate", languageCode).optional(),
        endDate: parsableDateStringZod(form?.["endDateLabel"] || "endDate", languageCode).optional(),
        installments: z.preprocess(
            (value) => {
                if (typeof value !== "string") return value;
                try { return JSON.parse(value); } catch { return value; }
            },
            z.array(_installmentSchema(languageCode, form)).min(1, {
                message: getValidationMessage("array", "notCorrectArray", ["installments"], languageCode),
            }).optional(),
        ).optional(),
        paymentPlanNotes: stringMaxLengthZod(form?.["paymentPlanNotesLabel"] || "paymentPlanNotes", SALE_LONG_TEXT_MAX, languageCode).optional(),
        buyerCompany: z.union([isObjectIdZod(form?.["buyerCompanyLabel"] || "buyerCompany", languageCode), z.literal("")]).optional(),
    });

    return dateAfterFieldZod(
        "endDate",
        "startDate",
        languageCode,
        {
            dateField: form?.["endDateLabel"] || "endDate",
            otherField: form?.["startDateLabel"] || "startDate",
        },
    )(
        arrayItemDateWithinFieldsZod(
            "installments",
            "dueDate",
            "startDate",
            "endDate",
            languageCode,
            {
                dateField: form?.["dueDateLabel"] || "dueDate",
                minField: form?.["startDateLabel"] || "startDate",
                maxField: form?.["endDateLabel"] || "endDate",
            },
        )(schema) as z.ZodObject<any>,
    );
}
