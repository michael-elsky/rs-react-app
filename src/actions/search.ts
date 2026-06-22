'use server'
import { redirect } from '@/i18n/routing'

export const handleSearchAction = async (formData: FormData) => {
  const query = (formData.get('searchInput') as string)?.trim() || ''
  const locale = formData.get('locale') as string

  const destination = query
    ? { pathname: '/', query: { search: query } }
    : { pathname: '/' }

  redirect({
    href: destination,
    locale: locale as 'en' | 'ru',
  })
}
