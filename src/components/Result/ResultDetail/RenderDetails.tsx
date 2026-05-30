import { useParams } from 'react-router-dom'
import classes from './ResultDetails.module.css'
import RenderContent from '../renderContent'
import { useGetFilmDetailsQuery } from '../../../store/api'
import errorMessageType from '../../../utils/errorMessageType'

const ResultDetails = () => {
  const { itemId } = useParams()

  const { data, isLoading, isFetching, error } = useGetFilmDetailsQuery(
    itemId || '',
  )

  const errorMessage = errorMessageType(error)
  const isFilmsLoading = isLoading || isFetching

  const element = (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.opening_crawl}</p>
    </>
  )

  const renderContent = RenderContent(element, isFilmsLoading, errorMessage)

  return (
    <section
      className={`${classes['app__result-detail']} ${classes['app__result-detail--active']}`}
    >
      {renderContent}
    </section>
  )
}

export default ResultDetails
