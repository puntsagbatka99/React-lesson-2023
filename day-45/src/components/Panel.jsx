import { useState } from "react";

export default function Panel({title, onShow, children, isActive}){
let render = (
    <button 
    onClick={onShow}>
        Show
    </button>
);
if (isActive){
    render = <p>{children}</p>
}


    return(
        <div>
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p>
                : <button onClick={onShow}>Show</button>
            }
        </div>
    )
}