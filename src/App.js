import React, {useState} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context.js';
import TodoAdd from './Todo/TodoAdd';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Task '+id},
    {id: 2, completed: false, title: 'Task '+id},
    {id: 3, completed: false, title: 'Task '+id}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="mainView">
        <h1>Todo App SM</h1>
        <TodoAdd onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No Todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
