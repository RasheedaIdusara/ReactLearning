function Main({name,city,position}){
    return (
        
            <div>
            <img className="img1" src="https://i5.walmartimages.com/seo/JOON-Huge-Teddy-Bear-With-Ribbon-Tan_00dd38c4-db7c-49f5-a1c0-7aaacf9b42ce.3430d28f25f993f45f069fda466027c3.jpeg" alt="cardoImage"/>
            
                <h3>
                    {name}
                </h3>
                <p>
                    <span>{city}</span> <span>{position}</span>
                </p>
            </div>
        
    );
}

export default Main;