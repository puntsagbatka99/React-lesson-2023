
export default function UpdateForm({currentData, setCurrentData, setData}){
    const Update_URL = "http://localhost:8080/data"
    async function sendPutRequest(data){
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(Update_URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setData(FETCHED_JSON)

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.major.value)
        const setData = {
            id: currentData.id,
            name: e.target.name.value,
            major: e.target.major.value,
        }
        sendPutRequest(setData)
    }

    function handleNameFormName(e){
        console.log(e.target.value)
        setCurrentData({...currentData, name:e.target.value})
    }
    
    function handleNameFormMajor(e){
        console.log(e.target.value)
        setCurrentData({...currentData, major:e.target.value})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" value={currentData.name} onChange={handleNameFormName} />
                </label>
                <br />
                <label>
                    Major: 
                    <input type="text" name="major" value={currentData.major} onChange={handleNameFormMajor}/>
                </label>
                <br />
                <button>Updates</button>
            </form>
        </div>
    )
}