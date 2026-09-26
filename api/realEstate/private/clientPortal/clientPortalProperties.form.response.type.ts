export type ClientPortalPropertyItem = {
    _id: string;
    saleId: string;
    unitId: string;
    unitName: string;
    projectId?: string;
    projectName?: string;
    edificeName?: string;
    imageUrl?: string;
    areaSqm?: number;
    price: number;
    currencySymbol: string;
    currencyAbbreviation: string;
};

export type ClientPortalPropertiesFormResponseType = {
    properties: ClientPortalPropertyItem[];
};
