import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { myData } from './Data/myData';
import Main from './Component/Main';
import { useState } from 'react';





function App() {

  const [myDatastate, setMydatastate] = useState(myData);

  const [myVar, setMyVar] = useState({
    name: 'kumara',
    city: 'galle',
    position: 'react developer',
  });

  const [inputval, setinputval] = useState("");

  const NewBlock = () => {

    return (
      <Fragment>
        {myDatastate?.map(({ name, city, position, image, id }, index) => {
          return <Main key={id + index} name={name} city={city} position={position} image={image} />
        })
        }
      </Fragment>
    );

  }

  console.log(inputval);

  const clickHandle = () => {
    setMyVar({
      ...myVar,
      name: "Idusara"
    });

    setMydatastate([...myDatastate, {
      id: '123456',
      name: 'pathum',
      city: 'galle',
      position: 'react developer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdAv0dMUkdMEW7r5n6s42XWkY6UE1IRHh3g&s'
    }]);

  }

  const inputChangeHandle = (event, data) => {
    event.preventDefault();
    console.log(data);
    setinputval(event.target.value);
  }

  return (
    <div className='main_container'>
      <div>
        AUK Learning Center
        <h1>{myVar.name}</h1>
      </div>
      <p>{inputval}</p>
      <div className='mainBlock_container'>
        <NewBlock />
      </div>

      <br /><br />
      <button style={
        {
          fontSize: '12px',
          border: '1px solid Red',
          padding: '7px 12px',
        }
      }

        onClick={clickHandle}
      >Click Me</button>

      <br /><br />
      <input style={{
        border: '1px solid black',
        fontSize: '10px',
        padding: '7px'
      }} type='text'

        placeholder='type what u want'

        onChange={(e) => {
          e.preventDefault();
          setinputval(e.target.value)
        }} />

        <br/><br/>

        <input style={{
        border: '1px solid red',
        fontSize: '10px',
        padding: '7px'
      }} type='text'

        placeholder='type what u want'

        onChange={(e) => {
          inputChangeHandle(e,inputval)
        }} />

    </div>
  );
}

export default App;
