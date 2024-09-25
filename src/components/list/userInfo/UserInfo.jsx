import React from 'react'
import { FaEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosVideocam } from "react-icons/io";
import avatar from '../../../assets/avatars/avatar0.png'

const UserInfo = () => {
  return (
    <div className='flex items-center text-2xl justify-between py-3'>
    <div className='flex items-center gap-1'>
        <img src={avatar} alt="" width={40} />
        <h2 className='font-bold text-xl'>Sanjay U</h2>
    </div>
    <div className='flex gap-4'>
        <HiDotsHorizontal />
        <IoIosVideocam />
        <FaEdit />
    </div>
</div>
  )
}

export default UserInfo