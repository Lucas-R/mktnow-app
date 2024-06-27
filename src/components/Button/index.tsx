import { ComponentProps } from "react"
import { tv, type VariantProps} from "tailwind-variants";

const button = tv({
    base: 'font-medium rounded-md flex items-center justify-center gap-2 disabled:opacity-25 disabled:cursor-not-allowed',
    variants: {
        color: {
            pink: "bg-pink-700 hover:bg-pink-600 text-white",
            violet: "bg-violet-700 hover:bg-violet-600 text-white",
            gray: "bg-zinc-700 hover:bg-zinc-600 text-white",
            default: "bg-zinc-500 hover:bg-zinc-400 text-white"
        },
        size: {
            sm: 'h-8 px-3',
            xs: 'h-6 px-2 text-xs',
            default: "h-10 px-4"
        },
    },
    defaultVariants: {
        color: "default",
        size: "default"
    }
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {}

export const Button = ({children, color, size, className, ...props}: ButtonProps) => {
    return(
        <button className={button({color, size, className})} {...props}>{children}</button>
    )
}