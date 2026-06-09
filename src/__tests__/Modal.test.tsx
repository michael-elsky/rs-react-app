import { render, screen } from '@testing-library/react'
import Modal from '../components/Modal/Modal'
import { describe, expect, it, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'

vi.mock('../components/Forms/UncontrolledForm', () => ({
  default: () => <div>Mock Form</div>,
}))

describe('Modal', () => {
  it('renders modal content', () => {
    render(<Modal formType="useRef" onClose={vi.fn()} />)

    expect(screen.getByText('Open Uncontrolled Form')).toBeInTheDocument()

    expect(screen.getByText('Mock Form')).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn()

    render(<Modal formType="useRef" onClose={onClose} />)

    await userEvent.click(screen.getByTitle('Close form'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay clicked', async () => {
    const onClose = vi.fn()

    render(<Modal formType="useRef" onClose={onClose} />)

    await userEvent.click(screen.getByTestId('modal-overlay'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Escape press', async () => {
    const onClose = vi.fn()

    render(<Modal formType="useRef" onClose={onClose} />)

    await userEvent.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
