import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const handoverConfigScopeValues = ["project", "edifice", "floor", "unit"] as const;
export type HandoverConfigScopeValue = typeof handoverConfigScopeValues[number];

export const handoverChecklistSourceScopeValues = [...handoverConfigScopeValues, "retained"] as const;
export type HandoverChecklistSourceScopeValue = typeof handoverChecklistSourceScopeValues[number];

export const handoverItemImportanceValues = ["low", "medium", "high"] as const;
export type HandoverItemImportanceValue = typeof handoverItemImportanceValues[number];

export const HANDOVER_PACKAGE_TITLE_MAX = 200;
export const HANDOVER_PACKAGE_LONG_TEXT_MAX = 5000;
export const HANDOVER_PACKAGE_ITEM_NAME_MAX = 200;
export const HANDOVER_PACKAGE_ITEM_TEXT_MAX = 2000;

export const HandoverPackageItemDef = {
    name:         {type: "string", required: true,  min: 1, max: HANDOVER_PACKAGE_ITEM_NAME_MAX},
    description:  {type: "string", required: false, max: HANDOVER_PACKAGE_ITEM_TEXT_MAX},
    instructions: {type: "string", required: false, max: HANDOVER_PACKAGE_ITEM_TEXT_MAX},
    importance:   {type: "enum",   required: false, options: handoverItemImportanceValues},
} as const;

export const HandoverPackageSchemaDef = {
    project:     {type: "objectId", required: true},
    edifice:     {type: "objectId", required: false},
    floor:       {type: "objectId", required: false},
    unit:        {type: "objectId", required: false},
    title:       {type: "string", required: true, min: 1, max: HANDOVER_PACKAGE_TITLE_MAX},
    description: {type: "string", required: false, max: HANDOVER_PACKAGE_LONG_TEXT_MAX},
    notes:       {type: "string", required: false, max: HANDOVER_PACKAGE_LONG_TEXT_MAX},
    media:       {type: "mediaIdArray", required: false},
    items:       {type: "embeddedArray", required: true, minItems: 1, items: HandoverPackageItemDef},
} as const;

export type CreateHandoverPackageFormType = InferCreateForm<typeof HandoverPackageSchemaDef>;
export type EditHandoverPackageFormType = InferEditForm<typeof HandoverPackageSchemaDef>;
