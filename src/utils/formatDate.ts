import { format } from 'date-fns-tz'

const formatDate = (date: string, pattern: string = 'dd/MM/yyyy') => {
  return format(new Date(date), pattern, {
    timeZone: 'America/Sao_Paulo'
  })
}

export default formatDate
