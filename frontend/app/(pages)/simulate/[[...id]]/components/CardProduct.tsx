'use client'
import { Calendar, Cog, Gauge, MapPin } from "lucide-react";
import Image from "next/image";

interface IProps {
  name: string;
  city: string;
  description: string;
  year: number;
  km: number;
  price: number;
  type: string;
  src: any
};

const CardProduct = ({
  name,
  city,
  description,
  year,
  km,
  price,
  type,
  src
}: IProps) => {
  return (
    <div className="bg-white ">
      <div className="relative">
        <div className="absolute top-[75%] text-[14px] font-semibold left-0 h-fit w-fit py-1 bg-white  text-zinc-500 z-10 flex items-center px-3 rounded-e-2xl">
          <MapPin className="text-violet-500 mr-2" size={18} />
          {city}
        </div>
        <Image
          src={src}
          alt="Veículo"
        />
      </div>
      <div className="p-4 text-[#444444]">
        <div>
          <p className="text-[20px] font-semibold ">{name}</p>
          <p className="text-[14px]">{description}</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            {year}
          </div>
          <div className="flex items-center gap-2">
            <Gauge size={20} />
            {km}km
          </div>

          <div className="flex items-center gap-2">
            <Cog size={20} />
            {type}
          </div>
        </div>
        <p className="text-[26px] font-semibold mt-4 text-[#444444]">
          R$ {price}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
