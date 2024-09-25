import React, { useState } from 'react'
import avatar from '../../assets/avatars/avatar8.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmojiEmotions } from "react-icons/md";

const Chat = () => {
    const [open,setOpen]=useState(false)
    const [text,setText]=useState('')
    const handleEmoji=(e)=>{
        setText(prev=>prev+e.emoji)
        setOpen(false)
    }
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='flex justify-between items-center p-2 border-b'>
            <div className='flex gap-2'>
                <img src={avatar} alt="" className='w-12 h-12' />
                <div>
                    <h2 className='text-xl font-bold'>Ram</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className='flex gap-4 text-2xl'>
                <FaPhoneAlt />
                <IoIosVideocam />
                <IoMdInformationCircleOutline />
            </div>
        </div>
        <div className='h-full flex flex-col gap-3 p-4 overflow-auto'>
            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                <img src="https://imgs.search.brave.com/vRVARKONCxcP-A_N_7K4kqhtdUJwca9WW1dXUq-W10Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84MzQ2LzgzNDYw/OTkucG5nP3NlbXQ9/YWlzX2h5YnJpZA" className='rounded-lg h-52' alt="" />
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>

            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <img src="https://imgs.search.brave.com/PBmfXjmdMTjGIiQwJLbRR-fJ4ygTmDauXf_po862xPI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzYwLzAwLzc0/LzM2MF9GXzM2MDAw/NzQ3MF9MZnA5VTRC/WkZBSFllam5MZVFq/eXdlcFFUVFNTM3pG/RS5qcGc" className='rounded-lg h-52' alt="" />
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus deleniti ratione soluta sit veritatis esse libero distinctio natus ad expedita?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam blanditiis, architecto recusandae eos maiores quibusdam?
                    </p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum obcaecati odit assumenda delectus minima aliquam quo sint. Quo consectetur provident libero iure modi quis non nobis suscipit, laboriosam adipisci?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>



            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>

            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus deleniti ratione soluta sit veritatis esse libero distinctio natus ad expedita?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam blanditiis, architecto recusandae eos maiores quibusdam?
                    </p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum obcaecati odit assumenda delectus minima aliquam quo sint. Quo consectetur provident libero iure modi quis non nobis suscipit, laboriosam adipisci?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>

            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>

            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus deleniti ratione soluta sit veritatis esse libero distinctio natus ad expedita?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam blanditiis, architecto recusandae eos maiores quibusdam?
                    </p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='w-1/2 text-end'>
                    <p className='bg-blue-500 inline-block p-3 rounded-lg'>
                        hi how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum obcaecati odit assumenda delectus minima aliquam quo sint. Quo consectetur provident libero iure modi quis non nobis suscipit, laboriosam adipisci?
                    </p>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='w-1/2'>
                    <p className='bg-slate-700 inline-block p-3 rounded-lg'>
                        hi how are you?
                    </p>
                </div>
            </div>
            
        </div>
        <div className='flex text-2xl gap-4 p-10 items-center'>
            <AiFillPicture className='text-4xl' />
            <FaCamera />
            <FaMicrophone />
            <div className='w-full relative'>
                <input
                    type="text"
                    className='w-full p-2 bg-inherit outline-none border rounded-md text-lg'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {/* Flex container for emoji icon and picker */}
                <div className='flex flex-row'>
                    {/* Emoji icon with absolute positioning */}
                    <MdEmojiEmotions
                    className='absolute top-2 right-2 cursor-pointer'
                    onClick={() => setOpen(!open)}
                    />
                    {/* Wrapper around the emoji picker */}
                    <div className='relative w-full'>
                    {open && (
                        <div className='absolute bottom-10 right-0'>
                        <EmojiPicker onEmojiClick={handleEmoji} />
                        </div>
                    )}
                    </div>
                </div>
                </div>
            {/* <RiSendPlaneFill className='text-4xl' /> */}
            <button className='bg-blue-500 px-3 py-1 rounded-md h-full'>Send</button>
        </div>
    </div>
  )
}

export default Chat