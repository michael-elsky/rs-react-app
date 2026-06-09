import type { Submission } from '../types/submission.types'

const createSubmissionObject = async (formData: FormData) => {
  const name = formData.get('name')
  const age = formData.get('age')
  const email = formData.get('email')
  const gender = formData.get('gender')
  const country = formData.get('country')

  if (typeof name !== 'string') return
  if (!age || typeof age !== 'string') return
  if (typeof email !== 'string') return
  if (typeof gender !== 'string') return
  if (gender !== 'female' && gender !== 'male') return
  if (typeof country !== 'string') return

  const ageNumber = Number(age)

  const submission: Submission = {
    id: crypto.randomUUID(),

    formType: 'useRef',

    name,
    age: ageNumber,
    email,

    gender,
    country,

    profileImage: null,
  }

  return submission
}

export default createSubmissionObject
