import './App.css';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import HomePage from "./components/HomePage"
function App() {
  return (
    <div className="App">
      <main>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
