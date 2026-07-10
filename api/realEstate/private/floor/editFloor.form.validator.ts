import {z} from "zod";
import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FloorSchemaDef} from "./floor.schema-def";
import {optionalClosedPolygonCoordinatesZod} from "../../../../../core/helpers/zodBuilder";

export function editFloorFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return z.object({
        ...buildEditZodSchema(FloorSchemaDef, languageCode, form, permissions, readPermissions).shape,
        polygonCoordinates: permissions?.polygonCoordinates ? optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode) : z.any().optional(),
    });
}
