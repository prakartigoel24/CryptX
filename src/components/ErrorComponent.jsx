import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = ({error}) => {
  return (
    <div className='flex flex-col justify-center items-center my-40 bg-slate-200 p-8'>
       <h1 className='text-6xl font-extrabold text-amber-950 py-5'>Oops!</h1>
       <h1 className='text-4xl pb-4 font-medium text-slate-600'>{error.message}</h1>
       <Link to="/" className='bg-black text-white p-3 rounded-2xl drop-shadow-lg hover:translate-y-0.5 transition'>Go to Home</Link>
    </div>
  )
}

export default ErrorComponent