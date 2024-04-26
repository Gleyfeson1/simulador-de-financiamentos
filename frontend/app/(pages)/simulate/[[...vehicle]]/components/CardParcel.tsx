import { formatMoney } from "@/lib/utils";

interface IProps {
  parcel: number;
  value: number;
  hasIPVA?: boolean;
};

const CardParcel = ({ parcel, value, hasIPVA }: IProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border flex items-center justify-between  w-full">
      <div className="flex flex-col p-4">
        <span className="font-semibold text-zinc-700 text-[16px]">
          {parcel}x
        </span>
        <span className="font-semibold text-violet-700 text-[25px]">
          {formatMoney(value)}
        </span>
      </div>
      {hasIPVA && (
        <div className="rounded-s-2xl bg-violet-500 px-4 text-white">
          IPVA GRÁTIS
        </div>
      )}
    </div>
  );
};

export default CardParcel;
