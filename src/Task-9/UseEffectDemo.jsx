import { useState, useEffect } from "react";
import "../Styles/UseEffectDemo.css";

function UseEffectDemo() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showStudents, setShowStudents] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStudents([
        { id: 1, name: "Sumanth", course: "React JS" },
        { id: 2, name: "Ravi", course: "Java" },
        { id: 3, name: "Kiran", course: "Python" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    console.log("Students Updated");
  }, [students]);


  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Student Dashboard</h1>

        {loading ? (
          <h2 className="loading">Loading Students...</h2>
        ) : (
          <>
            <p>Total Students: {students.length}</p>

            {showStudents && (
              <div className="student-list">
                
                {students.map((student) => (
                  <div className="student-card" key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.course}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              className="toggle-btn"
              onClick={() => setShowStudents(!showStudents)}
            >
              {showStudents ? "Hide Students" : "Show Students"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UseEffectDemo;