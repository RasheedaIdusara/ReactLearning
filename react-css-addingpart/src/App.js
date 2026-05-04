import './App.css';
import { Fragment } from 'react/jsx-runtime';
import Main from './Component/Main';
import { myData } from './Data/myData';

const NewBlock = () => {

  return (
    <Fragment>
      {myData?.map(({ name, city, position,image, id }) => {
        return <Main key={id} name={name} city={city} position={position} image={image} />
      })
      }
    </Fragment>
  );

}

function App() {
  return (
    <div className='main_container'>
      <div>
        AUK Learning Center
        <h1>Amila</h1>
      </div>
      <p>Amila Upul</p>
      <div className='mainBlock_container'>
        <NewBlock />
      </div>

    </div>
  );
}

export default App;
