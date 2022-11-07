import react, {useEffect, useContext} from "react";
import {Table} from "react-bootstrap";
import {ProductContext} from "../ProductContext";
import ProductsRow from "./ProductsRow";

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)
    const handleDelete = (id) => {
        fetch("http://127.0.0.1:8000/product/" + id, {
            method: "DELETE",
            headers: {
                accept: 'application/json'
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(result => {
                if (result.status === 'ok') {
                    const filteredProducts = products.data.filter((product) => product.id !== id);
                    setProducts({data: [...filteredProducts]})
                    alert("Product deleted")
                } else {
                    alert("Product deletion failed")
                }
            })
    }


    useEffect(() => {
        fetch("http://127.0.0.1:8000/product")
            .then(resp => {
                return resp.json();
            }).then(results => {
            setProducts({"data": [...results.data]})

        })
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Quantity In Stock</th>
                    <th>Quantity Sold</th>
                    <th>Unit Price</th>
                    <th>Revenue</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.data.map((product) => (
                    <ProductsRow
                        id={product.id}
                        name={product.name}
                        quantity_in_stock={product.quantity_in_stock}
                        quantity_sold={product.quantity_sold}
                        unit_price={product.unit_price}
                        revenue={product.revenue}
                        handleDelete={handleDelete}
                    />
                ))}
                </tbody>

            </Table>
        </div>
    );
}

export default ProductsTable