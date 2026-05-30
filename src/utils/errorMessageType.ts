import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

const errorMessageType = (
  error: SerializedError | FetchBaseQueryError | undefined,
): string => {
  if (!error) return ''

  if ('status' in error) {
    return `Status: ${error.status}`
  }

  return error.message ?? 'Unknown error'
}

export default errorMessageType
