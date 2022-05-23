import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import {Switch, Route, Link} from "react-router-dom";
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <div className="w-25 d-flex justify-content-around mx-auto">
        <Link className="m-3 btn btn-primary" to="/">Products</Link>
        <Link className="m-3 btn btn-info" to="/create">Add Product</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/create">
          <Create/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
