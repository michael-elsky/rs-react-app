import './UncontrolledForm.css'

const FormError = ({ message }: { message: string }) => {
  return <span className="app__form-error">{message}</span>
}

export default FormError
