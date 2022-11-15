const ProductsRow = ({id, name, company, email, phone_number}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{ company}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>
                <button  className="btn btn-outline-info btn-sm ml-1 mr-2">Update</button>
                <button   className = "btn btn-outline-danger btn-sm mr-2">Delete</button>
            </td>
        </tr>
    );
}

export default ProductsRow