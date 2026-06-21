'use client'

import ResultDetails from '@/components/Result/ResultDetail/RenderDetails'
import { useParams } from 'next/navigation'

const Details = () => {
  const params = useParams()
  const filmId = String(params.itemId)

  return <>{filmId && <ResultDetails filmId={filmId} />}</>
}

export default Details
