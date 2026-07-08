import {z} from 'zod';
import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {UnitSchemaDef} from "./unit.schema-def";
import {optionalClosedPolygonCoordinatesZod,} from "../../../../../../core/helpers/zodBuilder";

export function createUnitFormSchema(languageCode: string, form: any = null) {
    return z.object({
        ...buildCreateZodSchema(UnitSchemaDef, languageCode, form).shape,
        polygonCoordinates: optionalClosedPolygonCoordinatesZod(form?.["polygonCoordinatesLabel"] || "polygonCoordinates", languageCode)
    });
}
