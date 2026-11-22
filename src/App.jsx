function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Attendance Details</h2>
      <p>Student Name: {props.name}</p>
      <p>Student ID: {props.id}</p>
      <p>Course: {props.course}</p>
      <p>Attendance: {props.attendance}%</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
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