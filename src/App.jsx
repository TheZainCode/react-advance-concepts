import {useGetProductsQuery, useAddProductMutation}  from "./features/products/productApi";
function App(){
  const [addProduct, { isLoading: isAdding, error: addError }] =
  useAddProductMutation();
  const  { data, error, isLoading }=useGetProductsQuery();
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
      {data?.products?.map((product)=>(
        <article key={product.id}>{product.title}</article>
      ))}
      <button onClick={handleAddProduct}>{isAdding ? "Adding..." : "Add Product"}</button>
    </main>
  )
}
export default App;