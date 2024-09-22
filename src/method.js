import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Method = ({ object }) => {
    

    
    return ( 

        <div className="Method">
            {object.map((ob) => (
                <Link to={"Blogs/"+ob.id} >
                <div className="insideHome" key={ob.id}>
                    <h3>{ob.title}</h3> 
                    <p>{ob.creator}</p> 
                </div>
                </Link>
            ))}
        </div>
     );
}

export default Method;
