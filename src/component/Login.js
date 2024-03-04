import React from 'react'
import add from "../image/avatar.png"

function Login() {
  return (
    <>
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Moksh Chat box</span>
            <span className='title'>Login</span>
            <form className='form-signup'>
            <input className='input' type='email' placeholder='Enter your email'/>
            <input className='input'type='password' placeholder='Enter your Password'/>
            
            <button className='signup'>Sign In</button>
            </form>
            <p>You don't have an account ? or Register</p>
        </div>
      
    </div>
    </>
  )
}

export default Login
