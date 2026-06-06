import Entries from '../Entries/Entries'
import Forms from '../Playground/Playground'
import './Main.css'

const Main = () => {
  return (
    <main className="app__main">
      <div className="container">
        <div className="app__main-wrapper">
          <Forms />

          <Entries />
        </div>
      </div>
    </main>
  )
}

export default Main
