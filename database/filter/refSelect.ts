import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

export const PROPERTY_MANAGEMENT_REF_SELECTS: Record<string, RefSelectConfig> = {
    Project: {apiUrl: "/api/realEstate/project/select"},
    Edifice: {apiUrl: "/api/realEstate/edifice/select", postBodyKeys: ["projectId"]},
    Floor: {apiUrl: "/api/realEstate/floor/select", postBodyKeys: ["edificeId"]},
    Unit: {apiUrl: "/api/realEstate/unit/select", postBodyKeys: ["floorId", "edificeId", "projectId"]},
    Inspection: {apiUrl: "/api/realEstate/unit/inspection/select", postBodyKeys: ["unitId"]},
    UnitCost: {apiUrl: "/api/realEstate/unit/cost/select", postBodyKeys: ["unitId"]},
    ModificationRequest: {apiUrl: "/api/realEstate/unit/modificationRequest/select", postBodyKeys: ["unitId"]},
    Reservation: {apiUrl: "/api/realEstate/unit/reservation/select"},
    Sale: {apiUrl: "/api/realEstate/unit/sale/select"},
    Lease: {apiUrl: "/api/realEstate/lease/select"},
    PaymentPlan: {apiUrl: "/api/realEstate/unit/paymentPlan/select"},
    UnitType: {apiUrl: "/api/realEstate/unitType/select"},
    Constructor: {apiUrl: "/api/realEstate/constructor/select"},
};

export function registerPropertyManagementRefSelects(): void {
    registerRefSelects(PROPERTY_MANAGEMENT_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerPropertyManagementRefSelects();
