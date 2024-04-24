'use client'
import { cn } from "@/lib/utils";
import React, { ElementType } from "react";
import { Controller, RegisterOptions } from "react-hook-form";

type TProps<T extends ElementType> = {
  formHook: any;
  name: string;
  label?: string | null;
  messageError?: string;
  component: T;
  rules?: RegisterOptions,
} & React.ComponentProps<T>;

export default function Field<T extends ElementType>({
  formHook,
  name,
  label,
  component: Component,
  setValue,
  messageError,
  rules,
  ...rest
}: TProps<T>) {

  return (
    <>
      {label &&
        <label className="text-[11px] h-4">{label}</label>
      }
      <Controller
        name={name}
        control={formHook.control}
        rules={rules}
        render={({ field }) =>
          <Component
            {...field}
            value={field.value ?? ''}
            className={cn(rest.className)}
            {...rest}
            style={
              formHook.formState.errors[name]
                ? { borderColor: "#ff0000", borderWidth: 1, borderRadius: 8, width: "100%"}
                : { width: "100%" }
            }

          />
        }

      />
      {formHook.formState.errors[name] && (
        <p className="text-[11px] text-red-600">
          {messageError ?? "Campo obrigatório!"}
        </p>
      )}
    </>
  );
}
