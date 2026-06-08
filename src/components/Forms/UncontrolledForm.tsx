import './Forms.css'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useRef, useState, type SubmitEvent } from 'react'

import { submissionsAction } from '../../store/submissionsSlice'
import createSubmissionObject from '../../utils/createSubmissionObject'
import FormError from './FormError'

const UncontrolledForm = ({ onClose }: { onClose: () => void }) => {
  const { countries } = useSelector((state: RootState) => state.countries)
  const formRef = useRef<HTMLFormElement>(null)

  const dispatch = useDispatch()

  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      setIsError(true)
      return
    }

    setIsError(false)

    const submission = createSubmissionObject(formData)

    if (submission) {
      dispatch(submissionsAction.addSubmission(submission))
    }

    formRef.current.reset()
    onClose()
  }

  return (
    <form className="app__form" ref={formRef} onSubmit={handleSubmit}>
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
            required
          />
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
            min="1"
            max="120"
            required
          />
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
            required
          />
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="gender">
            Gender
          </label>

          <select
            className="app__form-select"
            id="gender"
            name="gender"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="country">
            Country
          </label>

          <select
            className="app__form-select"
            id="country"
            name="country"
            required
          >
            <option value="">Select country</option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
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
            accept="image/*"
          />
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
            onChange={() => setIsError(false)}
            required
          />
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
            onChange={() => setIsError(false)}
            required
          />
          {isError && (
            <FormError message="Password and Confirm Password should be equal" />
          )}
        </li>

        <li className="app__form-item">
          <label className="app__form-label" htmlFor="agreement">
            <input type="checkbox" id="agreement" name="agreement" required />I
            agree to the Terms and Conditions
          </label>
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
