// import components
import ProductsListing from "./components/ProductsListing";
import AddProduct from "./components/AddProduct";

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-8 p-md-5 p-3">
            <ProductsListing />
          </div>
          <div className="col-md-4 p-md-5 p-3">
            <AddProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
