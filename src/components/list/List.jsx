import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './ChatList'

const List = () => {
  return (
    <div className='w-96 h-screen p-2  flex flex-col gap-3 border-r border-gray-600'>
        <UserInfo />
        <ChatList />
    </div>
  )
}

export default List