import {
    arrayItemDateWithinFieldsZod,
    dateAfterFieldZod, getValidationMessage,
    greaterThanOrEqualZod,
    greaterThanZod,
    inBetweenRangeZod,
    isObjectIdZod, notInTheFutureZod, parsableDateStringZod, stringMaxLengthZod
} from "../../../../../../core/helpers/zodBuilder";
import z from "zod";
import {createCashSaleFormSchema} from "../sale/createSale.form.validator";
import {SALE_LONG_TEXT_MAX} from "../sale/sale.schema-def";

const installmentSchema = (languageCode: string, form: any = null) =>
    z.object({
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        dueDate: parsableDateStringZod(form?.["dueDateLabel"] || "dueDate", languageCode),
        amount: greaterThanZod(form?.["amountLabel"] || "amount", 0, languageCode),
        principalAmount: greaterThanOrEqualZod(form?.["principalAmountLabel"] || "principalAmount", 0, languageCode).optional(),
        interestAmount: greaterThanOrEqualZod(form?.["interestAmountLabel"] || "interestAmount", 0, languageCode).optional(),
        interestRate: z.union([inBetweenRangeZod(form?.["interestRateLabel"] || "interestRate", 0, 100, languageCode), z.undefined()]).optional(),
        gracePeriodDays: z.union([greaterThanOrEqualZod(form?.["gracePeriodDaysLabel"] || "gracePeriodDays", 0, languageCode), z.undefined()]).optional(),
        lateFeePercentage: z.union([inBetweenRangeZod(form?.["lateFeePercentageLabel"] || "lateFeePercentage", 0, 100, languageCode), z.undefined()]).optional(),
        notes: stringMaxLengthZod(form?.["paymentPlanNotesLabel"] ?? "paymentPlanNotesLabel", SALE_LONG_TEXT_MAX, languageCode).optional(),
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
        startDate: parsableDateStringZod(form?.["startDateLabel"] || "startDate", languageCode),
        endDate: parsableDateStringZod(form?.["endDateLabel"] || "endDate", languageCode),
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
        }
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
        )(schema) as z.ZodObject<any>
    ) as any;
}
