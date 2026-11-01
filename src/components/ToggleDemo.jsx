import useToggale from "../hooks/useToggle";
function ToggleDemo(){
const { value, toggle, setTrue, setFalse}=useToggale(false);
return(
    <div className="space-y-4 p-6">
        <h2>Status : {value ? "Open" : "Closed"}</h2>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setTrue}>Open</button>
        <button onClick={setFalse}>Closed</button>
    </div>
)
}
export default ToggleDemo;