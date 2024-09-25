import React from 'react'
import './App.css'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'

const App = () => {
  return (
    <div className='flex h-screen dark:text-white'>
      <div className='bg-img relative'>

      </div>
      <div className='absolute flex h-screen dark:text-white w-full bg-shadow '>
        <List />
        <Chat />
        {/* <Detail /> */}
      </div>
    </div>
  )
}

export default App