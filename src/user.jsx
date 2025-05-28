import React from "react";
import { useSelector } from "react-redux"


export const  Users=()=>{
    const user=useSelector((state)=>state.user.users);
    return(
       <div>
        <h1>users</h1>
        {user?.map((user)=>{
            return(
             <div>
             <h1>{user.name}</h1>
             <h1>{user.email}</h1>
             <h1>{user.contact}</h1>
             <h1>{user.email}</h1>
             </div>
            )
        })}
       </div>
    );
      
}