import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border border-[#dce9e2] bg-[#f7faf7] px-3.5 py-2 text-[0.95rem] transition-all duration-200 outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#9db3b1] focus-visible:border-[#0fa3a3] focus-visible:ring-[3px] focus-visible:ring-[#0fa3a3]/20 focus-visible:bg-white disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[#c24343] aria-invalid:ring-[#c24343]/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
