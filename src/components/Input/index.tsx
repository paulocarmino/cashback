import React from "react"
import { FieldError } from "react-hook-form"

import clsxm from "@/utils/ui/clsxm"

export type InputProps = {
  label?: string
  isError?: FieldError
} & React.ComponentPropsWithRef<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    isError = false,
    ...rest
  },
    ref
  ) => {
    console.log('isError', isError)
    return (
      <div className="flex flex-col pb-4">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          name={label}
          id={label}
          className={clsxm(
            "block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 shadow-sm sm:text-sm",
            isError && 'border-[#FD4755] placeholder-red-300 focus:outline-none focus:border-[#FD4755] focus:ring-[#FD4755]'
          )}
          {...rest}
        />
      </div>
    )
  })

export default Input
