import React, { useState, useEffect, useRef, useMemo, useReducer } from 'react';
import { studentReducer } from './studentReducer';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const StudentManager = () => {
  const [students, dispatch] = useReducer(studentReducer, []);
  const nameRef = useRef(null);
  const scoreRef = useRef(null);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    dispatch({ type: 'SET_STUDENTS', payload: storedStudents });
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    const name = nameRef.current.value.trim();
    const score = parseFloat(scoreRef.current.value);
    if (name && !isNaN(score)) {
      dispatch({ type: 'ADD_STUDENT', payload: { id: Date.now(), name, score } });
      nameRef.current.value = '';
      scoreRef.current.value = '';
    }
  };

  const updateStudent = () => {
    const name = nameRef.current.value.trim();
    const score = parseFloat(scoreRef.current.value);
    if (name && !isNaN(score)) {
      dispatch({ type: 'UPDATE_STUDENT', payload: { id: editingStudent.id, name, score } });
      setEditingStudent(null);
      nameRef.current.value = '';
      scoreRef.current.value = '';
    }
  };

  const deleteStudent = (id) => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
  };

  const averageScore = useMemo(() => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.score, 0);
    return (total / students.length).toFixed(2);
  }, [students]);

  return (
    <div>
      <h2>Quản lý sinh viên</h2>
      <StudentForm 
        addStudent={addStudent} 
        updateStudent={updateStudent} 
        editingStudent={editingStudent} 
        nameRef={nameRef} 
        scoreRef={scoreRef} 
      />
      <h3>Danh sách sinh viên</h3>
      <StudentList 
        students={students} 
        deleteStudent={deleteStudent} 
        setEditingStudent={setEditingStudent} 
        nameRef={nameRef} 
        scoreRef={scoreRef} 
      />
      <h3>Điểm trung bình: {averageScore}</h3>
    </div>
  );
};

export default StudentManager;