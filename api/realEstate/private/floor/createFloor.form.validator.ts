import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FloorSchemaDef} from "./floor.schema-def";
import {optionalClosedPolygonCoordinatesZod} from "../../../../../core/helpers/zodBuilder";

export function createFloorFormSchema(languageCode: string, form: any = null) {
    return z.object({
        ...buildCreateZodSchema(FloorSchemaDef, languageCode, form).shape,
        polygonCoordinates: optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode),
    });
}
