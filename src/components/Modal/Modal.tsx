import './Modal.css'

import type { MouseEvent } from 'react'
import type { ModalProps } from '../../types/Modal.types'

const Modal = ({ formType, onClose }: ModalProps) => {
  let title = 'Open Uncontrolled Form'
  let logoText = 'useRef'

  if (formType === 'useForm') {
    title = 'Open React Hook Form'
    logoText = 'useForm'
  }

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <div className="app__modal" onClick={handleOverlayClick}>
      <div className="app__modal-content-wrapper">
        <div className="app__modal-header">
          <div className="app__modal-heading">{title}</div>
          <span className="app__modal-logo-text">{logoText}</span>
          <button
            className="app__modal-close"
            title="Close form"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
