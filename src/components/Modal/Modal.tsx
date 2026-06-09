import './Modal.css'

import { useEffect, type MouseEvent } from 'react'
import type { ModalProps } from '../../types/Modal.types'
import UncontrolledForm from '../Forms/UncontrolledForm'
import { createPortal } from 'react-dom'

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return createPortal(
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

        {formType === 'useRef' && <UncontrolledForm onClose={onClose} />}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
