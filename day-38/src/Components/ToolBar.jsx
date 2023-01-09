import AlertButton from "./AlertFunc";

export default function ToolBar(){
    return(
        <div>
            <AlertButton message="Playing">Play Movie</AlertButton>
            <AlertButton message="Uploading">Upload Movie</AlertButton>
        </div>
    )
}