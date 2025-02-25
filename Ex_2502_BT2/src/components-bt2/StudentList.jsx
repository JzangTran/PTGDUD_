import React from 'react';

const StudentList = ({ students, deleteStudent, setEditingStudent, nameRef, scoreRef }) => (
  <ul>
    {students.map(student => (
      <li key={student.id}>
        {student.name} - {student.score}
        <button onClick={() => {
          nameRef.current.value = student.name;
          scoreRef.current.value = student.score;
          setEditingStudent(student);
        }}>Sửa</button>
        <button onClick={() => deleteStudent(student.id)}>Xoá</button>
      </li>
    ))}
  </ul>
);

export default StudentList;