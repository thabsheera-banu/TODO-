import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];
  const validation = (e) =>{
    e.preventDefault();
    if (!toDo){

      return;
    }
    const whitespace =toDo.trim()
    if(!whitespace){
      alert("Enter a valid string")
      return;
    }
    const duplicateElement =toDos.find(duplicate=>duplicate.text===toDo);
    if(duplicateElement){
       alert("This item already exist")
      return;
    }
    setTodos([...toDos,{id:Date.now(),text:toDo , status:false}]);
    setTodo('');
  };
  console.log(toDos);
  return (
    
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <form onSubmit={validation}>
      <div className="input">
        <input value={toDo}  onChange={(e)=>setTodo(e.target.value)}     type="text" placeholder="🖊️ Add item..." required />
        <button type='submit'>  <i   className="fas fa-plus"></i> </button>
      </div>
      </form>
      <div className="todos">
        { toDos.map((obj)=>{
        return(<div className="todo">
          <div className="left">
            <input onChange={
              (e)=>{console.log(e.target.checked)
                console.log(obj)
                setTodos(toDos.filter(obj2=>{
                  if(obj2===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }));}
                
            } value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i  onClick={()=>setTodos(toDos.filter(del=>
              del.id!==obj.id
            ))} className="fas fa-times"></i>
          </div>
        </div>)}
)}
      </div>
    </div>
    
  );
}

export default App;