import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
// import $ from 'jquery'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Navbar />
            <SideNav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
