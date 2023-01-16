export default function Register(){
    return(
        <div>
            <h1>It is Register page</h1>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" />
                <br />
                <label htmlFor="firstname">Firstname:</label>
                <input type="text" />
                <br />
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" />
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}