import './App.css';
import Header from './MyComponents/Header.js'
import { Footer } from './MyComponents/Footer.js'
import { Todos } from './MyComponents/Todos.js';
import About from './MyComponents/About.js';
import { Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") == null)
  {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete = (todo) => {
    console.log("I am deleting", todo);
    // Deleting this way in React doesn't work
    // let index = todos.indexOf(todos);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title) => {
    console.log("Todo task is getting added" , title);
    let sno;
    if(todos.length === 0)
    {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);

    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
      <Header title="My ToDo List" searchBar={false} />
      <Routes>
      <Route  path="/" render={()=>{
        return(
        <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        </>)
      }}/>
          {/* </Route> */}
          <Route  path="/about" element={<About />} />
        </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
// React is single page application