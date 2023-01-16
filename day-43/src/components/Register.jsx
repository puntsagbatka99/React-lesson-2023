export default function Register(){
    return(
        <div>
            <h1>It is Register page</h1>
            <form action="">
                <label for="email">Email:</label>
                <input type="email" />
                <br />
                <label for="firstname">Firstname:</label>
                <input type="text" />
                <br />
                <label for="lastname">Lastname:</label>
                <input type="text" />
                <br />
                <label for="password">Password:</label>
                <input type="password" />
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}