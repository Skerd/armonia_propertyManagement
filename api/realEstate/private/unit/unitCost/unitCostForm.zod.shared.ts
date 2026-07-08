import {z} from "zod";
import {isObjectIdZod, mustBeZod} from "../../../../../../core/helpers/zodBuilder";
import {
    EXPENDITURE_CATEGORY_VALUES,
    MAX_EXPENDITURE_ITEMS,
    MAX_MEDIA_FILES_PER_EXPENDITURE_LINE,
    MAX_TOTAL_EXPENDITURE_LINE_MEDIA_UPLOADS,
    MEASURE_UNIT_VALUES,
    UNIT_COST_PAYMENT_STATUS_VALUES,
    UNIT_COST_VERIFICATION_STATUS_VALUES,
} from "./unitCost.constants";

export const unitCostVerificationStatuses = [...UNIT_COST_VERIFICATION_STATUS_VALUES];
export const unitCostPaymentStatuses = [...UNIT_COST_PAYMENT_STATUS_VALUES];
export const expenditureCategoryValues = [...EXPENDITURE_CATEGORY_VALUES];
export const measureUnitValues = [...MEASURE_UNIT_VALUES];

/** Row indices parallel to each uploaded `expenditureItemMedia` file (multipart). */
export function expenditureLineMediaRowIndexFieldZod() {
    return z.preprocess((v) => {
        if (v === undefined || v === null || v === "") return [];
        if (typeof v === "string") {
            try {
                const p = JSON.parse(v);
                return Array.isArray(p) ? p : [];
            } catch {
                return [];
            }
        }
        return Array.isArray(v) ? v : [];
    }, z.array(z.number().int().min(0)).max(MAX_TOTAL_EXPENDITURE_LINE_MEDIA_UPLOADS));
}

/**
 * Media field value after multipart middleware is always ObjectId strings.
 * In the browser, the same schema validates `File` from `<input type="file">` before upload.
 */
function mediaIdOrClientUploadZod(label: string, languageCode: string) {
    return z.union([
        isObjectIdZod(label, languageCode),
        z.custom<File>((v) => typeof File !== "undefined" && v instanceof File),
    ]);
}

function expenditureLineMediaArrayZod(label: string, languageCode: string) {
    const element = mediaIdOrClientUploadZod(label, languageCode);
    return z.preprocess(
        (val) => {
            if (val === undefined || val === null || val === "") return [];
            return Array.isArray(val) ? val : [val];
        },
        z.array(element).max(MAX_MEDIA_FILES_PER_EXPENDITURE_LINE),
    );
}

const expenditureItemShape = (languageCode: string) =>
    z.object({
        title: z.string().min(1, JSON.stringify({key: "required_field", languageCode, field: "title"})),
        category: mustBeZod("category", expenditureCategoryValues, languageCode),
        amount: z.coerce.number().min(0, JSON.stringify({key: "must_be_non_negative", languageCode})),
        unit: mustBeZod("unit", measureUnitValues, languageCode),
        pricePerUnit: z.coerce.number(),
        media: expenditureLineMediaArrayZod("media", languageCode).optional(),
    });

export function expenditureItemsFieldZod(languageCode: string) {
    return z.preprocess(
        (val) => {
            if (val === undefined || val === null || val === "") return [];
            if (typeof val === "string") {
                try {
                    return JSON.parse(val);
                } catch {
                    return val;
                }
            }
            return val;
        },
        z.array(expenditureItemShape(languageCode)).max(MAX_EXPENDITURE_ITEMS),
    );
}

export function mediaIdArrayZod(label: string, languageCode: string) {
    const element = mediaIdOrClientUploadZod(label, languageCode);
    return z.preprocess(
        (val) => {
            if (val === undefined || val === null || val === "") return [];
            return Array.isArray(val) ? val : [val];
        },
        z.array(element),
    );
}

/** PATCH: omit field when undefined; allow replacing with empty array. */
export function optionalMediaIdArrayZod(label: string, languageCode: string) {
    const element = mediaIdOrClientUploadZod(label, languageCode);
    return z.preprocess(
        (val) => {
            if (val === undefined || val === null) return undefined;
            if (val === "") return [];
            return Array.isArray(val) ? val : [val];
        },
        z.union([z.undefined(), z.array(element)]),
    );
}
