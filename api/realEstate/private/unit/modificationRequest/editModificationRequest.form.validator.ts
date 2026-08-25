import z from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod, stringMaxLengthZod, stringMinMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {
    MODIFICATION_REQUEST_LINE_ITEM_MAX,
    MODIFICATION_REQUEST_LONG_TEXT_MAX,
    MODIFICATION_REQUEST_TITLE_MAX,
    MODIFICATION_REQUEST_UNIT_MAX,
} from "./modificationRequest.schema-def";

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
        shape.title = stringMinMaxLengthZod(form?.["titleLabel"] || "title", 1, MODIFICATION_REQUEST_TITLE_MAX, languageCode).optional();
    }
    if (permissions.description) {
        shape.description = stringMinMaxLengthZod(form?.["descriptionLabel"] || "description", 1, MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
    }
    if (permissions.specifications) {
        shape.specifications = stringMaxLengthZod(form?.["specificationsLabel"] || "specifications", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
    }
    if (permissions.cancellationReason) {
        shape.cancellationReason = stringMaxLengthZod(form?.["cancellationReasonLabel"] || "cancellationReason", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
    }

    if (permissions.unit) {
        shape.unit = isObjectIdZod(form?.["unitLabel"] || "unit", languageCode).optional();
    }

    if (permissions.architectApproval?.keys) {
        const archKeys = permissions.architectApproval.keys;
        const archShape: Record<string, z.ZodTypeAny> = {};
        if (archKeys.decision) archShape.decision = z.enum(["approved", "rejected"]).optional();
        if (archKeys.notes) archShape.notes = stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
        if (archKeys.media) archShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (Object.keys(archShape).length > 0) shape.architectApproval = z.object(archShape).optional();
    }
    if (permissions.engineerApproval?.keys) {
        const engKeys = permissions.engineerApproval.keys;
        const engShape: Record<string, z.ZodTypeAny> = {};
        if (engKeys.decision) engShape.decision = z.enum(["approved", "rejected"]).optional();
        if (engKeys.notes) engShape.notes = stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
        if (engKeys.media) engShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (engKeys.materialsPlan) {
            engShape.materialsPlan = z.array(z.object({
                item: stringMinMaxLengthZod(form?.["itemLabel"] || "item", 1, MODIFICATION_REQUEST_LINE_ITEM_MAX, languageCode),
                quantity: z.number().optional(),
                unit: stringMaxLengthZod(form?.["unitLabel"] || "unit", MODIFICATION_REQUEST_UNIT_MAX, languageCode).optional(),
                notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
            })).optional();
        }
        if (Object.keys(engShape).length > 0) shape.engineerApproval = z.object(engShape).optional();
    }
    if (permissions.ceoApproval?.keys) {
        const ceoKeys = permissions.ceoApproval.keys;
        const ceoShape: Record<string, z.ZodTypeAny> = {};
        if (ceoKeys.decision) ceoShape.decision = z.enum(["approved", "rejected"]).optional();
        if (ceoKeys.notes) ceoShape.notes = stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
        if (ceoKeys.media) ceoShape.media = isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional();
        if (Object.keys(ceoShape).length > 0) shape.ceoApproval = z.object(ceoShape).optional();
    }
    if (permissions.financeDetails?.keys) {
        const fdKeys = permissions.financeDetails.keys;
        const financeShape: Record<string, z.ZodTypeAny> = {};
        if (fdKeys.totalCost) financeShape.totalCost = z.union([z.number().min(0), z.string()]).optional().transform((v) => (v === undefined || v === "" ? undefined : typeof v === "number" ? v : (parseFloat(v) || 0)));
        if (fdKeys.currency) financeShape.currency = z.string().optional();
        if (fdKeys.notes) financeShape.notes = stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional();
        if (fdKeys.estimatedCompletionDate) financeShape.estimatedCompletionDate = z.string().optional();
        if (fdKeys.costBreakdown?.keys) {
            financeShape.costBreakdown = z.array(z.object({
                item: stringMinMaxLengthZod(form?.["itemLabel"] || "item", 1, MODIFICATION_REQUEST_LINE_ITEM_MAX, languageCode),
                cost: z.number(),
                quantity: z.number().optional(),
                unit: stringMaxLengthZod(form?.["unitLabel"] || "unit", MODIFICATION_REQUEST_UNIT_MAX, languageCode).optional(),
                source: z.enum(["engineer_material", "manual"]).optional(),
            })).optional();
        }
        if (Object.keys(financeShape).length > 0) {
            shape.financeDetails = z.object(financeShape).optional();
        }
    }

    return z.object(shape);
}
