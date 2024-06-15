import React from 'react'

const Footer = () => {
  return (
    <div className=' md:ml-[240px] h-fit bg-my-gray px-5 md:px-10 mx-4 py-2 flex items-start justify-between flex-wrap'>
        <h1 className='text-xl font-semibold mb-3 border-b border-my-gray pb-4'>
          Done by Ahmad Daher
        </h1>
        <ul className='flex flex-col list-none gap-3'>
            <li className='text-xl'>Social Links</li>
            <li><a className='underline text-blue-400' target='_blank' href="https://github.com/Ahmaddhr1">Github</a></li>
            <li><a className='underline text-blue-400' target='_blank' href="https://www.linkedin.com/in/ahmaddhr1/">LinkedIn</a></li>
            <li><a className='underline text-blue-400' target='_blank' href="https://wa.me/+96176522837">Whatsapp</a></li>
        </ul>
    </div>
  )
}

export default Footer