import { Link, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Movie(){
    const {id} = useParams()
    const location = useLocation();
    console.log(location.state)
    console.log(id)
    return(
        <div>
            <h1>Its Movie Page {id}</h1>
            <div>{location.state.id}</div>
            <div>{location.state.name}</div>
            <div>{location.state.ISBN}</div>
            <div>{location.state.genre}</div>
            <Link to={"/movies"}><button>Back</button></Link>
        </div>
    )
}