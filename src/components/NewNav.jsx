import React from 'react'

function NewNav() {
  return (
    <div className='w-full h-[15vh] flex'>
      <div className='Logo w-[30%] h-full bg-yellow-100'></div>
      <div className='Navigation w-[70%] h-full bg-blue-400 flex flex-col'>
        <div className='Top-Bar w-full h-[50%] bg-red-100'></div>
        <div className='Main-Navigation w-full h-[50%] bg-red-500'></div>
      </div>

    </div>
  )
}

export default NewNav
