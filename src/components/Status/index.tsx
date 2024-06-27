import { ComponentProps } from "react"
import { tv, type VariantProps} from "tailwind-variants";

const status = tv({
    base: 'font-medium rounded-md flex items-center justify-center gap-2 disabled:opacity-25 disabled:cursor-not-allowed',
    variants: {
        type: {
            high: "bg-red-700 text-white",
            medium: "bg-sky-500 text-white",
            low: "bg-emerald-500 text-white"
        },
        size: {
            xs: 'h-6 px-2 text-xs',
            sm: 'h-8 px-3',
            default: "h-10 px-4"
        },
    },
    defaultVariants: {
        color: "success",
        size: "default"
    }
});

type StatusProps = ComponentProps<'p'> & VariantProps<typeof status> & {}

export const Status = ({type, size, children, ...props}: StatusProps) => {
 return(
  <>
    <p className={status({type, size})} {...props}>{children}</p>
  </>
 )
}