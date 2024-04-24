"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: any;
  children?: ReactNode
};

const SocialButton = ({ src, children, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-violet-500 flex items-center justify-center p-2 rounded-sm font-semibold",
        props.className
      )}
    >
      {src && <Image src={src} alt="" height={20} width={20} className="text-white" />}
      {children}
    </button>
  );
};

export default SocialButton;
