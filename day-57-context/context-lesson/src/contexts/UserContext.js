import { createContext } from "react";

const UserContext = createContext(null)

//Provider
// Сүү ХК иргэдэд сүү ханган нийлүүлдэг.

const UserProvider = ({children}) =>{
    const userName = " New Milk"
    return(
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}

//Consumer
// Хэрэглэгчид
