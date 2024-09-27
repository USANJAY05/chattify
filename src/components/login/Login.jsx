import React from 'react'
import avatar from '../../assets/avatars/avatar8.png'


const Login = () => {
  return (
    <section className='flex w-full p-4 gap-3'>
        <div className=' w-1/2 p-4 text-center flex flex-col gap-5 text-xl border-r items-center pt-20'>
            <h2>Login</h2>
            <form action="" className='flex flex-col gap-4 items-center'>
                <img src={avatar} className="w-20" />
                <input type="text" required placeholder="Email" className='p-2 rounded bg-inherit border'/>
                <input type="password" required placeholder="Password" className='p-2 rounded bg-inherit border' />
                <button className='bg-blue-400 p-2 rounded w-full'>Login</button>
            </form>
        </div>
        <div className=' w-1/2 p-4 text-center flex flex-col gap-3 text-xl items-center pt-20'>
            <h2>Signup</h2>
            <form action="" className='flex flex-col gap-4 items-center'>
                <label htmlFor="logo">
                    <div className='w-20 h-20 rounded-[100px] bg-red-300 flex items-center justify-center'> upload</div>
                    {/* <img src={avatar} className="w-20" /> */}
                    <input id='logo' type="file" placeholder="img" className='hidden'  />
                </label>
                <input type="text" placeholder="UserName" className='p-2 rounded bg-inherit border' />
                <input type="text" placeholder="Email" className='p-2 rounded bg-inherit border'  />
                <input type="password" placeholder="Password" className='p-2 rounded bg-inherit border' />
                <button className='bg-blue-400 p-2 rounded w-full'>Login</button>
            </form>
        </div>


    </section>
  )
}

export default Login