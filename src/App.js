import React, {useState} from 'react';
import {Route} from "react-router-dom";
import './App.css';

import NavBar from "./components/Nav/NavBar";
import Members from "./components/Form/Members";
import Form from "./components/Form/Form";

function App() {
  let [members, setMembers] = useState([]);
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={(props) => <Members {...props} members={members}/>}/>
      <Route path = "/form" component={(props) => <Form {...props} members={members} setMembers={setMembers} />}/>
    </div>
  );
}

export default App;
