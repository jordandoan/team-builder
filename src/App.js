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
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={(props) => <Members {...props} members={members}/>}/>
      <Route path = "/form" component={(props) => <Form {...props} members={members} setMembers={setMembers} />}/>
    </div>
  );
}

export default App;
