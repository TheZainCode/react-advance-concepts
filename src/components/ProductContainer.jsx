import ProductList from "./ProductList";
import { useState } from "react";
function ProductContainer(){
    const [loading]=useState(false);
    const [products]=useState([
        {id: 1, title: "Laptop", price: 900},
        {id: 2, title: "Keyboard", price: 100},
        {id: 3, title: "Mouse", price: 50},
    ]);
    return(
        <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Products</h2>
            <ProductList products={products} loading={loading} />
        </div>
    )
}
export default ProductContainer;