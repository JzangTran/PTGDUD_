import React, { useState, useEffect, useMemo, useReducer } from 'react';
import InputTodo from './InputTodo';
import Filter from './Filter';
import ToDoList from './ToDoList';
import './styles.css'

// Reducer để xử lý các hành động như thêm, xoá và thay đổi trạng thái công việc
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.index);
    case 'INIT_TODOS':
      return action.todos;
    default:
      return state;
  }
};

const App = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  
  const [inputText, setInputText] = useState('');
  
  // State để quản lý filter
  const [filter, setFilter] = useState('all');

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'INIT_TODOS', todos: storedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch({ type: 'ADD_TODO', text: inputText });
      setInputText('');
    }
  };

  
  const handleDeleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', index });
  };

  
  const handleToggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', index });
  };

  
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'uncompleted':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <div>
      <h1>To-Do List</h1>
      
      <InputTodo inputText={inputText} setInputText={setInputText} handleAddTodo={handleAddTodo} />
      
      <Filter filter={filter} setFilter={setFilter} />
      
      <ToDoList
        todos={filteredTodos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
