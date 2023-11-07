import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full bg-amber-950 justify-center items-center gap-6 px-4 py-2 mt-4 text-white text-md'>
        <h1 className='w-28 md:w-auto lg:w-auto md:font-semibold lg:font-semibold md:text-xl lg:text-xl'>Connect with the developer :</h1>
        <a href="https://www.linkedin.com/in/prakarti-goel-2404/"><img src="/icons/linkedin.png" alt="linkedin" width={32} className='my-1 invert md:w-11 lg:w-11'/></a>
        <a href="https://github.com/prakartigoel24"><img src="/icons/github.png" alt="github" width={32} className='my-1 invert md:w-11 lg:w-11'/></a>
        {/* <a href=""><img src="icons/discord.png" alt="discord" width={41} className='m-1'/></a> */}
        <a href="mailto:prakartigoel24@gmail.com"><img src="/icons/email.png" alt="email" width={32} className='my-1 invert md:w-11 lg:w-11'/></a>
    </div>
  )
}

export default Footer