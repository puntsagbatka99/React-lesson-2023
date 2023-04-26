import { signIn, useSession } from "next-auth/react"

export default function Header () {
    const {data: session, status} = useSession()

    const handleLogin = (e: any) => {
        e.preventDefault();
        signIn()
    }
    return (
        <header>
            <div>
                <p>
                    {
                        !session && (
                            <div>
                                <span>YOU ARE NOT SIGNED IN</span>
                                <a href={`/api/auth/signin`}
                                onClick={handleLogin}>
                                    Sign-In
                                </a>
                            </div>
                        )
                    }
                </p>
            </div>
        </header>
    )
}