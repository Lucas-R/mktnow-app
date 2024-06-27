import { ComponentProps } from "react";
import { tv, type VariantProps} from "tailwind-variants";

const input = tv({
    base: 'w-full rounded-md flex items-center justify-center gap-4 focus:outline-none',
    variants: {
        color: {
            gray: "bg-zinc-700 hover:bg-zinc-600 text-white",
            default: "bg-zinc-50/50 text-white placeholder:text-zinc-50 focus:bg-zinc-50 focus:text-black focus:placeholder:text-zinc-500"
        },
        size: {
            sm: 'h-8 px-3',
            xs: 'h-6 px-2 text-xs',
            default: "h-10 px-4"
        }
    },
    defaultVariants: {
        color: "default",
        size: "default"
    }
});

type InputProps = ComponentProps<'input'> & VariantProps<typeof input> & {}

export const Input = ({color, className, ...props}: InputProps) => {
 return(
  <input className={input({color, className})} {...props} />
 )
}