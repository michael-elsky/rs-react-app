import { render, screen } from '@testing-library/react'
import PassIndicator from '../components/Forms/PassIndicator'
import { describe, expect, it } from 'vitest'

describe('PassIndicator', () => {
  it('renders weak password indicators', () => {
    render(
      <PassIndicator
        strength={{
          hasUpper: false,
          hasLower: false,
          hasNumber: false,
          hasSpecial: false,
        }}
      />,
    )

    expect(screen.getAllByText('❌ Uppercase')).toHaveLength(1)
    expect(screen.getAllByText('❌ Lowercase')).toHaveLength(1)
    expect(screen.getAllByText('❌ Number')).toHaveLength(1)
    expect(screen.getAllByText('❌ Special character')).toHaveLength(1)
  })

  it('renders strong password indicators', () => {
    render(
      <PassIndicator
        strength={{
          hasUpper: true,
          hasLower: true,
          hasNumber: true,
          hasSpecial: true,
        }}
      />,
    )

    expect(screen.getAllByText('✅ Uppercase')).toHaveLength(1)
    expect(screen.getAllByText('✅ Lowercase')).toHaveLength(1)
    expect(screen.getAllByText('✅ Number')).toHaveLength(1)
    expect(screen.getAllByText('✅ Special character')).toHaveLength(1)
  })
})
