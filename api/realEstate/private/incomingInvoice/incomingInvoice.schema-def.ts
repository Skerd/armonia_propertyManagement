import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Kreditorenbewirtschaftung / central AP inbox (§3.N). ocrStatus/status/createdContractorInvoice server-managed.
export const incomingInvoiceStatusValues = ["inbox", "classified", "routed", "posted", "rejected"] as const;
export type IncomingInvoiceStatusValue = typeof incomingInvoiceStatusValues[number];

export const incomingInvoiceOcrStatusValues = ["pending", "done", "failed"] as const;
export type IncomingInvoiceOcrStatusValue = typeof incomingInvoiceOcrStatusValues[number];

export const IncomingInvoiceSchemaDef = {
    title:                 {type: "string", required: false},
    project:               {type: "objectId", required: false},
    extractedSupplierName: {type: "string", required: false},
    extractedIban:         {type: "string", required: false},
    extractedAmount:       {type: "number", required: false},
    extractedCurrencyCode: {type: "string", required: false},
    extractedInvoiceNumber:{type: "string", required: false},
    extractedInvoiceDate:  {type: "date", required: false},
    extractedDueDate:      {type: "date", required: false},
    extractedQrReference:  {type: "string", required: false},
    matchedConstructor:    {type: "objectId", required: false},
    matchedContract:       {type: "objectId", required: false},
    bkpAccountCode:        {type: "string", required: false},
    currency:              {type: "objectId", required: false},
    notes:                 {type: "string", required: false},
} as const;

export type CreateIncomingInvoiceFormType = InferCreateForm<typeof IncomingInvoiceSchemaDef>;
export type EditIncomingInvoiceFormType = InferEditForm<typeof IncomingInvoiceSchemaDef>;
