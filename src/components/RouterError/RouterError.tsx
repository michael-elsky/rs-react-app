'use client'

import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'
import { useRouter } from '@/i18n/routing'

const RouterError = () => {
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
