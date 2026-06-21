import classes from './ResultList.module.css'
import type { ResultListProps } from './ResultList.types'
import CheckBox from './CheckBox/CheckBox'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const ResultList = ({ data, onClose }: ResultListProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const isDetailsPage = pathname.startsWith('/films/')

  const currentPage = searchParams.get('page') || 1

  let listClassName = classes['app__result-list']

  if (isDetailsPage) {
    listClassName = `${classes['app__result-list']} ${classes['app__result-list--shrink']}`
  }

  return (
    <ul
      className={listClassName}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      {data.map((item) => {
        const filmId = item.url?.split('/').slice(-2, -1)[0]

        return (
          <li className={classes['app__result-item']} key={item.title}>
            <section className={classes['app__result-section']}>
              <CheckBox item={item} />

              <Link
                href={`/films/${filmId}?page=${currentPage}`}
                className={
                  pathname === `/films/${filmId}`
                    ? `${classes['app__result-link']} ${classes['app__result-link--active']}`
                    : classes['app__result-link']
                }
              >
                <h1 className={classes['app__result-title']}>{item.title}</h1>
              </Link>
            </section>
          </li>
        )
      })}
    </ul>
  )
}

export default ResultList
