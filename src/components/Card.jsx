import React from 'react'

function Card({ text, author }) {
  return (
    <div className='h-25 w-96 bg-teal-600 rounded m-3 p-4 text-white shadow-lg'>
      <div className='font-semibold text-xl'>
        {text}
      </div>
      <div className='mt-3 flex justify-start font-bold text-xl text-slate-300'>
        {author}
      </div>
    </div>
  )
}

export default Card