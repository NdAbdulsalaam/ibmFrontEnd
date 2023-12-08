import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  
  // Add the handlesubmit code here
  function handlesubmit(e) {
    e.preventDefault();

    let todo = document.getElementById("todoAdd").value
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo))
    } else {
      alert("Enter a valid task")
    }
    document.getElementById("todoAdd").value = ""
  }
  
  // Add the deleteToDo code here

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handlesubmit}>
<input type ="text" align ="right" id= 'todoAdd'/>
<button type ="submit">Add Todo</button>
</form>
  {todos.map((todo) =>
  <ul className="todo" key={todo.id}>
    <li className="todo-text">{todo.text}</li>
  </ul>
  )}
</div>
);
};
export default App;
