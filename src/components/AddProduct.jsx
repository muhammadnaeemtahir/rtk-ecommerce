import { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct, setEditingProduct  } from "../features/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const editingProduct = useSelector((state) => state.product.editingProduct);

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: 0,

  });

  // update product when there is a product editing
  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct)
    }
  }, [editingProduct]);

  // handle input from user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };


  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      dispatch(updateProduct(product));
      dispatch(setEditingProduct(null))
    } else {
      dispatch(addProduct(product));
    }

    // Reset form
    setProduct({ name: "", quantity: "", price: 0 });
  };

  return (
    <>
   <h1>{editingProduct ? "Edit Product" : "Add Product"}</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label w-100">
            Name
            <input
              type="text"
              name="name"
              className="form-control bg-light"
              placeholder="Enter name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="price" className="form-label w-100">
            Quantity (desc)
            <input
              type="text"
              name="quantity"
              className="form-control bg-light"
              placeholder="Enter quantity"
              value={product.quantity}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="price" className="form-label w-100">
            Price
            <input
              type="number"
              name="price"
              className="form-control bg-light"
              placeholder="Enter price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
          {editingProduct ? "Save Changes" : "Add Product"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
