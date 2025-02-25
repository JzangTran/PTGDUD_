import React, { useState } from 'react';

const StudentForm = ({ addStudent, updateStudent, editingStudent, nameRef, scoreRef }) => {
  const [errors, setErrors] = useState({ name: '', score: '' });

  const validate = () => {
    let isValid = true;
    let newErrors = { name: '', score: '' };

    const name = nameRef.current.value.trim();
    const score = parseFloat(scoreRef.current.value);

    if (!name) {
      newErrors.name = 'Tên không được để trống';
      isValid = false;
    }

    if (isNaN(score) || score < 0 || score > 10) {
      newErrors.score = 'Điểm phải từ 0 đến 10';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAdd = () => {
    if (validate()) addStudent();
  };

  const handleUpdate = () => {
    if (validate()) updateStudent();
  };

  return (
    <div className="form-container">
      <input ref={nameRef} type="text" placeholder="Tên sinh viên" />
      {errors.name && <p className="error">{errors.name}</p>}
      
      <input ref={scoreRef} type="number" placeholder="Điểm" />
      {errors.score && <p className="error">{errors.score}</p>}
      
      <div className="button-group">
        {editingStudent ? (
          <button onClick={handleUpdate}>Sửa điểm</button>
        ) : (
          <button onClick={handleAdd}>Thêm sinh viên</button>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
