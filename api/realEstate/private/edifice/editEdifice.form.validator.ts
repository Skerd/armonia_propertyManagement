import {z} from "zod";
import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {EdificeSchemaDef} from "./edifice.schema-def";
import {optionalClosedPolygonCoordinatesZod} from "../../../../../core/helpers/zodBuilder";

export function editEdificeFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return z.object({
        ...buildEditZodSchema(EdificeSchemaDef, languageCode, form, permissions, readPermissions).shape,
        polygonCoordinates: permissions?.polygonCoordinates ? optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode) : z.any(),
    });
}
