import React from 'react'
import avatar from '../../assets/avatars/avatar8.png'

const Detail = () => {
  return (
    <div className='w-96 border-l flex flex-col items-center relative'>
      <div className='flex w-full flex-col items-center border-b p-4'>
        <img src={avatar} alt="" className='w-36' />
        <h2 className='text-2xl font-bold'>Sanjay U</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className='h-full overflow-auto w-full'>
        <details className='w-full p-2 hover:cursor-pointer'>
          <summary>chatSettings</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi.</p>
        </details>

        <details className='w-full p-2 hover:cursor-pointer'>
          <summary>chatSettings</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi.</p>
        </details>

        <details className='w-full p-2 hover:cursor-pointer'>
          <summary>chatSettings</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi.</p>
        </details>

        <details className='w-full p-2 hover:cursor-pointer'>
          <summary>chatSettings</summary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi.</p>
        </details>
      </div>
      <div className='w-full p-3'>
        <button className='bg-red-600 w-full p-2 rounded-lg hover:bg-red-800 bottom-5'>Block User</button>
      </div>
    </div>
  )
}

export default Detail