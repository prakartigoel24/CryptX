import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full bg-amber-950 justify-center items-center gap-10 px-2 py-2 mt-4 text-white text-xl'>
        <h1>Connect with the developer : </h1>
        <a href="https://www.linkedin.com/in/prakarti-goel-2404/"><img src="icons/linkedin.png" alt="linkedin" width={41} className='m-1 invert'/></a>
        <a href="https://github.com/prakartigoel24"><img src="icons/github.png" alt="github" width={41} className='m-1 invert'/></a>
        {/* <a href=""><img src="icons/discord.png" alt="discord" width={41} className='m-1'/></a> */}
        <a href="mailto:prakartigoel24@gmail.com"><img src="icons/email.png" alt="email" width={41} className='m-1 invert'/></a>
    </div>
  )
}

export default Footer