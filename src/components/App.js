
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const {todo,setTodo}=useState("");
  const {todoList,setTodoList}=(["Task 1","Task 2"]);

  function applyAddTodo(e){
    e.preventDefault()
    setTodoList([...todoList,todo])
    setTodo("")
  }

  function handleDelete(index) {
    console.log("item to be deleted" ,index)
    setTodoList(todoList.filter((value,position)=>position!==index))
  }
  
  
  
  return (
   <div>
     <form onSubmit={applyAddTodo}>
       <input type="text" placeholder="Enter Task"
       onChange={(e) => setTodo(e.target.value)}
       value={todo}
       />
       <button type="submit">Add Todo</button>
     </form>

     {
      todoList.map((item , index) => (
        
        <ul>
          <li>
            {item}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        </ul>
        
      ))
     }
   </div>
   
  )
}

export default App
