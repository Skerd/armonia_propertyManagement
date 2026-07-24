import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Unternehmerrechnung (§3.G) — contractor invoice coded to the BKP account plan.
export const contractorInvoiceStatusValues = ["received", "under_review", "approved", "paid", "rejected", "disputed"] as const;
export type ContractorInvoiceStatusValue = typeof contractorInvoiceStatusValues[number];

export const contractorInvoiceSourceValues = ["manual", "ap_inbox"] as const;
export type ContractorInvoiceSourceValue = typeof contractorInvoiceSourceValues[number];

export const ContractorInvoiceSchemaDef = {
    project:              {type: "objectId", required: true},
    edifice:              {type: "objectId", required: false},
    constructorRef:       {type: "objectId", required: true},
    constructionContract: {type: "objectId", required: false},
    costCommitment:       {type: "objectId", required: false},
    progressClaim:        {type: "objectId", required: false},
    invoiceNumber:        {type: "string", required: false},
    invoiceDate:          {type: "date", required: false},
    dueDate:              {type: "date", required: false},
    grossAmount:          {type: "number", required: false},
    netAmount:            {type: "number", required: false},
    vatAmount:            {type: "number", required: false},
    retentionHeld:        {type: "number", required: false},
    bkpAccountCode:       {type: "string", required: false},
    qrBillReference:      {type: "string", required: false},
    source:               {type: "enum", required: false, options: contractorInvoiceSourceValues},
    currency:             {type: "objectId", required: true},
    notes:                {type: "string", required: false},
} as const;

export type CreateContractorInvoiceFormType = InferCreateForm<typeof ContractorInvoiceSchemaDef>;
export type EditContractorInvoiceFormType = InferEditForm<typeof ContractorInvoiceSchemaDef>;
