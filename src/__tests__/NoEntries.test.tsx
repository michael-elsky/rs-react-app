import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import NoEntries from '../components/Entries/NoEntries/NoEntries'

describe('NoEntries', () => {
  it('renders empty state', () => {
    render(<NoEntries />)

    expect(screen.getByText('No submissions yet')).toBeInTheDocument()
  })
})
