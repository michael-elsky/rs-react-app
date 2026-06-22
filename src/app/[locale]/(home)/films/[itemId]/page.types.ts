export interface PageProps {
  params: Promise<{
    itemId: string
    locale: string
  }>
  searchParams: Promise<{
    search?: string
    page?: string
  }>
}

export default PageProps
