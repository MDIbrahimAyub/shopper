import React from 'react'
import './CSS/LoginSingup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsingup-continer1">
      <h1>Sign Up</h1>
      <div className="sinup-container">
        <div className="input-signup">
          <input type="text"  placeholder='Your Name'/>
          <input type="email"  placeholder='Email Address' required/>
          <input type="password"  placeholder=' Password'/>
        </div>
        <div className="singup-btn">
        <button>Continue</button>
        </div>
        <div className="singup-login">
          <p>Already have an account?</p><a href="">Login here</a>
    </div>
          <div className="singup-agree">
            <input type="checkbox" />
            <p>By Continue, I agree the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup