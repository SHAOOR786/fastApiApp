import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {ProductProvider} from "./ProductContext";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <ProductProvider>
                        <NavBar/>
                    </ProductProvider>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
