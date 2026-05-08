import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputVal, setinputVal] = useState(0);

  const clickHandle = () => {
    setTimeout(() => {
      console.log("I am Clicked");
      setinputVal((pre)=> {
        if(pre<1){
          return pre+1
        }else if(pre<2){
          return pre+3
        }else{
          return +2
        }
      });
    }, 1000);
    
  };

  return (
    <div>
      <h1>{inputVal}</h1>

      <button style={{
        border: "red solid 1px"
      }} onClick={clickHandle}>Click Me</button>

    </div>
  );
}

export default App;
