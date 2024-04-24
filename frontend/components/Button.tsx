import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import Image from 'next/image'

interface TProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    src?: any
}

const Button: React.FC<TProps> = ({ children, src, ...props }) => {
    return (

        <button
            {...props}
            className={cn(
                "bg-violet-600 hover:bg-violet-700 flex items-center justify-center p-2 rounded-sm font-semibold",
                props.className
            )}
        >
            {src && <Image src={src} alt="" height={20} width={20} className="text-white" />}
            {children}
        </button>
    );
}

export default Button;
