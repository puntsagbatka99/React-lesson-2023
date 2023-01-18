import { Link } from "react-router-dom";

export default function Index() {
    const aboutPagedata = {
        from: "Index",
        message: "Welcome to About Page",
        timestamp: Date.now()
    }

    const homePageData = {
        from:"Index",
        message:"Welcome to Home Page",
        timestamp: Date.now()
    }
    return (
        <div>
            <h1>Day-44 React Dynamic Routing</h1>
            <div style={{display:'flex', justifyContent:"space-around"}}>
                <Link to={"/accordion"}>Accordion</Link>
            </div>
        </div>
    )
}