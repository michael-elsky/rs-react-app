import { describe, it } from 'vitest'

import { render } from '@testing-library/react'
import Entries from '../components/Entries/Entries'

describe('Entries', () => {
  it('renders Entries with children', () => {
    render(
      <Entries>
        <div>child</div>
      </Entries>,
    )
  })
})
