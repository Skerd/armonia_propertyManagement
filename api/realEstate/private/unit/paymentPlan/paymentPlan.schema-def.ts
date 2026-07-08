// No form types are exported from this SchemaDef because:
//  - the create form is a combined Sale+PaymentPlan form (CreatePaymentPlanSaleFormType in
//    createPaymentPlan.form.type.ts) that extends CreateCashSaleFormType across entity boundaries
//  - date fields (startDate/endDate/downPaymentDate) have no schemaDefBuilder equivalent
//  - installments is a deeply nested embedded array with Decimal128 amounts and Date fields
//  - there is no separate edit form for payment plans (installments are updated via payInstallment)
// This SchemaDef exists solely for: validateSchemaDefAgainstMongoose startup alignment check.
export const PaymentPlanSchemaDef = {
    sale:                 { type: "objectId", required: true  }, // no-permission write; linked to Sale
    totalAmount:          { type: "number",   required: true,  min: 0 },
    downPayment:          { type: "number",   required: true,  min: 0 },
    downPaymentPaid:      { type: "boolean",  required: true  },
    // required in Mongoose; computed on pre-save; no-permission write
    remainingBalance:     { type: "number",   required: true,  min: 0 },
    numberOfInstallments: { type: "number",   required: true,  min: 1 },
    installmentAmount:    { type: "number",   required: true,  min: 0 },
    interestRate:         { type: "number",   required: false, min: 0, max: 100 },
    gracePeriodDays:      { type: "number",   required: false, min: 0 },
    lateFeePercentage:    { type: "number",   required: false, min: 0, max: 100 },
    notes:                { type: "string",   required: false },
    // required in Mongoose but has default; managed by pre-save logic
    status:               { type: "string",   required: false },
} as const;
