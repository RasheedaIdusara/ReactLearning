import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[myName,setMyName]=useState("Rasheeda Idusara");
  const [myVar,setmyVar]=useState({
    name:'Rasheeda',
    position:"Web Developer & Software Engineer",
  });

  return (
    <div style={
      {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
      }
    }>
      <h1 style={
        {
          //textAlign:'center',
        }
      }>
        {myName}
      </h1>
      <h2 style={{
        //textAlign:'center',
      }}>{myVar.position}</h2>

      <br/><br/>
      <button style={{
        //textAlign:'center',
        
      }} onClick={()=>{
        setMyName("osini navoda");

        setmyVar({...myVar,
          position:'CI/CD Pipelines',
        })
      }}>Change </button>
    </div>
  );
}

export default App;
