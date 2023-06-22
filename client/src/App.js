import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/feedback.com/navbar/navbar.component";
import NavbarUser from "./components/user.com/navbar/navbar.component";

import AddFeedback from './components/feedback.com/feedback/add-feedback.component';
import FeedbackList from './components/feedback.com/feedback/feedback-list.component.js.js';
import EditFeedback from './components/feedback.com/feedback/edit-feedback.component';
import FeedbackListUser1 from './components/feedback.com/feedback/feedback-list-student.component';
import FeedbackListAdmin from './components/feedback.com/feedback/feedback-list-admin.component';
import AddResponse from './components/feedback.com/feedback/add-response.component';


import AddUser from './components/user.com/feedback/add-feedback.component';
import UserList from './components/user.com/feedback/feedback-list.component.js';
import EditUser from './components/user.com/feedback/edit-feedback.component';
import FeedbackListUser11 from './components/user.com/feedback/feedback-list-admin.component';
import FeedbackListAdmin1 from './components/user.com/feedback/feedback-list-student.component';
import AddResponse1 from './components/user.com/feedback/add-response.component';
import { Component } from 'react';


function App() {
  return (
    
    <div>
      <Navbar />
      <NavbarUser />
    
      <Router>
       

        <Routes>

        <Route exact path="/addFeedback" element={<AddFeedback/> } />
        <Route exact path="/listFeedback" element={<FeedbackList/> } />
        <Route exact path="/updateFeedback" element={<EditFeedback/> } />
        <Route exact path="/myFeedback" element={<FeedbackListUser1/> } />
        <Route exact path="/adFeedback" element={<FeedbackListAdmin/> } />
        <Route exact path="/addResponse" element={<AddResponse/> } />

        <Route exact path="/addUser" element={<AddUser/> } />
        {/* <Route exact path="/listUser" element={<UserList/> } /> */}
        <Route exact path="/updateUser" element={<EditUser/> } />
        <Route exact path="/myUser" element={<FeedbackListUser11/> } />
        <Route exact path="/adUser" element={<FeedbackListAdmin1/> } />
        <Route exact path="/addResponse" element={<AddResponse1/> } />

        <Route exact path="/nav" element={Navbar } />
     

          
          
        </Routes>
      </Router>

    </div>
  );

}

export default App;
