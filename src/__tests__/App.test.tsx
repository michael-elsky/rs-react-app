import { describe, expect, it, vi } from 'vitest'

import App from '../App'

import type { FormTypes } from '../types/Modal.types'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

vi.mock('../components/Header/Header.tsx', () => ({
  default: () => <div>Header</div>,
}))

vi.mock('../components/Main/Main.tsx', () => ({
  default: ({ onOpen }: { onOpen: (formType: FormTypes) => void }) => (
    <button onClick={() => onOpen('useRef')}>open</button>
  ),
}))

vi.mock('../components/Modal/Modal', () => ({
  default: ({
    formType,
    onClose,
  }: {
    formType: FormTypes
    onClose: () => void
  }) => (
    <div>
      Modal: {formType}
      <button onClick={onClose}>close</button>
    </div>
  ),
}))

describe('App', () => {
  it('renders header and main', () => {
    render(<App />)

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('open')).toBeInTheDocument()
  })

  it('opens modal when Main triggers onOpen', async () => {
    render(<App />)

    await userEvent.click(screen.getByText('open'))

    expect(screen.getByText(/Modal/)).toBeInTheDocument()
  })

  it('closes modal', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByText('open'))
    await user.click(screen.getByText('close'))

    expect(screen.queryByText(/Modal/)).not.toBeInTheDocument()
  })
})
