import React from 'react'

function ClinicButton({ buttonLabel, onClickButton }) {
  return (
    <div>
      <button onClick={onClickButton}>{buttonLabel}</button>
    </div>
  )
}

export default ClinicButton
