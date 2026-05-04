import { Fragment } from "react/jsx-runtime";

function Main({name,city,position,image}){
    return (
        
            <div>
            <img src={
                image
                ?`${image}`
                :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMKr493bbjqpb_SZWhf_g26XD_um3Ix4Eyw&s`} />
            
            <div className="main_blockdetails">
                <h3>{name}</h3>
                <p>
                    <span>{city}</span>
                    <span>{position}</span>
                </p>
            </div>
                
            </div>
        
    );
}

export default Main;