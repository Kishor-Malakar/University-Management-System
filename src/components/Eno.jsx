import React, { useState } from 'react'
import './Eno.css'
import {BiLogIn} from 'react-icons/bi'
import {Result} from './'
export default function Eno() {
    const [pass, setPass] = useState('');    
    const [no, setNo] = useState('');    
    const hideLink = () => {
        const hide = document.querySelector('.l_main');
        hide.style.position = 'relative';
      }
    
  return (
   <>
    <div id="loginn_main">
     <div className='l_main'>
        <div className='l_child'>
            <form className='login_form'>
                <div className="r_icon"><BiLogIn/></div>
                 <label htmlFor='Eno'>Enrollment Number</label>
                <input value={no} onChange={(e) =>setNo(e.target.value)}  type="text" placeholder='No' id='no' name='no'/>
                 <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) =>setPass(e.target.value)}  type="password" placeholder='Password' id='password' name='password'/>
                <a href="#r_main" onClick={hideLink}>Login</a>
            </form>
        </div>
    </div>
   </div>
   <Result prop={pass} prop2={no}/>
   </>
  )
}
