import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
        <div className="notfound">
            <h1 style={{color:"gray"}}>soryy</h1>
            <p >this page dont exisist</p><br /><br />
            <Link to='/'  style={{color:'blue',  textDecoration: 'underline'}}>go back to home page</Link>
        </div>
     );
}
 
export default Notfound;