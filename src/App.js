import './App.css';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';


import AddTodo from './Components/AddTodo';

import TodoList from './Components/TodoList';


import { TodoContext } from './context/Context';



function App() {

  const [todos, setTodos] = useState([])


  const addTodoCallback = text => {

    setTodos(todos => { return [{ id: uuidv4(), text: text }, ...todos] })
  }


  const removeTodoCallback = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }



  return (
    <div className="container mt-5">

      <TodoContext.Provider value={{ todos, addTodoCallback, removeTodoCallback }}>

        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}



export default App;

