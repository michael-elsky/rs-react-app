'use client'

import { useRouter } from 'next/navigation'
import classes from './not-found.module.css'

import Button from '@/components/Ui/Button/Button'

const Page404 = () => {
  const router = useRouter()

  return (
    <div className={classes['app__404-wrapper']}>
      <h2 className={classes['app__404-title']}>404 - Page not found</h2>
      <Button onClick={() => router.back()}>Go Back</Button>
    </div>
  )
}

export default Page404
