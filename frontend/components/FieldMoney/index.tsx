import { cn } from "@/lib/utils";
import { classNames } from "primereact/utils";
import React, { ElementType } from "react";
import { CurrencyInput } from "react-currency-mask";
import { Controller, RegisterOptions } from "react-hook-form";

type TProps<T extends ElementType> = {
  formHook: any;
  name: string;
  label?: string | null;
  messageError?: string;
  rules?: RegisterOptions,
  component: T;
  className?: string
} & React.ComponentProps<T>;

export default function FieldMoney<T extends ElementType>({
  formHook,
  name,
  label,
  component: Component,
  setValue,
  messageError,
  rules,
  className,
  ...rest
}: TProps<T>) {
  return (
    <>
      {
        label &&
        <label className="text-[11px] h-4">{label}</label>
      }
      <Controller
        name={name}
        control={formHook.control}
        rules={rules}
        render={({ field }) => (
          <CurrencyInput
            className={cn("p-inputtext p-component", className)}
            value={field.value}
            onChangeValue={(_: any, value: any) => {
              field.onChange(value);
            }}
            style={
              formHook.formState.errors[name]
                ? { borderColor: "#ff0000", borderWidth: 1, width: "100%" }
                : {width: "100%"}
            }
            {...rest}
          />
        )}
      />
      {formHook.formState.errors[name] && (
        <p className="text-[11px] text-red-600">
          {messageError ?? "Campo obrigatório!"}
        </p>
      )}
    </>
  );
}
