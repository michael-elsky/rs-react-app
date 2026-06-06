import './Playground.css'

import PlaygroundButtons from './PlaygroundButtons/PlaygroundButtons'
import PlaygroundHeader from './PlaygroundHeader/PlaygroundHeader'

const Playground = () => {
  return (
    <section className="app__playground">
      <PlaygroundHeader />
      <PlaygroundButtons />
    </section>
  )
}

export default Playground
