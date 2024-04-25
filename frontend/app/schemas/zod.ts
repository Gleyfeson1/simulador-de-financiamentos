import { z } from "zod";

export const FormSimulateSchema = z.object({
    vehicleId: z.coerce.number(),
    entryValue: z.coerce.number(),
});

export const vehiclesSchema =  z.object({
    id: z.number().nullish(),
    photo: z.string(),
    city: z.string(),
    brand: z.string(),
    model: z.string(),
    description: z.string(),
    year: z.coerce.number(),
    gearbox: z.coerce.number(),
    phone: z.string(),
    price: z.coerce.number(),
    km: z.coerce.number(),
})

