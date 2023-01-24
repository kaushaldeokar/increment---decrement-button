
import './App.css';
import NavBar from './component/NavBar';
import React,{useState} from 'react';
function App() {
  const [num,setNum]=useState(1);
  
  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }


  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <h1>{num}</h1>
        <div className="buttons">
            <button type="button" class="btn btn-dark" onClick={inc}>Increment</button>
            <button type="button" class="btn btn-dark"  onClick={dec}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
