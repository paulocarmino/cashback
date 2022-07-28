import axios from 'axios'
import useSWR from 'swr'

export default function getPrograms(fallbackData: any) {
  const fetcher = (url: string) => axios(url).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`/api/programs`, fetcher, { fallbackData })

  return {
    programs: data,
    isLoading: !error && !data,
    isError: !data
  }
}
