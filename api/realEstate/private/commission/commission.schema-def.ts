/** Long text / textarea fields on commission actions (notes, payment reference). */
export const COMMISSION_LONG_TEXT_MAX = 5000;
/** Optional label on a payout split row. */
export const COMMISSION_SPLIT_LABEL_MAX = 128;
/** Max split rows accepted by setSplits. */
export const COMMISSION_SPLITS_MAX = 20;

// No form types are exported from this SchemaDef because:
//  - commission has no user-facing create/edit forms
//  - all fields are set programmatically by the API when a sale/reservation is recorded
//  - the only user-writable fields (status, notes) are updated via dedicated action endpoints
// This SchemaDef exists solely for: validateSchemaDefAgainstMongoose startup alignment check.
export const CommissionSchemaDef = {
    agent:       { type: "objectId", required: true  }, // no-permission write; set by API
    sourceType:  { type: "string",   required: true  }, // no-permission write; enum
    sourceId:    { type: "objectId", required: true  }, // no-permission write
    basis:       { type: "string",   required: true  }, // no-permission write
    basisAmount: { type: "number",   required: true  }, // Decimal128; no-permission write
    amount:      { type: "number",   required: true  }, // Decimal128; no-permission write
    currency:    { type: "objectId", required: true  }, // no-permission write
    sale:        { type: "objectId", required: false },
    reservation: { type: "objectId", required: false },
    // required in Mongoose but have defaults; no-permission write or system-managed
    ratePercent: { type: "number",   required: false },
    status:           { type: "string",   required: false },
    notes:            { type: "string",   required: false },
    paymentReference: { type: "string",   required: false },
} as const;
