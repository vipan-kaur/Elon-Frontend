import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
const Topbar=()=>{
    const[index,setindex]=useState(0)
    const text=[
            <p>The Fall 2026 Collection</p>,
            <p>Free Standard Delivery </p>
    ]
    
    useEffect(()=>{
            const interval=setInterval(()=>{
                    setindex((prevIndex)=> (prevIndex+1) %text.length)
             },4000)
                    return () => clearInterval(interval);
    },[])
    return(
        <>
        <div className="w-full h-8 text-sm p-2 text-white bg-black px-[56px] flex justify-center items-center fixed top-0 z-100">
            {text[index]}
        </div>
        </>
    )
}

export default Topbar;
