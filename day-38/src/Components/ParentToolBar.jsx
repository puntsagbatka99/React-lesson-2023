export default function ParentToolBar(){
    return(
        <div
        className="ToolBar"
        onClick={()=>{
            alert("You clicked on the toolbar!")
        }}>
            <button onClick={(e)=> {
                e.stopPropagation();
                alert("playing")}}>Play Movie</button>
            <button onClick={()=> alert("uploading")}>Upload Image</button>

        </div>
    )
}