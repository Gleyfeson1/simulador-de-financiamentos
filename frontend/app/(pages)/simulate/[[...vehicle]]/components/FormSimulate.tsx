"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormSimulateSchema, vehiclesSchema } from "@/app/schemas/zod";
import Field from "@/components/Field";
import { Dropdown } from "primereact/dropdown";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import FieldMoney from "@/components/FieldMoney";
import { useEffect, useState } from "react";
import { vehicleSimulate, vehiclesFind } from "@/app/services/Vehicle";
import { useRouter } from "next/navigation";
import pages from "@/app/constants/pages";

type TVehicles = z.infer<typeof vehiclesSchema>;
type TFormSimulateSchema = z.infer<typeof FormSimulateSchema>;
interface IProps {
    className?: string;
    vehicles: TVehicles[]
};

export default function FormSimulate({ className, vehicles }: IProps) {

    const navigate = useRouter()

    const [vehicleSelected, setVehicleSelected] = useState<TVehicles>()

    const formSimulate = useForm<TFormSimulateSchema>({
        resolver: zodResolver(FormSimulateSchema),
    });

    const vehicleId = formSimulate.watch('vehicleId')

    const handle = async (data: TFormSimulateSchema) => {
        navigate.push(pages.simulate + `/${data.vehicleId}/${data.entryValue}`)
    };

    const getVehicleFind = async () => {
        setVehicleSelected(await vehiclesFind(vehicleId))
    }

    useEffect(() => {
        if (vehicleId) { getVehicleFind() }
    }, [vehicleId])

    return (
        <form
            onSubmit={formSimulate.handleSubmit(handle)}
            className={cn("grid grid-cols-12 md:max-w-[50%] gap-4", className)}
        >
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <Field
                    component={Dropdown}
                    formHook={formSimulate}
                    name="vehicleId"
                    filter
                    options={
                        vehicles.map((item) => ({
                            label: item.model,
                            value: item.id,
                        }))
                    }
                    placeholder="Selecione"
                    className="h-12 mb-2"
                />
                {vehicleSelected &&
                    <span className="text-violet-600 text-sm">
                        Valor do veículo: <span className="font-semibold">R$ {vehicleSelected.price}</span>
                    </span>
                }
            </div>
            {vehicleSelected &&
                <div className="col-span-12 md:col-span-5 lg:col-span-3">
                    <FieldMoney
                        formHook={formSimulate}
                        name="entryValue"
                        placeholder="Entrada"
                        className={"h-12 px-4"}
                    />
                </div>
            }

            <div className="col-span-12 md:col-span-2 lg:col-span-1 flex mt-1 mb-2">
                <Button className="px-20 font-medium text-lg rounded-2xl h-10 text-white">Simular</Button>
            </div>
        </form>
    );
}
