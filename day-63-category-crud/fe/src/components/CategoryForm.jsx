import { useNavigate } from "react-router-dom"
export default function CategoryForm () {
    const URL = "http://localhost:8081/category"
    const navigate = useNavigate()
    async function handleCategorySubmit(e){
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                categoryName: e.target.catName.value,
                isEdit: false
            })
        }

        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JOSN = await FETCHED_DATA.json();
        console.log(FETCHED_JOSN)
        if(FETCHED_JOSN.status === "success"){
            navigate("/category/list")
        }
    }
    return(
        <div>
            <h1>Category Form</h1>
            <form onSubmit={handleCategorySubmit}>
                <input type="text" name="catName" />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}