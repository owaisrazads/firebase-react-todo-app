import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config/FirebaseConfig";


const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleEmailValue(e) {
        setEmail(e.target.value)
    }
    function handlePasswordValue(e) {
        setPassword(e.target.value)
    }
    function submit(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         
         
            const user = userCredential.user;
            console.log(user);
            navigate('login')

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Already register')
          // ..
        });
    }

  return (
  <>
      <div className='text-3xl text-center m-5'>Register</div>
<div className='flex justify-center'>
<div class="mt-5 w-[440px] border-solid border-2 rounded-box p-3 border-gray-300 justify-center flex shadow-lg shadow-gray-500/60 ...">
        <div class=" items-center mt-5">
            <form onSubmit={submit}>
                <label class="form-control w-[340px] max-w-xs mb-5">
                    <input type="email" id="email" placeholder="Enter Email" class="input border-solid border-2 p-3 border-gray-300 w-full max-w-xs" onChange={handleEmailValue} />
                </label>
                <label class="form-control w-full max-w-xs mb-5">
                    <input type="password" id="password" placeholder="Enter Password" class="input border-solid border-2 p-3 border-gray-300 w-full max-w-xs " onChange={handlePasswordValue}/>
                </label>
                <div class="btn btn-info w-full mb-5">
                    <button type="submit" class="btn btn-info w-full mb-5">Register</button>
                </div>
            </form>
    <div><p className='text-2xl font-semibold text-center'>OR</p>
    <p className='text-center underline text-blue-600'>  <Link to="login">Already a User</Link> </p>
    </div>
        </div>
    </div>
</div>
  </>
  )
}

export default Register
