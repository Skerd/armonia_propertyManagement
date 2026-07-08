import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {EdificeSchemaDef} from "./edifice.schema-def";
import {optionalClosedPolygonCoordinatesZod} from "../../../../../core/helpers/zodBuilder";

export function createEdificeFormSchema(languageCode: string, form: any = null) {
    return z.object({
        ...buildCreateZodSchema(EdificeSchemaDef, languageCode, form).shape,
        polygonCoordinates: optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode),
    });
}
