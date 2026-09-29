import type {ProjectSimple} from "./project.dto";

export type EdificeSimple = {
    _id: string;
    name: string;
    project?: ProjectSimple;
};

export type EdificeBlank = {
    _id: string;
    name: string;
};
