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
                <Link to={"/home"} state={homePageData}>Home</Link>
                <Link to={"/about"} state={aboutPagedata}>About Page</Link>
                <Link to={"/accordion"}>Accordion</Link>
                <Link to={"/movies"}>Movies Page</Link>
                <Link to={"/gallery"}>Gallery Page</Link>
                <Link to={"/toast"}>Toaster Page</Link>
            </div>
        </div>
    )
}