function Main(props){
    return(
        <>
        <div>
            Hello
            <p>{props.children}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.position}</p> 
        </div>
        </>
    );
}

export default Main;