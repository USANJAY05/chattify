import React, { useState } from 'react'
import './App.css'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'

const App = () => {
  const [i,setI]=useState(false)
  const user=false
  return (
    <div className='flex h-screen dark:text-white'>
      <div className='bg-img relative'>

      </div>
      <div className='absolute flex h-screen dark:text-white w-full bg-shadow '>
          {
            user?(
              <>
                <List />
                <Chat setI={setI} i={i} />
                {i&&<Detail />}
              </>
            ):(<Login />)
          }
          <Notification />
      </div>
    </div>
  )
}

export default App