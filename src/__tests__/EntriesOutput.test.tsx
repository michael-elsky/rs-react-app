import { render, screen } from '@testing-library/react'
import EntriesOutput from '../components/Entries/EntriesOutput/EntriesOutput'
import { describe, expect, it, vi } from 'vitest'
import { useSelector } from 'react-redux'

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}))

const mockedUseSelector = vi.mocked(useSelector)

describe('EntriesOutput', () => {
  it('renders NoEntries when empty', () => {
    ;mockedUseSelector.mockReturnValue({
      submissions: [],
      lastAddedId: null,
    })

    render(<EntriesOutput />)

    expect(screen.getByText(/no submissions yet/i)).toBeInTheDocument()
  })

  it('renders submissions list', () => {
    ;mockedUseSelector.mockReturnValue({
      submissions: [
        {
          id: 1,
          name: 'Michael',
          age: 13,
          gender: 'male',
          country: 'Germany',
          profileImage: '',
        },
      ],
      lastAddedId: 1,
    })

    render(<EntriesOutput />)

    expect(screen.getByText('Michael')).toBeInTheDocument()
    expect(screen.getByText('13')).toBeInTheDocument()
    expect(screen.getByText('male')).toBeInTheDocument()
    expect(screen.getByText('Germany')).toBeInTheDocument()
  })
})
