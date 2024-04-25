import FormSimulate from "./components/FormSimulate";
import Line from "@/components/Line";
import CardProduct from "./components/CardProduct";
import CardParcel from "./components/CardParcel";
import Button from "@/components/Button";
import whatsapp_white from "../../../../public/images/social/whatsapp_white.svg"
import { vehicleSimulate, vehicles, vehiclesFind } from "@/app/services/Vehicle";
import { z } from "zod";
import { vehiclesSchema } from "@/app/schemas/zod";

type TVehicles = z.infer<typeof vehiclesSchema>;
interface IProps {
  params: { vehicle: any[] }

}

export default async function Simulate({ params }: IProps) {
  
  const vehicleId = params.vehicle?.at(0) ? parseInt(params.vehicle?.at(0)) : null
  const entryValue = params.vehicle?.at(1) ? parseFloat(params.vehicle?.at(1)) : null
  const dataVehicles = await vehicles()

  let vehicle: TVehicles | null = null

  if (vehicleId && entryValue) {
    const [vehicleTemp, simulatedValueTemp] = await Promise.all([vehiclesFind(vehicleId), vehicleSimulate({vehicleId, entryValue})])
    vehicle = vehicleTemp
    console.log(simulatedValueTemp);
    
  }


  return (
    <div className="p-4 md:p-12 lg:p-12">
      <div className="mt-14 mb-10">
        <p className="text-2xl h1">Simulador de financiamentos</p>
        <Line />
      </div>

      <div className="bg-white p-10">
        <p className="h2">
          Selecione um veículo que deseja simular o financiamento
        </p>
        <FormSimulate vehicles={dataVehicles} className="mt-4" />
      </div>
      {vehicleId && entryValue && vehicle &&
        <div className="grid grid-cols-12 gap-4 mt-14">
          <div className="col-span-12 md:col-span-5 lg:col-span-3">
            <CardProduct
              src={vehicle.photo}
              name={vehicle.model}
              city={vehicle.city}
              description={vehicle.description}
              year={vehicle.year}
              km={vehicle.km}
              type={vehicle.gearbox.toString()}
              price={vehicle.price}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-9 bg-white p-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-12 lg:col-span-4">
                <p className="h2 mb-2">Valores simulados para você</p>
                <Line />
                <div className="grid grid-cols-12 gap-4 mt-6">
                  <div className="col-span-12 md:col-span-12 lg:col-span-12">
                    <CardParcel parcel={6} value={9.917} hasIPVA={true} />
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-6">
                    <CardParcel parcel={12} value={4.958} />
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-6">
                    <CardParcel parcel={48} value={1.24} />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <Button
                      src={whatsapp_white}
                      className="bg-green-400 px-10">
                      <p className="font-semibold">Falar com consultor</p>
                    </Button>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <p className="font-semibold text-md mt-2 text-zinc-500">
                      (31) 3441-0240
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
