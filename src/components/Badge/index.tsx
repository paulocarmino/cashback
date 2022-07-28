import clsxm from "@/utils/ui/clsxm"

type BadgeProps = {
  label: string
  isEnabled?: boolean
  isDisabled?: boolean
}

const Badge = ({ label, isEnabled, isDisabled }: BadgeProps) => {
  return (
    <p className={clsxm(
      isEnabled && "text-green-800 bg-green-100",
      isDisabled && "text-red-800 bg-red-100",
      "inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
    )}>
      {label}
    </p>
  )
}

export default Badge
