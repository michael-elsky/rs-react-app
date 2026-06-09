import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import store from '../store/index'
import UncontrolledForm from '../components/Forms/UncontrolledForm'

vi.mock('../../../utils/createSubmissionObject', () => ({
  default: vi.fn().mockResolvedValue({
    id: '1',
    name: 'John',
    age: 25,
    email: 'john@test.com',
    gender: 'male',
    country: 'Germany',
  }),
}))

vi.mock('../../../utils/fileToBase64', () => ({
  default: vi.fn().mockResolvedValue('base64-image'),
}))

describe('UncontrolledForm', () => {
  const onClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderForm = () =>
    render(
      <Provider store={store}>
        <UncontrolledForm onClose={onClose} />
      </Provider>,
    )

  it('focuses name input on mount', () => {
    renderForm()

    const nameInput = screen.getByLabelText('Name')

    expect(nameInput).toHaveFocus()
  })

  it('shows validation errors for empty submit', async () => {
    const user = userEvent.setup()

    renderForm()

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      screen.getByText('First letter must be uppercase'),
    ).toBeInTheDocument()

    expect(screen.getByText('Invalid email format')).toBeInTheDocument()

    expect(screen.getByText('I agree to the Terms')).toBeInTheDocument()
  })

  it('shows password mismatch error', async () => {
    const user = userEvent.setup()

    renderForm()

    await user.type(screen.getByLabelText('Name'), 'Michael')

    await user.type(screen.getByLabelText('Age'), '13')

    await user.type(screen.getByLabelText('Email'), 'Michael@test.com')

    await user.selectOptions(screen.getByLabelText('Gender'), 'male')

    await user.type(screen.getByLabelText(/country/i), 'Germany')

    await user.type(screen.getByLabelText('Password'), 'Password1')

    await user.type(screen.getByLabelText('Confirm Password'), 'Password2')

    await user.click(screen.getByRole('checkbox'))

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Passwords must match')).toBeInTheDocument()
  })

  it('submits valid form and calls onClose', async () => {
    const user = userEvent.setup()

    renderForm()

    await user.type(screen.getByLabelText('Name'), 'John')

    await user.type(screen.getByLabelText('Age'), '25')

    await user.type(screen.getByLabelText('Email'), 'john@test.com')

    await user.selectOptions(screen.getByLabelText('Gender'), 'male')

    await user.type(screen.getByLabelText('Country'), 'Germany')

    await user.type(screen.getByLabelText('Password'), 'Password1')

    await user.type(screen.getByLabelText('Confirm Password'), 'Password1')

    await user.click(screen.getByRole('checkbox'))

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(onClose).toHaveBeenCalled()
  })
})
