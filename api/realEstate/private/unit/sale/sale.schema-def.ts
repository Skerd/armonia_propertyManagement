// No form types are exported from this SchemaDef because:
//  - the create form type (CreateCashSaleFormType) has buyer/purchaseContract/transactionReference
//    as required fields that are optional in Mongoose (computed/context-dependent)
//  - paymentType is required in Mongoose but set by the API endpoint, not by the form
//  - finalPrice is required in Mongoose but computed server-side from pricing logic
//  - purchaseContract uses file↔objectId duality (isArrayOfFilesZod vs isObjectIdZod)
//  - reservationExchangeRate/saleExchangeRate use different validators client vs server
//  - CreatePaymentPlanSaleFormType (in paymentPlan/) extends this form type cross-entity
//  - handoverDate/titleTransferDate are Date fields excluded from SchemaDef
// This SchemaDef exists solely for: validateSchemaDefAgainstMongoose startup alignment check.

/** Short single-line fields (transaction reference, deed number, notary name). */
export const SALE_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (notes, handover notes). */
export const SALE_LONG_TEXT_MAX = 5000;

export const SaleSchemaDef = {
    unit:                        { type: "objectId",      required: true  },
    soldBy:                      { type: "objectId",      required: true  },
    saleCurrency:                { type: "objectId",      required: true  },
    saleDate:                    { type: "date",          required: true,  validation: "notInTheFuture", timezone: "UTC" },
    // required in Mongoose; set by API endpoint, not by form
    paymentType:                 { type: "string",        required: false },
    // required in Mongoose; computed server-side from pricing logic
    finalPrice:                  { type: "number",        required: false, min: 0 },
    buyer:                       { type: "objectId",      required: false },
    buyerCompany:                { type: "objectId",      required: false },
    listedUnitPrice:             { type: "number",        required: false, min: 0 },
    listedUnitCurrency:          { type: "objectId",      required: false },
    saleExchangeRate:            { type: "number",        required: false },
    localDiscount:               { type: "number",        required: false, min: 0 },
    notes:                       { type: "string",        required: false, max: SALE_LONG_TEXT_MAX },
    purchaseContract:            { type: "objectId",      required: false },
    additionalDocuments:         { type: "objectIdArray", required: false },
    transactionReference:        { type: "string",        required: false, max: SALE_SHORT_TEXT_MAX },
    reservation:                 { type: "objectId",      required: false },
    reservationDepositAmount:    { type: "number",        required: false, min: 0 },
    reservationDepositCurrency:  { type: "objectId",      required: false },
    reservationExchangeRate:     { type: "number",        required: false },
    reservationConvertedAmount:  { type: "number",        required: false, min: 0 },
    paymentPlan:                 { type: "objectId",      required: false },
    // FEAT-004 — handover tracking
    handoverCertificate:         { type: "mediaId",       required: false },
    handedOverBy:                { type: "objectId",      required: false },
    handoverNotes:               { type: "string",        required: false, max: SALE_LONG_TEXT_MAX },
    // FEAT-014 — title transfer tracking
    deedNumber:                  { type: "string",        required: false, max: SALE_SHORT_TEXT_MAX },
    notaryName:                  { type: "string",        required: false, max: SALE_SHORT_TEXT_MAX },
    titleTransferCertificate:    { type: "mediaId",       required: false },
} as const;
