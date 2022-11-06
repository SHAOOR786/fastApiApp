import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <NavBar/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
