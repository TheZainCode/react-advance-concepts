// import CartStatus from "./components/CartStatus";
// import FocusInput from "./components/FocusInput";
// import RenderCount from "./components/RenderCount";
// import PreviousValue from "./components/PreviousValue";
// import DebounceSearch from "./components/DebounceSearch";
// import StorageDemo from "./components/StorageDemo";
// import Dropdown from "./components/Dropdown";
// import ToggleDemo from "./components/ToggleDemo";
// import RenderDemo from "./components/RenderDemo";
// import MemoDemo from "./components/MemoDemo";
// import KeyDemo from "./components/KeyDemo";
// import IndexKeyDemo from "./components/IndexKeyDemo";
// import StateRestDemo from "./components/StateRestDemo";
// import CompositionDemo from "./components/CompositionDemo";
// import ProductContainer from "./components/ProductContainer";
// import ProductsPage from "./features/products/pages/ProductsPage";
// import { useSelector, useDispatch } from "react-redux";
// import { login, logout } from "./features/auth/authSlice";
// import { setProducts, clearProducts } from "./features/products/productSlice";
// function App(){
//     const user=useSelector((state)=>state.auth.user);
//     const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
//     const products=useSelector((state)=>state.products.products);
//     const dispatch=useDispatch();
//     const handleAddProducts=()=>{
//         dispatch(
//             setProducts([
//                 {id: 1, title: "Laptop", price: 800},
//                 {id: 2, title: "Keyboard", price: 50},
//                 {id: 3, title: "Mouse", price: 25},
//             ])
//         );
//     };
//     const handleClearProducts=()=>{
//         dispatch(clearProducts());
//     }
//     const handleLogin=()=>{
//         dispatch(
//             login({
//                 name: "Zain",
//                 role: "Frontend Developer",
//             })
//         );
//     };
//     const handelLogout=()=>{
//         dispatch(logout());
//     }
//   return(
//     <main>
//       <CartStatus />
//       <FocusInput />
//       <RenderCount />
//       <PreviousValue />
//       <DebounceSearch />
//       <StorageDemo />
//       <Dropdown />
//       <ToggleDemo />
//       <RenderDemo />
//       <MemoDemo />
//       <KeyDemo />
//       <IndexKeyDemo />
//       <StateRestDemo />
//       <CompositionDemo />
//       <ProductContainer />
//       <ProductsPage />
//       <div className="p-6 space-y-3">
//         <h1 className="text-2xl font-bold">
//             Redux Authentication
//         </h1>
//         <p>User: {user ? user.name : "Guest"}</p>
//         <p>Role: {user ? user.role : "None"}</p>
//         <p>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
//         {isAuthenticated ? (
//             <button onClick={handelLogout}>Logout</button>) : (
//                 <button onClick={handleLogin}>Login</button>
//             )}
//         <h1 className="font-bold text-3xl">Redux Products</h1>
//         <button onClick={handleAddProducts}>Load Products</button>
//         <button onClick={handleClearProducts}>Clear Poducts</button>
//         <ul className="space-y-2">
//             {products.map((product)=>(
//                 <li key={product.id}>{product.title}- ${product.price}</li>
//             ))}
//         </ul>
//       </div>
//     </main>
//   );
// }
// export default App;






import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearCart,
} from "./features/cart/cartSlice";

function App() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const products = [
    { id: 1, title: "Laptop", price: 800 },
    { id: 2, title: "Keyboard", price: 50 },
    { id: 3, title: "Mouse", price: 25 },
  ];

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        Redux Shopping Cart
      </h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className="flex gap-3">
          <span>{product.title} - ${product.price}</span>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart ({totalItems} items)</h2>

      {items.map((item) => (
        <div key={item.id} className="flex gap-3">
          <span>
            {item.title} × {item.quantity}
          </span>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <p>Total Price: ${totalPrice}</p>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </main>
  );
}

export default App;