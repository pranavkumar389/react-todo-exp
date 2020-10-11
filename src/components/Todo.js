import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

  const todosCopy = JSON.parse(JSON.stringify(todos));
  
  const deleteHandler = () => {
    setTodos(todosCopy.filter(el => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, completed: !t.completed }
      }
      return t;
    }))
  }

 return (
   <div className="todo">
     <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
     <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
     <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
   </div>
 );
}

export default Todo;