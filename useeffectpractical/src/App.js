import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [apiid,setapiid] = useState('1');
  const [data,setData]= useState('');
  console.log(apiid);
  console.log(data);
  
  
  useEffect(()=>{
console.log('useEffect running...');
    

    if (apiid.length>0) {
      console.log('useEffect if condition');
      const apiCall = async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/todo/${apiid}`);
      const data = await res.json()

      if (data) {
        setData(data);
      }

      }

      apiCall();
    }
    

  },[apiid])

  return (

    <div>
      <input type='text' placeholder='Enter id' value={apiid} onChange={
        (e)=> {setapiid(e.target.value)}}
      />
    </div>
  );
}

export default App;
