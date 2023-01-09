import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function ToolBarNew(){
    return(
        <div>
            <PlayButton movieName="Kikis Delivery Service"/>
            <UploadButton/>
        </div>
    )
}