import React, { useRef } from 'react';

const InputTodo = ({ inputText, setInputText, handleAddTodo }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    handleAddTodo();
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default InputTodo;
