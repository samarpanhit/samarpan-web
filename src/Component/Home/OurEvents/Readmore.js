import React, { useState } from 'react'

const Readmore = ({children }) => {

  return (
    <div>
      {/* {isReadmore ? children : children.slice(0,20) } */}
      {children.substring(0, 90)}
      ...
      
    </div>
  )
}

export default Readmore