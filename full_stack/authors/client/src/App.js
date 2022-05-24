import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import SingleAuthor from './views/SingleAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <div className="w-25 d-flex justify-content-center mx-auto">
        <Link className="m-3 btn btn-info" to="">All Authors</Link>
        <Link className="m-3 btn btn-success" to="/create">Add Author</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path ="/authors/:_id">
          <SingleAuthor/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
