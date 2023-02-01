export default function InputForm({setData}){
const POST_DATA_URL = "http://localhost:8001/data"

    async function postData(data){
        console.log(data)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const FETCHED_DATA = await fetch(POST_DATA_URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setData(FETCHED_JSON)
        console.log(FETCHED_DATA)
    }

    function handleSubmit(e){
        e.preventDefault(); 
        
        const data = {
            name: e.target.name.value,
            major: e.target.major.value,
        };
        postData(data)
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    NAME: 
                    <input type="text" placeholder="Name" name="name"/>
                </label>
                <br />
                <label>
                    MAJOR: 
                    <input type="text" placeholder="Major" name="major"/>
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}