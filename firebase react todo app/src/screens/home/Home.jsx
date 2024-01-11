import { signOut, onAuthStateChanged  } from "firebase/auth";
import {auth} from "../../config/firebase-config/FirebaseConfig"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState('')
  const [update, setUpdate] = useState('')
  const navigate = useNavigate('')


  //onauth state change
  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      console.log(uid);
    } else {
     navigate('login')
    }
  });

  function logoutBtn() {
    console.log('btn called');

    signOut(auth).then(() => {
      navigate('login')
      // Sign-out successful.
      console.log('btn called');
      navigate('login')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
   <>
    <div className="navbar bg-blue-800">
      <div className="flex-1">
        <a className="text-xl text-white font-semibold">React Todo App</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-info" onClick={logoutBtn}>Logout</button>
      </div>
    </div>

    <div className="flex justify-center mt-5">
      <form>
      <label class="form-control w-[340px] max-w-xs mb-5">
                    <input type="email" id="email" placeholder="Enter Todo" class="input border-solid border-2 p-3 border-gray-300 w-full max-w-xs"/>
                </label>
                <button className="btn btn-info" >Add Todo</button>
                

                
      </form>
    </div>
   </>

    
  )

  
  }

export default Home
