import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {
    PAYMENTS_HUB_DATE_FIELD_VALUES,
    PAYMENTS_HUB_GROUP_BY_VALUES,
    PAYMENTS_HUB_KIND_VALUES,
    PAYMENTS_HUB_STATUS_VALUES,
} from "./paymentsHub.constants";

const paginationShape = {
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).optional(),
};

// `languageCode` may be undefined: validateFormZod falls back to an env constant
// that is itself optional. `isObjectIdZod` defaults to en-US in that case.
const scopeShape = (languageCode: string | undefined) => ({
    project: isObjectIdZod("project", languageCode).optional(),
    edifice: isObjectIdZod("edifice", languageCode).optional(),
    floor: isObjectIdZod("floor", languageCode).optional(),
    unit: isObjectIdZod("unit", languageCode).optional(),
    sale: isObjectIdZod("sale", languageCode).optional(),
    plan: isObjectIdZod("plan", languageCode).optional(),
    search: z.string().trim().optional(),
    status: z.enum(PAYMENTS_HUB_STATUS_VALUES).optional(),
    kind: z.enum(PAYMENTS_HUB_KIND_VALUES).optional(),
});

const dateRangeShape = {
    dateField: z.enum(PAYMENTS_HUB_DATE_FIELD_VALUES).optional(),
    dateFrom: z.string().trim().optional(),
    dateTo: z.string().trim().optional(),
};

export function paymentsListFormSchema(languageCode: string | undefined) {
    return z.object({
        ...paginationShape,
        ...scopeShape(languageCode),
        ...dateRangeShape,
        sortOrder: z.enum(["asc", "desc"]).optional(),
    });
}

export function paymentsCalendarFormSchema(languageCode: string | undefined) {
    return z.object({
        ...scopeShape(languageCode),
        month: z.string().regex(/^\d{4}-\d{2}$/),
    });
}

export function paymentsSummaryFormSchema(languageCode: string | undefined) {
    return z.object({
        ...scopeShape(languageCode),
        ...dateRangeShape,
        groupBy: z.enum(PAYMENTS_HUB_GROUP_BY_VALUES).optional(),
    });
}
