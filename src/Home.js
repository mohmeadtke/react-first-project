import { useEffect, useState } from "react";
import Method from "./method";
import useFetch from "./useFetch";



const Homepage = () => {

    const {object,isLoding ,err} = useFetch('http://localhost:8000/Data')

    return (  
        <div className="Home">
            {err && <div className="err">{err}</div>}
            {isLoding && <div className="loding"> Loding ....</div>}
           {object &&<Method object={object}/>} 
        </div>
    );
}

export default Homepage;
