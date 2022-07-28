import React from "react"
import { FieldError } from "react-hook-form"

import clsxm from "@/utils/clsxm"

type SelectProps = {
  label?: string
  isError?: FieldError
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    label,
    children,
    isError = false,
    ...rest
  },
    ref
  ) => {
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

        <select
          ref={ref}
          id={label}
          name={label}
          className={clsxm(
            "block py-2 pr-10 pl-3 mt-1 w-full text-base rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
            isError && 'border-[#FD4755] placeholder-red-300 focus:outline-none focus:border-[#FD4755] focus:ring-[#FD4755]'
          )}
          {...rest}
        >
          {children}
        </select>
      </div>
    )
  })

export default Select
