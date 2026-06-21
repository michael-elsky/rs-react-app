'use client'

// import { useRouteError } from 'react-router-dom'
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'
import { useRouter } from 'next/navigation'

const RouterError = () => {
  // const error = useRouteError()
  const router = useRouter()

  const handleResetError = () => {
    router.push('/')
  }

  return (
    <ErrorDisplay
      hasError={true}
      onReset={handleResetError}
      errorMessage={
        // error instanceof Error ? error.message : 'Something went wrong'
        'Something went wrong'
      }
    />
  )
}

export default RouterError
