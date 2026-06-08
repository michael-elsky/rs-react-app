import type { FormTypes } from "./Modal.types";

export interface Submission {
  id: string

  formType: FormTypes

  name: string
  age: number
  email: string

  gender: 'male' | 'female'
  country: string

  profileImage?: string | null
}

export interface SubmissionsState {
  submissions: Submission[]
  lastAddedId: string | null
}
