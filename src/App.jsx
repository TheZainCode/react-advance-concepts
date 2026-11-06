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

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Redux API Products
      </h1>

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