import './App.css';
import React from "react";
import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile';

import { NewRequest } from './pages/Reservation';
import { ChooseRole } from './pages/ChooseRole';
import {SignUp} from "./pages/SignUp";
import { MyRequests } from './pages/MyRequests';
import {useSelector} from 'react-redux';
import { AddEmployee } from './pages/AddEmployee';

import { ConfirmLogin } from './pages/ConfirmLogin';
import { ChangePassword } from './pages/ChangePassword';
import {RequestDoctor} from "./pages/RequestDoctor";
import DoctorHome from './pages/DoctorHome';
import PatientHome from './pages/PatientHome';
import AdminHome from './pages/AdminHome';
import Roles from './pages/Roles';
import AllUsers from './pages/AllUsers';
import { DoctorProfile } from './pages/DoctorProfile';
import { DoctorRequests } from './pages/DoctorRequests';
import { AddPatient } from './pages/AddPatient';
function App() {
  const isDoctor= useSelector(state => { 
  
    return state.user.roleId});

  if (isDoctor===2) {
    
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/confirmLogin' element={<ConfirmLogin/>} />
          <Route path='/addPatient' element={<AddPatient/>} />
          <Route path='/doctorRequests' element={<DoctorRequests/>} />
          <Route path='/request/:restaurantId' element={<RequestDoctor/>} />
          <Route path='/doctorHome' element={<DoctorHome/>} />
          <Route path='/changePassword' element={<ChangePassword/>} />
          <Route path='/doctorProfile' element={<DoctorProfile/>} />
          
        </Routes>
      </Router>
      </div>
    );
  }
  else if( isDoctor===3){

    return (
      <div className="App">
      <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/confirmLogin' element={<ConfirmLogin/>} />
          <Route path='/changePassword' element={<ChangePassword/>} />
          <Route path='/patientHome' element={<PatientHome/>} />
          <Route path='/userProfile' element={<UserProfile/>} />
          <Route path='/myrequest' element={<MyRequests/>} />
         <Route path='/newRequest' element={<NewRequest/>} />
        </Routes>
      </Router>
      </div>
    );
  }else if( isDoctor===1){


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/confirmLogin' element={<ConfirmLogin/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/roles' element={<Roles/>} />
        <Route path='/role' element={<ChooseRole/>} />
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/changePassword' element={<ChangePassword/>} />
        <Route path='/adminHome' element={<AdminHome/>} />
        <Route path='/roles' element={<AdminHome/>} />
        <Route path='/users' element={<AllUsers/>} />
      
      </Routes>
    </Router>
    </div>
  );
  }

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/confirmLogin' element={<ConfirmLogin/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/role' element={<ChooseRole/>} />
        <Route path='/changePassword' element={<ChangePassword/>} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
