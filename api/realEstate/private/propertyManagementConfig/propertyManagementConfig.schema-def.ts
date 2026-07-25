import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Per-company sales / handover policy switches (one document per company). */
export const PropertyManagementConfigSchemaDef = {
    requiresSaleApproval: {type: "boolean", required: false},
    requiresHandoverPackageForHandover: {type: "boolean", required: false},
} as const;

export type CreatePropertyManagementConfigFormType = InferCreateForm<typeof PropertyManagementConfigSchemaDef>;
export type EditPropertyManagementConfigFormType = InferEditForm<typeof PropertyManagementConfigSchemaDef>;
