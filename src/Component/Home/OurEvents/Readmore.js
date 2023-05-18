import React, { useState } from 'react'

const Readmore = ({children }) => {

  return (
    <>
      {/* {isReadmore ? children : children.slice(0,20) } */}
      {children.substring(0, 90)}
      ...
      
    </>
  )
}

export default Readmore