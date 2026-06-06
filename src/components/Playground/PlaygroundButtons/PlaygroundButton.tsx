import type { PlaygroundButtonProps } from '../../../types/PlaygroundButton.type'

const PlaygroundButton = ({
  className,
  title,
  icon,
  logoText,
  heading,
  description,
  patternType,
}: PlaygroundButtonProps) => {
  return (
    <button
      className={`app__playground-btn playground-btn ${className}`}
      type="button"
      title={title}
    >
      <div className="playground-btn__logo">
        <div className="playground-btn__logo-icon">{icon}</div>
        <span className="playground-btn__logo-text">{logoText}</span>
      </div>

      <div className="playground-btn__header">
        <div className="playground-btn__heading">{heading}</div>
        <div className="playground-btn__description">{description}</div>
      </div>

      <div className="playground-btn__pattern-type">{patternType}</div>
    </button>
  )
}

export default PlaygroundButton
