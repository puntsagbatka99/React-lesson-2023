export default function SignUp() {
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Submiting!")}}>
            <input />
            <button>Send</button>
        </form>
    )
}