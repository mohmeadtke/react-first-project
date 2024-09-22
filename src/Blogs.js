import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const Blogs = () => {

    const history= useHistory();

    const {id}= useParams();
    const {object , isLoding ,err} = useFetch('http://localhost:8000/Data/' +id);
    const deletefun=()=>{
        fetch('http://localhost:8000/Data/'+object.id
            ,{
                method:'delete'
            }
        ).then(
            history.push('/')
        )
      
    }
    
    return ( 
        <div className="blogstyle">
            
            {isLoding && <div>loading... </div>}
            {err && <div>{err}</div>}
            {object &&
                <article>
                    <h1>{object.title}</h1><br/>
                    <p>{object.rubish}</p><br/>
                    <button onClick={deletefun}>Delete</button>
                </article>
                }
        </div>
     );
}
 
export default Blogs;