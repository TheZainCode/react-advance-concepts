import {useGetProductsQuery}  from "./features/products/productApi";
function App(){
  const { data, error, isLoading }=useGetProductsQuery();
  if(isLoading){
    return <p>Loading Products...</p>
  }
  if(error){
    return <p>Failed to fetch products</p>
  }
  return(
    <main>
      <h1>Products</h1>
      {data?.products?.map((product)=>(
        <article key={product.id}>{product.title}</article>
      ))}
    </main>
  )
}
export default App;