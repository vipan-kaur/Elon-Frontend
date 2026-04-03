import React, { createContext, useState } from 'react'
export const searchcontext =createContext();
const Searchprovider = ({children}) => {
    const[search,setsearch]=useState("")
  return (
    <searchcontext.Provider value={{search,setsearch}}>
        {children}
    </searchcontext.Provider>
  )
}

export default Searchprovider;