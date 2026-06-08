import './Forms.css'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useRef, useState, type SubmitEvent } from 'react'
import * as z from 'zod'

import { submissionsAction } from '../../store/submissionsSlice'
import createSubmissionObject from '../../utils/createSubmissionObject'
import FormError from './FormError'
import fileToBase64 from '../../utils/fileToBase64'
import PassIndicator from './PassIndicator'

const UncontrolledForm = ({ onClose }: { onClose: () => void }) => {
  const { countries } = useSelector((state: RootState) => state.countries)
  const formRef = useRef<HTMLFormElement>(null)

  const dispatch = useDispatch()

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [passwordValue, setPasswordValue] = useState('')

  const getPasswordStrength = (pwd: string) => {
    return {
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecial: /[!@#$%^&*]/.test(pwd),
    }
  }

  const strength = getPasswordStrength(passwordValue)

  const schema = z
    .object({
      name: z.string().refine((val) => /^[A-Z]/.test(val), {
        message: 'First letter must be uppercase',
      }),

      age: z.coerce
        .number()
        .min(1, 'Age must be at least 1')
        .max(120, 'Age must not exceed 120'),

      email: z.string().refine(
        (val) => {
          if (!val.includes('@')) return false
          const [local, domain] = val.split('@')
          return !!local && !!domain && domain.includes('.')
        },
        { message: 'Invalid email format' },
      ),

      gender: z.string().refine((val) => val === 'male' || val === 'female', {
        message: 'Select gender',
      }),

      country: z.string().refine((val) => countries.includes(val), {
        message: 'Invalid country',
      }),

      password: z.string().min(1, 'Password is required'),

      confirmPassword: z.string().min(1, 'Confirm password is required'),

      agreement: z
        .string()
        .optional()
        .refine((val) => val === 'on', {
          message: 'Must accept terms',
        }),
      profileImage: z.any().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords must match',
      path: ['confirmPassword'],
    })

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const result = schema.safeParse(data)

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      setErrors({
        name: flat.name?.[0] ?? '',
        age: flat.age?.[0] ?? '',
        email: flat.email?.[0] ?? '',
        gender: flat.gender?.[0] ?? '',
        country: flat.country?.[0] ?? '',
        password: flat.password?.[0] ?? '',
        confirmPassword: flat.confirmPassword?.[0] ?? '',
        agreement: flat.agreement?.[0] ?? '',
      })
      return
    }

    const file = formData.get('profileImage')
    let base64Image = ''

    if (file instanceof File && file.size > 0) {
      const isValidType = ['image/png', 'image/jpeg'].includes(file.type)
      const isValidSize = file.size <= 2 * 1024 * 1024

      if (!isValidType || !isValidSize) {
        setErrors((prev) => ({
          ...prev,
          profileImage: !isValidType
            ? 'Only PNG or JPEG allowed'
            : 'Max size 2MB',
        }))
        return
      }
      base64Image = await fileToBase64(file)
    }

    setErrors({})
    const submission = await createSubmissionObject(formData)

    if (submission) {
      dispatch(
        submissionsAction.addSubmission({
          ...submission,
          profileImage: base64Image,
        }),
      )
    }

    formRef.current.reset()
    setPasswordValue('')
    onClose()
  }

  return (
    <form
      className="app__form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <ul className="app__form-list">
        <li className="app__form-item">
          <label className="app__form-label" htmlFor="name">
            Name
          </label>
          <input
            className="app__form-input"
            type="text"
            id="name"
            name="name"
          />
          {errors.name && <FormError message={errors.name} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="age">
            Age
          </label>
          <input
            className="app__form-input"
            type="number"
            id="age"
            name="age"
          />
          {errors.age && <FormError message={errors.age} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="email">
            Email
          </label>
          <input
            className="app__form-input"
            type="email"
            id="email"
            name="email"
          />
          {errors.email && <FormError message={errors.email} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="gender">
            Gender
          </label>
          <select className="app__form-select" id="gender" name="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <FormError message={errors.gender} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="country">
            Country
          </label>
          <input
            className="app__form-input"
            id="country"
            name="country"
            list="countries-list"
            autoComplete="off"
          />
          <datalist id="countries-list">
            {countries.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          {errors.country && <FormError message={errors.country} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="profile-image">
            Profile Image <span>(optional)</span>
          </label>
          <input
            className="app__form-input"
            type="file"
            id="profile-image"
            name="profileImage"
            accept="image/png, image/jpeg"
          />
          {errors.profileImage && <FormError message={errors.profileImage} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="password">
            Password
          </label>
          <input
            className="app__form-input"
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setErrors((prev) => ({ ...prev, password: '' }))
              setPasswordValue(e.target.value)
            }}
          />
          {passwordValue.length > 0 && <PassIndicator strength={strength} />}
          {errors.password && <FormError message={errors.password} />}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="app__form-input"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                password: '',
                confirmPassword: '',
              }))
            }
          />
          {errors.confirmPassword && (
            <FormError message={errors.confirmPassword} />
          )}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="agreement">
            <input type="checkbox" id="agreement" name="agreement" /> I agree to
            the Terms
          </label>
          {errors.agreement && <FormError message={errors.agreement} />}
        </li>

        <li className="app__form-item">
          <button className="app__form-submit" type="submit">
            Submit
          </button>
        </li>
      </ul>
    </form>
  )
}

export default UncontrolledForm
