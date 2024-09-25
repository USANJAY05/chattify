import React from 'react'
import UserInfo from './userInfo/UserInfo'
import ChatList from './ChatList'

const List = () => {
  return (
    <div className='w-96 h-full p-2 overflow-auto flex flex-col gap-3 border-r'>
        <UserInfo />
        <ChatList />
    </div>
  )
}

export default List