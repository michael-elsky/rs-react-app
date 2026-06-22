import { getFilms } from '@/services/api'
import PageProps from './page.types'
import Home from './Home'

const page = async ({ searchParams }: PageProps) => {
  const { search } = await searchParams

  const data = await getFilms(search || '')
  const films = data.results

  return <Home initialData={films}></Home>
}

export default page
