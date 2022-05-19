import React, {memo} from 'react'


export default memo( function Question({children}) {

  return (
    <div className='screen__questionText'>{children}</div>
  )
})
