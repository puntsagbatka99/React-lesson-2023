import {ToastContainer, toast} from "react-toastify"

export default function ToasterPage(){
    const notify = () => toast("Амжилттай хадгаллаа!");

    return (
        <div>
            <button onClick={notify}>SAVE</button>
            <ToastContainer/>
        </div>
    )
}