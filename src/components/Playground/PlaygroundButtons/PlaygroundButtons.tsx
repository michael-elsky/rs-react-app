import './PlaygroundButtons.css'

import PlaygroundButton from './PlaygroundButton'
import type { PlaygroundButtonsProps } from '../../../types/Playground.types';

const uncontrolledIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    data-fg-d3bl34="0.8:1.8850:/src/app/App.tsx:91:17:3928:52:e:ClipboardList::::::CPfu"
    data-fgid-d3bl34=":ro:"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M12 11h4"></path>
    <path d="M12 16h4"></path>
    <path d="M8 11h.01"></path>
    <path d="M8 16h.01"></path>
  </svg>
)

const controlledIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    data-fg-d3bl48="0.8:1.8850:/src/app/App.tsx:116:17:5397:45:e:Zap::::::Cp7"
    data-fgid-d3bl48=":r12:"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
  </svg>
)

const PlaygroundButtons = ({ onOpen }: PlaygroundButtonsProps) => {
  return (
    <div className="app__playground__buttons-wrapper">
      <PlaygroundButton
        className="app__playground-btn--uncontrolled"
        title="Open Uncontrolled Form"
        icon={uncontrolledIcon}
        logoText="useRef"
        heading="Open Uncontrolled Form"
        description="Uses React refs and native DOM access. Manual validation runs on
            submit. Great for simple forms with minimal re-renders."
        patternType="Uncontrolled pattern"
        onClick={() => onOpen('useRef')}
      />

      <PlaygroundButton
        className="app__playground-btn--controlled"
        title="Open React Hook Form"
        icon={controlledIcon}
        logoText="useForm"
        heading="Open React Hook Form"
        description="Uses the react-hook-form library for declarative validation. Field-level errors show on blur with minimal boilerplate."
        patternType="Hook Form pattern"
        onClick={() => onOpen('useForm')}
      />
    </div>
  )
}

export default PlaygroundButtons
