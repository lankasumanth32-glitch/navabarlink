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


// /navigation 
// import Navbar from "./components1/Navbar";
import Home from "./components1/Home";

import AddStudent from "./components1/AddStudent";
import NotFound from "./components1/NotFound";

import StudentList from "./components1/StudentList";

import Contact from "./components1/Contact";
// Navigation

// import USE from "./Task-9/USE";
import UseEffectDemo from "./Task-9/UseEffectDemo";
import Child from "./Task-9/Child";
import "./Styles/UseEffectDemo.css";

//Fetch Api 
import FetchAPI from "./Task-8/FetchAPI";
import "./Styles/FetchAPI.css";

//Axios API
import AxiosFetch from"./Task-8/AxiosFetch";
import "./Styles/AxiosFetch.css";

function App() {
  const [students, setStudents] = useState([]);

  return  (

    <>
     {/* <USE />  */}
       {/* <Navbar /> */}
    
      <Routes>
         
         <Route path="/profilecard" element={<Profilecard />} />
        <Route path="/practice" element={<Practice />} /> 
       

        {/* navigation */}
         <Route path="/" element={<Home />} />
        <Route
          path="/addstudent"
          element={
            <AddStudent
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
        <Route path="*" element={<NotFound />} />
         
         {/* navigation */}



         
           {/* Task-9 */}
     <Route path="/useeffectdemo" element={<UseEffectDemo />} />
       <Route path ="/child" element={<Child />} /> 
      


         {/* <Route path="/use" element={<USE />} /> */}
             
               {/* Task-9 */}


{/* 
    Fetch Api  */}

    <Route path="/fetchapi" element={<FetchAPI/>} />
    {/* AxiosFetch */}
    <Route path="/AxiosFetch" element={<AxiosFetch/>} />

      </Routes>
   
    
    </>



  );
}

export default App;


