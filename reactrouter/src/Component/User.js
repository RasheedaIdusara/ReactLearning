import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const User = () => {

    const [data,setdata] = useState({})
    const {id} = useParams()
    useEffect(
        ()=>{

            console.log("useEffect Running");
            

            const getData = async ()=>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = await res.json()
                if (data) {
                    setdata(data)
                }

            }

            getData()

            return()=>{
                console.log("useEffect Cleanup");
                
                getData()
            }

        },[id]
    )
    console.log(id);
    
    return (
        <div>
            User Page{data?(<div><h1>{data.title}
                </h1>
                <p>{data.body}</p></div>):null}
        </div>
    )
}

export default User 