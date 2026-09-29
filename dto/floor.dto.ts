import type {EdificeSimple} from "./edifice.dto";

export type FloorSimple = {
    _id: string;
    name: string;
    edifice?: EdificeSimple;
};
