import type { ChildrenProp } from '../../types/types'

export interface DataProps {
  episode_id: number
  title: string
  opening_crawl: string
  url?: string
}

export interface ResultProps extends ChildrenProp{
  initialData?: DataProps[] | null
  data?: DataProps[] | null
  isLoading?: boolean
  errorMessage?: string
  onClose?: () => void
}
