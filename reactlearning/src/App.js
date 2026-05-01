import { Fragment } from 'react/jsx-runtime';
import './App.css';
import Main from './Components/Main';
import { myData } from './Data/myData';
import { myData2 } from './Data/myData';

const mainBlock = myData2.map((ele, index) => {
  return <Main key={index} name={ele.name} position={ele.position} City={ele.city} />;
});


const NewBlock = () => {
  return (
    <Fragment>
      {myData.map((ele, index) => {
        return <Main key={index} name={ele.name} position={ele.position} City={ele.city} />;
      })}
    </Fragment>
  );
}



function App() {
  return (
    <>
      {mainBlock}
      <p>&nbsp; 2nd Method</p>
      <NewBlock />
    </>
  );
}

export default App;
