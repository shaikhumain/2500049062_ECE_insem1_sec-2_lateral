import React from 'react';

// Student Component
function Student(props) {
  return (
    <div>
      <h2>Student Attendance Details</h2>
      <p>Student Name: {props.name}</p>
      <p>Student ID: {props.id}</p>
      <p>Course: {props.course}</p>
      <p>Attendance: {props.attendance}%</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <h1>Student Attendance Tracker</h1>

      <Student
        name="Shaik humain"
        id="2500049062"
        course="Full Stack Web Development"
        attendance="90"
      />
    </div>
  );
}

export default App;