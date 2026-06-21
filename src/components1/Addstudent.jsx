import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Styles/AddStudent.css";
function Addstudent({ students, setStudents }) {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [age, setAge] = useState("");
const [gender, setGender] = useState("");
const [dob, setDob] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
   


        if (name.trim() === "") {
            setError("Name is required");
            return;
        }
        if (name.trim() === "") {
            setError("Name is required");
            return;
        }

if (age === "") {
  setError("Age is required");
  return;
}

if (age < 18) {
  setError("Age must be 18 or above");
  return;
}

if (dob === "") {
  setError("Date of Birth is required");
  return;
}

if (gender === "") {
  setError("Please select gender");
  return;
}
        

        if (email.trim() === "") {
            setError("Email is required");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError("Enter a valid email address");
            return;
        }
        
          

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!agree) {
            setError("Please accept Terms & Conditions");
            return;
        }
const newStudent = {
  name,
  age,
  dob,
  gender,
  email,
};

setStudents([...students, newStudent]);
        setSuccess(`Welcome ${name}! Registration Successful `);

        setName("");
setAge("");
setDob("");
setGender("");
setEmail("");
setPassword("");
setConfirmPassword("");
setAgree(false);
    };

  return (


     <div className="register-container">
            <div className="register-card">

                <h1 className="register-title">
                    Registration Form
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                    />

                  <input
  type="number"
  placeholder="Enter Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
  className="register-input"
/>

<input
  type="date"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  className="register-input"
/>



<div className="gender-box">
  <label>
    <input
      type="radio"
      value="Male"
      checked={gender === "Male"}
      onChange={(e) => setGender(e.target.value)}
    />
    Male
  </label>

  <label>
    <input
      type="radio"
      value="Female"
      checked={gender === "Female"}
      onChange={(e) => setGender(e.target.value)}
    />
    Female
  </label>
</div>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />

 <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="register-input"
  />

  <span
    className="eye-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEye /> : <FaEyeSlash />}
  </span>
</div>


<div className="password-container">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="register-input"
  />

  <span
    className="eye-btn"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
  >
    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
  </span>
</div>         
                   
                    <div className="checkbox-box">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />

                        <label>
                            I agree to Terms & Conditions
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Register
                    </button>

                </form>

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="success-message">
                        {success}
                    </p>
                    
                )}

            </div>
        </div>
  );
}

export default Addstudent;