import React from 'react';

const ToDoCard = ({ todo, index, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li className="todo-card">
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => handleToggleTodo(index)} 
        className="checkbox"
      />
      <span
        className="todo-text"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};

export default ToDoCard;
