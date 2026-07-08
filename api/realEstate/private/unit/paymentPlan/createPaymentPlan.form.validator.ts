import {
    dateAfterFieldZod, getValidationMessage,
    greaterThanOrEqualZod,
    greaterThanZod,
    inBetweenRangeZod, isArrayOfFilesZod,
    isArrayOfObjectIdsZod,
    isObjectIdZod, notEmptyZod, notInTheFutureZod, notInThePastZod, requirePositiveFieldWhenDifferentObjectIdsZod
} from "../../../../../../core/helpers/zodBuilder";
import z from "zod";
import {createCashSaleFormSchema} from "../sale/createSale.form.validator";

const installmentSchema = (languageCode: string, form: any = null) =>
    z.object({
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        dueDate: notInThePastZod(form?.["dueDateLabel"] || "dueDate", "UTC", languageCode),
        amount: greaterThanZod(form?.["amountLabel"] || "amount", 0, languageCode),
        principalAmount: greaterThanOrEqualZod(form?.["principalAmountLabel"] || "principalAmount", 0, languageCode).optional(),
        interestAmount: greaterThanOrEqualZod(form?.["interestAmountLabel"] || "interestAmount", 0, languageCode).optional(),
        interestRate: z.union([inBetweenRangeZod(form?.["interestRateLabel"] || "interestRate", 0, 100, languageCode), z.undefined()]).optional(),
        gracePeriodDays: z.union([greaterThanOrEqualZod(form?.["gracePeriodDaysLabel"] || "gracePeriodDays", 0, languageCode), z.undefined()]).optional(),
        lateFeePercentage: z.union([inBetweenRangeZod(form?.["lateFeePercentageLabel"] || "lateFeePercentage", 0, 100, languageCode), z.undefined()]).optional(),
        notes: notEmptyZod(form?.["paymentPlanNotesLabel"] ?? "paymentPlanNotesLabel", languageCode).optional(),
    });

export function createPaymentPlanSaleFormSchema(languageCode: string, form: any = null) {
    const schema = createCashSaleFormSchema(languageCode, form).extend({
        downPayment: greaterThanOrEqualZod(form?.["downPaymentLabel"] || "downPayment", 0, languageCode),
        interestRate: inBetweenRangeZod(form?.["interestRateLabel"] || "interestRate", 0, 100, languageCode),
        gracePeriodDays: greaterThanOrEqualZod(form?.["gracePeriodDaysLabel"] || "gracePeriodDays", 0, languageCode),
        lateFeePercentage: inBetweenRangeZod(form?.["lateFeePercentageLabel"] || "lateFeePercentage", 0, 100, languageCode),
        downPaymentPaid: z.boolean().optional(),
        downPaymentDate: notInTheFutureZod(form?.["downPaymentDateLabel"] || "downPaymentDate", "UTC", languageCode).optional(),
        numberOfInstallments: greaterThanOrEqualZod(form?.["numberOfInstallmentsLabel"] || "numberOfInstallments", 1, languageCode),
        startDate: notInThePastZod(form?.["startDateLabel"] || "startDate", "UTC", languageCode),
        endDate: notInThePastZod(form?.["endDateLabel"] || "endDate", "UTC", languageCode),
        installments: z.preprocess(
            (value) => {
                if (typeof value !== "string") return value;
                try {
                    return JSON.parse(value);
                } catch {
                    return value;
                }
            },
            z.array(installmentSchema(languageCode, form)).min(1, {
                message: getValidationMessage("array", "notCorrectArray",  ["installments"], languageCode),
            })
        ),
        paymentPlanNotes: z.string().optional(),
        buyerCompany: z.union([isObjectIdZod(form?.["buyerCompanyLabel"] || "buyerCompany", languageCode), z.literal("")]).optional(),
    });

    return dateAfterFieldZod(
        "endDate",
        "startDate",
        languageCode,
        {
            dateField: form?.["endDateLabel"] || "endDate",
            otherField: form?.["startDateLabel"] || "startDate",
        }
    )(schema as z.ZodObject<any>) as any;
}
