import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config/FirebaseConfig";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    
    function handleLogin(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    
    
    function submit(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
            navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
    }
    return (
  <>
    <div className='text-3xl text-center m-5'>Login</div>
<div className='flex justify-center'>
<div class="mt-5 w-[440px] border-solid border-2 rounded-box p-3 border-gray-300 justify-center flex shadow-lg shadow-gray-500/60 ...">
        <div class=" items-center mt-5">
            <form onSubmit={submit}>
                <label class="form-control w-[340px] max-w-xs mb-5">
                    <input type="email" id="email" placeholder="Enter Email" class="input border-solid border-2 p-3 border-gray-300 w-full max-w-xs" onChange={handleLogin}/>
                </label>
                <label class="form-control w-full max-w-xs mb-5">
                    <input type="password" id="password" placeholder="Enter Password" class="input border-solid border-2 p-3 border-gray-300 w-full max-w-xs" onChange={handlePassword}/>
                </label>
                <div class="btn btn-info w-full mb-5">
                    <button type="submit" class="btn btn-info w-full mb-5">Login</button>
                </div>
            </form>
    <div><p className='text-2xl font-semibold text-center'>OR</p>
    <p className='text-center underline text-blue-600'>  <Link to="*">Not a User</Link> </p>
    </div>
        </div>
    </div>
</div>

  </>
  )
}

export default Login
