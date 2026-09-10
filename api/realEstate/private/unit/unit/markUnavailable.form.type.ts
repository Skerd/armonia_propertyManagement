import type {Unit} from "./unit.dto";

export type MarkUnavailableForm = {
    _id: string;
    unavailableNotes: string;
};

export type MarkUnavailableResponse = Pick<Unit, "status" | "unavailableNotes">;
