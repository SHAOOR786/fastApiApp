import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {ProductProvider} from "./ProductContext";
import ProductsTable from "./components/ProductTable";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
import {UpdateProductContextProvider} from "./UpdateProductContext";
import {SupplierContextProvider} from "./SupplierContext";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <ProductProvider>
            <NavBar />
            <div className="row">
              <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
                <UpdateProductContextProvider>
                <SupplierContextProvider>
                    <Route exact path='/' component={ProductsTable} />
                    <Route exact path='/updateproduct' component={UpdateProduct} />
                    <Route exact path="/addproduct" component={AddProducts} />
                </SupplierContextProvider>
                </UpdateProductContextProvider>

              </div>
            </div>
          </ProductProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
