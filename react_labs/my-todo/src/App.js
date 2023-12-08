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
  function deleteToDo(id) {
    let updatedTodos = [...todos]
    .filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }
  
  // Add the toggleComplete code here
    function toggleComplete(id) {
      let updatedTodos = [...todos].map((todo) =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
      setTodos(updatedTodos);
    }
  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handlesubmit}>
<input type ="text" align ="right" id= 'todoAdd'/>
<button type ="submit">Add Todo</button>
</form>
  {todos.map((todo) =>
    <div className="todo" key={todo.id}>
    <div className="todo-text">
      {todo.text}
      <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
    </div>
    <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    </div>
  )}
</div>
);
};
export default App;
