import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Second from './views/Second';
import Marquee from './views/Marquee';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>It's routing time!</h1>
      {/* <Home/>
      <Second/>
      <Marquee/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/second/:repeatMe">
          <Second/>
        </Route>

        <Route exact path="/marquee/:times">
          <Marquee/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
