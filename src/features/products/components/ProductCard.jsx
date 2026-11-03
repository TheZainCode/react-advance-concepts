import formatPrice from "../../../shared/utils/formatPrice";

function ProductCard({ product }) {
  return (
    <article className="rounded-lg border p-4 shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-3 h-40 w-full rounded object-cover"
      />

      <h2 className="font-bold">{product.title}</h2>

      <p className="mt-2 text-gray-600">
        {formatPrice(product.price)}
      </p>
    </article>
  );
}

export default ProductCard;