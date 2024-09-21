import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>home</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create"> Games</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;