import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Note} from "./models/notes.model";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header";
import {NoteLists} from "./components/NoteLists";
import CreateNotes from "./components/CreateNotes";
function App() {
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toString(),
    text:"dsdf",
    title:"ghfd",
    color:'green',
    date:(new Date).toString()
  }])
  return (
    <div className="App">
       <Header />
      <NoteLists notes={notes} setNotes={setNotes}/>
      <CreateNotes   notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
