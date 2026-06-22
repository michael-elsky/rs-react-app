import { getFilms, getFilm } from '@/services/api'
import Home from '../../Home'
import ResultDetails from '@/components/Result/ResultDetail/RenderDetails'
import PageProps from './page.types'

const DetailsPage = async ({ params, searchParams }: PageProps) => {
  const { itemId } = await params
  const sParams = await searchParams
  const search = (sParams?.search as string) || ''

  const [filmsData, filmDetails] = await Promise.all([
    getFilms(search),
    getFilm(itemId),
  ])

  return (
    <Home initialData={filmsData} searchValue={search}>
      <ResultDetails filmId={itemId} initialData={filmDetails} />
    </Home>
  )
}

export default DetailsPage
