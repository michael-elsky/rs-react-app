import type { MainProps } from '../../types/Main.types'
import Entries from '../Entries/Entries'
import EntriesOutput from '../Entries/EntriesOutput/EntriesOutput'
import Playground from '../Playground/Playground'
import PlaygroundButtons from '../Playground/PlaygroundButtons/PlaygroundButtons'
import PlaygroundHeader from '../Playground/PlaygroundHeader/PlaygroundHeader'
import './Main.css'

const Main = ({ onOpen }: MainProps) => {
  return (
    <main className="app__main">
      <div className="container">
        <div className="app__main-wrapper">
          <Playground>
            <PlaygroundHeader />
            <PlaygroundButtons onOpen={onOpen} />
          </Playground>

          <Entries>
            <EntriesOutput />
          </Entries>
        </div>
      </div>
    </main>
  )
}

export default Main
