import {z} from 'zod';
import {buildEditZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {UnitSchemaDef} from "./unit.schema-def";
import {optionalClosedPolygonCoordinatesZod,} from "../../../../../../core/helpers/zodBuilder";

export function editUnitFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return z.object({
        ...buildEditZodSchema(UnitSchemaDef, languageCode, form, permissions, readPermissions).shape,
        polygonCoordinates: permissions?.polygonCoordinates ? optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode) : z.any().optional()
    });
}
