import './App.css';
import {useState} from 'react';

function App() {
  const [value,setValue]=useState(0);
 return (
  <>
  <h1 style={{textAlign:"center"}}>Counter Appp</h1>
  <div className="app">Counter value is: {value}
  <button className="btn" onClick={()=> value > 10 ? " " : setValue(value+1)} >Increase Counter</button>
  <button className="btn" onClick={()=> value>0 ? setValue(value-1): value}>Decrease Counter</button>
  <button className="btn" onClick={()=>{setValue(0)}}>Reset Counter</button>
  </div>
  </>
 )
}

export default App;
