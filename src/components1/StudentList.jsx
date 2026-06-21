import "../Styles/StudentList.css";

function StudentList({ students }) {
  return (
    <div className="studentlist-container">
      <h1 className="studentlist-title">
        Student List
      </h1>

      {students.length === 0 ? (
        <p className="empty-message">
          No students added yet.
        </p>
      ) : (
        <div className="students-grid">
          {students.map((student, index) => (
            <div key={index} className="student-card">
              <h3>{student.name}</h3>

              <p>Age: {student.age}</p>

              <p>Gender: {student.gender}</p>

              <p>Email: {student.email}</p>

              <p>DOB: {student.dob}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;