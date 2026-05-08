import { useState } from "react";
import './App.css';
import { Unit } from "./Component/Unit";

const App = () => {

  const [imageurl, setimageurl] = useState("");
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [position, setposition] = useState("");

  const[mydata,setmydata] = useState([]);

  console.log(mydata);
  

  return (
    <div className="main_container">
      <div className="main_left">
        Image<input type="text" value={imageurl} onChange={(e) => {

          e.preventDefault()
          setimageurl(e.target.value)

        }} />

        Name<input type="text" value={name} onChange={(e) => {

          e.preventDefault()
          setname(e.target.value)

        }} />

        City<input type="text" value={city} onChange={(e) => {

          e.preventDefault()
          setcity(e.target.value)

        }} />

        Position <input type="text" value={position} onChange={(e) => {

          e.preventDefault()
          setposition(e.target.value)

        }} />

        <button onClick={()=>{
          // console.log({
          //   imageurl,
          //   name,
          //   city,
          //   position,}
          // );

          // setmydata(pre=>{
          //   return [...pre,{
          //     image:imageurl,
          //     Name:name,
          //     City:city,
          //     Postion:position,
          //   }]
          // })

          setmydata(pre=>[
            ...pre,{
              image:imageurl,
              name:name,
              city:city,
              position:position,
            }
          ])

          setimageurl((pre)=>{
            if (pre.length>0) {
              return ''
            }else{
              return pre;
            }
          })

          setname((pre)=>
           pre.length > 0 ? "" : pre
          )

          setcity((pre)=>{
            return pre.length > 0 ?  "" :  pre;
          })

          setposition((preposition)=>{
            return preposition.length > 0 ?  "" :  preposition;
          })


          
        }}>Submit</button>
      </div>
      <div className="main_right">
        {mydata?.map(({image,name,city,position
        },index)=><Unit image={image} name={name} city={city} position={position} key={index}/>)}
      </div>
    </div>
  );

}

export default App;