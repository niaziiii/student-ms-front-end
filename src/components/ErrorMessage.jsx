import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className='fixed bg-slate-900 w-full top-0 p-4 text-white text-center'>
      <h2 className='font-bold'>{message}</h2>
    </div>
  )
}

export default ErrorMessage
