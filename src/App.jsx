import CartStatus from "./components/CartStatus";
import FocusInput from "./components/FocusInput";
import RenderCount from "./components/RenderCount";
import PreviousValue from "./components/PreviousValue";
import DebounceSearch from "./components/DebounceSearch";
import StorageDemo from "./components/StorageDemo";
import Dropdown from "./components/Dropdown";
import ToggleDemo from "./components/ToggleDemo";
import RenderDemo from "./components/RenderDemo";
import MemoDemo from "./components/MemoDemo";
import KeyDemo from "./components/KeyDemo";
import IndexKeyDemo from "./components/IndexKeyDemo";
import StateRestDemo from "./components/StateRestDemo";
import CompositionDemo from "./components/CompositionDemo";
import ProductContainer from "./components/ProductContainer";
import ProductsPage from "./features/products/pages/ProductsPage";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
function App(){
    const user=useSelector((state)=>state.auth.user);
    const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
    const dispatch=useDispatch();
    const handleLogin=()=>{
        dispatch(
            login({
                name: "Zain",
                role: "Frontend Developer",
            })
        );
    };
    const handelLogout=()=>{
        dispatch(logout());
    }
  return(
    <main>
      <CartStatus />
      <FocusInput />
      <RenderCount />
      <PreviousValue />
      <DebounceSearch />
      <StorageDemo />
      <Dropdown />
      <ToggleDemo />
      <RenderDemo />
      <MemoDemo />
      <KeyDemo />
      <IndexKeyDemo />
      <StateRestDemo />
      <CompositionDemo />
      <ProductContainer />
      <ProductsPage />
      <div className="p-6 space-y-3">
        <h1 className="text-2xl font-bold">
            Redux Authentication
        </h1>
        <p>User: {user ? user.name : "Guest"}</p>
        <p>Role: {user ? user.role : "None"}</p>
        <p>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
        {isAuthenticated ? (
            <button onClick={handelLogout}>Logout</button>) : (
                <button onClick={handleLogin}>Login</button>
            )}
      </div>
    </main>
  );
}
export default App;