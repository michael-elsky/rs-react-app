'use client'

import store from '@/store'
import { ChildrenProp } from '@/types/types'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }: ChildrenProp) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
