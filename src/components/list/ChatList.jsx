import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import avatar from '../../assets/avatars/avatar8.png'

const ChatList = () => {
    const [add,setAdd]=useState(true)
  return (
    <div className='h-full flex flex-col gap-3'>
        <div className='flex relative items-center'>
            <IoIosSearch className='absolute text-2xl top-2 left-1' />
            <input placeholder="Search" type="text" className='pl-8 p-1 text-lg bg-inherit border outline-none rounded-md' />
            {add?<IoIosAdd className='text-3xl font-bold' onClick={()=>setAdd(false)} />:<FaMinus className='text-3xl' onClick={()=>setAdd(true)} />
            }
        </div>
        <div className='overflow-auto h-full'>
            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>
            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>
            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>
            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>
            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>

            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>            <div className='flex rounded-lg gap-3 items-center p-1 hover:bg-slate-800'>
                <img src={avatar} alt="" className='w-10 h-10'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Ram</h3>
                    <p>how are you..</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChatList