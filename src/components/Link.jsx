import React from 'react'

const Link = ({ link, title, img }) => {
  return (
    <>
      <a className='border px-6 py-2 rounded-full flex flex-row items-center z-10' href={link} target='_blank' rel='noreferrer'>
        <span className='flex-grow'>{title}</span>
        <img className='w-5' src={img} />
      </a>
    </>
  )
}

export default Link
