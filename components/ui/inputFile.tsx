import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputFile = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="file"
        className={cn(
          "",
          className
        )}
        ref={ref}
        {...props}
      >
      </input>
    )
  }
)
InputFile.displayName = "Input"

export { InputFile }
