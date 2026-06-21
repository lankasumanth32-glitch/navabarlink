// export default App;
// import Debugging from "./components1/Debugging";

// function App() {
//   return <Debugging />;
// }

// export default App;

// import Tailwind from "./tailwind";


import { useState } from "react";

import Profilecard from "./Profilecard";
import Practice from "./components1/Practice";

import { Routes, Route } from 'react-router-dom';


import Navbar from "./components1/Navbar";
import Home from "./components1/Home";

import Addstudent from "./components1/Addstudent";

import StudentList from "./components1/StudentList";

import Contact from "./components1/Contact";
import Notfound from "./components1/Notfound";

function App() {
  const [students, setStudents] = useState([]);

  return  (

    <>
    
      <Navbar />

      <Routes>

        <Route path="/profilecard" element={<Profilecard />} />
        <Route path="/practice" element={<Practice />} />

        <Route path="/" element={<Home />} />

        <Route
          path="/addstudent"
          element={
            <Addstudent
              students={students}
              setStudents={setStudents}
            />
          }
        /> 

        <Route
          path="/students"
          element={<StudentList students={students} />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;


