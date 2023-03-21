import { json } from "react-router-dom";
import { toast } from "react-toastify";
const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };
const cartSlice = createSlice({
    name: 'cart',
    // initialState: { getCount: 0, getTotal: 0, products: localStorage.getItem("cartItems") ? [JSON.parse(localStorage.getItem("cartItems"))] : [] },
    initialState: { getCount: 0, getTotal: 0, products:[] },
    reducers: {
        add(state, action) {
            const num = state.products.findIndex((item) => item.id === action.payload.id);
            if (num >= 0) {
                // alert("Already added!");
                toast.info(`Item Already added to Cart!`, {
                    position: "bottom-left"
                });
            } else {
                // local storage
                localStorage.setItem("cartItems", JSON.stringify(action.payload));
                console.log("action payload!");
                console.log(action.payload.price)
                state.products.push(action.payload);
                state.getCount++;
                state.getTotal += action.payload.price;
                console.log("price:" + state.getTotal);
                toast.success(`Item Added to Cart...`, {
                    position: "bottom-left"
                });
                

            }

        },
        remove(state, action) {
            state.getCount--;
            // return state.products.filter((item)=>item.id!==action.payload);
            state.products = state.products.filter((item) => item.id !== action.payload.id);
            state.getTotal -= action.payload.price;
            console.log("price:" + state.getTotal);
            toast.info(`Item Deleted to Cart...`, {
                position: "bottom-left"
            });
        }
    }
});

// extracting actions reducers
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
