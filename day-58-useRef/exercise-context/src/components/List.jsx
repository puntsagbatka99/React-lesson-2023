import { places } from "../data/data";
import Place from "./Place";

export default function List(){
    
    const myPlace = places.map((place, index) =>{
        return <Place place={place} key={index} />
    })
    return myPlace;
}