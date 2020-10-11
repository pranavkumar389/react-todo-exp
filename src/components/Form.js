import React from 'react';

const getUniqueId = (strength = 3) => {
  let keyArr = ['todo__'];

  Array.from(Array(strength)).forEach(() => keyArr.push(Math.floor(Math.random() * 1000000)));

  return keyArr.join('');
}

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, filterHandler }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const todoSubmitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos, { text: inputText, completed: false, id: getUniqueId()}
    ]);

    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
    filterHandler();
  }
  return (
    <form>
      <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={todoSubmitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;