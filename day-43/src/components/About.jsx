import { Outlet } from "react-router-dom";

export default function About(){
    return(
        <div>
            <p>its about page</p>
            <a href="/about/khangai">Khangai</a>
            <a href="/about/usukhuu">Usukhuu</a>
            <Outlet/>
        </div>
    )
}