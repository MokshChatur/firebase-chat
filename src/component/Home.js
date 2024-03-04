import React from 'react'
import Sidebar from './chatBox/Sidebar'
import Chats from './chatBox/Chatbox'

function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chats/>
        </div>
    </div>
  )
}

export default Home
