import React from 'react'
import cam from ".././../image/avatar.png"
import Messages from './Messages'
import Input from './Input'
function Chatbox() {
  return (
    <>
    <div className='chats'>
      <div className='chatInfor'>
        <span className='names1'>Jane</span>
        <div className='chatIcons'>
          <img style={{height: "20px", width: "20px", padding: "20px", cursor: "pointer"}} alt='' src={cam}/>
          <img style={{height: "20px", width: "20px",cursor: "pointer", padding: "20px"}} alt='' src={cam}/>
          <img style={{height: "20px", width: "20px",cursor: "pointer", padding: "20px"}}  alt='' src={cam}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
    </>
  )
}

export default Chatbox
