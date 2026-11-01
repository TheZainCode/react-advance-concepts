import { useCart } from "../context/CartContext";
function CartStatus(){
    const { state, dispatch }=useCart();
    const addToCart=()=>{
        dispatch({
            type: "ADD_ITEM",
            payload:{
                id: 101,
                title: "React Course",
                price: 50,
            },
        });
    };
    const removeItem = () => {
      if (state.items.length === 0) return;
      const lastItem = state.items[state.items.length - 1];
      dispatch({
       type: "REMOVE_ITEM",
       payload: lastItem.id,
     });
    };
    const totalPrice=state.items.reduce((total, item)=>total+item.price*item.quantity, 0);
    return(
        <main>
            <h1>Cart Status</h1>
            <p>Total Items: {state.items.length}</p>
            <p>Total Price: {totalPrice}</p>
            {state.items.map((item)=>(
                <p key={item.id}>
                    {item.title} _ Quantity: {item.quantity}
                </p>
            ))}
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={removeItem}>Remove Last Item</button>
        </main>
    );
}
export default CartStatus;