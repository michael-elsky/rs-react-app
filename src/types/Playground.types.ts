import type { ReactNode } from 'react'
import type { FormTypes } from './Modal.types';

export interface PlaygroundButtonProps {
  className: string
  title: string
  icon: ReactNode
  logoText: string
  heading: string
  description: string
  patternType: string
  onClick: () => void
}

export interface PlaygroundButtonsProps {
  onOpen: (formType: FormTypes) => void
}