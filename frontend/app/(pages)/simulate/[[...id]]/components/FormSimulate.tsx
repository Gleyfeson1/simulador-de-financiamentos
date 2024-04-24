"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormSimulateSchema } from "@/app/schemas/zod";
import Field from "@/components/Field";
import { Dropdown } from "primereact/dropdown";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import FieldMoney from "@/components/FieldMoney";

interface IProps {
    className?: string;
};

export default function FormSimulate({ className }: IProps) {
    type TFormSimulate = z.infer<typeof FormSimulateSchema>;
    const formSimulate = useForm<TFormSimulate>({
        resolver: zodResolver(FormSimulateSchema),
    });

    const handle = (data: TFormSimulate) => {
        console.log(data);
    };

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
                        []
                        //     listEmployees.map((item) => ({
                        //     label: item.name,
                        //     value: item.id,
                        // }))
                    }
                    placeholder="Selecione"
                    className="h-12 mb-2"
                />
                <span className="text-violet-600 text-sm">
                    Valor do veículo: <span className="font-semibold">R$150.000</span>
                </span>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-3">
                <FieldMoney
                    formHook={formSimulate}
                    name="entryValue"
                    placeholder="Entrada"
                    className={"h-12 px-4"}
                />
            </div>

            <div className="col-span-12 md:col-span-2 lg:col-span-1 flex mt-1 mb-2">
                <Button className="px-20 font-medium text-lg">Simular</Button>
            </div>
        </form>
    );
}
