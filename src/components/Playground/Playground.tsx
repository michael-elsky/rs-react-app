import type { ReactNode } from 'react'
import './Playground.css'

const Playground = ({ children }: { children: ReactNode }) => {
  return <section className="app__playground">{children}</section>
}

export default Playground
