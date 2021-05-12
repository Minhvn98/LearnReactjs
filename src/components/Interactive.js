import React, { Fragment } from 'react'

const InteractiveView = ({ value, onAction, actionText }) => {
  return (
    <Fragment>
      <p>{value}</p>
      <button onClick={onAction}>{actionText}</button>
    </Fragment>
  )
}

export default InteractiveView
