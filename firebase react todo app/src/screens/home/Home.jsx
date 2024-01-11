import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase-config/FirebaseConfig"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Home = () => {

  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])
  const navigate = useNavigate('')



  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    if (text !== "") {
      todo.push(text)
      setTodo([...todo]);
      console.log(todo);
      setText ("")
    }else{
      alert('Please enter something')
    }
  }
  
 //function delete Todo



function deleteTodo(index) {
  const deleteTodo = [...todo];
  deleteTodo.splice(index, 1)
  setTodo(deleteTodo)

  
}
  
 //function Edit Todo

function updateTodo(index) {
  const updatedText = prompt('Update Todo', todo[index]);
  if (updatedText === '') {
    alert('Please enter something')
    
  }else{
    const updatedTodos = [...todo];
    updatedTodos[index] = updatedText;
    setTodo(updatedTodos)
  }
}

  //onauth state change
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      console.log(uid);
    } else {
      navigate('login')
    }
  });

  //logout btn

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
          <button className="btn btn-info mr-5" onClick={logoutBtn}>Logout</button>
        </div>
      </div>

      <div className="flex justify-center mt-5">
      <form onSubmit={addTodo}>
      <div className="flex">
      <input type="text" id="email" placeholder="Enter todo" class="input border-solid border-2 p-3 border-gray-300 w-[20rem] max-w-xs" onChange={(e)=>setText(e.target.value)} value={text} />
      <button type="submit" class="btn btn-info mb-5 ml-3 w-[65px]">Add todo</button>
     </div>
      </form>
      <hr />
      </div>

       <ul >
        {todo.map((item, index)=>{
          return <li key={index}>{item}
          <button className='dlt-btn rounded-lg ml-[20rem] py-1  px-3 bg-red-500 text-white' onClick={()=>deleteTodo(index)}><i class="fa-solid fa-trash-arrow-up"></i> </button>
          <button className='edit-btn rounded-lg py-1  px-3 bg-blue-500 text-white ml-2' onClick={()=>updateTodo(index)}><i class="fa-solid fa-pencil"></i> </button><br></br><br /><hr/>
          </li>
        })}
      </ul> 
    </>


  )


}

export default Home

// onChange={(e)=>setText(e.target.value)} value={text}
