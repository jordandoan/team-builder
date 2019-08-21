import React, {useState} from 'react';
import {Route} from "react-router-dom";
import './App.css';

import NavBar from "./components/Nav/NavBar";
import Members from "./components/Form/Members";
import Form from "./components/Form/Form";

function App() {
  let initial = {
    name: "Jordan",
    email: "jordan@email.com",
    role: "Front-end Dev"
  };
  let [members, setMembers] = useState([initial]);
  let [memberToEdit, setEdit] = useState(null);
  let editMember = (editedMember) => {
    setMembers(
      members.map((member,index) => {
        if (index == editedMember.index) {
          return {
            "name": editedMember.name,
            "email": editedMember.email,
            "role": editedMember.role
          }
        } else {
          return member
        }
      })
    );
  }

  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={(props) => <Members {...props} members={members} setEdit={setEdit}/>}/>
      <Route path = "/form" component={(props) => <Form {...props} members={members} setMembers={setMembers} memberToEdit={memberToEdit} editMember={editMember}/>}/>
    </div>
  );
}

export default App;
