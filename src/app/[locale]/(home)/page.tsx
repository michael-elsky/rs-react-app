import { getFilms } from '@/services/api'
import PageProps from './page.types'
import Home from './Home'

const page = async ({ searchParams }: PageProps) => {
  const sParams = await searchParams
  const search = (sParams?.search as string) || ''

  const data = await getFilms(search)
  const films = data.results

  return <Home initialData={films} searchValue={search}></Home>
}

export default page
