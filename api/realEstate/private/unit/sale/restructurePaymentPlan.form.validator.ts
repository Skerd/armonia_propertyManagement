import {z} from "zod";

export function restructurePaymentPlanFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        _id: z.string().min(1),
        installments: z.array(z.object({
            installmentNumber: z.number().int().min(1),
            dueDate:           z.string().min(1),
            amount:            z.number().min(0),
            notes:             z.string().optional(),
        })).min(1),
        startDate:    z.string().min(1),
        endDate:      z.string().min(1),
        interestRate: z.number().min(0).max(100).optional(),
        reason:       z.string().optional(),
    });
}
