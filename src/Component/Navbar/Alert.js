import React from 'react'

const Alert = () => {
  return (
    <div className="alert alert-warning alert-dismissible fade show m-0" role="alert">
      This site is now in developing stage
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert