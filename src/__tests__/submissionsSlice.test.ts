import { describe, expect, it } from 'vitest'
import reducer, { submissionsAction } from '../store/submissionsSlice'

describe('submissionsSlice', () => {
  it('should add submission', () => {
    const initialState = {
      submissions: [],
      lastAddedId: null,
    }

    const action = submissionsAction.addSubmission({
      id: '1',
      formType: 'useRef',
      name: 'Michael',
      age: 13,
      gender: 'male',
      email: 'some@some.com',
      country: 'Germany',
      profileImage: '',
    })

    const state = reducer(initialState, action)

    expect(state.submissions.length).toBe(1)
    expect(state.lastAddedId).toBe('1')
  })
})
