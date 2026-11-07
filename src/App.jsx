import { useParams } from "react-router-dom";
import {useGetProductsQuery, useAddProductMutation, useGetProductByIdQuery}  from "./features/products/productApi";
function App(){
  const [addProduct, { isLoading: isAdding, error: addError }] =
  useAddProductMutation();
  const { productId }=useParams();
  const {data:info, isLoading: loding, error: isError}=useGetProductByIdQuery(productId);
  const  { data, error, isLoading, isFetching, refetch, }=useGetProductsQuery();
  if(isLoading){
    return <p>Loading Products...</p>
  }
  if(error){
    return <p>Failed to fetch products</p>
  }
  const handleAddProduct= async ()=>{
    try{
      const newProduct=await addProduct({
        title: "New Laptop",
        price: 1200,
      }).unwrap();
      console.log("Product added", newProduct);
    }catch(error){
      console.log("Failed to add product",error);
    }
  }
  return(
    <main>
      <h1>Products</h1>
      {data?.map((product)=>(
        <article key={product.id}>{product.title}</article>
      ))}
      <button onClick={handleAddProduct}>{isAdding ? "Adding..." : "Add Product"}</button>
      <button onClick={()=>refetch()}>{isFetching ? "fetching...": "Refresh Products"}</button>
    </main>
  )
}
export default App;