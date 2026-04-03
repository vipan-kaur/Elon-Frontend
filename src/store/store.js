import { configureStore } from '@reduxjs/toolkit'
import cartsliceReducer from '../slice/cartslice'

export const store = configureStore({
  reducer: {
    cart: cartsliceReducer  , // 
  
  }
})