import type { ReactNode } from 'react'
import './Entries.css'

const Entries = ({ children }: { children: ReactNode }) => {
  return (
    <section className="app__entries">
      <div className="container">
        <div className="app__entries-wrapper">
          <div className="app__entries__header">
            <h3 className="app__entries__heading">Submitted Entries</h3>
            <p className="app__entries__count">No entries yet</p>
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}

export default Entries
