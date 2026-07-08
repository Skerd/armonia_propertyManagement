import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../../core/utilities/zod/shared.validator";

// Extends the standard table/list form with two relation filters that cannot be
// expressed through the DSL filter engine (which only queries fields on the unit
// document itself). `reservedBy` / `boughtFrom` live on the Reservation / Sale
// collections, so the unit route resolves them to matching units in `extraListFilter`.
export function unitsListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(
        languageCode,
        form,
        {
            reservedBy: isObjectIdZod(form?.["reservedByLabel"] ?? "reservedBy", languageCode).optional(),
            boughtFrom: isObjectIdZod(form?.["boughtFromLabel"] ?? "boughtFrom", languageCode).optional(),
        },
    );
}
