function ProductList({products, loading}){
    if(loading){
        return <p>Loading products...</p>
    }
    return(
        <div className="space-y-3">
            {products.map((product)=>(
                <article key={product.id} className="rounded border p-3">
                    <h3 className="font-bold">{product.title}</h3>
                    <p>${product.price}</p>
                </article>
            ))}
        </div>
    )
}
export default ProductList;