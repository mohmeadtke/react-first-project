import Navbar from './Navbarr';
import Home from './Home';
import  Create  from "./Create";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Blogs from './Blogs';
import Notfound from './Notfound';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/Blogs/:id">
            <Blogs/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
