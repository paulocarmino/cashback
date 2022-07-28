//TODO: add style da variant secundary

import React from "react"
import clsxm from "@/utils/ui/clsxm"

enum ButtonVariant {
  'default',
  'secundary',
  'delete'
}

export type ButtonProps = {
  variant?: keyof typeof ButtonVariant
} & React.ComponentPropsWithRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className: classNameProps,
      disabled: buttonDisabled,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsxm(
          classNameProps,
          [
            variant === 'delete' && ['text-white bg-red-700 hover:bg-red-600'],
            variant === 'secundary' && ['text-sky-700 bg-sky-100 hover:bg-sky-200'],
            variant === 'default' && ['text-white bg-sky-600 hover:bg-sky-700'],
          ],
          "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm focus:outline-none"
        )}
        {...rest}
      >
        {children}
      </button>
    )
  })


export default Button
