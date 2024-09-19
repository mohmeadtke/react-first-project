import { useState } from "react";
import Method from "./method";



const Homepage = () => {
    const [object, setObject] = useState([
        { title: "god of war", creator: "hethm", rubish: "rubishh", id: 1 },
        { title: "darksiders", creator: "taqi", rubish: "rubishh", id: 2 },
        { title: "dishonored", creator: "ali", rubish: "rubishh", id: 3 },
        { title: "call of duty", creator: "noor", rubish: "rubishh", id: 4 }
    ]);
  const  deletefun = (id) =>{
    const newArr = object.filter(ob =>ob.id !== id) ;
        setObject(newArr) ;
    };

    return (  
        <div className="Home">
            <Method object={object} deletefun={deletefun} /> 
        </div>
    );
}

export default Homepage;
