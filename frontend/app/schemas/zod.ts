import { z } from "zod";

export const FormSimulateSchema = z.object({
    vehicleId: z.coerce.number().nullish(),
    entryValue: z.coerce.number().nullable(),
});