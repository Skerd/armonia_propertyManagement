import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Technical FM asset register (§3.Q). lifecycleStatus server-managed via actions.
export const assetLifecycleStatusValues = ["planned", "active", "maintenance", "retired"] as const;
export type AssetLifecycleStatusValue = typeof assetLifecycleStatusValues[number];

export const AssetSchemaDef = {
    edifice:       {type: "objectId", required: false},
    unit:          {type: "objectId", required: false},
    title:         {type: "string", required: true},
    category:      {type: "string", required: false},
    manufacturer:  {type: "string", required: false},
    serial:        {type: "string", required: false},
    installDate:   {type: "date", required: false},
    warranty:      {type: "objectId", required: false},
    notes:         {type: "string", required: false},
} as const;

export type CreateAssetFormType = InferCreateForm<typeof AssetSchemaDef>;
export type EditAssetFormType = InferEditForm<typeof AssetSchemaDef>;
