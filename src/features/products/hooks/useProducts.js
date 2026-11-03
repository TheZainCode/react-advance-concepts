import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
function useProducts(){
    const [products, setProducts]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        async function fetchProducts(){
            try{
                const data=await getProducts();
                setProducts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);
    return { products, loading, error};
}
export default useProducts;