export interface Submission {
  id: string

  formType: 'uncontrolled' | 'react-hook-form'

  name: string
  age: number
  email: string

  gender: 'male' | 'female'
  country: string

  image: string | null
}

export interface SubmissionsState {
  submissions: Submission[]
  lastAddedId: string | null
}
