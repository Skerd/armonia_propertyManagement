import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {
    CLIENT_REGISTRY_STATUS_VALUES,
    CONTRACT_REGISTRY_STATUS_VALUES,
    CONTRACT_REGISTRY_TYPE_VALUES,
} from "./contractsHub.constants";

const paginationShape = {
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).optional(),
};

export function contractsListFormSchema(languageCode: string) {
    return z.object({
        ...paginationShape,
        search: z.string().trim().optional(),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
        contractType: z.enum(CONTRACT_REGISTRY_TYPE_VALUES).optional(),
        status: z.enum(CONTRACT_REGISTRY_STATUS_VALUES).optional(),
        signatureDateFrom: z.string().trim().optional(),
        signatureDateTo: z.string().trim().optional(),
    });
}

export function clientsListFormSchema(languageCode: string) {
    return z.object({
        ...paginationShape,
        search: z.string().trim().optional(),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
        unitTypeId: isObjectIdZod("unitTypeId", languageCode).optional(),
        status: z.enum(CLIENT_REGISTRY_STATUS_VALUES).optional(),
        valueMin: z.coerce.number().min(0).optional(),
        valueMax: z.coerce.number().min(0).optional(),
    });
}
