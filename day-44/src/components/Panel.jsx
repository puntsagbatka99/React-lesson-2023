import { useState } from "react";

export default function Panel({children, title}){
    const [isActive, setIsActive] = useState(false);

    return(
        <div>
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p>
                : <button onClick={() => setIsActive(true)}>Show</button>
            }
        </div>
    )
}