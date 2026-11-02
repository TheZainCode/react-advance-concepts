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
function App(){
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
    </main>
  );
}
export default App;