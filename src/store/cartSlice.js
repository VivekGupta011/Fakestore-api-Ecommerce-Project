const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };
const cartSlice=createSlice({
    name:'cart',
    initialState:{getCount:0,getTotal:0,products:[]},
    reducers:{
        add(state,action){
            const num=state.products.findIndex((item)=>item.id===action.payload.id);
            if(num>=0){
                alert("Already added!");
            }else{
                console.log("action payload!");
                console.log(action.payload.price)
                state.products.push(action.payload);
                state.getCount++;
                state.getTotal+=action.payload.price;
                console.log("price:"+state.getTotal);
            }

        },
        remove(state,action){
            state.getCount--;
            // return state.products.filter((item)=>item.id!==action.payload);
            state.products=state.products.filter((item)=>item.id!==action.payload.id);
            state.getTotal-=action.payload.price;
            console.log("price:"+state.getTotal);
        }
    }
});

// extracting actions reducers
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;
