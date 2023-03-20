const { createSlice } = require('@reduxjs/toolkit');

// const initialState={
//     cartItems:[],
//     cartTotalAmount:0,
//     cartTotalQuantity:0
// };
const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            const num=state.findIndex((item)=>item.id===action.payload.id);
            if(num>=0){
                alert("Already added!");
            }else{
                state.push(action.payload);
            }

        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload);

        }
    }
});

// extracting actions reducers
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;
