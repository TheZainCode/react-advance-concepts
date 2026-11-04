import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Products
      </h1>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;