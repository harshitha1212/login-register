
import React, { useState } from 'react';

import './LoginRegister.css'
import { FaUser ,FaLock,FaEnvelope} from "react-icons/fa";

const LoginRegister = () => {
    
    const [action, setAction] = useState('');

    const registerlink = () =>{
        setAction(' active');
    };

    const loginlink = () =>{
        setAction('');
    };
  return (
    
    <div className={'wrapper${action}'}>
        
    <div    className="form-box Login">
        <form action="">
            
            <h2>RECRUTIMENT PORTAL<br></br>Login</h2>
            <div className="input-box">
                <input type="text" 
                placeholder='Username' required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password"
                placeholder='Password' required></input>
                <FaLock  className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" /
                >Remember me</label>
                <a href="#">Forgot Pasword?</a>
            </div>
            <button type="Submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#" onClick={registerlink}>Sign in</a></p>
            </div>
        </form>

    </div>
    <div    className="form-box Signin">
        <form action="">
            
            <h2>Sign in</h2>
            <div className="input-box">
                <input type="text" 
                placeholder='Username' required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="email" 
                placeholder='Email' required/>
                <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
                <input type="password"
                 placeholder='Password' id="psw"
                name="psw" pattern="(?=.*\d)(?=.*[a-z](?=.*[A-Z]).{8}" title="Must contain atleast one number and one uppercase and lowercase letter,and atleast 8 0r more characters" required/>
                
                <FaLock  className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" /
                >I agree to the terms and conditions</label>
                
            </div>
            <button type="Submit">Sign in</button>
            <div className="register-link">
                <p>Already have an account? <a href="#" onClick={loginlink }>Login</a></p>
            </div>
        </form>

    </div>
    </div>
  )
}

export default LoginRegister
