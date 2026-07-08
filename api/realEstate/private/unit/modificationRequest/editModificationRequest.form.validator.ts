import z from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod, notEmptyZod} from "../../../../../../core/helpers/zodBuilder";

export function editModificationRequestFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    _readPermissions: any = {},
) {
    const shape: Record<string, z.ZodTypeAny> = {
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        status: z.string().optional(),
    };

    if (permissions.title) {
        shape.title = z.string().optional();
    }
    if (permissions.description) {
        shape.description = z.string().optional();
    }
    if (permissions.specifications) {
        shape.specifications = z.string().optional();
    }
    if (permissions.cancellationReason) {
        shape.cancellationReason = z.string().optional();
    }

    if (permissions.unit) {
        shape.unit = isObjectIdZod(form?.["unitLabel"] || "unit", languageCode).optional();
    }

    if (permissions.architectApproval?.keys) {
        const archKeys = permissions.architectApproval.keys;
        const archShape: Record<string, z.ZodTypeAny> = {};
        if (archKeys.decision) archShape.decision = z.enum(["approved", "rejected"]).optional();
        if (archKeys.notes) archShape.notes = z.string().optional();
        if (archKeys.media) archShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (Object.keys(archShape).length > 0) shape.architectApproval = z.object(archShape).optional();
    }
    if (permissions.engineerApproval?.keys) {
        const engKeys = permissions.engineerApproval.keys;
        const engShape: Record<string, z.ZodTypeAny> = {};
        if (engKeys.decision) engShape.decision = z.enum(["approved", "rejected"]).optional();
        if (engKeys.notes) engShape.notes = z.string().optional();
        if (engKeys.media) engShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (engKeys.materialsPlan) {
            engShape.materialsPlan = z.array(z.object({
                item: notEmptyZod(form?.["itemLabel"] || "item", languageCode),
                quantity: z.number().optional(),
                unit: z.string().optional(),
                notes: z.string().optional()
            })).optional();
        }
        if (Object.keys(engShape).length > 0) shape.engineerApproval = z.object(engShape).optional();
    }
    if (permissions.ceoApproval?.keys) {
        const ceoKeys = permissions.ceoApproval.keys;
        const ceoShape: Record<string, z.ZodTypeAny> = {};
        if (ceoKeys.decision) ceoShape.decision = z.enum(["approved", "rejected"]).optional();
        if (ceoKeys.notes) ceoShape.notes = z.string().optional();
        if (ceoKeys.media) ceoShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (Object.keys(ceoShape).length > 0) shape.ceoApproval = z.object(ceoShape).optional();
    }
    if (permissions.financeDetails?.keys) {
        const fdKeys = permissions.financeDetails.keys;
        const financeShape: Record<string, z.ZodTypeAny> = {};
        if (fdKeys.totalCost) financeShape.totalCost = z.union([z.number().min(0), z.string()]).optional().transform((v) => (v === undefined || v === "" ? undefined : typeof v === "number" ? v : (parseFloat(v) || 0)));
        if (fdKeys.currency) financeShape.currency = z.string().optional();
        if (fdKeys.notes) financeShape.notes = z.string().optional();
        if (fdKeys.estimatedCompletionDate) financeShape.estimatedCompletionDate = z.string().optional();
        if (fdKeys.costBreakdown?.keys) {
            financeShape.costBreakdown = z.array(z.object({
                item: z.string(),
                cost: z.number(),
                quantity: z.number().optional(),
                unit: z.string().optional(),
                source: z.enum(["engineer_material", "manual"]).optional()
            })).optional();
        }
        if (Object.keys(financeShape).length > 0) {
            shape.financeDetails = z.object(financeShape).optional();
        }
    }

    return z.object(shape);
}
