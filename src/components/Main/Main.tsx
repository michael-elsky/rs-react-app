import Entries from '../Entries/Entries'
import Playground from '../Playground/Playground'
import './Main.css'

const Main = () => {
  return (
    <main className="app__main">
      <div className="container">
        <div className="app__main-wrapper">
          <Playground />

          <Entries />
        </div>
      </div>
    </main>
  )
}

export default Main
