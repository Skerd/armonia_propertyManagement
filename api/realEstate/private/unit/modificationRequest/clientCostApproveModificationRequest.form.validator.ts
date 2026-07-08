import {z} from "zod";
import {isEnumZod, isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

const validDecisions = ["approved", "rejected"];

export function clientCostApproveModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        decision: isEnumZod(
            form?.["decisionLabel"] || "decision",
            validDecisions,
            validDecisions.map((d) => form?.["decisionEnum"]?.[d] ?? d).join(", "),
            languageCode,
        ),
        notes: z.string().optional(),
    });
}
