import classes from './About.module.css';

const About = () => {
  return (
    <section>
      <h1 className={classes['app__about-header']}>Michael Elsky</h1>
      <p>
        <a
          href="https://github.com/michael-elsky"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </p>
      <p>
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noopener"
        >
          RS School React course
        </a>
      </p>
    </section>
  );
};

export default About;
