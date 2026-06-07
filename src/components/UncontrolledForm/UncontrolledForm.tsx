import { useSelector } from 'react-redux'
import './UncontrolledForm.css'
import type { RootState } from '../../store'
import { useRef, type ChangeEvent, } from 'react'

const UncontrolledForm = () => {
  const { countries } = useSelector((state: RootState) => state.countries)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    console.log(Object.fromEntries(formData))
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
            accept="image/"
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
            required
          />
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
