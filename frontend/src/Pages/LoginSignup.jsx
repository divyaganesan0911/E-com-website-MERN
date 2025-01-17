import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsinup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your E-Mail Address' />
          <input type="password" placeholder='Your Password' />
          <button>Continue</button>
          <p className="loginsignup-login"> Already have an  account?<span>Login here</span> </p>
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing,I agree to the terms of use & privacy policy</p>
          
        </div>
      </div>
      
    </div>
  )
}
export default LoginSignup