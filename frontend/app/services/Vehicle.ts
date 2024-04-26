'use server'

import api from "@/lib/api"
import routes from "../constants/routes"
import { revalidatePath } from "next/cache"
import pages from "../constants/pages"

export async function vehicles() {
    const { data, status } = await api.get(routes.vehicles)
    if (status == 200) {
        return data
    }
    throw new Error(`Error ${status}`);
}

export async function vehiclesFind(vehicleId: number) {
    const route = routes.vehiclesFind.replace("{vehicleId}", String(vehicleId))
    const { data, status } = await api.get(route)
    if (status == 200) {
        // revalidatePath(pages.simulate)
        return data
    }
    throw new Error(`Error ${status}`);
}

export async function vehicleSimulate(vehicle: { vehicleId: number, entryValue: number }) {
    const { data, status } = await api.post(routes.vehicleSimulate, vehicle)
    if (status == 200) {
        // revalidatePath(pages.simulate)
        return data
    }
    throw new Error(`Error ${status}`);
}