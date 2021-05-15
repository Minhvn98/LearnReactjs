import React, { useRef, Fragment } from 'react'
import uiniqid from 'uniqid'

const Input = ({ type, labelText, ...props }) => {
  const id = useRef(uiniqid())

  return (
    <Fragment>
      <label htmlFor={id.current}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea id={id.current} {...props}></textarea>
      ) : (
        <input id={id.current} {...props} />
      )}
    </Fragment>
  )
}

export default Input
