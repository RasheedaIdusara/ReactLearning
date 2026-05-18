import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Unit from './Component/Unit';

const App = () => {

  const [inputdata, setinputdata] = useState({
    imageurl: '',
    name: '',
    city: '',
    position: '',
  });

  const [mydata, setmydata] = useState([]);

  const [windowwidth, setwindowwidth] = useState(window.innerWidth);

  useEffect(() => {

    window.addEventListener('resize', () => {
      setwindowwidth(window.innerWidth);
    })

    console.log('use effect calling');

    return()=>{
      console.log("use effect cleanup function running");
      
      window.removeEventListener('resize',()=>{
        setwindowwidth(window.innerWidth);
      })
    }

  });

  return (

    <Fragment>



      <div className="main_container">
        <h1>{windowwidth}</h1>
        <div className="main_left">
          Image<input type="text" value={inputdata.imageurl} onChange={(e) => {

            e.preventDefault()
            setinputdata(preInputData => ({
              ...preInputData,
              imageurl: e.target.value
            }));

          }} />

          Name<input type="text" value={inputdata.name} onChange={(e) => {

            e.preventDefault()
            setinputdata(preInputData => ({
              ...preInputData,
              name: e.target.value
            }))

          }} />

          City<input type="text" value={inputdata.city} onChange={(e) => {

            e.preventDefault()
            setinputdata(preInputData => ({
              ...preInputData,
              city: e.target.value
            }))

          }} />

          Position <input type="text" value={inputdata.position} onChange={(e) => {

            e.preventDefault()
            setinputdata(preInputData => ({
              ...preInputData,
              position: e.target.value
            }))

          }} />

          <button onClick={() => {

            setmydata(pre => [
              ...pre, {
                image: inputdata.imageurl,
                name: inputdata.name,
                city: inputdata.city,
                position: inputdata.position,
              }
            ])

            setinputdata({
              imageurl: '',
              name: '',
              city: '',
              position: '',
            });




          }}>Submit</button>
        </div>
        <div className="main_right">
          {mydata?.map(({ image, name, city, position
          }, index) => <Unit image={image} name={name} city={city} position={position} key={index} />)}
        </div>
      </div>

    </Fragment>

  );
}

export default App;
