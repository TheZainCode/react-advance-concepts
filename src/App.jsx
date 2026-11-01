import CartStatus from "./components/CartStatus";
import FocusInput from "./components/FocusInput";
import RenderCount from "./components/RenderCount";
import PreviousValue from "./components/PreviousValue";
import DebounceSearch from "./components/DebounceSearch";
import StorageDemo from "./components/StorageDemo";
function App(){
  return(
    <main>
      <CartStatus />
      <FocusInput />
      <RenderCount />
      <PreviousValue />
      <DebounceSearch />
      <StorageDemo />
    </main>
  );
}
export default App;