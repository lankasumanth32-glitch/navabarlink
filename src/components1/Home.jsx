import { Link } from "react-router-dom";


import "../Styles/Home.css";
function Home() {
 
  
  return (

    <div className="home-container">
      <div className="hero-section">
        <h1> Student Management System</h1>

        <p>
  Welcome to the Student Management System. Easily register
  students, manage their information, and keep all records
  organized in one place.
</p>


<Link to="/addstudent" className="hero-btn">
  Add Student
</Link>
      </div>

      <div className="features">
        <div className="feature-card"> 
          <h2> Add Students</h2>
          <p>Register new students with complete details.</p>
        </div>

        <div className="feature-card">
          <h2> Student List</h2>
          <p>View all registered students in one place.</p>
        </div>

        <div className="feature-card">
          <h2> Contact</h2>
          <p>call and communicate to the team will reach out to you</p>
        </div>
      </div>
    </div>
  );
}

export default Home;