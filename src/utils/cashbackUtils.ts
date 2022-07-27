import { Program } from "@prisma/client"

export const calculeCashbackHandler = (program: Program | null, productValue: number) => {
  const cashbackType = program?.type
  const cashbackValue = Number(program?.value)

  if (cashbackType === 'VALUE') {
    return cashbackValue
  }

  const productValueWithCashbackApplied = subtractWithPercentage(productValue, cashbackValue)
  return productValue - productValueWithCashbackApplied
}

export const subtractWithPercentage = (value: number, percentage: number) => {
  return value * (1 - percentage / 100)
}
