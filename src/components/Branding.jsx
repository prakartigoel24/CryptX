import React from 'react'

const Branding = () => {
  return (
    <div className='flex items-center'>
        <img src="/logo.png" alt="Logo-Here" height={10} width={75} className='md:w-20 lg:w-20'/>
        <strong className='text-xl sm:text-2xl md:text-2xl lg:text-2xl'>CryptX</strong>
    </div>
  )
}

export default Branding