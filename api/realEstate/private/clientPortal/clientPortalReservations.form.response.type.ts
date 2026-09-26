export type ClientPortalReservationItem = {
    _id: string;
    name?: string;
    status: string;
    unitName?: string;
    projectName?: string;
    edificeName?: string;
    reservationDate: string;
    expirationDate: string;
    depositAmount?: number;
    currencySymbol?: string;
    currencyAbbreviation?: string;
};

export type ClientPortalReservationsFormResponseType = {
    reservations: ClientPortalReservationItem[];
};
