import { describe, expect, it } from 'vitest'
import createSubmissionObject from '../utils/createSubmissionObject'

describe('createSubmissionObject', () => {
  it('creates valid submission', async () => {
    const formData = new FormData()

    formData.append('name', 'John')
    formData.append('age', '25')
    formData.append('email', 'michael@test.com')
    formData.append('gender', 'male')
    formData.append('country', 'Germany')

    const result = await createSubmissionObject(formData)

    expect(result).toBeDefined()
    expect(result?.name).toBe('John')
    expect(result?.age).toBe(25)
  })
  it('returns undefined for invalid form data', async () => {
    const formData = new FormData()

    const result = await createSubmissionObject(formData)

    expect(result).toBeUndefined()
  })

  it('returns undefined for invalid gender', async () => {
    const formData = new FormData()

    formData.append('name', 'Michael')
    formData.append('age', '13')
    formData.append('email', 'john@test.com')
    formData.append('gender', 'other')
    formData.append('country', 'Germany')

    const result = await createSubmissionObject(formData)

    expect(result).toBeUndefined()
  })
})
