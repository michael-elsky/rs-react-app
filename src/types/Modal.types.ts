export type FormTypes = 'useRef' | 'useForm' | null

export interface ModalProps {
  formType: FormTypes
  onClose: () => void
}

