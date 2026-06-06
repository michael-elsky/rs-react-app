import Forms from '../Playground/Playground'
import './Main.css'

const Main = () => {
  return (
    <main className="app__main">
      <div className="container">
        <div className="app__main-wrapper">
          <Forms />

          <section className="app__entries"></section>
        </div>
      </div>
    </main>
  )
}

export default Main
