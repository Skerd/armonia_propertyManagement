export type MarketingCompanyAddressItem = {
    label: string;
    latitude?: number;
    longitude?: number;
};

export type MarketingCompanyFormResponseType = {
    email?: string;
    phoneNumber?: string;
    addresses?: MarketingCompanyAddressItem[];
    website?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
};
