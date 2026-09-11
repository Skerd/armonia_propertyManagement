import {z} from "zod";
import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InspectionChecklistTemplateSchemaDef} from "./inspectionChecklistTemplate.schema-def";

function withPreservedItemIds<T extends {items?: Array<Record<string, unknown>>}>(
    raw: unknown,
    parsed: T,
): T {
    if (!raw || typeof raw !== "object" || !Array.isArray(parsed.items)) return parsed;
    const rawItems = (raw as {items?: unknown}).items;
    if (!Array.isArray(rawItems)) return parsed;
    return {
        ...parsed,
        items: parsed.items.map((item, index) => {
            const rawItem = rawItems[index];
            if (!rawItem || typeof rawItem !== "object") return item;
            const id = (rawItem as {_id?: unknown})._id;
            if (typeof id !== "string" || id.length === 0) return item;
            return {...item, _id: id};
        }),
    };
}

export function editInspectionChecklistTemplateFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    const base = buildEditZodSchema(InspectionChecklistTemplateSchemaDef, languageCode, form, permissions, readPermissions);
    let rawBody: unknown;
    return z.preprocess((raw) => {
        rawBody = raw;
        return raw;
    }, base).transform((parsed) => withPreservedItemIds(rawBody, parsed));
}
