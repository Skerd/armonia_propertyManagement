import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {
    LEASE_REGISTRY_STATUS_VALUES,
    RENTAL_PAYMENT_REGISTRY_STATUS_VALUES,
} from "./rentalsHub.constants";

const paginationShape = {
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).optional(),
};

export function leasesListFormSchema(languageCode: string) {
    return z.object({
        ...paginationShape,
        search: z.string().trim().optional(),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
        status: z.enum(LEASE_REGISTRY_STATUS_VALUES).optional(),
        startDateFrom: z.string().trim().optional(),
        startDateTo: z.string().trim().optional(),
    });
}

export function rentalPaymentsListFormSchema(languageCode: string) {
    return z.object({
        ...paginationShape,
        search: z.string().trim().optional(),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
        status: z.enum(RENTAL_PAYMENT_REGISTRY_STATUS_VALUES).optional(),
        dueDateFrom: z.string().trim().optional(),
        dueDateTo: z.string().trim().optional(),
    });
}
