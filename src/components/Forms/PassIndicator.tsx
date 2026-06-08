interface PassIndicatorProps {
  strength: {
    hasUpper: boolean
    hasLower: boolean
    hasNumber: boolean
    hasSpecial: boolean
  }
}

const PassIndicator = ({ strength }: PassIndicatorProps) => {
  return (
    <div className={`app__form-pass-Indicator`}>
      <p>{strength.hasUpper ? '✅' : '❌'} Uppercase</p>
      <p>{strength.hasLower ? '✅' : '❌'} Lowercase</p>
      <p>{strength.hasNumber ? '✅' : '❌'} Number</p>
      <p>{strength.hasSpecial ? '✅' : '❌'} Special character</p>
    </div>
  )
}

export default PassIndicator
