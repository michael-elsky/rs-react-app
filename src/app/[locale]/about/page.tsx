import { useTranslations } from 'next-intl'
import classes from './About.module.css'

const About = () => {
  const t = useTranslations('About')

  return (
    <section>
      <h1 className={classes['app__about-header']}>{t('heading')}</h1>
      <p>
        <a
          href="https://github.com/michael-elsky"
          target="_blank"
          rel="noopener"
        >
          {t('link-github')}
        </a>
      </p>
      <p>
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noopener"
        >
          {t('link-rs')}
        </a>
      </p>
    </section>
  )
}

export default About
