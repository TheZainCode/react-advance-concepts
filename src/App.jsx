import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productSlice";

function App() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handleFetchWithUnwrap=async ()=>{
    try{
      console.log("Fetching products using .unwrap()...");
      const data=await dispatch(fetchProducts()).unwrap();
      console.log("Success! Products received:", data);
    }catch(error){
      console.log("Request failed with .unwrap():", error);
    }
  }
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
 
  const handleMultipleRequests = () => {
  dispatch(fetchProducts());
  dispatch(fetchProducts());
  dispatch(fetchProducts());
};
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Redux API Products
      </h1>
      
      <button onClick={handleFetchWithUnwrap} className="border">Fetch Products With unwrap</button>
      <button onClick={handleMultipleRequests}>
  Test Multiple Requests
</button>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="font-semibold">{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;