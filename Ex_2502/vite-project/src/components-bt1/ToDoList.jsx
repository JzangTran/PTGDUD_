import React from 'react';
import ToDoCard from './ToDoCard';

const ToDoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoCard
          key={index}
          todo={todo}
          index={index}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
