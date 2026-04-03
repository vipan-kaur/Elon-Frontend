import { createSlice } from "@reduxjs/toolkit";
const initialState={

 cartitem:JSON.parse(localStorage.getItem("cartitem")) || [],
 wishlistitem:JSON.parse(localStorage.getItem("wishitem")) || []
}
const cartslice =createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload 
            const existitem =state.cartitem.find((i)=>item.id ==i.id)
            if(existitem){
                existitem.quantity += 1
            }else{
                state.cartitem.push({...item,quantity:1})
            }
            localStorage.setItem("cartitem",JSON.stringify(state.cartitem))
            localStorage.setItem("wishitem",JSON.stringify(state.wishlistitem))
        },  addtowish:(state,action)=>{
            const item=action.payload 
            state.wishlistitem.push(item)
            localStorage.setItem("wishitem",JSON.stringify(state.wishlistitem))
        },
 removeFromwish:(state,action)=>{
            const id =action.payload
            state.wishlistitem=state.wishlistitem.filter((item)=>item.id !==id)
            localStorage.setItem("wishitem",JSON.stringify(state.wishlistitem))

        },
        removeFromCart:(state,action)=>{
            const id =action.payload
            state.cartitem=state.cartitem.filter((item)=>item.id !==id)
            localStorage.setItem("cartitem",JSON.stringify(state.cartitem))

        },

        decQuantity:(state,action)=>{
            const id =action.payload
            const existitem=state.cartitem.find((item)=>item.id===id)
            if(existitem && existitem.quantity>1){
                existitem.quantity -=1
            }else if(existitem ==1){
                    state.cartitem=state.cartitem.filter((item)=>item.id !==id) 
            }
            localStorage.setItem("cartitem",JSON.stringify(state.cartitem))
        },
        incQuantity:(state,action)=>{
            const id =action.payload
            const existitem=state.cartitem.find((item)=>item.id===id)
            if(existitem){
                existitem.quantity +=1

            }
           localStorage.setItem("cartitem",JSON.stringify(state.cartitem))
        },
        clearCart: (state) => {
             state.cartitem = [];
},
    }
})
export const {addToCart,removeFromCart,incQuantity,decQuantity,clearCart,addtowish,removeFromwish}=cartslice.actions;
export default cartslice.reducer;