export type MarketingTeamMemberItem = {
    _id: string;
    name: string;
    role: string;
    image?: string;
};

export type MarketingTeamFormResponseType = {
    members: MarketingTeamMemberItem[];
};
