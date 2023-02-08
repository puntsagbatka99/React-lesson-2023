import { useContext } from "react";
import { getImageUrl } from "../data/utils";
import { PlaceContext } from "../context/PlaceContext";

export default function PlaceImage({ place} ) {
    const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext)

    return (
        <img src={getImageUrl(place)} alt={place.name} height={imageSize} width={imageSize} />
    )
}