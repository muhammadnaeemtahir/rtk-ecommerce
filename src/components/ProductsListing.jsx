import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, setEditingProduct  } from "../features/productSlice";

const ProductsListing = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  // select editing product
  const handleEdit = (product) => {
    dispatch(setEditingProduct(product))
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-center">NAME</th>
              <th className="text-center">QUANTITY</th>
              <th className="text-center">PRICE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index}>
                  <td className="text-center">{product.name}</td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-center">{product.price} PKR</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-warning btn-sm me-1"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteProduct(product.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsListing;
